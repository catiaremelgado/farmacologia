# ⚕️ Classificação Farmacoterapêutica

Aplicação web progressiva (PWA), autónoma e com suporte *offline*, concebida para o estudo sistemático, memorização ativa e consulta rápida da classificação oficial de medicamentos (Infarmed / ATC) e respetivas fichas clínicas.

---

## 🎯 Funcionalidades Principais

### 1. Avaliação Sequencial (Quiz em Funil)
* **Trajetória Hierárquica em 3 Passos:** Teste de classificação por etapas sucessivas (*Grupo Principal* $\rightarrow$ *Subgrupo* $\rightarrow$ *Subsubgrupo*).
* **Filtro Dinâmico por Grupo:** Ao selecionar um grupo terapêutico específico, a aplicação valida automaticamente o nível 1 e arranca de imediato no *Subgrupo*.
* **Feedback Clínico Imediato:** Cada resposta apresenta o resumo do mecanismo de ação, indicações aprovadas e notas de alerta para consolidação do estudo.
* **Atalho Direto:** Acesso num clique à ficha completa do fármaco na aba de consulta.

### 2. Modo Simulação de Exame
* Escolha entre **Treino Contínuo** ou blocos fechados de **10, 20 ou 30 questões**.
* Ecrã de avaliação final com percentagem de aproveitamento ($\%$ de acertos sem qualquer falha prévia) e resumo da sessão.

### 3. Caderno de Falhas (Revisão de Erros)
* Registo automático em memória local (`localStorage`) de qualquer medicamento com etapa incorreta.
* Filtro dedicado para treinar exclusivamente os fármacos em que existiram dúvidas.
* Botão de **Limpeza Manual** para reiniciar o caderno de falhas a qualquer momento.

### 4. Modo Inverso (Identificação de Princípio Ativo)
* Apresenta a cadeia taxonómica completa (Grupo $\rightarrow$ Subgrupo $\rightarrow$ Família) e questiona qual o fármaco pertencente a essa classe, simulando a estrutura típica de exames de escolha múltipla.

### 5. Prontuário & Fichas Farmacoterapêuticas
* Catálogo técnico completo com pesquisa instantânea e em tempo real por princípio ativo, grupo ou termo clínico.
* Fichas estruturadas com:
  * **Mecanismo de Ação** molecular e farmacodinâmica.
  * **Indicações Clínicas Principais**.
  * **Alertas Práticos / Notas de Exame** (contraindicações críticas, efeitos adversos e interações chave).

### 6. Descodificação de Radicais e Sufixos DCI
* Tabela de reconhecimento das Denominações Comuns Internacionais da OMS (`-olol`, `-pril`, `-sartam`, `-statina`, etc.).
* **Filtro Direto:** Clique em qualquer radical para saltar e filtrar imediatamente todos os fármacos correspondentes no Prontuário.
* Interface responsiva desenhada para transformar as linhas em cartões de fácil leitura no ecrã do telemóvel.

### 7. Usabilidade, Atalhos & Suporte Offline
* **Atalhos de Teclado no PC:** Teclas `1` a `4` para seleção de opções; `Enter` ou `Barra de Espaço` para avançar/recomeçar.
* **Progressive Web App (PWA):** Instalação direta no telemóvel ou computador como aplicação nativa.
* **100% Offline:** Operação total garantida por *Service Worker* (`sw.js`), sem dependências externas nem necessidade de rede móvel ativa.

---

## 📁 Estrutura do Projeto

```text
├── index.html         # Estrutura visual SPA, navegação de abas e estilos embutidos
├── app.js             # Motor lógico dos quizzes, pesquisa, atalhos e persistência
├── medicamentos.js    # Base de dados com hierarquia e atributos clínicos
├── sw.js              # Service Worker para cache e funcionamento offline
└── README.md          # Documentação do projeto