/* ==========================================================================
   MOTOR INTEGRADO COM LIMPEZA DE ERROS E TABELA DCI RESPONSIVA (app.js)
   ========================================================================== */

const steps = [
  { key: "grupo", label: "Grupo Principal" },
  { key: "subgrupo", label: "Subgrupo" },
  { key: "subsubgrupo", label: "Subsubgrupo" }
];

let selectedGroupFilter = "ALL";
let isMistakesOnlyMode = false;
let mistakesSet = new Set(JSON.parse(localStorage.getItem("pharma_mistakes") || "[]"));

// Gestão de Sessões de Exame
let examTargetLimit = "INF";
let examSessionCount = 0;
let examCleanSuccessCount = 0;
let currentDrugHadFailure = false;

let currentDrug = null;
let currentStepIndex = 0;
let completedCount = 0;
let isStepSuccess = false;
let currentOptionButtons = [];

// Estado do Modo Inverso
let currentInvDrug = null;
let invCompletedCount = 0;
let currentInvOptionButtons = [];

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function updateMistakesBadge() {
  const badge = document.getElementById("mistakes-count");
  if (badge) badge.textContent = mistakesSet.size;
  localStorage.setItem("pharma_mistakes", JSON.stringify([...mistakesSet]));
}

function clearMistakesNotebook() {
  if (mistakesSet.size === 0) {
    alert("O Caderno de Falhas já se encontra vazio.");
    return;
  }
  if (confirm("Tens a certeza de que queres limpar todos os fármacos guardados no Caderno de Falhas?")) {
    mistakesSet.clear();
    updateMistakesBadge();
    if (isMistakesOnlyMode) {
      toggleMistakesMode();
    }
  }
}

function initGroupFilterOptions() {
  const select = document.getElementById("group-filter");
  if (!select) return;
  const groups = [...new Set(pharmaData.map(m => m.grupo))].sort();
  groups.forEach(grp => {
    const opt = document.createElement("option");
    opt.value = grp;
    opt.textContent = grp;
    select.appendChild(opt);
  });
}

function getActivePool() {
  let pool = pharmaData;
  if (isMistakesOnlyMode) {
    pool = pool.filter(m => mistakesSet.has(m.drug));
  } else if (selectedGroupFilter !== "ALL") {
    pool = pool.filter(m => m.grupo === selectedGroupFilter);
  }
  return pool;
}

function onGroupFilterChange() {
  selectedGroupFilter = document.getElementById("group-filter").value;
  startWithNewDrug();
}

function onExamModeChange() {
  examTargetLimit = document.getElementById("exam-mode-select").value;
  restartExam();
}

function restartExam() {
  examSessionCount = 0;
  examCleanSuccessCount = 0;
  completedCount = 0;
  document.getElementById("exam-results-area").style.display = "none";
  document.getElementById("quiz-question-area").style.display = "block";
  document.getElementById("quiz-controls-bar").style.display = "flex";
  startWithNewDrug();
}

function toggleMistakesMode() {
  if (!isMistakesOnlyMode && mistakesSet.size === 0) {
    alert("O Caderno de Falhas está vazio! Erre alguns medicamentos na avaliação para os poder rever aqui.");
    return;
  }
  isMistakesOnlyMode = !isMistakesOnlyMode;
  const btn = document.getElementById("btn-mistakes-toggle");
  btn.classList.toggle("active", isMistakesOnlyMode);
  startWithNewDrug();
}

function selectNewDrug() {
  const pool = getActivePool();
  if (pool.length === 0) {
    if (isMistakesOnlyMode) {
      isMistakesOnlyMode = false;
      document.getElementById("btn-mistakes-toggle").classList.remove("active");
      alert("Completou a revisão de todas as falhas registadas!");
      return selectNewDrug();
    }
    return pharmaData[0];
  }
  let next = pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1 && currentDrug && next.drug === currentDrug.drug) {
    return selectNewDrug();
  }
  return next;
}

function get3Distractors(correctVal, key) {
  let sourcePool = pharmaData;
  if (selectedGroupFilter !== "ALL" && key !== "grupo") {
    sourcePool = pharmaData.filter(m => m.grupo === currentDrug.grupo);
  }
  let allVals = [...new Set(sourcePool.map(item => item[key]))].filter(val => val && val !== correctVal);
  if (allVals.length < 3) {
    const globalVals = [...new Set(pharmaData.map(item => item[key]))].filter(val => val && val !== correctVal);
    allVals = [...new Set([...allVals, ...globalVals])];
  }
  return shuffle(allVals).slice(0, 3);
}

