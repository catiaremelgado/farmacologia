# 💊 PharmaQuiz — Quiz de Farmacologia

Uma aplicação web interativa, responsiva e focada em **recuperação ativa (*active recall*)** para estudo e memorização da classificação farmacoterapêutica de medicamentos (Infarmed / ATC).

A aplicação baseia-se num sistema de **trajetória em funil de 3 níveis**: para cada medicamento, o utilizador deve identificar sequencialmente o **Grupo Principal**, o **Subgrupo** e o **Subsubgrupo / Família Química**.

---

## 🎯 Como Funciona a Dinâmica

1. **Sorteio do Fármaco:** A aplicação seleciona aleatoriamente um medicamento da base de dados.
2. **Sequência em Trajetória:**
   - **Nível 1:** Selecionar o **Grupo Principal** (entre 4 opções).  
     *Se acertar, desbloqueia o Nível 2; se errar, o sistema apresenta a correção e troca de medicamento.*
   - **Nível 2:** Selecionar o **Subgrupo Farmacológico** do mesmo fármaco (entre 4 opções).  
     *Se acertar, avança para o Nível 3; se errar, o sistema apresenta a correção e troca de medicamento.*
   - **Nível 3:** Selecionar o **Subsubgrupo / Família Química** (entre 4 opções).  
     *Se acertar, completa a sequência do fármaco com sucesso (+1 ponto) e avança para um novo fármaco.*
3. **Mecânica Rigorosa:** Sempre 4 opções de escolha múltipla (sem cartões viráveis), forçando a tomada de decisão ativa.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 & CSS3 Moderno:** Design responsivo adaptado a telemóveis, tablets e computadores, com tema escuro (*dark mode*) nativo.
- **JavaScript Vanilla (ES6+):** Lógica autónoma, sem dependência de bibliotecas externas ou frameworks.
- **Base de Dados Modular (`medicamentos.js`):** Lista de medicamentos e classificações isolada da lógica de interface, facilitando a adição ou edição de dados.

---

## 📁 Estrutura do Projeto

```text
├── index.html        # Estrutura visual, layout e motor do quiz
├── medicamentos.js   # Base de dados (array de objetos com fármacos e classes)
└── README.md         # Documentação do projeto