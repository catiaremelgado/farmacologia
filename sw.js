// sw.js
const CACHE_NAME = 'pharma-app-v2'; // Incremento de versão força o browser a atualizar
const ASSETS = [
  'index.html',
  'app.js',
  'medicamentos.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting(); // Ativa imediatamente a nova versão
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) {
            return caches.delete(k); // Apaga toda a cache antiga
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((networkRes) => {
        // Se houver internet, guarda a versão mais recente em cache
        if (networkRes && networkRes.status === 200) {
          const clone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return networkRes;
      })
      .catch(() => caches.match(e.request)) // Se estiver offline, usa a cache
  );
});