function updateStepPills() {
  for (let i = 0; i < 3; i++) {
    const pill = document.getElementById(`pill-${i}`);
    const baseName = steps[i].label;
    pill.className = "step-pill";

    if (i < currentStepIndex) {
      pill.classList.add("completed");
      pill.innerHTML = `✓ ${baseName}`;
    } else if (i === currentStepIndex) {
      pill.classList.add("active");
      pill.textContent = baseName;
    } else {
      pill.textContent = baseName;
    }
  }
}

function updateTrail() {
  let parts = [];
  if (currentStepIndex > 0) parts.push(`<strong>Grupo:</strong> ${currentDrug.grupo}`);
  if (currentStepIndex > 1) parts.push(`<strong>Subgrupo:</strong> ${currentDrug.subgrupo}`);
  if (currentStepIndex > 2) parts.push(`<strong>Subsubgrupo:</strong> ${currentDrug.subsubgrupo}`);

  document.getElementById("trail-text").innerHTML = parts.length > 0 
    ? parts.join(" &rarr; ") 
    : "A iniciar no Grupo Principal";
}

function startWithNewDrug() {
  if (examTargetLimit !== "INF" && examSessionCount >= parseInt(examTargetLimit)) {
    finishExamSession();
    return;
  }

  currentDrug = selectNewDrug();
  currentDrugHadFailure = false;
  currentStepIndex = (selectedGroupFilter !== "ALL") ? 1 : 0;
  loadQuestion();
}

function loadQuestion() {
  isStepSuccess = false;
  currentOptionButtons = [];
  updateStepPills();
  updateTrail();

  const step = steps[currentStepIndex];
  document.getElementById("drug-name").textContent = currentDrug.drug;
  document.getElementById("prompt-target").textContent = step.label;

  const feedbackBox = document.getElementById("feedback-box");
  const btnAction = document.getElementById("btn-action");
  feedbackBox.style.display = "none";
  btnAction.style.display = "none";

  if (examTargetLimit !== "INF") {
    document.getElementById("quiz-header-label").textContent = `Exame: Questão ${examSessionCount + 1} de ${examTargetLimit}`;
  } else {
    document.getElementById("quiz-header-label").textContent = "Hierarquia Farmacológica";
  }

  const correctAnswer = currentDrug[step.key];
  const distractors = get3Distractors(correctAnswer, step.key);
  const options = shuffle([correctAnswer, ...distractors]);

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.innerHTML = `
      <span>${optionText}</span>
      <span class="key-hint">${index + 1}</span>
    `;
    btn.onclick = () => handleAnswer(btn, optionText, correctAnswer);
    container.appendChild(btn);
    currentOptionButtons.push(btn);
  });
}

