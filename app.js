/* ==========================================================================
   MOTOR PRINCIPAL: QUIZ + GUIA DE CONSULTA (app.js)
   ========================================================================== */

const steps = [
  { key: "grupo", label: "Grupo Principal" },
  { key: "subgrupo", label: "Subgrupo" },
  { key: "subsubgrupo", label: "Subsubgrupo" }
];

let currentDrug = null;
let currentStepIndex = 0;
let completedCount = 0;
let isStepSuccess = false;

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function selectNewDrug() {
  let next = pharmaData[Math.floor(Math.random() * pharmaData.length)];
  if (pharmaData.length > 1 && currentDrug && next.drug === currentDrug.drug) {
    return selectNewDrug();
  }
  return next;
}

function get3Distractors(correctVal, key) {
  const allVals = [...new Set(pharmaData.map(item => item[key]))].filter(val => val && val !== correctVal);
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
  currentDrug = selectNewDrug();
  currentStepIndex = 0;
  loadQuestion();
}

function loadQuestion() {
  isStepSuccess = false;
  updateStepPills();
  updateTrail();

  const step = steps[currentStepIndex];
  document.getElementById("drug-name").textContent = currentDrug.drug;
  document.getElementById("prompt-target").textContent = step.label;

  const feedbackBox = document.getElementById("feedback-box");
  const btnAction = document.getElementById("btn-action");
  feedbackBox.style.display = "none";
  btnAction.style.display = "none";

  const correctAnswer = currentDrug[step.key];
  const distractors = get3Distractors(correctAnswer, step.key);
  const options = shuffle([correctAnswer, ...distractors]);

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  options.forEach(optionText => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.textContent = optionText;
    btn.onclick = () => handleAnswer(btn, optionText, correctAnswer);
    container.appendChild(btn);
  });
}

function handleAnswer(clickedBtn, selectedAnswer, correctAnswer) {
  const buttons = document.querySelectorAll(".btn-option");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === correctAnswer) b.classList.add("correct");
  });

  const feedbackBox = document.getElementById("feedback-box");
  const btnAction = document.getElementById("btn-action");
  feedbackBox.style.display = "block";

  if (selectedAnswer === correctAnswer) {
    isStepSuccess = true;
    if (currentStepIndex < 2) {
      const nextStepLabel = steps[currentStepIndex + 1].label;
      feedbackBox.innerHTML = `<strong>✅ Correto!</strong> Boa! Agora escolhe o <strong>${nextStepLabel}</strong> de <strong>${currentDrug.drug}</strong>.`;
      btnAction.textContent = `Avançar para o ${nextStepLabel} →`;
    } else {
      completedCount++;
      document.getElementById("pill-2").classList.add("completed");
      document.getElementById("pill-2").innerHTML = `✓ ${steps[2].label}`;
      
      feedbackBox.innerHTML = `
        <strong>🎉 Sequência Completa!</strong> Identificaste toda a hierarquia de <strong>${currentDrug.drug}</strong>.<br>
        <span style="color:var(--primary); font-size:0.85rem;">${currentDrug.grupo} &rarr; ${currentDrug.subgrupo} &rarr; ${currentDrug.subsubgrupo}</span>
        <div class="feedback-clinical">
          <strong>Indicações Clínicas:</strong> ${currentDrug.indicacoes || "Sem notas."}<br>
          <em style="color:#fde68a;">Alerta de Exame: ${currentDrug.alerta || "Sem alertas registados."}</em>
        </div>
      `;
      btnAction.textContent = "Próximo Medicamento →";
      document.getElementById("score-tracker").textContent = `Medicamentos completados: ${completedCount}`;
    }
  } else {
    isStepSuccess = false;
    clickedBtn.classList.add("wrong");
    feedbackBox.innerHTML = `
      <strong>❌ Errado!</strong> O <strong>${steps[currentStepIndex].label}</strong> correto de <strong>${currentDrug.drug}</strong> é <em>${correctAnswer}</em>.<br>
      <span style="color:var(--text-muted); font-size:0.85rem;">Hierarquia correta: ${currentDrug.grupo} &rarr; ${currentDrug.subgrupo} &rarr; ${currentDrug.subsubgrupo}</span>
      <div class="feedback-clinical">
        <strong>Mecanismo de Ação:</strong> ${currentDrug.mecanismo || "Não especificado."}
      </div>
    `;
    btnAction.textContent = "Trocar de Medicamento e Recomeçar →";
  }

  btnAction.style.display = "inline-block";
}

function advanceTrajectory() {
  if (isStepSuccess) {
    if (currentStepIndex < 2) {
      currentStepIndex++;
      loadQuestion();
    } else {
      startWithNewDrug();
    }
  } else {
    startWithNewDrug();
  }
}

/* ==========================================================================
   LÓGICA DA ABA DE CONSULTA E PESQUISA
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

// Iniciar a aplicação
startWithNewDrug();
renderGuide(pharmaData);