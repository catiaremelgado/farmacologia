/* ==========================================================================
   MOTOR DO GUIA DE CONSULTA & PESQUISA (guia.js)
   ========================================================================== */

function renderGuide(items) {
  const container = document.getElementById("guide-list");
  const counter = document.getElementById("search-counter");
  container.innerHTML = "";

  counter.textContent = `${items.length} fármacos listados`;

  if (items.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">Nenhum medicamento encontrado para essa pesquisa.</div>`;
    return;
  }

  items.forEach(med => {
    const card = document.createElement("div");
    card.className = "guide-item";
    card.innerHTML = `
      <div class="item-top">
        <span class="item-drug">${med.drug}</span>
        <span class="item-trail">${med.grupo} &bull; ${med.subgrupo} &bull; ${med.subsubgrupo}</span>
      </div>
      <div class="item-body">
        <div class="tech-block mechanism">
          <strong>Mecanismo de Ação:</strong>
          <p>${med.mecanismo || "Não especificado."}</p>
        </div>
        <div class="tech-block indications">
          <strong>Indicações Clínicas Principais:</strong>
          <p>${med.indicacoes || "Não especificadas."}</p>
        </div>
        <div class="tech-block alert">
          <strong>Nota Prática / Alerta de Exame:</strong>
          <p>${med.alerta || "Sem alertas específicos registados."}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterGuide() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  if (!query) {
    renderGuide(pharmaData);
    return;
  }

  const filtered = pharmaData.filter(item => {
    return (
      item.drug.toLowerCase().includes(query) ||
      item.grupo.toLowerCase().includes(query) ||
      item.subgrupo.toLowerCase().includes(query) ||
      item.subsubgrupo.toLowerCase().includes(query) ||
      (item.indicacoes && item.indicacoes.toLowerCase().includes(query)) ||
      (item.mecanismo && item.mecanismo.toLowerCase().includes(query))
    );
  });

  renderGuide(filtered);
}

// Alternar entre abas (Quiz vs Consulta)
function switchTab(tab) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

  if (tab === "quiz") {
    document.getElementById("view-quiz").classList.add("active");
    document.getElementById("tab-quiz-btn").classList.add("active");
  } else {
    document.getElementById("view-guide").classList.add("active");
    document.getElementById("tab-guide-btn").classList.add("active");
    renderGuide(pharmaData);
  }
}

// Inicializar guia
renderGuide(pharmaData);