function handleAnswer(clickedBtn, selectedAnswer, correctAnswer) {
  const buttons = document.querySelectorAll("#options-container .btn-option");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.querySelector("span").textContent === correctAnswer) b.classList.add("correct");
  });

  const feedbackBox = document.getElementById("feedback-box");
  const btnAction = document.getElementById("btn-action");
  feedbackBox.style.display = "block";

  if (selectedAnswer === correctAnswer) {
    isStepSuccess = true;
    if (currentStepIndex < 2) {
      const nextStepLabel = steps[currentStepIndex + 1].label;
      feedbackBox.innerHTML = `<strong>✅ Correto!</strong> Continua na trajetória de <strong>${currentDrug.drug}</strong>.`;
      btnAction.textContent = `Avançar para o ${nextStepLabel} → (Enter)`;
    } else {
      completedCount++;
      examSessionCount++;
      if (!currentDrugHadFailure) examCleanSuccessCount++;

      document.getElementById("pill-2").classList.add("completed");
      document.getElementById("pill-2").innerHTML = `✓ ${steps[2].label}`;
      
      if (mistakesSet.has(currentDrug.drug)) {
        mistakesSet.delete(currentDrug.drug);
        updateMistakesBadge();
      }

      feedbackBox.innerHTML = `
        <strong>🎉 Sequência Completa!</strong> Identificou toda a hierarquia de <strong>${currentDrug.drug}</strong>.<br>
        <span style="color:var(--primary); font-size:0.85rem;">${currentDrug.grupo} &rarr; ${currentDrug.subgrupo} &rarr; ${currentDrug.subsubgrupo}</span>
        <div class="feedback-clinical">
          <strong>Indicações Clínicas:</strong> ${currentDrug.indicacoes || "Sem notas."}<br>
          <em style="color:#fde68a;">Alerta: ${currentDrug.alerta || "Sem notas de exame."}</em>
        </div>
        <button class="btn-consult-link" onclick="jumpToGuide('${currentDrug.drug.replace(/'/g, "\\'")}')">Ver ficha completa no Prontuário &rarr;</button>
      `;
      btnAction.textContent = "Próximo Medicamento → (Enter)";
      updateScoreTracker();
    }
  } else {
    isStepSuccess = false;
    currentDrugHadFailure = true;
    clickedBtn.classList.add("wrong");
    
    mistakesSet.add(currentDrug.drug);
    updateMistakesBadge();

    feedbackBox.innerHTML = `
      <strong>❌ Incorreto!</strong> O <strong>${steps[currentStepIndex].label}</strong> correto de <strong>${currentDrug.drug}</strong> é <em>${correctAnswer}</em>.<br>
      <span style="color:var(--text-muted); font-size:0.85rem;">Hierarquia correta: ${currentDrug.grupo} &rarr; ${currentDrug.subgrupo} &rarr; ${currentDrug.subsubgrupo}</span>
      <div class="feedback-clinical">
        <strong>Mecanismo:</strong> ${currentDrug.mecanismo || "Não especificado."}
      </div>
      <button class="btn-consult-link" onclick="jumpToGuide('${currentDrug.drug.replace(/'/g, "\\'")}')">Ver ficha completa no Prontuário &rarr;</button>
    `;

    if (examTargetLimit !== "INF") {
      examSessionCount++;
    }
    btnAction.textContent = "Novo Medicamento → (Enter)";
    updateScoreTracker();
  }

  btnAction.style.display = "inline-block";
}

function updateScoreTracker() {
  const el = document.getElementById("score-tracker");
  if (examTargetLimit !== "INF") {
    el.textContent = `Progresso: ${examSessionCount} / ${examTargetLimit} | Acertos limpos: ${examCleanSuccessCount}`;
  } else {
    el.textContent = `Medicamentos concluídos: ${completedCount}`;
  }
}

function advanceTrajectory() {
  if (isStepSuccess && currentStepIndex < 2) {
    currentStepIndex++;
    loadQuestion();
  } else {
    startWithNewDrug();
  }
}

function finishExamSession() {
  document.getElementById("quiz-question-area").style.display = "none";
  document.getElementById("quiz-controls-bar").style.display = "none";
  const resultsArea = document.getElementById("exam-results-area");
  resultsArea.style.display = "block";

  const total = parseInt(examTargetLimit);
  const pct = Math.round((examCleanSuccessCount / total) * 100);
  document.getElementById("exam-score-display").textContent = `${pct}%`;
  document.getElementById("exam-details-text").textContent = `Completou ${examCleanSuccessCount} de ${total} sequências farmacológicas sem qualquer erro.`;
}

/* ==========================================================================
   MODO INVERSO
   ========================================================================== */

function loadInverseQuestion() {
  currentInvOptionButtons = [];
  currentInvDrug = pharmaData[Math.floor(Math.random() * pharmaData.length)];

  document.getElementById("inv-group").textContent = currentInvDrug.grupo;
  document.getElementById("inv-subgroup").textContent = currentInvDrug.subgrupo;
  document.getElementById("inv-subsubgroup").textContent = currentInvDrug.subsubgrupo;

  const feedbackBox = document.getElementById("inv-feedback-box");
  const btnAction = document.getElementById("inv-btn-action");
  feedbackBox.style.display = "none";
  btnAction.style.display = "none";

  const distractorsPool = pharmaData.filter(m => m.subsubgrupo !== currentInvDrug.subsubgrupo);
  const shuffledDistractors = shuffle(distractorsPool).slice(0, 3).map(m => m.drug);
  const options = shuffle([currentInvDrug.drug, ...shuffledDistractors]);

  const container = document.getElementById("inv-options-container");
  container.innerHTML = "";

  options.forEach((drugName, index) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.innerHTML = `
      <span>${drugName}</span>
      <span class="key-hint">${index + 1}</span>
    `;
    btn.onclick = () => handleInverseAnswer(btn, drugName, currentInvDrug.drug);
    container.appendChild(btn);
    currentInvOptionButtons.push(btn);
  });
}

function handleInverseAnswer(clickedBtn, selectedDrug, correctDrug) {
  const buttons = document.querySelectorAll("#inv-options-container .btn-option");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.querySelector("span").textContent === correctDrug) b.classList.add("correct");
  });

  const feedbackBox = document.getElementById("inv-feedback-box");
  const btnAction = document.getElementById("inv-btn-action");
  feedbackBox.style.display = "block";

  if (selectedDrug === correctDrug) {
    invCompletedCount++;
    document.getElementById("inv-score-tracker").textContent = `Acertos no Modo Inverso: ${invCompletedCount}`;
    feedbackBox.innerHTML = `
      <strong>✅ Exato!</strong> <strong>${correctDrug}</strong> pertence exatamente a esta família.<br>
      <div class="feedback-clinical">
        <strong>Mecanismo:</strong> ${currentInvDrug.mecanismo || "Não especificado."}
      </div>
    `;
  } else {
    clickedBtn.classList.add("wrong");
    feedbackBox.innerHTML = `
      <strong>❌ Incorreto!</strong> O fármaco correspondente a esta classe é <strong>${correctDrug}</strong>.<br>
      <div class="feedback-clinical">
        <strong>Indicações:</strong> ${currentInvDrug.indicacoes || "Não especificadas."}
      </div>
    `;
  }

  btnAction.style.display = "inline-block";
}

/* ==========================================================================
   TABELA DCI COM ATRIBUTOS DATA-LABEL PARA MOBILE
   ========================================================================== */

const dciData = [
  { suffix: "-olol", class: "Betabloqueadores", mech: "Antagonistas dos recetores beta-adrenérgicos.", examples: "Bisoprolol, Propranolol, Carvedilol", filterTerm: "olol" },
  { suffix: "-pril", class: "Inibidores da ECA (IECA)", mech: "Inibem a enzima de conversão da angiotensina.", examples: "Lisinopril, Captopril", filterTerm: "pril" },
  { suffix: "-sartam", class: "Antagonistas dos Recetores da Angiotensina II (ARA II)", mech: "Bloqueiam os recetores AT1 da angiotensina II.", examples: "Losartam", filterTerm: "sartam" },
  { suffix: "-statina", class: "Estatinas (Inibidores da HMG-CoA Redutase)", mech: "Bloqueiam a síntese endógena de colesterol hepático.", examples: "Atorvastatina, Sinvastatina, Pravastatina, Rosuvastatina", filterTerm: "statina" },
  { suffix: "-dipina", class: "Antagonistas do Cálcio (Di-hidropiridinas)", mech: "Bloqueiam os canais lentos de cálcio tipo L.", examples: "Amlodipina", filterTerm: "dipina" },
  { suffix: "-prazol", class: "Inibidores da Bomba de Protões (IBP)", mech: "Inibição irreversível da H+/K+-ATPase gástrica.", examples: "Omeprazol, Pantoprazol", filterTerm: "prazol" },
  { suffix: "-floxacina", class: "Quinolonas / Fluoroquinolonas", mech: "Inibem a DNA-girase e topoisomerase IV bacterianas.", examples: "Ciprofloxacina, Levofloxacina", filterTerm: "floxacina" },
  { suffix: "-micina", class: "Macrólidos e Aminoglicosídeos", mech: "Inibidores da síntese proteica ribossomal (50S ou 30S).", examples: "Azitromicina, Claritromicina, Gentamicina", filterTerm: "micina" },
  { suffix: "-ciclina", class: "Tetraciclinas", mech: "Inibem a síntese proteica na subunidade 30S.", examples: "Doxiciclina", filterTerm: "ciclina" },
  { suffix: "-pam / -lam", class: "Benzodiazepinas", mech: "Moduladores alostéricos positivos do recetor GABAA.", examples: "Diazepam, Lorazepam, Alprazolam, Midazolam", filterTerm: "azepam" },
  { suffix: "-gliflozina", class: "Inibidores do SGLT2", mech: "Bloqueiam a reabsorção tubular proximal de glicose.", examples: "Dapagliflozina, Empagliflozina", filterTerm: "gliflozina" },
  { suffix: "-gliptina", class: "Inibidores da DPP-4", mech: "Inibem a degradação enzimática das incretinas (GLP-1).", examples: "Sitagliptina, Linagliptina", filterTerm: "gliptina" },
  { suffix: "-azol", class: "Antifúngicos Azóis", mech: "Inibem a síntese de ergosterol na membrana fúngica.", examples: "Fluconazol, Itraconazol, Cetoconazol, Clotrimazol", filterTerm: "azol" },
  { suffix: "-vir", class: "Antivíricos", mech: "Inibição de enzimas virais (polimerases, proteases ou integrases).", examples: "Aciclovir, Valaciclovir, Darunavir", filterTerm: "vir" },
  { suffix: "-terol", class: "Agonistas Beta-2 Adrenérgicos", mech: "Estimulação dos recetores beta-2 com broncodilatação.", examples: "Salbutamol, Formoterol", filterTerm: "terol" }
];

function renderDciTable() {
  const tbody = document.getElementById("dci-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  dciData.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="Radical"><button class="suffix-tag-btn" onclick="jumpToGuideWithTerm('${item.filterTerm}')">${item.suffix}</button></td>
      <td data-label="Classe"><strong>${item.class}</strong></td>
      <td data-label="Mecanismo">${item.mech}</td>
      <td data-label="Exemplos" style="color:var(--primary); font-size:0.85rem;">${item.examples}</td>
    `;
    tbody.appendChild(tr);
  });
}

function jumpToGuideWithTerm(term) {
  switchTab("guide");
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = term;
    filterGuide();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ==========================================================================
   ATALHOS DE TECLADO
   ========================================================================== */

window.addEventListener("keydown", (e) => {
  const isQuizActive = document.getElementById("view-quiz").classList.contains("active");
  const isInvActive = document.getElementById("view-inverse").classList.contains("active");

  if (!isQuizActive && !isInvActive) return;

  if (e.key === "Enter" || e.code === "Space") {
    if (isQuizActive) {
      const resultsArea = document.getElementById("exam-results-area");
      if (resultsArea && resultsArea.style.display !== "none") {
        e.preventDefault();
        restartExam();
        return;
      }
      const btn = document.getElementById("btn-action");
      if (btn && btn.style.display !== "none") {
        e.preventDefault();
        advanceTrajectory();
        return;
      }
    } else if (isInvActive) {
      const btn = document.getElementById("inv-btn-action");
      if (btn && btn.style.display !== "none") {
        e.preventDefault();
        loadInverseQuestion();
        return;
      }
    }
  }

  const num = parseInt(e.key);
  if (num >= 1 && num <= 4) {
    if (isQuizActive && currentOptionButtons[num - 1] && !currentOptionButtons[num - 1].disabled) {
      e.preventDefault();
      currentOptionButtons[num - 1].click();
    } else if (isInvActive && currentInvOptionButtons[num - 1] && !currentInvOptionButtons[num - 1].disabled) {
      e.preventDefault();
      currentInvOptionButtons[num - 1].click();
    }
  }
});

/* ==========================================================================
   PRONTUÁRIO & NAVEGAÇÃO
   ========================================================================== */

function renderGuide(items) {
  const container = document.getElementById("guide-list");
  const counter = document.getElementById("search-counter");
  if (!container) return;
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
      (item.drug && item.drug.toLowerCase().includes(query)) ||
      (item.grupo && item.grupo.toLowerCase().includes(query)) ||
      (item.subgrupo && item.subgrupo.toLowerCase().includes(query)) ||
      (item.subsubgrupo && item.subsubgrupo.toLowerCase().includes(query)) ||
      (item.indicacoes && item.indicacoes.toLowerCase().includes(query)) ||
      (item.mecanismo && item.mecanismo.toLowerCase().includes(query))
    );
  });

  renderGuide(filtered);
}

function jumpToGuide(drugName) {
  switchTab("guide");
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = drugName;
    filterGuide();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function switchTab(tab) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

  if (tab === "quiz") {
    document.getElementById("view-quiz").classList.add("active");
    document.getElementById("tab-quiz-btn").classList.add("active");
  } else if (tab === "inverse") {
    document.getElementById("view-inverse").classList.add("active");
    document.getElementById("tab-inverse-btn").classList.add("active");
    if (!currentInvDrug) loadInverseQuestion();
  } else if (tab === "guide") {
    document.getElementById("view-guide").classList.add("active");
    document.getElementById("tab-guide-btn").classList.add("active");
    renderGuide(pharmaData);
  } else if (tab === "dci") {
    document.getElementById("view-dci").classList.add("active");
    document.getElementById("tab-dci-btn").classList.add("active");
    renderDciTable();
  }
}

// Inicializações Globais
initGroupFilterOptions();
updateMistakesBadge();
startWithNewDrug();
renderGuide(pharmaData);
renderDciTable();