// medicamentos.js
const pharmaData = [
  {
    "drug": "Amoxicilina 1g - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas",
    "mecanismo": "Inibe a transpeptidação na síntese do peptidoglicano da parede celular bacteriana por ligação às PBPs.",
    "indicacoes": "Infeções respiratórias altas e baixas, otite média aguda, sinusite e erradicação de Helicobacter pylori.",
    "alerta": "Sem ação contra bactérias produtoras de beta-lactamases; risco de hipersensibilidade e choque anafilático."
  },
  {
    "drug": "Amoxicilina 250mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas",
    "mecanismo": "Beta-lactâmico bactericida; bloqueia a síntese da parede celular através da inativação das PBPs.",
    "indicacoes": "Infeções respiratórias, amigdalites bacterianas e otites médias agudas em contexto pediátrico.",
    "alerta": "Após reconstituição deve ser conservada em frigorífico pelo período estipulado e agitada antes de cada toma."
  },
  {
    "drug": "Amoxicilina 500mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas",
    "mecanismo": "Inibe a síntese de peptidoglicano na parede celular durante a fase de multiplicação bacteriana ativa.",
    "indicacoes": "Infeções bacterianas orofaríngeas, respiratórias e cutâneas não complicadas em crianças ou adultos com disfagia.",
    "alerta": "Ajustar dose na insuficiência renal grave; vigiar aparecimento de exantema cutâneo e diarreia."
  },
  {
    "drug": "Benzilpenicilina benzatínica 1,2MUI/4ml - sol.injectável",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas",
    "mecanismo": "Penicilina natural de libertação lenta que inibe a síntese da parede bacteriana em microrganismos muito sensíveis.",
    "indicacoes": "Tratamento da sífilis primária, secundária ou latente precoce e profilaxia da febre reumática.",
    "alerta": "Administração EXCLUSIVAMENTE intramuscular profunda; a injeção intravascular inadvertida causa necrose e paragem cardíaca."
  },
  {
    "drug": "Benzilpenicilina benzatínica 2,4MUI/6,5ml - sol.injectável",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas",
    "mecanismo": "Formulação de depósito de benzilpenicilina que mantém níveis séricos basais prolongados ao longo de semanas.",
    "indicacoes": "Sífilis tardia, latente de duração indeterminada e profilaxia a longo prazo de erisipela recorrente.",
    "alerta": "Administrar por via IM profunda lenta; contraindicada em doentes com alergia comprovada às penicilinas."
  },
  {
    "drug": "Flucloxacilina 500mg - cáps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas",
    "mecanismo": "Penicilina isoxazolil resistente às penicilinases estafilocócicas; inibe a síntese da parede bacteriana.",
    "indicacoes": "Infeções estafilocócicas da pele e tecidos moles (furúnculos, celulites, abcessos) e osteomielite.",
    "alerta": "Tomar em jejum (1h antes ou 2h após refeições); vigiar toxicidade hepática com padrão colestático."
  },
  {
    "drug": "Amoxicilina e ácido clavulânico 250mg+62,5mg/5ml sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas associadas a Inibidores das Beta-lactamases",
    "mecanismo": "A amoxicilina inibe a parede celular bacteriana enquanto o ácido clavulânico inativa irreversivelmente as beta-lactamases.",
    "indicacoes": "Otite média aguda recorrente, sinusite bacteriana e infeções respiratórias pediátricas resistentes à amoxicilina.",
    "alerta": "Frequente indução de diarreia associada a antibióticos; tomar no início das refeições para minimizar intolerância gastrointestinal."
  },
  {
    "drug": "Amoxicilina e ácido clavulânico 400mg+57mg/5ml - sol. oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas associadas a Inibidores das Beta-lactamases",
    "mecanismo": "Associação sinérgica bactericida formulada para regimes de toma bidiária (12/12h) em pediatria.",
    "indicacoes": "Infeções do trato respiratório superior e inferior, infeções odontogénicas e do trato urinário em crianças.",
    "alerta": "Não intercambiável diretamente com formulações de rácio diferente sem recalcular a dose de ácido clavulânico."
  },
  {
    "drug": "Amoxicilina e ácido clavulânico 875+125mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas associadas a Inibidores das Beta-lactamases",
    "mecanismo": "Beta-lactâmico associado a inibidor suicida de beta-lactamases de largo espetro (Gram-positivos e Gram-negativos).",
    "indicacoes": "Pneumonia adquirida na comunidade, exacerbação de DPOC, mordeduras humanas/animais e infeções urinárias complicadas.",
    "alerta": "Risco de icterícia colestática e hepatite aguda medicamentosa, especialmente em tratamentos prolongados e idosos."
  },
  {
    "drug": "Doxiciclina 100mg - caps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Tetraciclinas",
    "mecanismo": "Inibe a síntese proteica bacteriana por ligação reversível à subunidade ribossomal 30S.",
    "indicacoes": "Infeções por Chlamydia, Rickettsia (febre escaro-nodular), pneumonia atípica, acne vulgar inflamatório e doença de Lyme.",
    "alerta": "Risco de esofagite ulcerativa (tomar com copo cheio de água e não deitar logo); contraindicada na gravidez e em crianças < 8 anos."
  },
  {
    "drug": "Azitromicina 3,75mg/0,25g colirio rec unidose",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos",
    "mecanismo": "Macrólido de aplicação tópica que inibe a síntese proteica bacteriana na subunidade ribossomal 50S.",
    "indicacoes": "Conjuntivites bacterianas purulentas e conjuntivites causadas por Chlamydia trachomatis.",
    "alerta": "Pode provocar visão turva transitória após instilação; não utilizar lentes de contacto durante o tratamento ativo."
  },
  {
    "drug": "Azitromicina 10 mg/ml Pó susp oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos",
    "mecanismo": "Azalido que bloqueia a transpeptidação ribossomal 50S com elevada penetração celular e fagocítica.",
    "indicacoes": "Faringoamigdalite estreptocócica em alérgicos à penicilina, otite média e infeções respiratórias ligeiras em pediatria.",
    "alerta": "Semivida tecidual prolongada; regimes habituais de curta duração (3 ou 5 dias) asseguram cobertura terapêutica sustentada."
  },
  {
    "drug": "Azitromicina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos",
    "mecanismo": "Inibe a translocação de péptidos na síntese proteica bacteriana na subunidade 50S ribossomal.",
    "indicacoes": "Pneumonia adquirida na comunidade (patógenos atípicos), uretrite/cervicite não gonocócica por Chlamydia e exacerbação de DPOC.",
    "alerta": "Pode prolongar o intervalo QTc no ECG com risco de arritmias ventriculares (torsades de pointes); precaução com antiarrítmicos."
  },
  {
    "drug": "Claritromicina 125mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos",
    "mecanismo": "Macrólido semi-sintético que inibe a síntese de proteínas dependente de RNA na subunidade 50S.",
    "indicacoes": "Infeções respiratórias agudas pediátricas e infeções ligeiras a moderadas da pele e tecidos moles.",
    "alerta": "Inibidor potente do citocromo CYP3A4 com elevado potencial de interações medicamentosas graves."
  },
  {
    "drug": "Claritromicina 250mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos",
    "mecanismo": "Bloqueia o crescimento bacteriano através da inibição reversível do ribossoma bacteriano 50S.",
    "indicacoes": "Infeções do trato respiratório e amigdalites bacterianas em crianças com peso mais elevado.",
    "alerta": "Frequentemente induz sabor metálico amargo na boca e queixas gastrointestinais."
  },
  {
    "drug": "Claritromicina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos",
    "mecanismo": "Inibidor da síntese proteica na subunidade 50S; metabolizado no derivado ativo 14-hidroxi-claritromicina.",
    "indicacoes": "Erradicação de Helicobacter pylori (em esquemas combinados), pneumonia bacteriana e sinusite aguda.",
    "alerta": "Contraindicada a associação com estatinas metabolizadas por CYP3A4 (sinvastatina/atorvastatina) pelo risco de rabdomiólise."
  },
  {
    "drug": "Cotrimoxazol (Sulfametoxazol+Trimetoprim) 800+160mg-comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Sulfonamidas e associações",
    "mecanismo": "Bloqueio sequencial duplo da síntese do ácido tetrahidrofólico bacteriano por inibição da di-hidropteroato sintase e redutase.",
    "indicacoes": "Tratamento e profilaxia da pneumonia por Pneumocystis jirovecii, infeções urinárias e exacerbações de bronquite crónica.",
    "alerta": "Risco de reações cutâneas graves (Síndrome de Stevens-Johnson/NET), hipercaliemia e citopenias hematológicas."
  },
  {
    "drug": "Sulfametoxazol + Trimetoprim (200+40)mg/5ml (EF)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Sulfonamidas e associações",
    "mecanismo": "Ação bactericida sinérgica através da inibição consecutiva do metabolismo do folato.",
    "indicacoes": "Infeções urinárias e profilaxia de infeções oportunistas em pediatria e doentes imunocomprometidos.",
    "alerta": "Assegurar hidratação adequada para prevenir cristalúria; contraindicado no défice grave de G6PD e recém-nascidos."
  },
  {
    "drug": "Ciprofloxacina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Quinolonas / Fluoroquinolonas",
    "mecanismo": "Inibe a DNA-girase bacteriana e a topoisomerase IV, impedindo a replicação e reparação do DNA.",
    "indicacoes": "Pielonefrite aguda, prostatite bacteriana, gastroenterites bacterianas invasivas e infeções por Pseudomonas.",
    "alerta": "Risco de tendinite e rutura tendinosa (tendão de Aquiles), neurotoxicidade e prolongamento do intervalo QTc."
  },
  {
    "drug": "Levofloxacina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Quinolonas / Fluoroquinolonas",
    "mecanismo": "Isómero L da ofloxacina; inibe seletivamente as topoisomerases bacterianas com elevada atividade contra Gram-positivos.",
    "indicacoes": "Pneumonia adquirida na comunidade, exacerbação aguda de DPOC, sinusite aguda e infeções urinárias complicadas.",
    "alerta": "Reduz o limiar convulsivo; absorção diminuída na presença de catiões divalentes/trivalentes (ferro, antiácidos, cálcio)."
  },
  {
    "drug": "Clindamicina 150 mg Comp (EF)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos",
    "mecanismo": "Lincosamida que inibe a síntese de proteínas na subunidade ribossomal 50S com excelente cobertura sobre anaeróbios.",
    "indicacoes": "Infeções osteoarticulares, abcessos dentários graves, infeções por anaeróbios da cavidade oral e pelve.",
    "alerta": "Fator de risco clássico para colite pseudomembranosa induzida por superinfeção por Clostridioides difficile."
  },
  {
    "drug": "Etambutol 400 mg Comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos",
    "mecanismo": "Inibe a arabinosiltransferase micobacteriana, bloqueando a síntese de arabinogalactano na parede celular.",
    "indicacoes": "Terapêutica combinada de primeira linha da tuberculose ativa (esquema RIPE) e infeções por micobactérias atípicas.",
    "alerta": "Risco de neurite ótica retrobulbar dose-dependente com diminuição da acuidade visual e perda da discriminação verde-vermelho."
  },
  {
    "drug": "Fosfomicina 3000mg - saquetas",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos",
    "mecanismo": "Inibe a enzima MurA (enolpiruvil transferase), bloqueando a fase inicial de síntese de peptidoglicano citoplasmático.",
    "indicacoes": "Tratamento de dose única da cistite aguda não complicada em mulheres adultas e adolescentes.",
    "alerta": "Tomar em jejum antes de deitar após esvaziar a bexiga para manter concentrações urinárias máximas."
  },
  {
    "drug": "Isoniazida 300mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos",
    "mecanismo": "Pró-fármaco ativado pela catalase-peroxidase KatG; inibe a síntese de ácidos micólicos essenciais da parede micobacteriana.",
    "indicacoes": "Tratamento da tuberculose ativa (em associação) e tratamento da infeção tuberculosa latente.",
    "alerta": "Hepatotoxicidade grave e neuropatia periférica por depleção de piridoxina (suplementar com vitamina B6)."
  },
  {
    "drug": "Metronidazol 250mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos",
    "mecanismo": "Reduzido a intermediários citotóxicos reativos em ambiente anaeróbio que quebram as cadeias de DNA helicoidal.",
    "indicacoes": "Infeções por bactérias anaeróbias intra-abdominais, vaginite bacteriana, amebíase, giardíase e tricomoníase.",
    "alerta": "Efeito dissulfiram clássico (rubor, vómitos, taquicardia) com consumo de álcool; deixa sabor metálico na boca."
  },
  {
    "drug": "Fluconazol 50 mg (EF)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais",
    "mecanismo": "Inibe a enzima 14-alfa-desmetilase do citocromo fúngico, bloqueando a conversão de lanosterol em ergosterol.",
    "indicacoes": "Candidíase orofaríngea, esofágica, candidúria e dermatomicoses suscetíveis.",
    "alerta": "Inibidor enzimático moderado a potente do CYP2C9 e CYP3A4 com aumento das concentrações séricas de múltiplos fármacos."
  },
  {
    "drug": "Itraconazol 100mg - cáps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais",
    "mecanismo": "Triazol lipofílico de largo espetro que desestabiliza a membrana fúngica através do bloqueio da síntese de ergosterol.",
    "indicacoes": "Onicomicoses, micoses cutâneas refratárias, blastomicose, histoplasmose e aspergilose não invasiva.",
    "alerta": "Efeito inotrópico negativo (contraindicado na insuficiência cardíaca descompensada); requer meio gástrico ácido para absorção."
  },
  {
    "drug": "Nistatina 100000UI/ml - susp.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais",
    "mecanismo": "Antifúngico polieno que se liga aos esteróis da membrana celular fúngica criando poros que causam lise osmótica.",
    "indicacoes": "Candidíase oral e mucocutânea (sapinhos) em pediatria e imunodeprimidos.",
    "alerta": "Ação estritamente local por ausência de absorção gastrointestinal significativa; bochechar e reter antes de engolir."
  },
  {
    "drug": "Terbinafina 250mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais",
    "mecanismo": "Alilamina que inibe a esqualeno epoxidase fúngica, levando à depleção de ergosterol e acumulação tóxica de esqualeno.",
    "indicacoes": "Onicomicoses e tinhas graves das mãos/pés e corpo onde a terapêutica tópica é ineficaz.",
    "alerta": "Monitorizar enzimas hepáticas antes e durante o tratamento (risco raro de hepatite grave); perturbações do paladar reversíveis."
  },
  {
    "drug": "Valaciclovir 1000mg comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antivíricos gerais",
    "mecanismo": "Éster L-valina pró-fármaco do aciclovir com elevada biodisponibilidade; inibe a DNA polimerase viral.",
    "indicacoes": "Tratamento de herpes zóster, infeções agudas ou recidivantes por herpes simplex cutaneomucoso e supressão viral.",
    "alerta": "Assegurar boa hidratação para evitar precipitação renal tubular; ajustar rigorosamente a posologia na insuficiência renal."
  },
  {
    "drug": "Bictegravir 50 mg + Emtricitabina 200 mg + Tenofovir alafenamida 25 mg (Biktarvy)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Regime triplo completo: inibidor da transferência de cadeia da integrase (INSTI) associado a dois inibidores nucleosídicos da transcriptase reversa (NRTI).",
    "indicacoes": "Tratamento da infeção pelo vírus da imunodeficiência humana tipo 1 (VIH-1) em doentes sem mutações de resistência.",
    "alerta": "Elevada barreira genética à resistência; não associar com antiácidos com catiões polivalentes sem desfasamento horário estrito."
  },
  {
    "drug": "DARUNAVIR 800 mg + COBICISTATE 150 mg (REZOLSTA)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Inibidor da protease viral do VIH (darunavir) potencializado farmacocineticamente por inibidor seletivo do CYP3A (cobicistate).",
    "indicacoes": "Tratamento da infeção por VIH-1 em adultos e adolescentes em esquemas combinados com outros antirretrovirais.",
    "alerta": "Potencial extremo de interações medicamentosas farmacocinéticas mediadas pela inibição profunda do CYP3A4."
  },
  {
    "drug": "Darunavir 800mg - comp (Prezista)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Inibe a clivagem das poliproteínas Gag-Pol da protease do VIH, impedindo a maturação e infectividade viral.",
    "indicacoes": "Terapêutica da infeção por VIH-1 combinada com ritonavir ou cobicistate como potenciador farmacocinético.",
    "alerta": "Contém uma fração sulfonamida (cautela em doentes com alergia prévia grave a sulfamidas); tomar com alimentos."
  },
  {
    "drug": "Dolutegravir 50mg (Tivicay) - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Inibidor da integrase de segunda geração; bloqueia a integração do DNA proviral no genoma da célula hospedeira.",
    "indicacoes": "Infeção por VIH-1 e VIH-2 em esquemas combinados de primeira linha ou resgate virológico.",
    "alerta": "Pode induzir cefaleias, insónia e aumento benigno da creatinina por bloqueio da secreção tubular no transportador OCT2."
  },
  {
    "drug": "Dolutegravir+Abacavir+Lamivudina 50+600+300mg (Triumeq)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Co-formulação em comprimido único combinando um inibidor da integrase com dois inibidores nucleosídicos da transcriptase reversa.",
    "indicacoes": "Regime antirretroviral completo de toma única diária para doentes infetados por VIH-1.",
    "alerta": "Obriga a rastreio genético obrigatório prévio do alelo HLA-B*5701 devido ao risco fatal de hipersensibilidade ao abacavir."
  },
  {
    "drug": "Lamivudina + Dolutegravir 300 mg + 50 mg (Dovato)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Regime duplo simplificado composto por um inibidor da integrase (dolutegravir) e um NRTI (lamivudina).",
    "indicacoes": "Tratamento de primeira linha da infeção por VIH-1 sem mutações de resistência conhecidas à classe.",
    "alerta": "Não recomendado em doentes co-infetados com hepatite B ativa sem um segundo agente ativo contra o VHB."
  },
  {
    "drug": "Lopinavir+Ritonavir 200+50mg (Kaletra)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais",
    "mecanismo": "Inibidor da protease do VIH (lopinavir) reforçado farmacocineticamente por doses sub-terapêuticas de ritonavir.",
    "indicacoes": "Terapêutica antirretroviral de segunda linha ou salvamento na infeção por VIH-1.",
    "alerta": "Causa dislipidemia marcada (hipertrigliceridemia grave), intolerância gastrointestinal e prolongamento do intervalo PR/QT."
  },
  {
    "drug": "Glecaprevir 100 mg + pibrentasvir 40 mg (Maviret)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antivíricos para hepatite C",
    "mecanismo": "Agentes antivíricos de ação direta pangenotípicos: inibidor da protease NS3/4A e inibidor do complexo de replicação NS5A.",
    "indicacoes": "Tratamento da infeção crónica por vírus da hepatite C (VHC) em doentes sem cirrose ou com cirrose compensada.",
    "alerta": "Contraindicado em insuficiência hepática moderada ou grave (Child-Pugh B ou C); tomar sempre com refeição."
  },
  {
    "drug": "Ribavirina 200mg - caps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antivíricos para hepatite C",
    "mecanismo": "Análogo sintético da guanosina que inibe a síntese de RNA viral e a inosina monofosfato desidrogenase.",
    "indicacoes": "Terapêutica adjuvante combinada na hepatite C crónica e infeções graves por vírus sincicial respiratório.",
    "alerta": "Anemia hemolítica dose-dependente muito frequente; potencial teratogénico extremo (contraceção obrigatória por 6 meses pós-tratamento)."
  },
  {
    "drug": "Albendazol 20mg/ml, sol oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Anti-helmínticos",
    "subsubgrupo": "Anti-helmínticos gerais",
    "mecanismo": "Benzimidazol que inibe a polimerização da tubulina ligando-se aos microtúbulos do parasita, bloqueando o transporte de glicose.",
    "indicacoes": "Nematodoses intestinais (ascaríase, enterobíase, ancilostomíase) e equinococose cística em suspensão oral.",
    "alerta": "Administrar conjuntamente com refeições ricas em gordura para otimizar a absorção sistémica se indicada."
  },
  {
    "drug": "Albendazol 400 mg Comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Anti-helmínticos",
    "subsubgrupo": "Anti-helmínticos gerais",
    "mecanismo": "Provoca esgotamento energético e morte dos helmintos através da despolimerização microtubular.",
    "indicacoes": "Enterobíase (oxiuríase), ascaríase, tricuríase, ancilostomíase e hidatidose em dose única ou regimes curtos.",
    "alerta": "Contraindicado no primeiro trimestre da gravidez; monitorizar transaminases em ciclos terapêuticos prolongados."
  },
  {
    "drug": "Lidocaína 1% (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Anestésicos locais",
    "subsubgrupo": "Anestésicos locais",
    "mecanismo": "Anestésico tipo amida que bloqueia os canais de sódio dependentes de voltagem nas membranas dos axónios neuronais.",
    "indicacoes": "Anestesia por infiltração local, bloqueio nervoso periférico e pequenas intervenções cutâneas ou cirúrgicas.",
    "alerta": "A injeção intravascular inadvertida provoca toxicidade sistémica (LAST): convulsões, colapso cardiovascular e paragem cardíaca."
  },
  {
    "drug": "Biperideno 4mg retard - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiparkinsónicos",
    "subsubgrupo": "Anticolinérgicos",
    "mecanismo": "Antagonista competitivo dos recetores colinérgicos muscarínicos centrais; reequilibra a via dopamina/acetilcolina estriatal.",
    "indicacoes": "Doença de Parkinson e tratamento profilático/curativo de sintomas extrapiramidais induzidos por neurolépticos.",
    "alerta": "Efeitos adversos anticolinérgicos clássicos: boca seca, retenção urinária, obstipação, visão turva e confusão mental em idosos."
  },
  {
    "drug": "Biperideno 5 mg/1 ml Sol inj Fr 1 ml IM IV",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiparkinsónicos",
    "subsubgrupo": "Anticolinérgicos",
    "mecanismo": "Bloqueio muscarínico central agudo com rápido controlo da hiperatividade colinérgica no estriado.",
    "indicacoes": "Urgência em distonias agudas induzidas por antipsicóticos ou antieméticos (ex: crises oculogíricas e torcicolo agudo).",
    "alerta": "Administração intravenosa deve ser lenta; contraindicado no glaucoma de ângulo estreito e hipertrofia prostática obstrutiva."
  },
  {
    "drug": "Carbamazepina 200mg comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Bloqueadores dos canais de sódio",
    "mecanismo": "Bloqueador dos canais de sódio dependentes de voltagem na conformação inativada; reduz disparos sinápticos repetitivos.",
    "indicacoes": "Crises epilépticas focais e generalizadas tonicoclónicas, nevralgia do trigémio e estabilização do humor.",
    "alerta": "Autoindutor enzimático profundo do CYP3A4; risco de hiponatremia por SIADH e síndrome de Stevens-Johnson (rastreio HLA-B*1502)."
  },
  {
    "drug": "Carbamazepina 400 mg - Comp LP",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Bloqueadores dos canais de sódio",
    "mecanismo": "Formulações de libertação prolongada que estabilizam as membranas neuronais e evitam picos plasmáticos tóxicos.",
    "indicacoes": "Controlo crónico da epilepsia focal e profilaxia da nevralgia do trigémio refratária.",
    "alerta": "Monitorizar hemograma completo (risco de agranulocitose e anemia aplástica) e níveis séricos terapêuticos (4-12 mcg/mL)."
  },
  {
    "drug": "Clonazepam 2 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Benzodiazepinas antiepiléticas",
    "mecanismo": "Potencia a neurotransmissão inibitória gabaérgica através do complexo recetor GABAA-canal de cloreto.",
    "indicacoes": "Crises mioclónicas, ausências atípicas, síndrome de Lennox-Gastaut e perturbação de pânico.",
    "alerta": "Forte sedação, tolerância ao efeito antiepilético com o tempo e dependência grave com síndrome de privação na retirada súbita."
  },
  {
    "drug": "Gabapentina 100mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides",
    "mecanismo": "Liga-se à subunidade alfa-2-delta dos canais de cálcio voltagem-dependentes centrais, diminuindo a libertação de neurotransmissores excitatórios.",
    "indicacoes": "Dor neuropática periférica (nevralgia pós-herpética, neuropatia diabética) e adjuvante na epilepsia focal.",
    "alerta": "Excreção exclusivamente renal (ajuste obrigatório na insuficiência renal); induz sonolência, tonturas e edema periférico."
  },
  {
    "drug": "Gabapentina 300mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides",
    "mecanismo": "Modulador alostérico pré-sináptico dos canais de cálcio; não atua diretamente nos recetores GABA.",
    "indicacoes": "Titulação progressiva para controlo de dor neuropática crónica e crises epilépticas parciais refratárias.",
    "alerta": "A absorção oral é saturável por transportadores intestinais L-aminoácidos; evitar descontinuação abrupta."
  },
  {
    "drug": "Lamotrigina 100 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos de largo espetro",
    "mecanismo": "Bloqueia canais de sódio voltagem-dependentes e suprime a libertação patológica sináptica de glutamato.",
    "indicacoes": "Epilepsia focal e generalizada e prevenção de episódios depressivos na perturbação bipolar tipo I.",
    "alerta": "Exige titulação lenta de dose devido ao risco de erupções cutâneas potencialmente fatais (Stevens-Johnson/DRESS); interação com valproato."
  },
  {
    "drug": "Lamotrigina 50 mg - Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos de largo espetro",
    "mecanismo": "Estabilizador neuronal de largo espetro com perfil favorável no humor através da inibição do tónus glutamatérgico.",
    "indicacoes": "Dose intermédia na fase de titulação da epilepsia ou profilaxia de recaídas bipolares.",
    "alerta": "O valproato inibe a glucuronidação da lamotrigina, duplicando a sua semivida e aumentando o risco de toxicidade cutânea."
  },
  {
    "drug": "Pregabalina 25mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides",
    "mecanismo": "Elevada afinidade para a subunidade alfa-2-delta dos canais de cálcio neuronais; reduz o influxo de cálcio pré-sináptico.",
    "indicacoes": "Início de tratamento na dor neuropática periférica e central, perturbação de ansiedade generalizada (PAG) e fibromialgia.",
    "alerta": "Potencial de abuso, tolerância e dependência recreativa; vigiar ganho de peso, edema maleolar e sedação."
  },
  {
    "drug": "Pregabalina 50mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides",
    "mecanismo": "Reduz a libertação de substância P, glutamato e noradrenalina em circuitos sensoriais sobrexcitados.",
    "indicacoes": "Manutenção da analgesia na dor neuropática diabética e controlo da perturbação de ansiedade generalizada.",
    "alerta": "Efeito sinérgico aditivo perigoso de depressão respiratória quando coadministrada com analgésicos opióides."
  },
  {
    "drug": "Topiramato 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos moduladores de GABA/Glutamato",
    "mecanismo": "Ação multimodal: bloqueia canais de sódio, potencia ação no GABAA, inibe recetores AMPA/cainato e é inibidor fraco da anidrase carbónica.",
    "indicacoes": "Epilepsia refratária e profilaxia da enxaqueca frequente ou incapacitante no adulto.",
    "alerta": "Provoca lentificação psicomotora e declínio cognitivo ('dopamax'), perda de peso marcada, glaucoma agudo e litíase renal."
  },
  {
    "drug": "Topiramato 25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos moduladores de GABA/Glutamato",
    "mecanismo": "Inibidor da hiperexcitabilidade neuronal por bloqueio glutamatérgico e potenciação inibitória gabaérgica.",
    "indicacoes": "Fase de escalonamento posológico na profilaxia de crises convulsivas ou enxaqueca crónica.",
    "alerta": "Incentivar hidratação abundante para contrariar a precipitação de cálculos de fosfato de cálcio nos rins."
  },
  {
    "drug": "Topiramato 50mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos moduladores de GABA/Glutamato",
    "mecanismo": "Modulador alostérico e inibidor enzimático que estabiliza as vias condutoras do córtex cerebral.",
    "indicacoes": "Profilaxia da enxaqueca no adulto e monoterapia ou adjuvante em crises epilépticas parciais.",
    "alerta": "Reduz a eficácia de contracetivos orais contendo estrogénios em doses $\\ge$ 200 mg/dia."
  },
  {
    "drug": "Valproato de sódio 200mg/ml - sol.oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Derivados do ácido valpróico",
    "mecanismo": "Aumenta os níveis de GABA cerebral inibindo a sua degradação (GABA-transaminase) e bloqueia canais de sódio e cálcio T.",
    "indicacoes": "Epilepsias generalizadas (ausências, mioclónicas, tónico-clónicas) e crises focais em doentes pediátricos.",
    "alerta": "Toxicidade hepática fulminante em menores de 2 anos e risco de pancreatite hemorrágica aguda."
  },
  {
    "drug": "Valproato de sódio 300mg - comp LP",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Derivados do ácido valpróico",
    "mecanismo": "Antiepilético de espetro muito amplo formulado para manter níveis plasmáticos estáveis sem flutuações tóxicas.",
    "indicacoes": "Epilepsia primária generalizada e tratamento/profilaxia de episódios de mania na perturbação bipolar.",
    "alerta": "Teratogénio potente (espinha bífida e atraso cognitivo); contraindicado em mulheres com potencial fértil sem programa restritivo (PREVALL)."
  },
  {
    "drug": "Valproato de sódio 500mg - comp LP",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Derivados do ácido valpróico",
    "mecanismo": "Aumenta a neurotransmissão inibitória gabaérgica e reduz a transmissão excitatória sináptica.",
    "indicacoes": "Dose de manutenção na epilepsia refratária e episódios maníacos agudos da perturbação bipolar.",
    "alerta": "Efeitos adversos: ganho de peso acentuado, alopécia transitória, tremor fino das mãos e hiperamonemia sem falência hepática."
  },
  {
    "drug": "Alprazolam 0.25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Triazolobenzodiazepina de ação curta que potencia o efeito inibitório do GABA por modulação alostérica positiva no recetor GABAA.",
    "indicacoes": "Tratamento de curto prazo da ansiedade reativa aguda, crises de angústia e tensão emocional incapacitante.",
    "alerta": "Elevado risco de desenvolvimento de dependência física e tolerância precoce; não ultrapassar 2 a 4 semanas de tratamento contínuo."
  },
  {
    "drug": "Alprazolam 0.5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Aumenta a frequência de abertura dos canais de cloreto acoplados ao recetor GABAA no sistema límbico.",
    "indicacoes": "Ansiedade generalizada grave e perturbação de pânico com ou sem agorafobia.",
    "alerta": "Sintomas de privação agudos (ansiedade rebound, insónia e agitação) se interrompido bruscamente; descontinuação sempre gradual."
  },
  {
    "drug": "Alprazolam 1mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Depressor seletivo dos circuitos límbicos e corticais ativados em estados de ansiedade extrema.",
    "indicacoes": "Controlo sintomático de estados graves e incapacitantes de perturbação de pânico.",
    "alerta": "Sedação diurna marcada, diminuição dos reflexos motores (risco na condução) e amnésia anterógrada."
  },
  {
    "drug": "Alprazolam 1mg LM - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Formulação de libertação modificada desenhada para diminuir os picos de concentração e assegurar cobertura de 24h.",
    "indicacoes": "Perturbação de pânico refratária com necessidade de redução de flutuações inter-doses.",
    "alerta": "Não mastigar nem esmagar o comprimido para não destruir a matriz de libertação lenta."
  },
  {
    "drug": "Clonazepam 0,5 mg Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Benzodiazepina potente de longa semivida que estimula o tónus gabaérgico central.",
    "indicacoes": "Perturbação de pânico, fobia social e agitação psicomotora aguda associada a perturbações psiquiátricas.",
    "alerta": "Risco acrescido de quedas e fraturas no idoso devido a ataxia e sonolência residual; dependência severa."
  },
  {
    "drug": "Diazepam 10mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Benzodiazepina clássica de ação longa com metabolitos ativos (desmetildiazepam); propriedades ansiolíticas, miorrelaxantes e anticonvulsivantes.",
    "indicacoes": "Ansiedade grave, espasmos musculares dolorosos esqueléticos e desintoxicação alcoólica na prevenção do delirium tremens.",
    "alerta": "Acumulação biológica em tratamentos contínuos e insuficiência hepática; potenciação mútua perigosa com álcool e opióides."
  },
  {
    "drug": "Diazepam 10mg/2ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Ativação gabaérgica imediata no tronco cerebral e córtex promovendo supressão de atividade motora e psíquica anormal.",
    "indicacoes": "Estado de mal epiléptico, sedação pré-anestésica, agitação psicomotora extrema e tétano.",
    "alerta": "Administração IV direta muito lenta em veia calibrosa; risco imediato de depressão respiratória, apneia e tromboflebite local."
  },
  {
    "drug": "Diazepam 5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Modulador alostérico do recetor GABAA; hiperpolariza as membranas neuronais por influxo de iões cloreto.",
    "indicacoes": "Estados agudos de tensão nervosa, insónia associada a ansiedade e relaxamento do espasmo muscular.",
    "alerta": "A suspensão abrupta após uso crónico pode espoletar convulsões de privação e delirium."
  },
  {
    "drug": "Diazepam 5mg/2,5ml - enema",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Solução retal de absorção ultrarrápida através da mucosa com rápida passagem da barreira hematoencefálica.",
    "indicacoes": "Controlo domiciliário de emergência de convulsões febris e crises epilépticas prolongadas em crianças.",
    "alerta": "Manter monitorização da respiração do doente após administração pelo risco de depressão respiratória aguda."
  },
  {
    "drug": "Estazolam 2mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Triazolobenzodiazepina com perfil predominantemente hipnótico; encurta a latência do sono e diminui os despertares noturnos.",
    "indicacoes": "Tratamento de curta duração da insónia transitória ou crónica grave e incapacitante.",
    "alerta": "Efeito de 'hangover' (sedação residual matinal); limitar a utilização a 1-2 semanas para evitar habituação."
  },
  {
    "drug": "Flurazepam 15mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Hipnótico benzodiazepínico com metabolito ativo de semivida muito longa (desalquilflurazepam, 40-100h).",
    "indicacoes": "Tratamento a curto prazo da insónia caracterizada por despertares noturnos frequentes e precoces.",
    "alerta": "Forte acumulação tecidual que pode provocar descoordenação motora e sonolência marcada ao longo do dia seguinte."
  },
  {
    "drug": "Flurazepam 30mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Indutor do sono de ação prolongada através do aumento sustentado da afinidade do GABA pelo seu recetor.",
    "indicacoes": "Casos graves e refratários de insónia crónica em adultos jovens.",
    "alerta": "Contraindicado no idoso devido ao elevado risco de sedação prolongada, confusão noturna e traumatismo por queda."
  },
  {
    "drug": "Loflazepato de etilo 2mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Pró-fármaco benzodiazepínico clivado progressivamente no metabolito ativo descarboetoxiloflazepato de ação lenta e contínua.",
    "indicacoes": "Ansiedade generalizada, perturbações psicossomáticas e distúrbios de adaptação com componente ansioso.",
    "alerta": "O perfil farmacocinético lento reduz o efeito de euforia súbita, mas mantém potencial de dependência física cumulativa."
  },
  {
    "drug": "Lorazepam 1mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Benzodiazepina de potência elevada e ação intermédia sem metabolitos ativos (metabolizada diretamente por glucuronidação).",
    "indicacoes": "Ansiedade associada a estados depressivos, perturbações de ansiedade aguda e pré-medicação cirúrgica.",
    "alerta": "Benzodiazepina de eleição em idosos e doentes com disfunção hepática ligeira/moderada por não depender de oxidação pelo CYP450."
  },
  {
    "drug": "Lorazepam 2.5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Potente inibidor gabaérgico com acentuada atividade sedativa e ansiolítica central.",
    "indicacoes": "Crises de angústia aguda grave, estados de pânico e agitação psiquiátrica resistente.",
    "alerta": "Potencial amnésico significativo (amnésia anterógrada); descontinuação com desmame rigoroso para evitar abstinência."
  },
  {
    "drug": "Midazolam 15 mg/3 ml (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)",
    "mecanismo": "Benzodiazepina hidrossolúvel de início de ação ultrarrápido e semivida ultracurta com potente efeito amnésico e sedativo.",
    "indicacoes": "Sedação consciente pré-procedimentos endoscópicos/diagnósticos, indução anestésica e sedação em cuidados intensivos.",
    "alerta": "Depressão respiratória grave e apneia frequentes; ter sempre disponível o antagonista específico flumazenil e suporte ventilatório."
  },
  {
    "drug": "Valeriana 45mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Sedativos de origem vegetal",
    "mecanismo": "Extrato vegetal com ácidos valerénicos que modulam os recetores GABAA e inibem a recaptação do GABA a nível central.",
    "indicacoes": "Alívio da tensão nervosa ligeira e perturbações do sono de gravidade menor.",
    "alerta": "Efeito terapêutico gradual (necessita de tomas regulares ao longo de várias semanas para consolidação da resposta)."
  },
  {
    "drug": "Zolpidem 10mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Agonistas dos recetores GABA (Fármacos Z)",
    "mecanismo": "Imidazopiridina que atua como agonista seletivo da subunidade alfa-1 do complexo recetor GABAA; preserva a arquitetura do sono.",
    "indicacoes": "Tratamento de curto prazo da insónia de adormecimento no adulto.",
    "alerta": "Risco de sonambulismo e comportamentos complexos durante o sono (conduzir ou cozinhar a dormir sem memória do evento)."
  },
  {
    "drug": "Amissulprida 50mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antagonista seletivo dos recetores D2/D3 pré-sinápticos em doses baixas, aumentando a transmissão dopaminérgica frontal.",
    "indicacoes": "Tratamento dos sintomas negativos da esquizofrenia (embotamento afetivo, isolamento social e abulia).",
    "alerta": "Pode causar hiperprolactinemia marcada (amenorreia, galactorreia e ginecomastia) e prolongamento do intervalo QTc."
  },
  {
    "drug": "Ciamemazina 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Fenotiazina atípica com potente bloqueio dopaminérgico D2, serotoninérgico 5-HT2A e histaminérgico H1 central.",
    "indicacoes": "Estados de ansiedade grave resistente a outros tratamentos e agitação em episódios psicóticos agudos.",
    "alerta": "Forte efeito sedativo e hipotensão ortostática; risco de discinésia tardia e síndrome neuroléptica maligna."
  },
  {
    "drug": "Clorpromazina 25mg/5ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antipsicótico típico de baixa potência; bloqueador dos recetores dopaminérgicos D2, alfa-1 adrenérgicos e colinérgicos.",
    "indicacoes": "Agitação psicomotora aguda severa, episódios maníacos, soluços intratáveis e náuseas/vómitos refratários em cuidados paliativos.",
    "alerta": "Hipotensão ortostática grave imediata após injeção parenteral; manter o doente deitado em repouso por 30-60 min."
  },
  {
    "drug": "Clorpromazina 50mg/2ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Bloqueio dopaminérgico mesolímbico que atenua delírios e alucinações acompanhado de forte sedação geral.",
    "indicacoes": "Controlo de emergência de psicoses agudas e estados maníacos hipercinéticos.",
    "alerta": "Risco de arritmias ventriculares, retinopatia pigmentar com doses cumulativas elevadas e fotossensibilização cutânea."
  },
  {
    "drug": "Haloperidol 1 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Butirofenona com bloqueio potente e altamente seletivo dos recetores dopaminérgicos centrais D2.",
    "indicacoes": "Delirium no idoso ou doente internado, tiques motores na síndrome de Tourette e controlo de agitação ligeira.",
    "alerta": "Elevada propensão para efeitos adversos extrapiramidais (acatisia, parkinsonismo medicamentoso e distonia aguda)."
  },
  {
    "drug": "Haloperidol 2mg/ml - sol.oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Inibidor dopaminérgico D2 no sistema mesolímbico com rápida biodisponibilidade por gotas orais.",
    "indicacoes": "Controlo rápido de episódios psicóticos, alucinações na esquizofrenia e perturbações do comportamento em demências.",
    "alerta": "Titular gota a gota com rigor; contraindicado na doença de Parkinson e depressão grave do SNC."
  },
  {
    "drug": "Haloperidol 5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Bloqueador D2 clássico de primeira geração com acentuada eficácia anti-alucinatória e anti-delirante.",
    "indicacoes": "Esquizofrenia crónica ou aguda, mania bipolar e paranoia crónica.",
    "alerta": "Em uso prolongado pode induzir discinésia tardia irreversível nos músculos orofaciais e extremidades."
  },
  {
    "drug": "Haloperidol 5mg/ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antipsicótico de alta potência parenteral; antagoniza rapidamente a neurotransmissão dopaminérgica estriatal e límbica.",
    "indicacoes": "Urgência psiquiátrica em agitação psicomotora violenta e crises psicóticas agudas resistentes.",
    "alerta": "Monitorizar ECG pelo risco documentado de prolongamento de QTc e arritmia ventricular torsades de pointes por via IV."
  },
  {
    "drug": "Haloperidol dec. 100mg/ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Éster de depósito de haloperidol que liberta lentamente o princípio ativo a partir do tecido muscular ao longo de 4 semanas.",
    "indicacoes": "Terapêutica de manutenção na esquizofrenia crónica com problemas crónicos de adesão à medicação oral.",
    "alerta": "Administração estritamente por via intramuscular profunda na nádega; ajustar dose apenas a cada 4-6 semanas."
  },
  {
    "drug": "Haloperidol dec. 50mg/ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Formulação depot de longa ação para suporte sustentado da neurotransmissão antidopaminérgica.",
    "indicacoes": "Tratamento estável continuado da esquizofrenia em doentes estabilizados com doses orais mais baixas.",
    "alerta": "Vigiar rigidamente o aparecimento de sinais de síndrome neuroléptica maligna (hipertermia, rigidez muscular e CPK elevada)."
  },
  {
    "drug": "Levomepromazina 100 mg Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Fenotiazina sedativa com antagonismo nos recetores D2, 5-HT2A, H1 histaminérgicos e alfa-1 adrenérgicos.",
    "indicacoes": "Psicoses com componente de agitação ansiosa marcada, insónia rebelde em doentes psicóticos e dor neuropática terminal.",
    "alerta": "Hipotensão ortostática acentuada e forte retenção urinária ou obstipação por paralisia colinérgica."
  },
  {
    "drug": "Levomepromazina 25 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antipsicótico sedativo com propriedades analgésicas adjuvantes no sistema nervoso central.",
    "indicacoes": "Coadjuvante no tratamento de dor crónica refratária e ansiedade grave com insónia em psiquiatria.",
    "alerta": "Gera ganho de peso, sedação acentuada no dia seguinte e redução importante da pressão arterial."
  },
  {
    "drug": "Levomepromazina 25 mg/ml - amp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Ação depressora imediata nos sistemas ativadores reticulares do tronco encefálico.",
    "indicacoes": "Sedação paliativa em fim de vida, agitação delirante refratária e náuseas incoercíveis em doentes oncológicos.",
    "alerta": "Administração parenteral exclusivamente por via IM profunda ou perfusão SC/IV lenta sob monitorização de sinais vitais."
  },
  {
    "drug": "Olanzapina 10mg - comp orodisp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antipsicótico de segunda geração (atípico); antagonista multirrecetor D2, 5-HT2A, 5-HT2C, H1 e alfa-1.",
    "indicacoes": "Tratamento da esquizofrenia, episódios de mania moderada a grave e prevenção de recidivas na perturbação bipolar.",
    "alerta": "Elevado risco metabólico: ganho ponderal massivo, hiperglicemia de início rápido, dislipidemia e diabetes tipo 2."
  },
  {
    "drug": "Olanzapina 2.5mg - Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Modulação dual dopamina-serotonina; reduz sintomas psicóticos e estabiliza o humor com menor incidência de sintomas extrapiramidais.",
    "indicacoes": "Dose inicial para idosos ou manutenção em doentes bipolares e anorexia nervosa refratária.",
    "alerta": "Monitorizar perímetro abdominal, glicemia de jejum e perfil lipídico com periodicidade regular."
  },
  {
    "drug": "Olanzapina 5mg - comp orodisp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Formulação orodispersível de dissolução instantânea na boca que facilita a deglutição sem necessidade de água.",
    "indicacoes": "Esquizofrenia e perturbação bipolar em doentes não aderentes ou com recusa de deglutição de comprimidos tradicionais.",
    "alerta": "Forte sedação inicial com sonolência diurna; administrar preferencialmente ao deitar."
  },
  {
    "drug": "Quetiapina 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antipsicótico atípico com ligação transitória ao recetor D2 ('hit-and-run') e forte afinidade para 5-HT2A e H1.",
    "indicacoes": "Depressão bipolar, tratamento da esquizofrenia e mania bipolar.",
    "alerta": "Incidência praticamente nula de sintomas extrapiramidais, mas com risco substancial de sonolência, hipotensão e ganho de peso."
  },
  {
    "drug": "Quetiapina 200mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Bloqueia vias mesolímbicas hiperativas com rápida dissociação dos recetores D2 estriatais.",
    "indicacoes": "Fase aguda de episódios maníacos da perturbação bipolar e esquizofrenia.",
    "alerta": "O metabolito norquetiapina inibe o transportador de noradrenalina (NET), conferindo propriedades antidepressivas intrínsecas."
  },
  {
    "drug": "Quetiapina 25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Nesta dosagem baixa atua quase exclusivamente como potente anti-histamínico H1 e antagonista alfa-1 adrenérgico.",
    "indicacoes": "Frequentemente prescrita (off-label) para insónia grave e ansiedade no doente idoso ou com perturbações psiquiátricas.",
    "alerta": "Pode induzir hipotensão postural ortostática reflexa e desorientação noturna no idoso."
  },
  {
    "drug": "Risperidona 0,5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antagonista seletivo monoaminérgico com afinidade muito elevada para os recetores 5-HT2A serotoninérgicos e D2 dopaminérgicos.",
    "indicacoes": "Tratamento de curta duração (até 6 semanas) da agressividade persistente na demência de Alzheimer e autismo.",
    "alerta": "Aumento do risco de acidentes vasculares cerebrais (AVC) e mortalidade em doentes idosos com demência."
  },
  {
    "drug": "Risperidona 1mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Inibe os sintomas positivos através do bloqueio D2 e sintomas negativos pela via serotoninérgica 5-HT2A.",
    "indicacoes": "Esquizofrenia em fase inicial e episódios maníacos moderados a graves na perturbação bipolar.",
    "alerta": "Hiperprolactinemia muito acentuada mesmo em doses baixas; risco de amenorreia, infertilidade e ginecomastia."
  },
  {
    "drug": "Risperidona 2mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antipsicótico atípico com perfil dose-dependente: acima de 4-6 mg/dia comporta-se como um antipsicótico típico clássico.",
    "indicacoes": "Tratamento e manutenção da esquizofrenia e perturbação esquizoafetiva.",
    "alerta": "Em doses mais altas aumenta o risco de sintomas extrapiramidais, acatisia e discinésia tardia."
  },
  {
    "drug": "Tiapride 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Benzamida substituída que bloqueia preferencialmente os recetores dopaminérgicos D2 e D3 no sistema límbico com baixa toxicidade cortical.",
    "indicacoes": "Perturbações do comportamento em demências, coreia de Huntington e síndrome de abstinência alcoólica com agitação.",
    "alerta": "Ajustar dose na insuficiência renal (excreção renal primária); risco de sedação e hiperprolactinemia."
  },
  {
    "drug": "Tiapride 100mg/2ml -sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos",
    "mecanismo": "Antidopaminérgico injetável que controla hipercinésias anormais e estados de agitação psicomotora.",
    "indicacoes": "Desintoxicação alcoólica aguda com delirium tremens iminente e discinésias graves.",
    "alerta": "Vigiar o intervalo QT em eletrocardiograma se associado a outros fármacos pro-arritmogénicos."
  },
  {
    "drug": "Amitriptilina 10mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores Tricíclicos (ADT)",
    "mecanismo": "Inibe a recaptação neuronal de serotonina e noradrenalina; bloqueia canais de sódio e recetores colinérgicos, histamínicos e alfa-1.",
    "indicacoes": "Tratamento da dor neuropática crónica, profilaxia da enxaqueca e cefaleia de tensão em doses baixas noturnas.",
    "alerta": "Efeitos anticolinérgicos marcados (boca seca, retenção urinária e obstipação); sedação acentuada."
  },
  {
    "drug": "Amitriptilina 25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores Tricíclicos (ADT)",
    "mecanismo": "Aumento sustentado dos níveis de monoaminas na fenda sináptica por bloqueio dos transportadores SERT e NET.",
    "indicacoes": "Depressão major grave (especialmente com insónia ou ansiedade) e nevralgia pós-herpética.",
    "alerta": "Extremamente cardiotóxica em sobredosagem (alargamento do QRS, arritmias ventriculares fatais e paragem cardíaca); contraindicada pós-enfarte recente."
  },
  {
    "drug": "Bupropiom 150 mg Comp LM",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (Inibidores da recaptação de NA e Dopamina)",
    "mecanismo": "Inibidor seletivo da recaptação de noradrenalina e dopamina (NDRI); sem efeitos diretos na via serotoninérgica.",
    "indicacoes": "Perturbação depressiva major e coadjuvante na cessação tabágica para alívio dos sintomas de privação de nicotina.",
    "alerta": "Diminui o limiar convulsivo (risco de crises epilépticas); não causa disfunção sexual nem ganho de peso; contraindicado na bulimia/anorexia."
  },
  {
    "drug": "Bupropiom 300 mg Comp LM",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (Inibidores da recaptação de NA e Dopamina)",
    "mecanismo": "Aumenta o tónus dopaminérgico e noradrenérgico mesocortical, melhorando anedonia, energia e concentração.",
    "indicacoes": "Depressão major resistente ou em doentes com queixas de fadiga profunda e apatia.",
    "alerta": "Pode agravar insónia e ansiedade se tomado ao final do dia; monitorizar pressão arterial por efeito noradrenérgico."
  },
  {
    "drug": "Fluoxetina 20mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)",
    "mecanismo": "Inibidor seletivo da recaptação da serotonina (ISRS) com semivida plasmática muito longa (metabolito norfluoxetina atinge 7-14 dias).",
    "indicacoes": "Episódios depressivos major, perturbação obsessivo-compulsiva (POC) e bulimia nervosa.",
    "alerta": "Inibidor potente das enzimas CYP2D6 e CYP2C19; perfil ativador inicial que pode agravar agitação e insónia nas primeiras semanas."
  },
  {
    "drug": "Lítio 400 mg (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Estabilizadores do humor",
    "mecanismo": "Modifica o transporte de iões de sódio nos neurónios e inibe a via dos segundos mensageiros do inositol monofosfatase (IPase) e GSK-3.",
    "indicacoes": "Tratamento e profilaxia dos episódios de mania e depressão na perturbação bipolar; comprovada redução do risco de suicídio.",
    "alerta": "Janela terapêutica estreita (litiemia obrigatória entre 0,6-1,0 mEq/L); risco de nefrotoxicidade crónica (diabetes insipidus nefrogénica) e hipotiroidismo."
  },
  {
    "drug": "Mirtazapina 15mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (NaSSA)",
    "mecanismo": "Antagonista alfa-2 auto e heterorrecetores centrais (aumenta libertação de NA e 5-HT); antagonista dos recetores 5-HT2, 5-HT3 e potente anti-H1.",
    "indicacoes": "Episódios de depressão major, particularmente com perda de peso grave e insónia de manutenção.",
    "alerta": "Provoca aumento acentuado do apetite, ganho ponderal substancial e sonolência marcada (tomar obrigatoriamente à noite)."
  },
  {
    "drug": "Mirtazapina 30mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (NaSSA)",
    "mecanismo": "Em doses mais elevadas prevalece o tónus noradrenérgico sobre o efeito anti-histamínico, resultando em menor efeito sedativo.",
    "indicacoes": "Dose terapêutica padrão para o tratamento antidepressivo da depressão major moderada a grave.",
    "alerta": "Risco raro de agranulocitose e neutropenia grave (investigar imediatamente quadros de febre inexplicada e dor de garganta)."
  },
  {
    "drug": "Paroxetina 20mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)",
    "mecanismo": "O mais potente e seletivo inibidor da recaptação de serotonina entre os ISRS com ligeira atividade anticolinérgica.",
    "indicacoes": "Depressão major, perturbação de pânico, perturbação de ansiedade social, POC e stress pós-traumático (PTSD).",
    "alerta": "Pior perfil de síndrome de descontinuação entre os ISRS (tonturas, choques elétricos sensoriais e disforia); disfunção sexual frequente."
  },
  {
    "drug": "Sertralina 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)",
    "mecanismo": "Inibe seletivamente o transportador SERT com ligeira inibição adicional da recaptação de dopamina em doses elevadas.",
    "indicacoes": "Perturbação depressiva major grave, perturbação obsessivo-compulsiva e perturbação de pânico refratária.",
    "alerta": "Segurança cardiovascular comprovada no pós-enfarte do miocárdio; queixas iniciais de náuseas, diarreia e tremores transitórios."
  },
  {
    "drug": "Sertralina 50mg-comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)",
    "mecanismo": "Bloqueia a recaptação de serotonina potenciando a transmissão serotoninérgica no córtex e sistema límbico.",
    "indicacoes": "Dose inicial terapêutica para depressão, perturbação de stress pós-traumático e fobia social.",
    "alerta": "Risco de síndrome serotoninérgica quando combinada com triptanos, IMAOs, tramadol ou hipericão."
  },
  {
    "drug": "Trazodona 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)",
    "mecanismo": "Antagonista dos recetores 5-HT2A e inibidor da recaptação de serotonina; bloqueia recetores H1 e alfa-1 adrenérgicos.",
    "indicacoes": "Episódios depressivos major associados a ansiedade pronunciada e insónia grave.",
    "alerta": "Efeito adverso urológico raro mas emergente: priapismo (ereção dolorosa prolongada sem estímulo que exige intervenção médica urgente)."
  },
  {
    "drug": "Trazodona 150mg (não AC) - comprimido",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)",
    "mecanismo": "Dupla ação serotoninérgica que restabelece os padrões de sono profundo (ondas lentas) sem suprimir o sono REM.",
    "indicacoes": "Depressão clínica moderada a grave com perturbações acentuadas do ritmo circadiano.",
    "alerta": "Forte hipotensão ortostática inicial mediada pelo bloqueio alfa-1 adrenérgico; administrar estritamente ao deitar."
  },
  {
    "drug": "Trazodona 150mg AC-comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)",
    "mecanismo": "Formulação de libertação controlada (Ação Controlada) que mantém níveis plasmáticos terapêuticos mais uniformes.",
    "indicacoes": "Depressão major no adulto com melhor tolerabilidade diurna e menor sonolência residual matinal.",
    "alerta": "Os comprimidos podem ser divididos nas ranhuras, mas nunca devem ser esmagados ou mastigados."
  },
  {
    "drug": "Trazodona AC 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)",
    "mecanismo": "Libertação gradual de trazodona, otimizando a resposta ansiolítica e antidepressiva sem picos de sedação súbita.",
    "indicacoes": "Quadros mistos de depressão e ansiedade em ambulatório.",
    "alerta": "Evitar consumo concomitante de bebidas alcoólicas pelo risco de depressão respiratória e sedação profunda."
  },
  {
    "drug": "Trazodona AC 50mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)",
    "mecanismo": "Dose moduladora inicial com ação predominantemente hipnótica e ansiolítica através do bloqueio 5-HT2A e H1.",
    "indicacoes": "Titulação progressiva ou tratamento adjuvante da insónia refratária em doentes depressivos.",
    "alerta": "Vigiar arritmias em doentes com doença cardíaca pré-existente (risco de prolongamento do intervalo QT)."
  },
  {
    "drug": "Venlafaxina 150mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRSN)",
    "mecanismo": "Inibidor da recaptação de serotonina e noradrenalina (SNRI); inibe o SERT em doses baixas e o NET a partir de 150 mg/dia.",
    "indicacoes": "Depressão major grave e resistente, perturbação de ansiedade generalizada e fobia social.",
    "alerta": "Pode causar aumento dose-dependente da pressão arterial sistólica e diastólica (monitorizar a PA regularmente)."
  },
  {
    "drug": "Venlafaxina 37.5mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRSN)",
    "mecanismo": "Fase de indução posológica com ação essencialmente serotoninérgica nos transportadores pré-sinápticos.",
    "indicacoes": "Início de tratamento na depressão e ansiedade para melhorar tolerabilidade gástrica e prevenir náuseas.",
    "alerta": "Não descontinuar de forma abrupta; a síndrome de privação cursa com tonturas graves, náuseas e cefaleias."
  },
  {
    "drug": "Venlafaxina 75mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRSN)",
    "mecanismo": "Inibição potente do SERT com início de recrutamento do transportador de noradrenalina.",
    "indicacoes": "Dose terapêutica padrão inicial para episódios depressivos major e perturbação de pânico.",
    "alerta": "Risco de náuseas intensas nas primeiras semanas (tomar sempre acompanhada por alimentos); suores noturnos frequentes."
  },
  {
    "drug": "Tramadol 100 mg/2ml (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Narcóticos / Opióides",
    "subsubgrupo": "Opióides fracos",
    "mecanismo": "Agonista dos recetores opióides mu e inibidor da recaptação de noradrenalina e serotonina nas vias descendentes inibitórias da dor.",
    "indicacoes": "Tratamento da dor aguda ou crónica de intensidade moderada a grave (degrau 2 da OMS).",
    "alerta": "Baixa o limiar convulsivo (risco de convulsões); risco de síndrome serotoninérgica se associado a antidepressivos."
  },
  {
    "drug": "Tramadol 50mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Narcóticos / Opióides",
    "subsubgrupo": "Opióides fracos",
    "mecanismo": "Analgésico de ação central com efeito dual opióide e monoaminérgico sinérgico.",
    "indicacoes": "Dor pós-operatória, dor musculoesquelética aguda severa e dor oncológica em fase intermédia.",
    "alerta": "Causa náuseas, vómitos, tonturas, sonolência e obstipação; potencial de abuso e dependência física com o uso continuado."
  },
  {
    "drug": "Acetilsalicilato de lisina 1800mg/5ml-sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Salicilatos injetáveis",
    "mecanismo": "Sal solúvel do ácido acetilsalicílico; inibe irreversivelmente as ciclo-oxigenases 1 e 2, cessando a síntese de prostaglandinas e tromboxano A2.",
    "indicacoes": "Tratamento de emergência de dor aguda moderada a grave e estados febris graves quando a via oral é inviável.",
    "alerta": "Contraindicado em úlcera péptica ativa, diátese hemorrágica, asma induzida por AINEs e em crianças pelo risco de Síndrome de Reye."
  },
  {
    "drug": "Clonixina 300ng-cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Clonixinato de lisina",
    "mecanismo": "Analgésico e anti-inflamatório derivado do ácido antranílico com ação inibidora reversível da síntese de prostaglandinas.",
    "indicacoes": "Cefaleias, mialgias, odontalgias, dismenorreia e dor pós-traumática ou pós-cirúrgica ligeira a moderada.",
    "alerta": "Vigiar tolerabilidade gástrica; precaução em doentes com disfunção renal, hipertensão arterial ou história de úlcera péptica."
  },
  {
    "drug": "Paracetamol 125mg-supp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)",
    "mecanismo": "Inibe a síntese de prostaglandinas a nível do sistema nervoso central e atua no centro termorregulador hipotalâmico.",
    "indicacoes": "Febre e dor ligeira a moderada em lactentes e crianças pequenas com vómitos ou recusa oral.",
    "alerta": "Absorção retal errática; respeitar rigorosamente o intervalo mínimo de 6 a 8 horas entre administrações."
  },
  {
    "drug": "Paracetamol 200mg/5ml - soi.oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)",
    "mecanismo": "Ação antipirética e analgésica central por interferência nos canais TRPA1 e inibição da COX central.",
    "indicacoes": "Controlo sintomático de febre e dor em pediatria (primeira linha em infeções comuns da infância).",
    "alerta": "Doseamento estritamente dependente do peso da criança (10-15 mg/kg/toma até 4 vezes ao dia); risco de hepatotoxicidade por sobredosagem."
  },
  {
    "drug": "Paracetamol 250mg - sup",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)",
    "mecanismo": "Reduz o tónus de prostaglandinas no centro térmico hipotalâmico, promovendo vasodilatação cutânea e sudação.",
    "indicacoes": "Febre e dor ligeira a moderada em crianças em idade pré-escolar.",
    "alerta": "Não ultrapassar a dose máxima diária cumulativa recomendada para o peso corporal."
  },
  {
    "drug": "Paracetamol 500mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)",
    "mecanismo": "Analgésico e antipirético de primeira linha; desprovido de atividade anti-inflamatória periférica significativa.",
    "indicacoes": "Cefaleias, odontalgias, febre, lombalgias e artroses (dor de intensidade ligeira a moderada).",
    "alerta": "Dose máxima no adulto de 4g/dia (1g por toma); a sobredosagem gera o metabolito tóxico NAPQI causando necrose hepática fulminante."
  },
  {
    "drug": "Ergotamina + paracetamol+beladona+cafeína (Migretil)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antienxaquicosos",
    "subsubgrupo": "Alcalóides da cravagem do centeio associados",
    "mecanismo": "A ergotamina é agonista parcial 5-HT1B/1D vasoconstritor craniano; a cafeína aumenta a sua absorção e a beladona é antiemética.",
    "indicacoes": "Crises agudas de enxaqueca com ou sem aura que não respondem aos analgésicos comuns.",
    "alerta": "Risco de ergotismo (vasoconstrição periférica severa e isquemia das extremidades); contraindicado na doença coronária, HTA e gravidez."
  },
  {
    "drug": "Betahistina 16mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Outros (Sistema Nervoso Central)",
    "subsubgrupo": "Antivertiginosos",
    "mecanismo": "Agonista fraco dos recetores histaminérgicos H1 e antagonista potente dos recetores H3 pré-sinápticos na microcirculação labiríntica.",
    "indicacoes": "Tratamento do Síndrome de Menière (vertigem, acufenos, perda auditiva) e vertigem vestibular periférica.",
    "alerta": "Cautela extrema em doentes com asma brônquica ou antecedentes de úlcera péptica ativa."
  },
  {
    "drug": "Doxilamina+dicloverina+piridoxina 10+10+10mg (Nausefe)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Outros (Sistema Nervoso Central)",
    "subsubgrupo": "Antieméticos do SNC",
    "mecanismo": "Combinação sinérgica de anti-histamínico H1 sedativo, anticolinérgico antiespasmódico e coenzima metabólica B6 no centro do vómito.",
    "indicacoes": "Prevenção e alívio de náuseas e vómitos durante a gravidez (enjoo matinal) sob orientação clínica.",
    "alerta": "Induz sonolência diurna pronunciada e efeitos anticolinérgicos (secura das mucosas e perturbações visuais transitórias)."
  },
  {
    "drug": "Buprenorfina 2mg - comp (SL)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Agonistas parciais dos recetores opióides",
    "mecanismo": "Agonista parcial dos recetores opióides mu e antagonista dos recetores kappa com dissociação muito lenta do recetor.",
    "indicacoes": "Terapêutica de substituição da dependência de opióides e alívio da dor crónica grave.",
    "alerta": "Administração obrigatoriamente sublingual (inativada se deglutida); pode precipitar síndrome de abstinência aguda em dependentes de opióides puros."
  },
  {
    "drug": "Buprenorfina 8mg - comp (SL)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Agonistas parciais dos recetores opióides",
    "mecanismo": "Efeito de teto para a depressão respiratória conferido pelo agonismo parcial, mantendo elevada afinidade de bloqueio.",
    "indicacoes": "Manutenção em programas de tratamento de toxicodependência por opiáceos.",
    "alerta": "Risco de colapso respiratório fatal se associada a benzodiazepinas ou álcool por via parentérica ilícita."
  },
  {
    "drug": "Metadona 10mg/ml - solução oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Opióides agonistas puros de longa duração",
    "mecanismo": "Agonista pleno dos recetores opióides mu e antagonista dos recetores NMDA com semivida plasmática longa (24-36h).",
    "indicacoes": "Programas de substituição na dependência grave de heroína e dor oncológica refratária de difícil controlo.",
    "alerta": "Elevada variabilidade farmacocinética com acumulação tecidual que pode causar sobredosagem fatal tardia; prolonga o intervalo QT."
  },
  {
    "drug": "Morfina 10mg LP-comp (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Alcalóides naturais do ópio",
    "mecanismo": "Agonista puro dos recetores opióides mu espinais e supraespinais que inibe a transmissão nociceptiva ascendente.",
    "indicacoes": "Tratamento da dor oncológica crónica intensa ou dor crónica que não responde aos degraus inferiores da OMS.",
    "alerta": "Obstipação universal e intolerável (prescrever laxante profilático obrigatório); depressão respiratória revertida por naloxona."
  },
  {
    "drug": "Mononitrato de isossorbida 60 mg - comp LP",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados",
    "mecanismo": "Liberta óxido nítrico endotelial, ativando a guanilato ciclase e aumentando o cGMP; promove venodilatação predominante com redução da pré-carga.",
    "indicacoes": "Profilaxia a longo prazo e manutenção da angina de peito estável em monoterapia ou associação.",
    "alerta": "Contraindicação absoluta com inibidores da fosfodiesterase-5 (sildenafil/tadalafil) pelo risco de choque hipotensivo fatal; requer intervalo livre diário de 10-12h para evitar tolerância."
  },
  {
    "drug": "Mononitrato de isossorbido 20mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados",
    "mecanismo": "Metabolito ativo do dinitrato de isossorbido que diminui o consumo miocárdico de oxigénio por redução do retorno venoso.",
    "indicacoes": "Prevenção secundária de crises de angina de peito e adjuvante na insuficiência cardíaca crónica.",
    "alerta": "Cefaleia pulsátil frequente no início do tratamento; hipotensão ortostática com tonturas reflexas."
  },
  {
    "drug": "Nitroglicerina 10mg/24h - Sist transd",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados",
    "mecanismo": "Sistema transdérmico que liberta trinitrato de glicerilo a velocidade constante na circulação sistémica.",
    "indicacoes": "Profilaxia da angina de peito em doentes com patologia coronária isquémica crónica.",
    "alerta": "O penso deve ser retirado durante a noite (janela de 8 a 12 horas sem penso) para evitar taquifilaxia/tolerância aos nitratos."
  },
  {
    "drug": "Nitroglicerina 5mg/24h - Sist transd",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados",
    "mecanismo": "Vasodilatador coronário e venoso com libertação percutânea contínua de óxido nítrico.",
    "indicacoes": "Manutenção antianginosa basal no doente com cardiopatia isquémica estável.",
    "alerta": "Alternar o local de aplicação diariamente na pele limpa e sem pelos para evitar dermatite de contacto e tolerância."
  },
  {
    "drug": "Pentoxifilina 400mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Vasodilatadores periféricos",
    "mecanismo": "Derivado xantínico hemorreológico; aumenta a deformabilidade dos eritrócitos, inibe a fosfodiesterase e reduz a viscosidade sanguínea.",
    "indicacoes": "Claudicação intermitente na doença arterial obstrutiva periférica crónica e distúrbios da microcirculação.",
    "alerta": "Tomar após as refeições para atenuar náuseas e pirose; monitorizar a coagulação em doentes sob anticoagulantes."
  },
  {
    "drug": "Diosmina 450mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Vasoprotetores",
    "subsubgrupo": "Bioflavonóides venotrópicos",
    "mecanismo": "Flavonoide purificado que prolonga a ação vasoconstritora da noradrenalina na parede venosa e melhora a drenagem linfática.",
    "indicacoes": "Insuficiência venosa crónica dos membros inferiores (pernas pesadas, dor, edema) e crise hemorroidária.",
    "alerta": "Tratamento adjuvante sintomático que não substitui medidas posturais, meia elástica de compressão e controlo de peso."
  },
  {
    "drug": "Espironolactona 100mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos poupadores de potássio",
    "mecanismo": "Antagonista competitivo da aldosterona no túbulo contornado distal e coletor; aumenta natriurese poupando iões potássio e hidrogénio.",
    "indicacoes": "Hiperaldosteronismo primário e secundário, ascite cirrótica com edema e hipertensão arterial resistente.",
    "alerta": "Risco de hipercaliemia grave potencialmente fatal; efeitos antiandrogénicos com ginecomastia dolorosa em homens e alterações menstruais."
  },
  {
    "drug": "Espironolactona 25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos poupadores de potássio",
    "mecanismo": "Bloqueador dos recetores mineralocorticóides com efeitos benéficos de remodelagem miocárdica e redução da fibrose cardíaca.",
    "indicacoes": "Insuficiência cardíaca com fração de ejeção reduzida (IC-FEr) para diminuir mortalidade e hospitalização.",
    "alerta": "Monitorizar rigorosamente o potássio sérico e creatinina, especialmente se associada a IECAs, ARAs ou sacubitril/valsartam."
  },
  {
    "drug": "Furosemida 20mg/2ml - sol. Injectável (EF....)",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos da ansa",
    "mecanismo": "Bloqueia o cotransportador Na+/K+/2Cl- no ramo ascendente espesso da ansa de Henle com efeito diurético intenso e imediato.",
    "indicacoes": "Edema pulmonar agudo cardiogénico, emergências hipertensivas, oligúria na insuficiência renal aguda e anasarca.",
    "alerta": "Injeção IV rápida pode causar ototoxicidade irreversível (zumbidos e surdez); risco de hipocaliemia, hipomagnesemia e desidratação súbita."
  },
  {
    "drug": "Furosemida 40mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos da ansa",
    "mecanismo": "Diurético de ansa de elevada eficácia que promove excreção massiva de cloreto de sódio e água.",
    "indicacoes": "Controlo de sobrecarga de fluidos na insuficiência cardíaca congestiva, cirrose hepática e síndrome nefrótica.",
    "alerta": "Exige controlo analítico frequente de eletrólitos (risco crítico de hipocaliemia arritmogénica); pode precipitar crises de gota por hiperuricemia."
  },
  {
    "drug": "Indapamida 2.5mg -",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos tiazídicos e afins",
    "mecanismo": "Diurético sulfonamídico afim dos tiazidas que inibe o cotransporte de Na+/Cl- no túbulo distal e tem efeito vasodilatador arteriolar direto.",
    "indicacoes": "Hipertensão arterial primária essencial em monoterapia ou em esquemas associados.",
    "alerta": "Metabolicamente mais neutro que a hidroclorotiazida, mas requer monitorização periódica de hipocaliemia e hiponatremia em idosos."
  },
  {
    "drug": "Captopril 25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Inibidores da ECA",
    "mecanismo": "Inibidor da enzima de conversão da angiotensina de ação rápida e semivida curta; diminui a síntese de angiotensina II e a degradação de bradicinina.",
    "indicacoes": "Hipertensão arterial (incluindo urgências), insuficiência cardíaca e pós-enfarte agudo do miocárdio.",
    "alerta": "Tomar 1h antes das refeições (alimentos reduzem a absorção); tosse seca persistente e risco de angioedema de vias aéreas."
  },
  {
    "drug": "Lisinopril 20mg-comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Inibidores da ECA",
    "mecanismo": "IECA hidrossolúvel de toma única diária; promove dilatação arteriolar e venosa com redução da pós-carga e pré-carga cardíaca.",
    "indicacoes": "Hipertensão arterial essencial, insuficiência cardíaca sintomática e nefropatia diabética em doentes com DM2.",
    "alerta": "Contraindicado de forma absoluta na gravidez (teratogénese grave) e na estenose bilateral da artéria renal."
  },
  {
    "drug": "Lisinopril 5mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Inibidores da ECA",
    "mecanismo": "Suprime o eixo renina-angiotensina-aldosterona sistémico e tecidual renal/cardíaco.",
    "indicacoes": "Dose de iniciação na insuficiência cardíaca, hipertensão em doentes idosos ou sob terapêutica diurética prévia.",
    "alerta": "Risco de hipotensão da primeira dose; monitorizar a função renal e o potássio sérico antes e nas semanas após o início."
  },
  {
    "drug": "Losartam 50mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Antagonistas dos recetores da angiotensina II (ARA II)",
    "mecanismo": "Bloqueador competitivo específico do recetor AT1 da angiotensina II, impedindo a vasoconstrição e retenção hidrossalina.",
    "indicacoes": "Hipertensão arterial, proteção renal na diabetes tipo 2 com proteinúria e alternativa de eleição em doentes com tosse por IECAs.",
    "alerta": "Risco de hipercaliemia e deterioração aguda da função renal; contraindicado no 2º e 3º trimestres de gestação."
  },
  {
    "drug": "Amlodipina 5mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Antagonistas do cálcio (Di-hidropiridinas)",
    "mecanismo": "Bloqueia os canais de cálcio lentos tipo L nas células musculares lisas vasculares arteriais, promovendo vasodilatação periférica sustentada.",
    "indicacoes": "Hipertensão arterial, angina de peito estável crónica e angina vasoespástica de Prinzmetal.",
    "alerta": "Efeito secundário muito comum: edema maleolar periférico dos membros inferiores por vasodilatação pré-capilar (não responsivo a diuréticos)."
  },
  {
    "drug": "Bisoprolol 2,5mg - Comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores cardioseletivos",
    "mecanismo": "Antagonista altamente seletivo dos recetores beta-1 adrenérgicos; reduz o consumo miocárdico de oxigénio, a frequência cardíaca e a renina.",
    "indicacoes": "Tratamento de primeira linha da insuficiência cardíaca crónica estável com fração de ejeção reduzida.",
    "alerta": "Titular de acordo com esquema rigoroso; monitorizar bradicardia sintomática e descompensação hemodinâmica aguda inicial."
  },
  {
    "drug": "Bisoprolol 5mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores cardioseletivos",
    "mecanismo": "Betabloqueador beta-1 com semivida de eliminação de 10-12 horas, garantindo proteção cardiovascular uniforme de 24 horas.",
    "indicacoes": "Hipertensão arterial essencial, cardiopatia isquémica crónica e controlo de frequência na fibrilhação auricular.",
    "alerta": "Não interromper abruptamente (risco de efeito rebound com enfarte ou arritmias); contraindicado em BAV de 2º/3º grau e asma grave."
  },
  {
    "drug": "Carvedilol 25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Alfa e Betabloqueadores",
    "mecanismo": "Bloqueador não seletivo dos recetores beta-1, beta-2 e bloqueador seletivo alfa-1 com propriedades antioxidantes intrínsecas.",
    "indicacoes": "Insuficiência cardíaca com disfunção sistólica, disfunção ventricular pós-enfarte e hipertensão arterial.",
    "alerta": "A vasodilatação alfa-1 inicial pode provocar tonturas e hipotensão postural ortostática; administrar sempre acompanhado por alimentos."
  },
  {
    "drug": "Carvedilol 6,25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Alfa e Betabloqueadores",
    "mecanismo": "Reduz as resistências vasculares periféricas através do bloqueio alfa-1 e protege o miocárdio da hiperatividade simpática pelos recetores beta.",
    "indicacoes": "Início da titulação posológica na insuficiência cardíaca congestiva crónica sintomática.",
    "alerta": "Contraindicado em doentes com DPOC espástica grave, asma brônquica ou bradicardia sinusal inferior a 50 bpm."
  },
  {
    "drug": "Propranolol 10mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores não seletivos",
    "mecanismo": "Antagonista competitivo puro dos recetores beta-1 e beta-2 sem atividade simpaticomimética intrínseca e com elevada lipofilia cerebral.",
    "indicacoes": "Tremor essencial benigno, ansiedade de desempenho (taquicardia de palco), profilaxia da enxaqueca e hipertensão portal.",
    "alerta": "Pode induzir broncoespasmo severo em asmáticos (bloqueio beta-2 brônquico) e mascarar sinais hipoglicémicos no diabético (exceto sudação)."
  },
  {
    "drug": "Propranolol 40mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores não seletivos",
    "mecanismo": "Ação antiarrítmica classe II e redução da pressão venosa portal por vasoconstrição esplâncnica e menor débito cardíaco.",
    "indicacoes": "Profilaxia de hemorragia por varizes esofágicas na cirrose, arritmias supraventriculares e tirotoxicose.",
    "alerta": "A suspensão abrupta precipita angina e hipertensão grave de ricochete; pode induzir extremidades frias e fenómeno de Raynaud."
  },
  {
    "drug": "Atorvastatina 10mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Inibidor competitivo da HMG-CoA redutase; acelera a depuração plasmática do colesterol LDL pelo aumento dos recetores hepáticos de LDL.",
    "indicacoes": "Hipercolesterolemia primária e prevenção primária de eventos cardiovasculares em doentes com risco moderado a elevado.",
    "alerta": "Vigiar sintomas musculares dolorosos (mialgias, miosite); evitar consumo de grandes quantidades de sumo de toranja."
  },
  {
    "drug": "Atorvastatina 20mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Estatina de elevada intensidade e longa semivida capaz de induzir reduções acentuadas no colesterol LDL e triglicéridos.",
    "indicacoes": "Prevenção secundária após enfarte agudo do miocárdio, AVC isquémico ou síndrome coronária aguda.",
    "alerta": "Risco raro de rabdomiólise com elevação extrema de creatina quinase (CPK) e insuficiência renal aguda."
  },
  {
    "drug": "Ezetimiba 10 mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Inibidores da absorção do colesterol",
    "mecanismo": "Inibe seletivamente o transportador de esteróis Niemann-Pick C1-Like 1 (NPC1L1) na bordadura em escova do epitélio do intestino delgado.",
    "indicacoes": "Hipercolesterolemia em associação com estatinas quando estas não atingem o alvo ou em monoterapia se houver intolerância a estatinas.",
    "alerta": "Excelente perfil de segurança; quando combinada com estatinas exige monitorização de rotina das transaminases hepáticas."
  },
  {
    "drug": "Fenofibrato 145 mg Comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Fibratos",
    "mecanismo": "Agonista dos recetores nucleares PPAR-alfa; ativa a lipoproteína lipase endotelial promovendo clearance substancial de triglicéridos.",
    "indicacoes": "Hipertrigliceridemia grave (> 500 mg/dL) com risco de pancreatite aguda e dislipidemia aterogénica mista.",
    "alerta": "Aumenta ligeiramente a creatinina sérica reversível; risco potencial de litíase biliar e miopatia quando associado a estatinas."
  },
  {
    "drug": "Fenofibrato 267 mg Comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Fibratos",
    "mecanismo": "Formulação micronizada de fibrato que reduz triglicéridos e VLDL enquanto induz subida das lipoproteínas HDL protetoras.",
    "indicacoes": "Hiperlipidemia mista grave não responsiva a medidas dietéticas isoladas.",
    "alerta": "Contraindicado em insuficiência renal crónica grave e disfunção vesicular ou hepática."
  },
  {
    "drug": "Gemfibrozil 600mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Fibratos",
    "mecanismo": "Regula a transcrição genética do metabolismo lipídico através da ativação do PPAR-alfa nos hepatócitos.",
    "indicacoes": "Hipertrigliceridemia isolada grave com risco iminente de pancreatite aguda.",
    "alerta": "CONTRAINDICADO ABSOLUTAMENTE em associação com estatinas (bloqueia a glucuronidação das estatinas multiplicando o risco de rabdomiólise fatal)."
  },
  {
    "drug": "Pravastatina 20 mg (EF)",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Estatina hidrossolúvel que inibe a HMG-CoA redutase sem depender do metabolismo hepático pelo citocromo CYP3A4.",
    "indicacoes": "Hipercolesterolemia primária em doentes polimedicados ou infetados por VIH sob regimes antirretrovirais.",
    "alerta": "Apresenta menor taxa de interações farmacológicas com outros medicamentos e menor penetração no músculo periférico."
  },
  {
    "drug": "Pravastatina 40 mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Reduz os níveis intracelulares de colesterol induzindo superexpressão de recetores para captação de partículas aterogénicas.",
    "indicacoes": "Prevenção primária e secundária de doença aterosclerótica cardiovascular em doentes de risco.",
    "alerta": "Monitorizar enzimas de necrose celular hepática (ALT/AST) antes do tratamento e se surgirem sintomas de fadiga ou icterícia."
  },
  {
    "drug": "Rosuvastatina 10 mg (EF)",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Estatina de última geração de alta eficácia com elevada afinidade catalítica para a enzima HMG-CoA redutase.",
    "indicacoes": "Hipercolesterolemia primária e prevenção de eventos cardiovasculares maiores em doentes com metas rigorosas de c-LDL.",
    "alerta": "Pode induzir proteinúria tubular transitória em doses muito elevadas; ajustar dose inicial em doentes de ascendência asiática."
  },
  {
    "drug": "Sinvastatina 10mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Pró-fármaco lactónico lipofílico hidrolisado a beta-hidroxiácido ativo que bloqueia a síntese endógena de colesterol.",
    "indicacoes": "Controlo da hipercolesterolemia e aterosclerose em doentes com dislipidemia ligeira a moderada.",
    "alerta": "Metabolizada pelo CYP3A4; não associar com macrólidos, antifúngicos azóis ou ciclosporina pelo risco de toxicidade muscular."
  },
  {
    "drug": "Sinvastatina 20mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)",
    "mecanismo": "Estatina clássica que reduz significativamente o colesterol total, LDL e apolipoproteína B.",
    "indicacoes": "Prevenção secundária de enfarte do miocárdio e acidentes vasculares cerebrais isquémicos.",
    "alerta": "Deve ser administrada preferencialmente à noite (o pico da síntese endógena hepática de colesterol ocorre no período noturno)."
  },
  {
    "drug": "Ácido fólico 5mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Ácido fólico e derivados",
    "mecanismo": "Coenzima essencial transferidora de unidades de carbono na síntese de purinas, pirimidinas e na eritropoiese normal.",
    "indicacoes": "Tratamento de anemias megaloblásticas por deficiência de folato e prevenção de defeitos do tubo neural na gravidez.",
    "alerta": "O ácido fólico nunca deve ser administrado isoladamente sem excluir défice de vitamina B12, pois corrige a anemia mas mascara a degenerescência da medula espinal."
  },
  {
    "drug": "Cianocobalamina 1 mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Vitamina B12",
    "mecanismo": "Coenzima na síntese de metionina e mielina; essencial para a maturação eritroblástica e manutenção neurológica.",
    "indicacoes": "Tratamento da carência nutricional de vitamina B12 (especialmente em dietas estritamente vegetarianas/veganas).",
    "alerta": "A absorção oral por difusão passiva requer doses elevadas em doentes sem fator intrínseco gástrico funcional."
  },
  {
    "drug": "Cianocobalamina 1 mg/1 ml Sol inj Fr 1 ml IM",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Vitamina B12",
    "mecanismo": "Reposição parenteral imediata de cobalamina, contornando a necessidade de fator intrínseco e absorção ileal.",
    "indicacoes": "Anemia perniciosa clássica, estados pós-gastrectomia e resseção alargada do íleo terminal.",
    "alerta": "Tratamento de manutenção mensal vitalício na anemia perniciosa para prevenir lesões neurológicas irreversíveis."
  },
  {
    "drug": "Ferro 178,6mg 6mg/ml - sol.oral",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Compostos de ferro",
    "mecanismo": "Fornece ferro ferroso elementar para incorporação no anel heme da hemoglobina, mioglobina e enzimas respiratórias.",
    "indicacoes": "Tratamento e prevenção da anemia ferropénica em lactentes, crianças e grávidas.",
    "alerta": "Provoca fezes com coloração escura/negra inócua, náuseas e obstipação; pode manchar temporariamente o esmalte dentário se não for engolido rapidamente."
  },
  {
    "drug": "Sulfato ferroso 247,25mg - comp LP",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Compostos de ferro",
    "mecanismo": "Composto ferroso de libertação lenta desenhado para repor as reservas de ferro corporal (ferritina).",
    "indicacoes": "Tratamento curativo da anemia ferropénica no adulto.",
    "alerta": "Tomar preferencialmente em jejum associado a vitamina C para otimizar absorção; chá, café e leite diminuem drasticamente a absorção."
  },
  {
    "drug": "Acenocumarol 4 mg - Comp (EF)",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antagonistas da vitamina K",
    "mecanismo": "Antivitamina K sintético que inibe a epóxido redutase, impedindo a gama-carboxilação dos fatores II, VII, IX e X.",
    "indicacoes": "Prevenção de complicações tromboembólicas em fibrilhação auricular e próteses valvulares mecânicas cardíacas.",
    "alerta": "Janela terapêutica muito estreita; exige monitorização estrita do INR; semivida mais curta do que a varfarina."
  },
  {
    "drug": "Ácido acetilsalicilico 100mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antiagregantes plaquetários",
    "mecanismo": "Acetilação irreversível da COX-1 na plaqueta, bloqueando permanentemente a formação de tromboxano A2 durante os 7-10 dias de vida plaquetária.",
    "indicacoes": "Prevenção secundária de eventos isquémicos miocárdicos e cerebrais aterotrombóticos.",
    "alerta": "Risco de hemorragia gastrointestinal oculta ou manifesta e úlcera péptica; contraindicado em caso de úlcera hemorrágica recente."
  },
  {
    "drug": "Apixabano 2,5mg comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Anticoagulantes orais diretos (DOACs - Inibidores do fator Xa)",
    "mecanismo": "Inibidor oral direto, seletivo e reversível do fator Xa livre e ligado ao coágulo na cascata da coagulação.",
    "indicacoes": "Prevenção de AVC na fibrilhação auricular não valvular (em doentes com baixo peso, idade avançada ou insuficiência renal) e profilaxia de TEV pós-cirúrgico.",
    "alerta": "Não requer controlo de INR; contraindicado em doentes com próteses valvulares mecânicas e hemorragia ativa major."
  },
  {
    "drug": "Apixabano 5mg comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Anticoagulantes orais diretos (DOACs - Inibidores do fator Xa)",
    "mecanismo": "Bloqueia a via final comum da coagulação através da inibição da conversão de protrombina em trombina mediada pelo FXa.",
    "indicacoes": "Prevenção de tromboembolismo venoso (TEV) e AVC na fibrilhação auricular não valvular e tratamento de TVP/EP.",
    "alerta": "Dose reduzida para 2,5 mg se cumprir pelo menos 2 critérios: idade $\\ge$ 80 anos, peso $\\le$ 60 kg ou creatinina $\\ge$ 1,5 mg/dL."
  },
  {
    "drug": "Clopidogrel 75 mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antiagregantes plaquetários (Inibidores do recetor P2Y12)",
    "mecanismo": "Pró-fármaco que, após ativação hepática pelo CYP2C19, inibe irreversivelmente o recetor plaquetário P2Y12 de ADP.",
    "indicacoes": "Prevenção aterotrombótica pós-síndrome coronária aguda, pós-stent coronário e prevenção secundária de AVC isquémico.",
    "alerta": "Eficácia diminuída na presença de inibidores potentes do CYP2C19 como o omeprazol (preferir pantoprazol para proteção gástrica)."
  },
  {
    "drug": "Enoxaparina 20 mg/0.2 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)",
    "mecanismo": "Liga-se à antitrombina III, acelerando de forma preferencial a inativação do fator Xa sobre a trombina (fator IIa).",
    "indicacoes": "Profilaxia do tromboembolismo venoso em cirurgia geral de risco moderado e doentes médicos acamados.",
    "alerta": "Administração por via subcutânea profunda no abdómen; contraindicado se antecedentes de trombocitopenia induzida por heparina (HIT)."
  },
  {
    "drug": "Enoxaparina 40 mg/0.4 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)",
    "mecanismo": "HBPM com elevada relação de atividade anti-fator Xa vs anti-fator IIa (~4:1) com excelente biodisponibilidade por via SC.",
    "indicacoes": "Profilaxia de tromboembolismo venoso em cirurgias ortopédicas de alto risco e doentes acamados com patologia aguda.",
    "alerta": "Excreção renal (monitorizar clearance de creatinina; ajustar dose se ClCr < 30 mL/min); nunca expulsar a bolha de ar da seringa antes da injeção."
  },
  {
    "drug": "Enoxaparina 60 mg/0.6 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)",
    "mecanismo": "Inibe a formação e propagação de fibrina através da inativação de fatores pró-coagulantes chave.",
    "indicacoes": "Tratamento de trombose venosa profunda (TVP), embolia pulmonar estável e angina instável.",
    "alerta": "Monitorizar contagem de plaquetas regularmente para despiste de HIT; risco de hematoma espinal em caso de punção lombar/epidural."
  },
  {
    "drug": "Enoxaparina sódica (LOVENOX) 100 mg/1 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)",
    "mecanismo": "Dose terapêutica plena (1 mg/kg 12/12h) para inibição contínua da cascata de coagulação intravascular.",
    "indicacoes": "Tratamento do enfarte agudo do miocárdio com e sem elevação do segmento ST e TVP confirmada.",
    "alerta": "Risco de hemorragia major grave; antagonizada apenas parcialmente pelo sulfato de protamina."
  },
  {
    "drug": "Enoxaparina sódica (LOVENOX) 80 mg/0.8 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)",
    "mecanismo": "Inibidor altamente específico do fator Xa ativado que previne a extensão do trombo venoso e arterial.",
    "indicacoes": "Tratamento de eventos tromboembólicos agudos e prevenção de coagulação em circuitos de circulação extracorporal em hemodiálise.",
    "alerta": "Vigiar locais de punção e hemorragias ocultas; ajustar dose se peso corporal < 50 kg ou obesidade extrema."
  },
  {
    "drug": "Heparinóide 3 mg/g - creme",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinóides tópicos",
    "mecanismo": "Polissacárido mucopolissacarídico de aplicação percutânea com ação trombolítica local, anti-inflamatória e antiedematosa.",
    "indicacoes": "Tromboflebites superficiais, hematomas pós-traumáticos e alívio do peso nas pernas associado a varizes.",
    "alerta": "Não aplicar em feridas abertas, queimaduras, infeções cutâneas ou mucosas genitais/oculares."
  },
  {
    "drug": "Varfarina 5mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antagonistas da vitamina K",
    "mecanismo": "Bloqueia a síntese hepática dos fatores de coagulação vitamina K-dependentes (II, VII, IX, X) e proteínas anticoagulantes C e S.",
    "indicacoes": "Prevenção de tromboembolismo em portadores de próteses mecânicas valvulares e fibrilhação auricular valvular.",
    "alerta": "Elevado risco hemorrágico; monitorização contínua do INR (alvo 2,0-3,0 ou 2,5-3,5); múltiplas interações dietéticas com vegetais verdes ricos em vitamina K."
  },
  {
    "drug": "Brometo de ipratrópio 20 µg/dose Sol pressu inal (Atrovent)",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Anticolinérgicos inalados (SAMA)",
    "mecanismo": "Antagonista competitivo dos recetores muscarínicos M3 no músculo liso bronquial, inibindo a broncoconstrição colinérgica reflexa.",
    "indicacoes": "Tratamento de manutenção do broncoespasmo crónico associado à DPOC e alívio coadjuvante na asma aguda.",
    "alerta": "Início de ação mais lento (15-30 min) do que os agonistas beta-2; proteger os olhos ao inalar para evitar midríase ou glaucoma agudo."
  },
  {
    "drug": "Budesonida 0,5mg/ml - amp.p/nebulizag",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados",
    "mecanismo": "Anti-inflamatório esteróide tópico potente que inibe a transcrição de citocinas inflamatórias nas vias aéreas.",
    "indicacoes": "Exacerbação aguda de asma, laringotraqueíte aguda (croup/estridor) em pediatria e DPOC grave.",
    "alerta": "Lavar o rosto da criança após uso de máscara de nebulização e enxaguar a cavidade oral para prevenir candidíase e lesões cutâneas."
  },
  {
    "drug": "Budesonida 160 µg/dose + Formoterol 4.5 µg/dose Pó inal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Associações Corticosteroide + Agonista Beta-2 (ICS + LABA)",
    "mecanismo": "Associação sinérgica de corticosteroide inalado anti-inflamatório com broncodilatador beta-2 de início rápido e longa duração (LABA).",
    "indicacoes": "Tratamento de manutenção e alívio na asma persistente (estratégia SMART) e DPOC com exacerbações frequentes.",
    "alerta": "Passar a boca por água e cuspir após inalação para prevenir disfonia e candidíase orofaríngea (sapinhos)."
  },
  {
    "drug": "Budesonida 200 µg Pó inal, cáps Blist",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados",
    "mecanismo": "Glucocorticóide com elevada afinidade pelo recetor esteróide e metabolização hepática de primeira passagem quase total se deglutido.",
    "indicacoes": "Tratamento profilático e controlo contínuo da asma brônquica persistente ligeira a moderada.",
    "alerta": "Medicamento preventivo que NÃO é eficaz para o alívio imediato de crises agudas de broncoespasmo."
  },
  {
    "drug": "Budesonida 200 µg/dose Pó inal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados",
    "mecanismo": "Reduz o infiltrado inflamatório de eosinófilos e mastócitos na mucosa bronquial, atenuando a hiper-reatividade das vias aéreas.",
    "indicacoes": "Manutenção da função pulmonar na asma brônquica em dispositivos multidose de pó inalado.",
    "alerta": "Exige técnica inalatória adequada com inspiração profunda e enérgica através do bocal."
  },
  {
    "drug": "Budesonida 200mcg/dose-sol.press.p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados",
    "mecanismo": "Corticosteroide em aerossol pressurizado para deposição nas vias aéreas centrais e periféricas.",
    "indicacoes": "Asma brônquica em doentes que necessitam de inalador pressurizado dosimetrado (MDI) com câmara expansora.",
    "alerta": "Recomenda-se o uso de câmara de expansão (espaçador) para melhorar a deposição pulmonar e reduzir o impacto orofaríngeo."
  },
  {
    "drug": "Budesonida 320 µg/dose + Formoterol 9 µg/dose Pó inal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Associações Corticosteroide + Agonista Beta-2 (ICS + LABA)",
    "mecanismo": "Associação de dose elevada para controlo de inflamação brônquica e broncodilatação prolongada de 12 horas.",
    "indicacoes": "Asma persistente grave não controlada com doses médias e DPOC grave com história de exacerbações.",
    "alerta": "Pode induzir tremores periféricos finos, cefaleias e palpitações secundárias ao componente formoterol."
  },
  {
    "drug": "Budesonida 64mcg/dose - susp.p/pulveriz.nasal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides de ação local",
    "mecanismo": "Corticosteroide de aplicação tópica nasal que inibe a libertação de mediadores inflamatórios na mucosa nasal.",
    "indicacoes": "Rinite alérgica sazonal e perene e tratamento sintomático de pólipos nasais.",
    "alerta": "Aplicar direcionando o jato para a parede lateral do nariz para evitar perfuração ou ulceração do septo nasal; risco de epistaxis."
  },
  {
    "drug": "Formoterol 12mcg/dose - caps p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de longa ação (LABA)",
    "mecanismo": "Agonista beta-2 seletivo de longa duração com início de ação rápido (1 a 3 minutos) e efeito broncodilatador mantido por 12 horas.",
    "indicacoes": "Profilaxia e tratamento do broncoespasmo na DPOC e adjuvante na asma persistente.",
    "alerta": "CONTRAINDICADO EM MONOTERAPIA NA ASMA (aumenta o risco de exacerbações graves e morte; obriga a associação a corticosteroide inalado)."
  },
  {
    "drug": "Ipratrópio 250mcg/2ml - sol p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Anticolinérgicos inalados (SAMA)",
    "mecanismo": "Bloqueia o tónus vagal brônquico através do antagonismo competitivo com a acetilcolina nos recetores muscarínicos.",
    "indicacoes": "Nebulização hospitalar em crises agudas graves de asma (em conjunto com beta-2) e exacerbações agudas de DPOC.",
    "alerta": "Evitar contacto acidental da névoa de nebulização com os olhos por risco de midríase assimétrica e aumento da pressão intraocular."
  },
  {
    "drug": "Mometasona 136 + Indacaterol 114 + Brometo Glicopirrónio 46 (ENERZAIR)",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Terapêutica tripla inalada (ICS + LABA + LAMA)",
    "mecanismo": "Terapêutica tripla num só inalador: corticosteroide (mometasona) + agonista beta-2 de ultralonga ação (indacaterol) + anticolinérgico LAMA (glicopirrónio).",
    "indicacoes": "Tratamento de manutenção da asma não controlada adequadamente com associação ICS/LABA em doentes que sofreram exacerbações.",
    "alerta": "Toma única diária matinal; bochechar e rejeitar água após a inalação para evitar candidíase orofaríngea."
  },
  {
    "drug": "Montelucaste 10 mg (EF)",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Antagonistas dos recetores dos leucotrienos",
    "mecanismo": "Antagonista competitivo do recetor dos cisteinil-leucotrienos (CysLT1) no músculo liso respiratório, diminuindo a inflamação e broncoconstrição.",
    "indicacoes": "Tratamento adicional na asma persistente ligeira a moderada e alívio da rinite alérgica sazonal em doentes asmáticos.",
    "alerta": "Alerta de segurança para efeitos neuropsiquiátricos (pesadelos vívidos, insónia, alterações de humor e ideação suicida rara)."
  },
  {
    "drug": "Salbutamol 100mcg/dose - sol.press.p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de curta ação (SABA)",
    "mecanismo": "Agonista beta-2 adrenérgico de ação curta; estimula a adenilciclase, aumentando o cAMP e provocando broncodilatação quase instantânea (2-5 min).",
    "indicacoes": "Alívio imediato dos sintomas na crise aguda de asma, broncoespasmo agudo e prevenção do broncoespasmo de esforço.",
    "alerta": "Fármaco puramente sintomático ('de alívio'), não trata a inflamação de base; o uso excessivo diário reflete asma descontrolada."
  },
  {
    "drug": "Salbutamol 2mg/5ml - sol. oral",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de curta ação (SABA)",
    "mecanismo": "Estimulação beta-2 sistémica no músculo liso brônquico por via oral em formulação líquida.",
    "indicacoes": "Alívio do broncoespasmo em crianças que não toleram ou não dominam dispositivos inalatórios.",
    "alerta": "Efeitos adversos sistémicos muito mais acentuados que a via inalada: taquicardia sinusal, tremores musculares e hipocaliemia."
  },
  {
    "drug": "Salbutamol 5mg/ml - sol. resp.",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de curta ação (SABA)",
    "mecanismo": "Dose elevada de agonista beta-2 em solução para nebulização contínua com oxigénio medicinal.",
    "indicacoes": "Tratamento de emergência de exacerbações graves e potencialmente fatais de asma brônquica ou DPOC descompensada.",
    "alerta": "Vigiar saturação de oxigénio, frequência cardíaca e potássio sérico (risco de arritmias e hipocaliemia induzida)."
  },
  {
    "drug": "Acetilcisteína 600mg - comp efervescentes",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Mucolíticos e expetorantes",
    "subsubgrupo": "Mucolíticos derivados de aminoácidos",
    "mecanismo": "Grupos sulfidrilo (-SH) livres que clivam pontes dissulfureto das mucoproteínas, fluidificando e diminuindo a viscosidade do muco.",
    "indicacoes": "Tratamento de hipersecreção brônquica em bronquites agudas/crónicas; também antídoto específico na intoxicação por paracetamol.",
    "alerta": "Pode induzir broncoespasmo paradoxal em doentes asmáticos hiper-reativos; odor e sabor sulfuroso característicos."
  },
  {
    "drug": "Ambroxol 15mg/5ml - sol.oral",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Mucolíticos e expetorantes",
    "subsubgrupo": "Mucolíticos e expetorantes",
    "mecanismo": "Metabolito ativo da bromexina; aumenta a secreção das vias respiratórias, estimula o surfactante e melhora o transporte mucociliar.",
    "indicacoes": "Tratamento de afeções agudas e crónicas dos brônquios acompanhadas de secreção mucosa anormal e tosse produtiva.",
    "alerta": "Risco muito raro de reações cutâneas graves (eritema multiforme); evitar administrar imediatamente antes de deitar."
  },
  {
    "drug": "Hidróxido de alumínio 240mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Antiácidos locais",
    "mecanismo": "Antiácido não absorvível que reage com o ácido clorídrico gástrico formando cloreto de alumínio e neutralizando o pH gástrico.",
    "indicacoes": "Alívio sintomático rápido de azia, pirose gástrica e dispepsia ácida.",
    "alerta": "Efeito adverso marcante: obstipação acentuada; quela e diminui a absorção de outros fármacos (desfasar tomas por 2 horas)."
  },
  {
    "drug": "Omeprazol 20mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Inibidores da bomba de protões (IBP)",
    "mecanismo": "Inibidor irreversível da bomba de protões H+/K+-ATPase na célula parietal gástrica, bloqueando a via final de secreção ácida.",
    "indicacoes": "Doença do refluxo gastroesofágico (DRGE), úlcera gástrica/duodenal, profilaxia de gastropatia por AINEs e erradicação de H. pylori.",
    "alerta": "Tomar 30 a 60 minutos antes da primeira refeição; o uso crónico por anos associa-se a hipomagnesemia e défice de vitamina B12."
  },
  {
    "drug": "Pantoprazol 20 mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Inibidores da bomba de protões (IBP)",
    "mecanismo": "Suprime a secreção ácida gástrica basal e estimulada através da ligação covalente aos resíduos de cisteína da ATPase gástrica.",
    "indicacoes": "DRGE ligeira e alívio sintomático da pirose; profilaxia de úlceras gastroduodenais induzidas por AINEs em doentes de risco.",
    "alerta": "Menor potencial de inibição do citocromo CYP2C19 do que o omeprazol, sendo a escolha ideal em doentes sob clopidogrel."
  },
  {
    "drug": "Pantoprazol 40 mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Inibidores da bomba de protões (IBP)",
    "mecanismo": "Inibição profunda da acidez intragástrica garantindo cicatrização de lesões erosivas na mucosa.",
    "indicacoes": "Esofagite de refluxo moderada a grave, úlcera duodenal e gástrica ativa e Síndrome de Zollinger-Ellison.",
    "alerta": "O tratamento prolongado pode favorecer superinfeções entéricas por Clostridioides difficile e fraturas osteoporóticas."
  },
  {
    "drug": "Ranitidina 50mg/2ml (EF)",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Antagonistas dos recetores H2",
    "mecanismo": "Antagonista competitivo reversível dos recetores histaminérgicos H2 das células parietais, reduzindo o volume e acidez da secreção gástrica.",
    "indicacoes": "Profilaxia da aspiração ácida (Síndrome de Mendelson) em anestesia e hemorragia digestiva alta ligeira.",
    "alerta": "Desenvolvimento rápido de tolerância/taquifilaxia em 48-72 horas; retirada generalizada de vários mercados por impurezas de NDMA."
  },
  {
    "drug": "Sucralfato 1g/5ml-susp. oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Protetores da mucosa gástrica",
    "mecanismo": "Complexo sulfatado de sacarose e alumínio que se polimeriza em meio ácido, formando uma barreira aderente viscosa protetora sobre o fundo da úlcera.",
    "indicacoes": "Tratamento de úlcera péptica gástrica e duodenal e esofagite erosiva.",
    "alerta": "Requer meio ácido para ativar (não administrar conjuntamente com antiácidos ou IBPs); pode provocar obstipação acentuada."
  },
  {
    "drug": "Bisacodilo 5mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes estimulantes",
    "mecanismo": "Laxante de contacto difenilmetânico; estimula diretamente as terminações nervosas do plexo mioentérico do cólon e inibe a reabsorção de água.",
    "indicacoes": "Tratamento de curta duração da obstipação aguda e preparação intestinal pré-procedimento endoscópico ou cirúrgico.",
    "alerta": "Não mastigar nem tomar com leite ou antiácidos para não dissolver o revestimento entérico; o uso crónico gera dependência cólica e atonia intestinal."
  },
  {
    "drug": "Domperidona 10mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos",
    "mecanismo": "Antagonista seletivo dos recetores dopaminérgicos D2 na zona de gatilho quimiorrecetora (área postrema) fora da barreira hematoencefálica.",
    "indicacoes": "Alívio dos sintomas de náuseas e vómitos em adultos e adolescentes.",
    "alerta": "Risco de prolongamento do intervalo QT e arritmias cardíacas graves (limitar dose diária a 30 mg e duração máxima a 7 dias)."
  },
  {
    "drug": "Gelatina + glicerina (Bebegel) - gel rectal criança",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes por via retal",
    "mecanismo": "Ação hiperosmótica e emoliente local; atrai água para a ampola retal, lubrifica a massa fecal e estimula o reflexo de defecação.",
    "indicacoes": "Obstipação ocasional no recém-nascido, lactente e criança pequena.",
    "alerta": "Uso ocasional sintomático; evitar a utilização rotineira sistemática para não inibir o reflexo fisiológico natural da defecação."
  },
  {
    "drug": "Gelatina + glicerina (Dagragel) - gel rectal adulto",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes por via retal",
    "mecanismo": "Promove o esvaziamento mecânico da porção distal do cólon e reto por efeito osmótico e reflexo de estiramento local.",
    "indicacoes": "Obstipação retal/terminal no adulto, doentes acamados e preparação para exames proctológicos.",
    "alerta": "Pode provocar sensação local de ardor e irritação retal ligeira se utilizado repetidamente."
  },
  {
    "drug": "Lactulose 10 g/15 ml Xar Saq",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes osmóticos",
    "mecanismo": "Dissacárido sintético que não é absorvido; é fermentado pela flora colónica em ácidos orgânicos de cadeia curta, atraindo água por osmose.",
    "indicacoes": "Obstipação crónica e tratamento/prevenção da encefalopatia hepática porto-sistémica (armadilha de iões amónio).",
    "alerta": "Provoca frequentemente flatulência, cólicas e meteorismo abdominal nos primeiros dias de tratamento."
  },
  {
    "drug": "Lactulose 666.7 mg/ml Xar Fr",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes osmóticos",
    "mecanismo": "Acidifica o conteúdo do cólon, convertendo amoníaco livre lipossolúvel (NH3) em ião amónio não absorvível (NH4+).",
    "indicacoes": "Manutenção intestinal em obstipação e redução da amoniemia na insuficiência hepática avançada.",
    "alerta": "O efeito laxante demora tipivamente 24 a 48 horas a manifestar-se; sobredosagem causa diarreia aquosa e desidratação."
  },
  {
    "drug": "Metoclopramida 1 mg/ml Sol oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos",
    "mecanismo": "Antagonista D2 e 5-HT3 e agonista 5-HT4; estimula o tónus gastroesofágico e acelera o esvaziamento gástrico.",
    "indicacoes": "Náuseas e vómitos em pediatria (segunda linha) e gastroparesia diabética.",
    "alerta": "Risco de sintomas extrapiramidais graves (distonias faciais, crises oculogíricas); respeitar intervalo mínimo de 6 horas."
  },
  {
    "drug": "Metoclopramida 10mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos",
    "mecanismo": "Ação antiemética central na área postrema e ação procinética superior coordenada no estômago e duodeno.",
    "indicacoes": "Prevenção de náuseas induzidas por quimioterapia retardada, náuseas pós-cirúrgicas e associadas a crises de enxaqueca.",
    "alerta": "Duração máxima do tratamento recomendada de 5 dias pelo risco de discinésia tardia irreversível."
  },
  {
    "drug": "Metoclopramida 10mg/2ml - sol. injectável",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos",
    "mecanismo": "Bloqueio dopaminérgico parenteral potente com alívio rápido de náuseas agudas incoercíveis.",
    "indicacoes": "Vómitos incoercíveis em urgência, cólica renal (coadjuvante) e esvaziamento para procedimentos radiológicos.",
    "alerta": "Administração IV muito lenta (mínimo de 3 minutos); injeção rápida provoca ansiedade extrema, acatisia súbita e hipotensão."
  },
  {
    "drug": "Pancreatina+ dimeticone (Pankreoflat) - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antiflatulentos associados",
    "mecanismo": "Associação de enzimas exócrinas digestivas (lipase, amilase e protease) com agente tensoativo que coalesce bolhas de gás.",
    "indicacoes": "Dispepsia fermentativa, insuficiência pancreática exócrina ligeira acompanhada de meteorismo e aerofagia.",
    "alerta": "Tomar durante ou imediatamente após as principais refeições; não mastigar os comprimidos para não inativar as enzimas na boca."
  },
  {
    "drug": "Simeticone 105mg/ml - emulsão oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antiflatulentos",
    "mecanismo": "Polímero de silicone inerte que reduz a tensão superficial das bolhas gasosas intestinais, facilitando a sua coalescência e expulsão.",
    "indicacoes": "Acumulação excessiva de gases intestinais, cólicas gasosas do lactente e preparação de doentes para ecografia abdominal.",
    "alerta": "Substância fisiologicamente inerte e não absorvida; excelente perfil de segurança sem efeitos sistémicos."
  },
  {
    "drug": "Loperamida 0,2mg/ml - sol.oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da motilidade intestinal",
    "mecanismo": "Agonista dos recetores opióides mu no plexo mioentérico intestinal; diminui o peristaltismo propulsivo e aumenta o tónus dos esfíncteres.",
    "indicacoes": "Tratamento sintomático da diarreia aguda no adulto e crianças mais velhas quando indicada.",
    "alerta": "Contraindicada em diarreia invasiva com febre alta e sangue nas fezes (disenteria bacteriana) e colite pseudomembranosa."
  },
  {
    "drug": "Loperamida 2mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da motilidade intestinal",
    "mecanismo": "Prolonga o tempo de trânsito intestinal e reduz a perda diária de água e eletrólitos nas fezes.",
    "indicacoes": "Diarreia aguda inespecífica do viajante e diarreia crónica associada a doença inflamatória intestinal ou resseção ileal.",
    "alerta": "A sobredosagem grave por abuso intencional está associada a arritmias ventriculares fatais (prolongamento de QTc e paragem cardíaca)."
  },
  {
    "drug": "Racecadotril 10 mg - pó p/lactentes",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da encefalinase intestinal",
    "mecanismo": "Pró-fármaco do tiorfano que inibe a encefalinase periférica, impedindo a degradação de encefalinas e reduzindo a hipersecreção de água/eletrólitos.",
    "indicacoes": "Tratamento sintomático adjuvante da diarreia aquosa aguda em lactentes a partir dos 3 meses (junto com Reidratação Oral).",
    "alerta": "Não altera o tempo de trânsito intestinal fisiológico nem causa obstipação rebote; não substitui os sais de reidratação oral."
  },
  {
    "drug": "Racecadotril 30mg - pó p/susp.oral lactentes",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da encefalinase intestinal",
    "mecanismo": "Antissecretor intestinal puro que normaliza a secreção celular hidro-eletrolítica intestinal hiperativa por toxinas bacterianas.",
    "indicacoes": "Diarreia aguda em crianças com peso superior a 13 kg como coadjuvante da reidratação oral.",
    "alerta": "Dissolver bem o pó na água ou adicionar a uma pequena quantidade de comida de imediato antes de administrar."
  },
  {
    "drug": "Butilescopolamina 10mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiespasmódicos",
    "subsubgrupo": "Anticolinérgicos espasmolíticos",
    "mecanismo": "Derivado de amónio quaternário com antagonismo nos recetores muscarínicos colinérgicos no músculo liso gastrointestinal e geniturinário.",
    "indicacoes": "Espasmos dolorosos do trato gastrointestinal, cólica biliar e espasmos do trato urinário.",
    "alerta": "Não atravessa a barreira hematoencefálica (sem efeitos centrais), mas mantém risco de retenção urinária e taquicardia em doentes propensos."
  },
  {
    "drug": "Butilescopolamina 20mg/ml - sol. injectável",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiespasmódicos",
    "subsubgrupo": "Anticolinérgicos espasmolíticos",
    "mecanismo": "Espasmolítico potente de ação direta e rápida sobre as contrações espásticas das vísceras ocas abdominais.",
    "indicacoes": "Cólica renal aguda, cólica biliar severa e facilitação de espasmos durante procedimentos endoscópicos digestivos.",
    "alerta": "Contraindicado no glaucoma de ângulo fechado não tratado, taquiarritmias e miastenia gravis; risco de hipotensão transitória IV."
  },
  {
    "drug": "Propinoxato 3,2mg/ml - sol.oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiespasmódicos",
    "subsubgrupo": "Antiespasmódicos musculotrópicos",
    "mecanismo": "Efeito duplo antiespasmódico: bloqueio anticolinérgico muscarínico ligeiro e relaxamento musculotrópico direto da fibra muscular lisa.",
    "indicacoes": "Dores cólicas abdominais espasmódicas digestivas e hepatobiliares.",
    "alerta": "Evitar na presença de estenose mecânica pilórica ou hipertrofia benigna da próstata descompensada."
  },
  {
    "drug": "Pancreatina 150mg caps",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Enzimas digestivas e Probióticos",
    "subsubgrupo": "Enzimas pancreáticas",
    "mecanismo": "Complexo enzimático com lípase, amilase e protease que hidrolisa gorduras em ácidos gordos, amidos em dextrinas e proteínas em péptidos.",
    "indicacoes": "Insuficiência pancreática exócrina crónica por fibrose quística, pancreatite crónica avançada ou pancreatectomia.",
    "alerta": "As cápsulas devem ser tomadas intactas durante as refeições; a abertura das cápsulas em meio alcalino pode causar estomatite grave."
  },
  {
    "drug": "Saccharomyces boulardii 250 mg Pó susp oral Saq",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Enzimas digestivas e Probióticos",
    "subsubgrupo": "Leveduras e probióticos",
    "mecanismo": "Levedura viva probiótica resistente a antibióticos que protege a integridade da barreira intestinal e inibe adesão de toxinas patogénicas.",
    "indicacoes": "Prevenção da diarreia associada a antibióticos e tratamento de apoio em gastroenterites agudas.",
    "alerta": "CONTRAINDICADO em doentes criticamente doentes ou com cateter venoso central pelo risco documentado de fungemia sistémica fatal."
  },
  {
    "drug": "Acetonido de fluocinolona + Lidocaína + Subgalhato bismuto (Synalar rectal)",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Preparações retais",
    "subsubgrupo": "Anti-hemorroidários associados",
    "mecanismo": "Ação anti-inflamatória do corticosteroide (fluocinolona) associada ao alívio anestésico rápido (lidocaína) e propriedades adstringentes/hemostáticas.",
    "indicacoes": "Tratamento das crises hemorroidárias internas e externas, proctites e prurido anal agudo.",
    "alerta": "Uso limitado a períodos curtos (máximo 7-14 dias) para evitar atrofia da mucosa anal e infeções fúngicas secundárias."
  },
  {
    "drug": "Benzidamina 1.5 mg/ml - sol lav boca colutório",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Preparações buco-gingivais",
    "subsubgrupo": "Anti-inflamatórios orofaríngeos",
    "mecanismo": "Anti-inflamatório não esteróide de ação tópica com propriedades anestésicas locais sobre a mucosa oral e faríngea.",
    "indicacoes": "Alívio da dor e irritação da garganta (faringites), estomatites aftosas e pós-intervenções estomatológicas.",
    "alerta": "Utilizar como colutório em bochecho ou gargarejo sem deglutir; pode induzir dormência oral transitória inócua."
  },
  {
    "drug": "Cloreto de dequalínio 10 mg Comp vag",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antisséticos e anti-infeciosos ginecológicos",
    "mecanismo": "Composto de amónio quaternário com largo espetro antimicrobiano que aumenta a permeabilidade da membrana das células patogénicas.",
    "indicacoes": "Vaginose bacteriana e candidíase vaginal em mulheres adultas.",
    "alerta": "Não interromper o tratamento durante a menstruação se o ciclo coincidir; não utilizar sabões íntimos que inativem o agente catiónico."
  },
  {
    "drug": "Clotrimazol 100mg - comp.vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antifúngicos vaginais",
    "mecanismo": "Derivado imidazólico que inibe a síntese de ergosterol na membrana fúngica das leveduras de Candida albicans.",
    "indicacoes": "Candidíase vulvovaginal aguda em comprimidos de inserção profunda à noite.",
    "alerta": "Pode danificar preservativos de látex e diafragmas reduzindo a sua eficácia contracetiva durante e após o tratamento."
  },
  {
    "drug": "Clotrimazol 10mg/g - creme vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antifúngicos vaginais",
    "mecanismo": "Ação fungicida tópica sobre as hifas e esporos fúngicos com rápido alívio do prurido e corrimento esbranquiçado.",
    "indicacoes": "Vulvite candidiásica concomitante e tratamento local no parceiro em caso de balanite associada.",
    "alerta": "Sensação local transitória de ardor e irritação vulvar nas primeiras aplicações."
  },
  {
    "drug": "Estriol 0,125mg/g - creme vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Estrogénios tópicos",
    "mecanismo": "Estrogénio natural de curta duração que se liga aos recetores estrogénicos da mucosa urogenital, normalizando o epitélio e pH vaginal.",
    "indicacoes": "Atrofia urogenital pós-menopáusica (secura vaginal, dispareunia e infeções urinárias recorrentes).",
    "alerta": "Absorção sistémica residual mínima; sem necessidade de compensação obrigatória com progestagénio para proteção endometrial."
  },
  {
    "drug": "lodopovidona 100mg/ml - sol.vaginal",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antisséticos ginecológicos",
    "mecanismo": "Complexo que liberta iodo livre elemental oxidante com ação destrutiva rápida sobre bactérias, vírus, fungos e protozoários.",
    "indicacoes": "Antisepsia e desinfeção pré e pós-operatória ginecológica e tratamento de vaginites inespecíficas.",
    "alerta": "Contraindicado no segundo e terceiro trimestres de gravidez, amamentação e patologia tiroideia por absorção mucosa de iodo."
  },
  {
    "drug": "Metronidazol 500mg - óvulo vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antiprotozoários e antibacterianos vaginais",
    "mecanismo": "Ação tricomonicida e bactericida sobre anaeróbios locais por desestruturação helicoidal do DNA microbiano.",
    "indicacoes": "Vaginites por Trichomonas vaginalis e vaginoses bacterianas por Gardnerella vaginalis.",
    "alerta": "Evitar o consumo de álcool durante e até 48 horas após o fim da utilização (risco de efeito dissulfiram)."
  },
  {
    "drug": "Bromocriptina 10mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas relacionadas com a prolactina",
    "subsubgrupo": "Agonistas da dopamina / Inibidores da prolactina",
    "mecanismo": "Agonista potente dos recetores dopaminérgicos D2 na hipófise anterior; inibe a síntese e secreção de prolactina.",
    "indicacoes": "Tratamento de prolactinomas (macroadenomas hipofisários) e acromegalia em associação.",
    "alerta": "Pode causar hipotensão ortostática súbita, náuseas e cefaleias; iniciar com doses baixas e tomar estritamente com refeições."
  },
  {
    "drug": "Bromocriptina 2.5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas relacionadas com a prolactina",
    "subsubgrupo": "Agonistas da dopamina / Inibidores da prolactina",
    "mecanismo": "Mimetiza a dopamina hipotalâmica (fator inibidor de prolactina), normalizando estados de hiperprolactinemia.",
    "indicacoes": "Inibição ou supressão da lactação puerperal por razões médicas, galactorreia e hipogonadismo por prolactina elevada.",
    "alerta": "Não indicada rotineiramente para supressão do ingurgitamento mamário benigno pelo risco de eventos cerebrovasculares e convulsões."
  },
  {
    "drug": "Betametasona 0.5mg/ml - sol.oral",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos",
    "mecanismo": "Glucocorticóide sintético de longa ação sem atividade mineralocorticóide significativa; potente ação imunossupressora.",
    "indicacoes": "Tratamento agudo de crises alérgicas graves, exacerbações de asma brônquica e doenças inflamatórias em pediatria.",
    "alerta": "Em tratamentos superiores a 2 semanas exige descontinuação gradual pelo risco de insuficiência corticosuprarrenal aguda."
  },
  {
    "drug": "Betametasona, dipropionato + Betametasona, fosfato sódico (Diprofos)",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos injetáveis",
    "mecanismo": "Associação de um componente solúvel de ação rápida (fosfato) com um componente microcristalino de libertação prolongada (dipropionato).",
    "indicacoes": "Artrite reumatoide, bursites, lombociatalgias e patologia osteoarticular inflamatória (infiltração intra-articular ou IM).",
    "alerta": "NUNCA administrar por via intravenosa; a administração intra-articular excessiva pode acelerar a degenerescência da cartilagem."
  },
  {
    "drug": "Prednisolona 20mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos",
    "mecanismo": "Glucocorticóide de ação intermédia; inibe a fosfolipase A2 e suprime a transcrição de genes inflamatórios (NF-kB).",
    "indicacoes": "Doenças autoimunes ativas (lúpus, vasculites), síndrome nefrótica, asma grave descompensada e colite ulcerosa.",
    "alerta": "Uso crónico causa Síndrome de Cushing iatrogénica: osteoporose, hiperglicemia, hipertensão, atrofia cutânea e imunossupressão."
  },
  {
    "drug": "Prednisolona 25mg/ml - sol. injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos",
    "mecanismo": "Ação anti-inflamatória e imunossupressora rápida em formulação injetável parenteral.",
    "indicacoes": "Choque anafilático refratário, crise de asma aguda ameaçadora e rejeição de transplante de órgãos.",
    "alerta": "Pode induzir descompensação hiperglicémica aguda severa no diabético e retenção hidrossalina com descompensação cardíaca."
  },
  {
    "drug": "Prednisolona 5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos",
    "mecanismo": "Glucocorticóide padrão de referência utilizado no desmame progressivo e terapêutica de manutenção em doses baixas.",
    "indicacoes": "Polimialgia reumática, artrite reumatoide e terapêutica de substituição da insuficiência suprarrenal em doses fisiológicas.",
    "alerta": "Administrar em toma única diária matinal para mimetizar o pico circadiano fisiológico de cortisol e minimizar supressão do eixo HPA."
  },
  {
    "drug": "lodeto de potássio 0.2 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Compostos de iodo",
    "mecanismo": "Fornece iodo essencial para a síntese biológica das hormonas tiroxina (T4) e tri-iodotironina (T3).",
    "indicacoes": "Profilaxia do bócio endémico por carência e suplementação iodada recomendada na gravidez e aleitamento.",
    "alerta": "O excesso de iodo pode induzir paradoxalmente hipotiroidismo (efeito Wolff-Chaikoff) ou hipertiroidismo (fenómeno Jod-Basedow)."
  },
  {
    "drug": "Levotiroxina 0,1mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)",
    "mecanismo": "T4 sintética idêntica à hormona endógena; é convertida perifericamente por 5'-desiodase na hormona metabolicamente ativa T3.",
    "indicacoes": "Hipotiroidismo primário ou secundário e supressão de TSH no carcinoma diferenciado da tiroide.",
    "alerta": "Tomar em jejum rigoroso 30-60 min antes do pequeno-almoço com água; o cálcio e ferro inibem profundamente a sua absorção."
  },
  {
    "drug": "Levotiroxina sódica 0.025mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)",
    "mecanismo": "Hormona tiroideia para titulação gradual suave em doentes de elevado risco cardiovascular.",
    "indicacoes": "Iniciação no hipotiroidismo do doente idoso ou com cardiopatia isquémica prévia conhecida.",
    "alerta": "Uma reposição rápida e intempestiva pode desencadear angina de peito aguda, arritmias graves e enfarte agudo do miocárdio."
  },
  {
    "drug": "Levotiroxina sódica 0.088 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)",
    "mecanismo": "Ajuste fino da homeostase tiroideia para alcançar e manter o eutiroidismo clínico e bioquímico.",
    "indicacoes": "Dose de precisão no hipotiroidismo com alvo de TSH estrito e manutenção da estabilidade metabólica.",
    "alerta": "Avaliar TSH sérica 6 a 8 semanas após qualquer alteração da dose para validar a resposta terapêutica."
  },
  {
    "drug": "Levotiroxina sódica 0.112 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)",
    "mecanismo": "Dose individualizada para controlo de retroalimentação negativa sobre a secreção hipofisária de tirotropina.",
    "indicacoes": "Hipotiroidismo pós-tiroidectomia total ou bócio com necessidade de supressão da TSH.",
    "alerta": "A sobredosagem iatrogénica resulta em tirotoxicose subclínica com perda de densidade óssea e fibrilhação auricular."
  },
  {
    "drug": "Tiamazol 5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Antitiroideus derivados de tioimidazol",
    "mecanismo": "Inibe a enzima tiroperoxidase (TPO), bloqueando a iodação dos resíduos tirosil na tiroglobulina e o acoplamento de iodotirosinas.",
    "indicacoes": "Tratamento do hipertiroidismo na Doença de Graves-Basedow e preparação para cirurgia da tiroide ou radioiodo.",
    "alerta": "Efeito adverso idiossincrático perigoso: agranulocitose (fazer hemograma urgente se o doente apresentar febre súbita e odinofagia)."
  },
  {
    "drug": "Insulina Aspártico [Fiasp] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação rápida/ultrarrápida",
    "mecanismo": "Análogo de insulina com adição de niacinamida que acelera a absorção inicial; atua nos recetores tirosina-quinase captando glicose nos tecidos.",
    "indicacoes": "Controlo das excursões glicémicas pós-prandiais na diabetes tipo 1 e tipo 2.",
    "alerta": "Administrar imediatamente no início da refeição (0 a 2 minutos) ou até 20 minutos após o início; risco de hipoglicemia rápida."
  },
  {
    "drug": "Insulina Degludec [Tresiba] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas basais de ação ultralonga",
    "mecanismo": "Forma multi-hexâmeros estáveis no tecido subcutâneo após injeção com libertação lenta e perfil plano ultraestável sem pico (> 42 horas).",
    "indicacoes": "Tratamento de manutenção basal da diabetes mellitus no adulto e criança.",
    "alerta": "Permite flexibilidade no horário de injeção diária; menor incidência de hipoglicemias noturnas."
  },
  {
    "drug": "Insulina Glargina 100Ul/ml [LANTUS] - sol. Injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas basais de ação prolongada",
    "mecanismo": "Análogo de insulina solúvel em pH ácido que precipita no pH neutro subcutâneo em microcristais com libertação contínua de 24 horas.",
    "indicacoes": "Controlo basal contínuo da glicemia em diabetes tipo 1 e tipo 2 em toma única diária.",
    "alerta": "NUNCA misturar na mesma seringa com outras insulinas (o pH ácido precipita outras formulações)."
  },
  {
    "drug": "Insulina Glulisina [Apidra] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação rápida",
    "mecanismo": "Análogo de insulina recombinante de ação rápida que dissocia rapidamente em monómeros para controlo prandial.",
    "indicacoes": "Diabetes mellitus em doentes que necessitam de insulina rápida às refeições ou perfusão contínua em bombas de insulina.",
    "alerta": "Administrar 15 minutos antes da refeição ou imediatamente após; rotatividade estrita dos locais de injeção para prevenir lipodistrofia."
  },
  {
    "drug": "Insulina humana 100Ul/ml [ACTRAPID] - sol. Injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação curta (regular)",
    "mecanismo": "Insulina regular solúvel; única formulação tradicional que pode ser administrada por via intravenosa com ação anabólica celular.",
    "indicacoes": "Emergências hiperglicémicas (cetoacidose diabética e estado hiperosmolar) e controlo prandial clássico.",
    "alerta": "Se administrada por via subcutânea requer intervalo de 30 minutos antes de comer pelo tempo de dissociação dos hexâmeros."
  },
  {
    "drug": "Insulina humana+isofânica 30+70Ul/ml [MIXTARD/HUMULIN M3]",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Misturas de insulina bifásica",
    "mecanismo": "Mistura fixa com 30% de insulina regular (início rápido) e 70% de insulina NPH cristalizada com protamina (ação intermédia prolongada).",
    "indicacoes": "Diabetes mellitus tipo 2 onde se pretende simplificar a posologia com cobertura mista prandial e basal.",
    "alerta": "Aspeto turvo; necessita de ser gentilmente rolada/agitada 10 vezes antes de cada aplicação para homogeneizar a suspensão."
  },
  {
    "drug": "Insulina issofânica 100Ul/ml [INSULATARD/HUMULIN NPH]",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação intermédia (NPH)",
    "mecanismo": "Complexo cristalino de insulina humana com protamina de pH neutro com semivida de absorção intermédia e pico às 4-8 horas.",
    "indicacoes": "Fornecimento de níveis basais de insulina em doentes com diabetes tipo 1 ou 2.",
    "alerta": "Apresenta um pico marcado de ação que se associa a risco de hipoglicemia noturna se administrada ao final da tarde."
  },
  {
    "drug": "Insulina lispro (solúvel + protamina) 100 U/ml [HUMALOG MIX 25]",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Misturas de insulina análoga bifásica",
    "mecanismo": "25% de insulina análoga rápida lispro e 75% de suspensão de lispro-protamina de ação retardada.",
    "indicacoes": "Diabetes mellitus no adulto com tomas antes das principais refeições (pequeno-almoço e jantar).",
    "alerta": "Início mais rápido do que a mistura humana convencional; injetar imediatamente antes da refeição."
  },
  {
    "drug": "Insulina Lispro [Humalog Kwiqpen] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação rápida",
    "mecanismo": "Inversão pontual dos aminoácidos prolina e lisina na cadeia B que previne a autoassociação em hexâmeros estáveis.",
    "indicacoes": "Controlo das hiperglicemias prandiais na diabetes tipo 1 e tipo 2.",
    "alerta": "Monitorizar rigorosamente a glicemia capilar; reconhecer sintomas neuroglicopénicos de hipoglicemia (sudação fria, tremor e confusão)."
  },
  {
    "drug": "Acarbose 50mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores da alfa-glucosidase",
    "mecanismo": "Inibe competitivamente as enzimas alfa-glucosidases intestinais na bordadura em escova, retardando a digestão e absorção de hidratos de carbono.",
    "indicacoes": "Diabetes mellitus tipo 2 com hiperglicemia pós-prandial desproporcionada em conjunto com a dieta.",
    "alerta": "Efeitos adversos gastrointestinais muito comuns (flatulência e diarreia osmótica); em caso de hipoglicemia tratar com glicose pura e não com sacarose."
  },
  {
    "drug": "Dapagliflozina 10 mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores do cotransportador SGLT2",
    "mecanismo": "Inibe o cotransportador sódio-glicose 2 (SGLT2) no túbulo contornado proximal renal, promovendo glicosúria e natriurese independentes da insulina.",
    "indicacoes": "Diabetes tipo 2, insuficiência cardíaca (com FE reduzida ou preservada) e doença renal crónica.",
    "alerta": "Risco de infeções micóticas genitais (candidíase), depleção de volume e cetoacidose diabética euglicémica rara."
  },
  {
    "drug": "Empagliflozina 10 mg Comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores do cotransportador SGLT2",
    "mecanismo": "Glicosúrico oral altamente seletivo que reduz a pressão intraglomerular, a pré-carga e melhora a sobrevivência cardiovascular.",
    "indicacoes": "Tratamento da diabetes tipo 2, insuficiência cardíaca sintomática e proteção nefrocardiovascular.",
    "alerta": "Assegurar boa hidratação; suspender temporariamente antes de cirurgias programadas ou doenças agudas com prostração."
  },
  {
    "drug": "Empagliflozina 25 mg Comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores do cotransportador SGLT2",
    "mecanismo": "Inibição de transporte de glicose de alta potência que reduz a hemoglobina glicada (HbA1c), a pressão arterial sistólica e o peso.",
    "indicacoes": "Dose superior para otimização do controlo glicémico na diabetes tipo 2 em doentes com função renal preservada.",
    "alerta": "A eficácia hipoglicemiante diminui se a TFG < 45 mL/min, embora mantenha proteção nefro e cardioprotetora."
  },
  {
    "drug": "Gliclazida 30mg LM - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Sulfonilureias",
    "mecanismo": "Sulfonilureia de segunda geração que bloqueia os canais de potássio ATP-dependentes nas células beta pancreáticas, estimulando a secreção de insulina.",
    "indicacoes": "Tratamento da diabetes tipo 2 quando as medidas higienodietéticas e metformina são insuficientes.",
    "alerta": "Risco considerável de hipoglicemia prolongada e ganho ponderal; tomar obrigatoriamente logo antes do pequeno-almoço."
  },
  {
    "drug": "Metformina 1g - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Biguanidas",
    "mecanismo": "Ativa a enzima AMPK hepática, inibindo a neoglicogénese e a produção hepática de glicose e aumentando a sensibilidade muscular periférica.",
    "indicacoes": "Tratamento de primeira linha da Diabetes Mellitus tipo 2 e síndrome do ovário poliquístico.",
    "alerta": "Risco de acidose láctica; contraindicada se TFG < 30 mL/min; suspender 48h antes de exames com contraste iodado intravenoso."
  },
  {
    "drug": "Metformina 500mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Biguanidas",
    "mecanismo": "Reduz a absorção intestinal de glicose e não estimula a secreção de insulina, não provocando hipoglicemia em monoterapia.",
    "indicacoes": "Início da terapêutica antidiabética na DM2 em titulação gradual para adaptar a tolerância gastrointestinal.",
    "alerta": "Provoca frequentemente náuseas, diarreia, dor abdominal e sabor metálico; tomar sempre durante ou após as refeições."
  },
  {
    "drug": "Metformina 850mg-comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Biguanidas",
    "mecanismo": "Sensibilizador periférico da insulina que promove captação celular de glicose e estabilidade ponderal.",
    "indicacoes": "Dose intermédia padrão para manutenção do controlo glicémico estável na diabetes tipo 2.",
    "alerta": "O uso continuado a longo prazo está associado a má absorção de vitamina B12 (monitorizar níveis anualmente)."
  },
  {
    "drug": "Sitagliptina 100mg comp.",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores da DPP-4 (Gliptinas)",
    "mecanismo": "Inibe seletivamente a enzima dipeptidil peptidase-4 (DPP-4), prolongando a semivida das hormonas incretinas ativas GLP-1 e GIP.",
    "indicacoes": "Diabetes tipo 2 em associação com metformina ou em monoterapia se houver intolerância a outras classes.",
    "alerta": "Estímulo da insulina estritamente dependente da glicose (baixo risco de hipoglicemia); risco raro de pancreatite aguda."
  },
  {
    "drug": "Slinda Drospirenona 4 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progestagénios isolados",
    "mecanismo": "Pílula só de progestagénio (POP) com janela de toma de 24h que inibe a ovulação, espessa o muco cervical e atrofia o endométrio.",
    "indicacoes": "Contraceção oral em mulheres, incluindo adolescentes e mulheres a amamentar ou com contraindicação aos estrogénios.",
    "alerta": "A drospirenona tem propriedades antimineralocorticóides; vigiar potássio em doentes medicadas com poupadores de K+."
  },
  {
    "drug": "Amelye - Dienogest 2 mg + Etinilestradiol 0.03 mg Comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos hormonais combinados",
    "mecanismo": "Inibe a libertação de gonadotrofinas (FSH e LH), suprimindo a ovulação; o dienogest confere marcada atividade antiandrogénica periférica.",
    "indicacoes": "Contraceção oral feminina e tratamento do acne inflamatório moderado em mulheres que necessitam de contraceção.",
    "alerta": "Aumento do risco relativo de tromboembolismo venoso (TEV/embolia pulmonar); contraindicado em fumadoras com mais de 35 anos."
  },
  {
    "drug": "Aranka - Drospirenona+etinilestradiol 3+0.03mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos hormonais combinados",
    "mecanismo": "Associação de estrogénio com progestagénio que mimetiza a progesterona natural, prevenindo a retenção hidrossalina e o ganho de peso.",
    "indicacoes": "Contraceção oral, sintomas de retenção hídrica hormonal e acne ligeiro a moderado.",
    "alerta": "Contraindicado em mulheres com antecedentes de trombose venosa profunda, enxaqueca com aura ou neoplasia estrogénio-dependente."
  },
  {
    "drug": "Cerazette- Desogestrel 0.075mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos só de progestagénio",
    "mecanismo": "Progestagénio de terceira geração isolado que bloqueia a ovulação de forma consistente através da inibição do pico de LH.",
    "indicacoes": "Contraceção oral na mulher em período de amamentação e alternativa segura em doentes com risco trombótico aumentado.",
    "alerta": "Padrão de sangramento menstrual irregular muito frequente (spotting imprevisível ou amenorreia completa); janela de esquecimento de 12 horas."
  },
  {
    "drug": "Depo-Provera - Medroxiprogesterona 150mg/ml - sol. injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progestagénios injetáveis de depósito",
    "mecanismo": "Progestagénio intramuscular de depósito que suspende o eixo hipotálamo-hipófise-ovário durante 3 meses.",
    "indicacoes": "Contraceção de longa duração administrada a cada 12 semanas.",
    "alerta": "O uso prolongado por mais de 2 anos associa-se a perda reversível de densidade mineral óssea e atraso no retorno à fertilidade."
  },
  {
    "drug": "Dienogest 2mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progestagénios para endometriose",
    "mecanismo": "Progestagénio oral que cria um ambiente endócrino hipoestrogénico e hiperprogestogénico moderado, promovendo atrofia dos focos endometriais.",
    "indicacoes": "Tratamento de primeira linha da dor pélvica associada à endometriose comprovada.",
    "alerta": "Gera amenorreia na maioria das doentes e perdas sanguíneas irregulares; não deve ser utilizado estritamente como contracetivo primário."
  },
  {
    "drug": "Harmonet- Etinilestradiol+gestodeno 0.02+0.075mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos hormonais combinados",
    "mecanismo": "Contracetivo oral combinado de baixa dose com progestagénio de terceira geração; excelente controlo do ciclo menstrual.",
    "indicacoes": "Prevenção da gravidez em mulheres em idade fértil.",
    "alerta": "Risco tromboembólico venoso ligeiramente superior comparativamente aos regimes combinados com levonorgestrel."
  },
  {
    "drug": "Activelle- Estradiol+noretisterona 0,5mg+0.1mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Terapêutica hormonal de substituição combinada",
    "mecanismo": "Terapêutica hormonal contínua: repõe os níveis basais de estrogénio com progestagénio contínuo para evitar hiperplasia do endométrio.",
    "indicacoes": "Alívio dos sintomas vasomotores da menopausa (afrontamentos) e prevenção de osteoporose em mulheres com útero intacto.",
    "alerta": "Utilizar a menor dose eficaz pelo menor tempo possível; contraindicado no cancro da mama e eventos tromboembólicos prévios."
  },
  {
    "drug": "Estradiol 2 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Estrogénios orais",
    "mecanismo": "Hormona sexual feminina endógena que estimula os recetores estrogénicos alfa e beta em tecidos alvo.",
    "indicacoes": "Terapêutica hormonal de substituição no hipoestrogenismo menopáusico em mulheres histerectomizadas (sem útero).",
    "alerta": "Em mulheres com útero, é OBRIGATÓRIA a associação a um progestagénio para prevenir hiperplasia e adenocarcinoma do endométrio."
  },
  {
    "drug": "Ciproterona 50 mg - comp (EF)",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Antiandrogénios",
    "mecanismo": "Antagonista competitivo do recetor de androgénios nos órgãos alvo periféricos com potente efeito progestagénico antigonadotrófico.",
    "indicacoes": "Carcinoma avançado da próstata, hirsutismo androgénico severo na mulher e redução do impulso sexual desviante em homens.",
    "alerta": "Vigiar estritamente a função hepática (risco de hepatotoxicidade fatal) e risco de meningiomas intracranianos com doses elevadas cumulativas."
  },
  {
    "drug": "Livial - Tibolona 2.5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Moduladores do recetor de estrogénios",
    "mecanismo": "Esteróide sintético metabolizado em compostos com propriedades mistas estrogénicas, progestagénicas e androgénicas tecido-específicas.",
    "indicacoes": "Tratamento dos sintomas de deficiência estrogénica na pós-menopausa tardia (pelo menos 12 meses após a última menstruação).",
    "alerta": "Aumenta o risco de AVC isquémico em mulheres idosas (> 60 anos) e pode reativar células de cancro da mama prévio."
  },
  {
    "drug": "Progesterona 200mg",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progesterona micronizada",
    "mecanismo": "Progesterona bioidêntica que transforma o endométrio proliferativo em secretor e protege o endométrio da estimulação estrogénica.",
    "indicacoes": "Suporte da fase lútea na procriação medicamente assistida, prevenção de parto pré-termo e THS combinada.",
    "alerta": "Por via oral induz sonolência acentuada e tonturas nas horas seguintes (preferir administração noturna ou via vaginal)."
  },
  {
    "drug": "Diclofenac 10mg/g - gel",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs tópicos derivados do ácido acético",
    "mecanismo": "AINE que inibe localmente as ciclo-oxigenases teciduais, reduzindo mediadores inflamatórios no tecido sinovial e tendões.",
    "indicacoes": "Alívio local da dor e inflamação pós-traumática dos tendões, ligamentos, músculos e articulações (entorses, contusões).",
    "alerta": "Baixa absorção sistémica; não aplicar sobre pele escoriada ou mucosas; fotossensibilidade local transitória."
  },
  {
    "drug": "Diclofenac 50mg - comp",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs orais derivados do ácido acético",
    "mecanismo": "Inibidor potente de COX-1 e COX-2 que reduz prostaglandinas inflamatórias com rápida ação anti-inflamatória e analgésica.",
    "indicacoes": "Artrite reumatoide, osteoartrose dolorosa, espondilite anquilosante e dor lombar aguda.",
    "alerta": "Entre os AINEs tradicionais é o que apresenta maior risco cardiovascular trombótico (contraindicado em insuficiência cardíaca congestiva e coronariopatia)."
  },
  {
    "drug": "Diclofenac 75mg/3ml-sol. injectável",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs injetáveis",
    "mecanismo": "Ação anti-inflamatória de início rápido no controlo da dor visceral ou musculoesquelética intensa.",
    "indicacoes": "Urgência em cólica renal aguda nefrética, crises agudas de gota e exacerbações inflamatórias agudas graves.",
    "alerta": "Injeção estritamente intramuscular profunda no quadrante superior externo da nádega para evitar necrose assética e lesão do nervo ciático."
  },
  {
    "drug": "Ibuprofeno 20mg/ml - sol.oral",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs derivados do ácido propiónico",
    "mecanismo": "Inibição reversível de COX-1 e COX-2 com ação analgésica, antipirética e anti-inflamatória em suspensão líquida.",
    "indicacoes": "Febre e dor inflamatória ligeira a moderada (odontalgia, otite média) em pediatria.",
    "alerta": "Administrar com alimentos para minimizar agressão gástrica; manter hidratação adequada para proteger a função renal na criança desidratada."
  },
  {
    "drug": "Ibuprofeno 600mg- comp",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs derivados do ácido propiónico",
    "mecanismo": "Dose anti-inflamatória plena que bloqueia a produção de prostaglandinas inflamatórias periféricas.",
    "indicacoes": "Doenças reumáticas crónicas, inflamação pós-cirúrgica, traumatismos osteoarticulares e dismenorreia primária.",
    "alerta": "Risco de toxicidade gastrointestinal e vasoconstrição renal (deterioração da função renal se associado a IECAs e diuréticos: 'triple whammy')."
  },
  {
    "drug": "Ácido alendrónico 70 mg - comp",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Medicamentos para doenças ósseas",
    "subsubgrupo": "Bisfosfonatos para osteoporose",
    "mecanismo": "Análogo do pirofosfato que se liga à hidroxiapatite óssea e inibe seletivamente a reabsorção mediada pelos osteoclastos.",
    "indicacoes": "Tratamento e prevenção da osteoporose pós-menopáusica e osteoporose induzida por corticosteroides.",
    "alerta": "Tomar em jejum com copo cheio de água da torneira e permanecer em posição ereta (não deitar) por 30 minutos (risco severo de esofagite erosiva)."
  },
  {
    "drug": "Glucosamina 1500 mg Pó sol oral Saq",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Medicamentos para doenças ósseas",
    "subsubgrupo": "Condroprotetores e artrose",
    "mecanismo": "Substrato natural para a síntese dos glicosaminoglicanos da matriz extracelular da cartilagem articular.",
    "indicacoes": "Alívio dos sintomas de osteoartrose ligeira a moderada do joelho.",
    "alerta": "Efeito de alívio sintomático muito lento (início após semanas de toma continuada); precaução em alérgicos a marisco."
  },
  {
    "drug": "Tiocolquicosido 4mg - cáps",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Relaxantes musculares",
    "subsubgrupo": "Miorrelaxantes de ação central",
    "mecanismo": "Derivado semisintético da colchicina com ação agonista seletiva nos recetores gabaérgicos e glicinérgicos inibitórios medulares.",
    "indicacoes": "Tratamento adjuvante de contraturas musculares agudas associadas a patologia dolorosa da coluna vertebral (lombalgias).",
    "alerta": "Potencial aneugénico/mutagénico; tratamento oral restrito a um máximo de 7 dias consecutivos; contraindicado na gravidez."
  },
  {
    "drug": "Tiocolquicosido 4mg/2ml - sol. Injectável",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Relaxantes musculares",
    "subsubgrupo": "Miorrelaxantes de ação central",
    "mecanismo": "Relaxante muscular parenteral que deprime os reflexos polissinápticos envolvidos no tónus e espasmo muscular.",
    "indicacoes": "Contratura muscular dolorosa aguda em contexto de urgência musculoesquelética.",
    "alerta": "Duração máxima limitada a 5 dias; contraindicado em doentes com epilepsia ou em risco de convulsões."
  },
  {
    "drug": "Cetirizina 10mg - comp",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 2ª geração",
    "mecanismo": "Antagonista seletivo dos recetores histaminérgicos H1 periféricos com fraca penetração na barreira hematoencefálica.",
    "indicacoes": "Rinite alérgica sazonal e perene (espirros, rinorreia, prurido nasal) e urticária crónica idiopática.",
    "alerta": "Muito menos sedativa do que os anti-histamínicos de 1ª geração, mas pode induzir ligeira sonolência em indivíduos suscetíveis."
  },
  {
    "drug": "Cetirizina 1 mg/ml - sol.oral",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 2ª geração",
    "mecanismo": "Inibe a libertação de mediadores da fase tardia da reação alérgica e a migração de eosinófilos.",
    "indicacoes": "Rinite alérgica e conjuntivite alérgica em pediatria a partir dos 2 anos de idade.",
    "alerta": "Ajustar dose em doentes com insuficiência renal com base na depuração da creatinina."
  },
  {
    "drug": "Di-hexazina 6 mg Comp",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos estimulantes do apetite",
    "mecanismo": "Derivado anti-histamínico de primeira geração com propriedades orexígenas mediadas pelo bloqueio de recetores centrais da serotonina.",
    "indicacoes": "Estimulação transitória do apetite na astenia e convalescença com perda de peso.",
    "alerta": "Causa sedação considerável e sonolência; não deve ser utilizado como substituto de nutrição clínica equilibrada."
  },
  {
    "drug": "Dimetindeno 1 mg/ml - sol.oral",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 1ª geração",
    "mecanismo": "Antagonista clássico dos recetores H1 que atravessa a barreira hematoencefálica com pronunciado efeito antipruriginoso e sedativo.",
    "indicacoes": "Tratamento sintomático de prurido em dermatites, varicela, picadas de insetos e urticária.",
    "alerta": "Forte ação sedativa em crianças pequenas; pode induzir excitação paradoxal motora em lactentes."
  },
  {
    "drug": "Hidroxizina 25mg - comp",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 1ª geração",
    "mecanismo": "Anti-H1 de primeira geração piperazínico com elevada afinidade e ação ansiolítica, sedativa e antipruriginosa a nível do SNC.",
    "indicacoes": "Prurido rebelde associado a eczema e urticária e alívio sintomático da ansiedade no adulto.",
    "alerta": "Risco dose-dependente de prolongamento do intervalo QT (dose máxima em adultos 100 mg/dia e idosos 50 mg/dia); sonolência intensa."
  },
  {
    "drug": "Hidroxizina 2 mg/ml - sol.oral",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 1ª geração",
    "mecanismo": "Deprime estruturas subcorticais no sistema límbico enquanto bloqueia a histamina nos tecidos periféricos.",
    "indicacoes": "Prurido alérgico intenso em pediatria e pré-medicação sedativa antes de cirurgias ou procedimentos.",
    "alerta": "Efeitos anticolinérgicos marcados (secura de boca e retenção urinária); contraindicado em doentes com fatores de risco para arritmias."
  },
  {
    "drug": "Aciclovir 5% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antivíricos tópicos",
    "mecanismo": "Análogo nucleosídico ativado pela timidina quinase viral que inibe a síntese de DNA das células infetadas pelo herpes simplex.",
    "indicacoes": "Infeções herpéticas cutâneas labiais recidivantes (herpes labial agudo).",
    "alerta": "Iniciar a aplicação o mais precocemente possível no período prodrómico (formigueiro/ardor); não aplicar dentro da boca ou olhos."
  },
  {
    "drug": "Ácido fusídico 20 mg/g - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antibacterianos tópicos",
    "mecanismo": "Inibe a síntese proteica bacteriana através do bloqueio do fator de elongação G (EF-G), com excelente penetração cutânea.",
    "indicacoes": "Infeções cutâneas primárias e secundárias por Staphylococcus aureus (impetigo, foliculite, furunculose).",
    "alerta": "Limitar o uso estrito a 7-14 dias para evitar seleção de estirpes estafilocócicas resistentes."
  },
  {
    "drug": "Bacitracina+retinol 500+2000UI/g - pomada",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antibacterianos tópicos cicatrizantes",
    "mecanismo": "A bacitracina inibe a desfosforilação do transportador lipídico da parede bacteriana enquanto o retinol promove a epitelização tecidual.",
    "indicacoes": "Pequenas feridas infetadas, escoriações, queimaduras superficiais e prevenção de infeções cutâneas ligeiras.",
    "alerta": "Risco de dermatite de contacto alérgica pela bacitracina; não aplicar em feridas profundas e exsudativas."
  },
  {
    "drug": "Cetoconazol 20 mg/g - champô",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antifúngicos dermatológicos",
    "mecanismo": "Imidazol que inibe a síntese de ergosterol na membrana das leveduras lipofílicas do género Malassezia furfur.",
    "indicacoes": "Caspa rebelde, dermatite seborreica do couro cabeludo e pitiríase versicolor.",
    "alerta": "Deixar atuar durante 3 a 5 minutos no couro cabeludo antes de enxaguar para garantir absorção folicular."
  },
  {
    "drug": "Clotrimazol 1% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antifúngicos dermatológicos",
    "mecanismo": "Antifúngico imidazólico tópico de largo espetro contra dermatófitos, leveduras e outros fungos patogénicos cutâneos.",
    "indicacoes": "Tinha dos pés (pé de atleta), tinha crural, tinha corporal e candidíase cutânea.",
    "alerta": "Manter a aplicação por 1 a 2 semanas após o desaparecimento visível das lesões para prevenir recidivas micosas."
  },
  {
    "drug": "lodopovidona 100mg/ml - sol. cutânea",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antisséticos e desinfetantes cutâneos",
    "mecanismo": "Antissético iodado de largo espetro com libertação sustentada de iodo diatómico ativo que desnatura proteínas celulares microbianas.",
    "indicacoes": "Desinfeção da pele intacta antes de punções e atos cirúrgicos e tratamento de feridas superficiais.",
    "alerta": "Não associar a derivados mercuriais no mesmo local (forma iodeto de mercúrio cáustico); mancha temporariamente a pele."
  },
  {
    "drug": "lodopovidona 40 mg/ml - espuma cutânea",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antisséticos e desinfetantes cutâneos",
    "mecanismo": "Solução com tensoativos que confere ação detergente e antissética de largo espetro bactericida e virucida.",
    "indicacoes": "Lavagem cirúrgica das mãos das equipas e limpeza antissética pré-operatória da pele do doente.",
    "alerta": "Enxaguar abundantemente com água esterilizada após a lavagem; evitar em recém-nascidos e doentes com bócio."
  },
  {
    "drug": "Permetrina 10 mg/g Creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Ectoparasiticidas e escabicidas",
    "mecanismo": "Piretróide neurotóxico sintético que despolariza as membranas axonais dos parasitas, mantendo abertos os canais de sódio.",
    "indicacoes": "Tratamento de primeira linha da escabiose (sarna) humana por Sarcoptes scabiei e pediculose.",
    "alerta": "Aplicar em todo o corpo do pescoço até à ponta dos pés e deixar atuar 8 a 14 horas antes de lavar; tratar simultaneamente os contactos próximos."
  },
  {
    "drug": "Solução de eosina 2% - sol. cutânea",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antisséticos secantes cutâneos",
    "mecanismo": "Corante antissético suave com ação adstringente e pronunciada atividade secante de exsudados cutâneos.",
    "indicacoes": "Tratamento de lesões cutâneas exsudativas, eritema da fralda com maceração e intertrigo.",
    "alerta": "Coloração vermelha intensa na pele que mascara o eritema subjacente e pode dificultar o diagnóstico da evolução da lesão."
  },
  {
    "drug": "CREME LOÇÃO HIDRATANTE CORPORAL",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Hidratantes corporais",
    "mecanismo": "Fórmula bifásica com humectantes e lípidos que reparam a barreira epidérmica e previnem a perda transepidérmica de água.",
    "indicacoes": "Xerose cutânea, pele seca e atópica e proteção da integridade da pele no doente idoso ou acamado.",
    "alerta": "Aplicar preferencialmente logo após o banho com a pele ligeiramente humedecida para retenção máxima de humidade."
  },
  {
    "drug": "EXTRA FORMULÁRIO - Salicilato de colina 87 mg/g Gel bucal",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Géis analgésicos bucais",
    "mecanismo": "Salicilato tópico analgésico e anti-inflamatório que penetra com facilidade na mucosa gengival e orofaríngea.",
    "indicacoes": "Alívio da dor em aftas, irritações gengivais causadas por próteses dentárias ou aparelhos ortodônticos.",
    "alerta": "Não mastigar nem ingerir alimentos imediatamente após aplicação para não remover o filme protetor aderido à mucosa."
  },
  {
    "drug": "Sabonete Líquido Neutro 500ml",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Higiene da pele sensível",
    "mecanismo": "Detergente sintético (syndet) com pH neutro ou ligeiramente ácido que limpa sem retirar o manto lipídico protetor cutâneo.",
    "indicacoes": "Higiene diária da pele sensível, dermatite atópica, pele do idoso e lavagem suave de feridas.",
    "alerta": "Isento de agentes alcalinos agressivos; uso externo com enxaguamento abundante."
  },
  {
    "drug": "Vaselina esterilizada - pomada",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Emolientes oclusivos neutros",
    "mecanismo": "Mistura de hidrocarbonetos purificados que cria uma película oclusiva hidrofóbica impermeável sobre o estrato córneo.",
    "indicacoes": "Hiperqueratose grave, cieiro labial, fissuras cutâneas e proteção mecânica contra irritantes externos e fricção.",
    "alerta": "Pode agravar lesões de acne se aplicada no rosto devido às suas propriedades oclusivas e comedogénicas."
  },
  {
    "drug": "Vitamina A composta - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Cicatrizantes epiteliais",
    "mecanismo": "Associação de retinol com substâncias protetoras que estimula a proliferação celular epitelial e síntese de colagénio.",
    "indicacoes": "Tratamento de eritema da fralda, queimaduras solares de 1º grau, mamilos gretados e escoriações.",
    "alerta": "Em caso de amamentação, limpar minuciosamente os mamilos antes de amamentar para não ser ingerido pelo lactente."
  },
  {
    "drug": "Isotretinoína 10mg - cáps",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antiacneicos",
    "subsubgrupo": "Retinóides sistémicos para o acne",
    "mecanismo": "Estereoisómero do ácido retinóico; reduz drasticamente o tamanho e atividade das glândulas sebáceas e suprime a queratinização folicular.",
    "indicacoes": "Formas graves de acne nódulo-quístico e acne conglobata refratárias a antibióticos sistémicos.",
    "alerta": "TERATOGÉNICIDADE SEVERA (malformações fetais em 100%); programa de prevenção de gravidez rigoroso obrigatório; monitorizar perfil lipídico e enzimas hepáticas."
  },
  {
    "drug": "Peróxido de benzoílo 50 mg/g - gel",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antiacneicos",
    "subsubgrupo": "Antiacneicos tópicos oxidantes",
    "mecanismo": "Liberta radicais livres de oxigénio bactericidas para Cutibacterium acnes e exerce ação queratolítica e comedolítica.",
    "indicacoes": "Acne vulgar inflamatório ligeiro a moderado com pápulas e pústulas.",
    "alerta": "Pode descolorar e manchar de forma irreversível tecidos, roupas e cabelos; pode induzir descamação e ardor inicial."
  },
  {
    "drug": "Betametasona 0.5 mg/g + Ácido salicílico 20 mg/g Sol cut",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides associados a queratolíticos",
    "mecanismo": "O ácido salicílico dissolve a camada córnea hiperqueratósica facilitando a penetração profunda do corticosteroide anti-inflamatório.",
    "indicacoes": "Psoríase do couro cabeludo, eczema queratósico e lesões descamativas espessas crónicas.",
    "alerta": "Não aplicar em áreas extensas para evitar intoxicação sistémica por salicilatos (salicilismo) e absorção de corticoide."
  },
  {
    "drug": "Betametasona ácido salicilico 0,5+30mg/g - pomada",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides associados a queratolíticos",
    "mecanismo": "Veículo gorduroso oclusivo com ação queratolítica reforçada que remove placas escamosas e reduz o eritema e prurido.",
    "indicacoes": "Dermatoses inflamatórias crónicas secas e hiperqueratósicas como psoríase em placas das palmas e plantas.",
    "alerta": "Contraindicado em infeções cutâneas virais (herpes, varicela), bacterianas primárias ou fúngicas sem tratamento associado."
  },
  {
    "drug": "Dexametasona + clioquinol 0.1+3% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides associados a anti-infeciosos",
    "mecanismo": "Associação de corticosteroide com antissético halogénio com largo espetro antibacteriano e antifúngico.",
    "indicacoes": "Eczemas e dermatites com suspeita ou evidência de superinfeção microbiana secundária.",
    "alerta": "O clioquinol pode manchar roupas de amarelo; não utilizar de forma contínua e prolongada."
  },
  {
    "drug": "Dexametasona 0.1% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides tópicos de média potência",
    "mecanismo": "Corticosteroide sintético fluorado que induz a vasoconstrição capilar cutânea e inibe os mediadores da inflamação dérmica.",
    "indicacoes": "Dermatite atópica, dermatite de contacto alérgica e líquen plano.",
    "alerta": "A aplicação prolongada no rosto causa atrofia cutânea irreversível, telangiectasias e dermatite perioral."
  },
  {
    "drug": "Hidrocortisona 1% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides tópicos de baixa potência",
    "mecanismo": "Corticosteroide de fraca potência com excelente perfil de segurança local e baixa taxa de absorção sistémica.",
    "indicacoes": "Lesões inflamatórias no rosto, zonas de pregas cutâneas (intertrigo) e dermatite ligeira em pediatria.",
    "alerta": "Corticosteroide tópico de eleição para aplicação em zonas anatómicas de pele fina e crianças."
  },
  {
    "drug": "Dimetindeno 1 mg/g Gel Bisn 30 g",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antipruriginosos tópicos",
    "subsubgrupo": "Anti-histamínicos tópicos",
    "mecanismo": "Bloqueia a histamina nos recetores H1 periféricos cutâneos com veículo refrescante que acalma o prurido imediatamente.",
    "indicacoes": "Picadas de insetos, queimaduras solares superficiais ligeiras e eritemas pruriginosos localizados.",
    "alerta": "Evitar exposição solar direta da área tratada pelo risco potencial de reações de fotossensibilização cutânea."
  },
  {
    "drug": "Prometazina 2mg/g - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antipruriginosos tópicos",
    "subsubgrupo": "Anti-histamínicos tópicos",
    "mecanismo": "Anti-histamínico fenotiazínico com pronunciada ação anestésica local e bloqueadora da histamina.",
    "indicacoes": "Prurido localizado de etiologia alérgica e eritema por picadas de artrópodes.",
    "alerta": "Elevadíssimo potencial alergénico de sensibilização por contacto e fotosensibilização grave (evitar luz solar)."
  },
  {
    "drug": "Cloranfenicol 8 mg/ml - colirio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Anti-infeciosos oftálmicos",
    "subsubgrupo": "Antibacterianos oftálmicos",
    "mecanismo": "Inibe a peptidiltransferase na subunidade ribossomal 50S com espetro alargado e excelente penetração no humor aquoso.",
    "indicacoes": "Conjuntivites bacterianas agudas, queratites e blefarites superficiais.",
    "alerta": "Risco teórico de anemia aplástica idiossincrática irreversível associada ao cloranfenicol; conservar sob refrigeração."
  },
  {
    "drug": "Gentamicina 3mg/g - pomada oft.",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Anti-infeciosos oftálmicos",
    "subsubgrupo": "Aminoglicosídeos oftálmicos",
    "mecanismo": "Aminoglicosídeo bactericida que se liga irreversivelmente à subunidade ribossomal 30S bacteriana com excelente ação sobre Gram-negativos.",
    "indicacoes": "Infeções bacterianas externas do olho e anexos (blefarites, meibomites e úlceras de córnea bacterianas).",
    "alerta": "A formulação em pomada tolda temporariamente a visão; aplicar preferencialmente ao deitar; risco de toxicidade corneal em uso prolongado."
  },
  {
    "drug": "Gentamicina 3 mg/ml - colirio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Anti-infeciosos oftálmicos",
    "subsubgrupo": "Aminoglicosídeos oftálmicos",
    "mecanismo": "Provoca erros de leitura no código genético bacteriano na subunidade 30S com lise da membrana externa.",
    "indicacoes": "Conjuntivites bacterianas e profilaxia cirúrgica pós-operatória oftálmica.",
    "alerta": "Pode induzir irritação ocular e ardor na instilação; não utilizar com lentes de contacto hidrofílicas colocadas."
  },
  {
    "drug": "Prednisolona 10mg/ml - colirio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Corticosteroides oftálmicos",
    "subsubgrupo": "Corticosteroides oftálmicos puros",
    "mecanismo": "Corticosteroide fluorado que inibe a migração leucocitária e suprime edema, fibrinogénese e vascularização inflamatória ocular.",
    "indicacoes": "Uveíte anterior, inflamação pós-cirúrgica ocular (catarata) e conjuntivites alérgicas graves não infeciosas.",
    "alerta": "CONTRAINDICADO ABSOLUTAMENTE na queratite dendrítica herpética (pode causar perfuração corneal); monitorizar a pressão intraocular (risco de glaucoma e catarata)."
  },
  {
    "drug": "Ácido espaglúmico 19 mg/ml Col, sol Fr 10 ml",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Antialérgicos e descongestionantes oftálmicos",
    "subsubgrupo": "Antialérgicos oftálmicos tópicos",
    "mecanismo": "Inibe a degranulação mastocitária na conjuntiva e bloqueia a ativação das vias clássica e alternativa do complemento.",
    "indicacoes": "Conjuntivites alérgicas agudas, crónicas e queratoconjuntivite primaveril.",
    "alerta": "Fármaco preventivo; necessita de início antes do contacto alergénico; ardor ocular ligeiro e transitório após instilação."
  },
  {
    "drug": "Fenilefrina 1,25 mg/ml - colírio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Antialérgicos e descongestionantes oftálmicos",
    "subsubgrupo": "Descongestionantes oftálmicos / Midriáticos",
    "mecanismo": "Agonista adrenérgico alfa-1 pós-sináptico que induz vasoconstrição das arteríolas conjuntivais dilatadas.",
    "indicacoes": "Alívio sintomático do olho vermelho congestivo por irritação conjuntival ligeira e descongestionamento.",
    "alerta": "Pode desencadear crise de glaucoma agudo de ângulo fechado em olhos anatomicamente predispostos por midríase."
  },
  {
    "drug": "Betaxolol 5 mg/ml Col, sol Fr",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Betabloqueadores antiglaucomatosos",
    "mecanismo": "Bloqueador beta-1 cardioseletivo tópico que reduz a produção de humor aquoso pelo epitélio ciliar sem alterar a pupila.",
    "indicacoes": "Hipertensão ocular e glaucoma crónico de ângulo aberto.",
    "alerta": "Menor risco de indução de broncoespasmo do que o timolol em doentes com patologia respiratória obstrutiva ligeira."
  },
  {
    "drug": "Carbómero 2 mg/ml Gel oft Bisn 10 g",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Lágrimas artificiais e lubrificantes oculares",
    "mecanismo": "Polímero hidrofílico de elevado peso molecular que retém água formando uma película protetora viscoelástica prolongada sobre a córnea.",
    "indicacoes": "Tratamento sintomático do olho seco (ceratoconjuntivite sicca) e insuficiência lacrimal.",
    "alerta": "Causa visão turva temporária imediatamente após aplicação (aguardar recuperação visual antes de conduzir)."
  },
  {
    "drug": "Dexametasona + gentamicina 0.3+3mg/g - pomada oft.",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Corticosteroide associado a antibacteriano",
    "mecanismo": "Associação sinérgica com ação anti-inflamatória profunda e cobertura antibacteriana concomitante em pomada.",
    "indicacoes": "Inflamações oculares da câmara anterior com risco de infeção bacteriana sensível à gentamicina.",
    "alerta": "Não utilizar sem avaliação médica prévia de integridade corneal para exclusão de lesão herpética subjacente."
  },
  {
    "drug": "Dexametasona+gentamicina colírio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Corticosteroide associado a antibacteriano",
    "mecanismo": "Solução oftálmica esterilizada de ação combinada antibacteriana e inibidora da cascata de prostaglandinas.",
    "indicacoes": "Blefaroconjuntivites inflamatórias agudas infetadas e profilaxia anti-inflamatória cirúrgica.",
    "alerta": "O uso continuado por mais de 10 dias exige monitorização da pressão intraocular por tonometria."
  },
  {
    "drug": "Dexametasona + neomicina 1+5mg/ml - sol.oto-oftálm.",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Corticosteroide associado a antibacteriano",
    "mecanismo": "Combinação multifuncional de esteróide com aminoglicosídeo de amplo espetro para uso ocular ou ótico.",
    "indicacoes": "Otite externa aguda com edema inflamatório e afeções conjuntivais inflamatórias infetadas.",
    "alerta": "CONTRAINDICADO EM CASO DE SUSPEITA DE PERFURAÇÃO DA MEMBRANA TIMPÂNICA pelo risco grave de ototoxicidade cócleo-vestibular pela neomicina."
  },
  {
    "drug": "Tafluprost 0.015 mg/ml + Timolol 5 mg/ml col",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Antiglaucomatosos associados",
    "mecanismo": "Associação potente: o análogo da prostaglandina (tafluprost) aumenta o escoamento uveoescleral e o timolol diminui a produção de humor aquoso.",
    "indicacoes": "Redução da pressão intraocular no glaucoma de ângulo aberto resistente a monoterapia.",
    "alerta": "Pode induzir escurecimento permanente da íris (pigmentação castanha), crescimento dos cílios e bradicardia sistémica."
  },
  {
    "drug": "Acetonido de fluocinolona+Neomicina+PolimixinaB Got aur",
    "grupo": "Ouvidos (Otologia)",
    "subgrupo": "Anti-infeciosos e anti-inflamatórios auriculares",
    "subsubgrupo": "Associações óticas com corticosteroides",
    "mecanismo": "Associação de corticosteroide com antibacterianos de largo espetro (neomicina para Gram-positivos e polimixina B para Pseudomonas).",
    "indicacoes": "Otite externa aguda bacteriana ('ouvido de nadador') e dermatite infetada do canal auditivo externo.",
    "alerta": "Verificar obrigatoriamente a integridade do tímpano antes da prescrição; a polimixina e neomicina são ototóxicas se passarem para o ouvido médio."
  },
  {
    "drug": "Alopurinol 100mg comp",
    "grupo": "Medicamentos Vários / Metabolismo",
    "subgrupo": "Antigotosos e Uricossúricos",
    "subsubgrupo": "Inibidores da xantina oxidase",
    "mecanismo": "Inibidor análogo purínico da enzima xantina oxidase, impedindo a metabolização de hipoxantina e xantina em ácido úrico.",
    "indicacoes": "Prevenção da gota úrica primária e secundária, nefropatia por uratos e hiperuricemia tumoral em oncologia.",
    "alerta": "NUNCA iniciar durante uma crise aguda de gota (pode agravar e prolongar a crise articular); risco de síndrome de hipersensibilidade grave (DRESS)."
  },
  {
    "drug": "Oxibutinina 5 mg - comp",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Urologia e Bexiga Hiperativa",
    "subsubgrupo": "Antimuscarínicos antiespasmódicos urinários",
    "mecanismo": "Antagonista competitivo dos recetores muscarínicos M1, M2 e M3 no músculo detrusor da bexiga com efeito espasmolítico musculotrópico.",
    "indicacoes": "Incontinência urinária de urgência, bexiga hiperativa neurogénica e urgência miccional com polaciúria.",
    "alerta": "Efeitos adversos anticolinérgicos marcados: boca seca intensa, obstipação, visão turva e risco de agravamento de declínio cognitivo no idoso."
  },
  {
    "drug": "Solifenacina 5mg comp",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Urologia e Bexiga Hiperativa",
    "subsubgrupo": "Antagonistas seletivos M3 da bexiga",
    "mecanismo": "Antagonista com seletividade farmacológica superior para os recetores muscarínicos M3 da bexiga em relação a outros tecidos.",
    "indicacoes": "Tratamento sintomático da incontinência de urgência e/ou aumento da frequência urinária na síndrome da bexiga hiperativa.",
    "alerta": "Melhor tolerabilidade na secura de boca em comparação com a oxibutinina; contraindicado no glaucoma de ângulo fechado e retenção gástrica/urinária."
  },
  {
    "drug": "Tansulosina 0.4mg - cáps LP",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Urologia e Hiperplasia Benigna da Próstata",
    "subsubgrupo": "Antagonistas alfa-1 adrenérgicos uroseletivos",
    "mecanismo": "Bloqueador seletivo dos recetores alfa-1A adrenérgicos na próstata, colo vesical e uretra prostática, reduzindo o tónus muscular sem afetar a tensão vascular.",
    "indicacoes": "Sintomas do trato urinário inferior (LUTS) associados à hiperplasia benigna da próstata (HBP).",
    "alerta": "Causa comum de ejaculação retrógrada inócua e Síndrome da Íris Flácida Intraoperatória (IFIS) durante cirurgias de catarata."
  },
  {
    "drug": "Linagliptina 5mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores da DPP-4 (Gliptinas)",
    "mecanismo": "Inibidor potente e reversível da enzima DPP-4 que prolonga a ação endógena das hormonas incretinas com estímulo insulínico glicose-dependente.",
    "indicacoes": "Tratamento da diabetes tipo 2 no adulto em monoterapia ou terapia combinada.",
    "alerta": "Único inibidor da DPP-4 com excreção predominantemente biliar e fecal (~80%); NÃO requer qualquer ajuste de dose na insuficiência renal avançada."
  },
  {
    "drug": "Memantina 10mg comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antidementes",
    "subsubgrupo": "Antagonistas dos recetores NMDA",
    "mecanismo": "Antagonista não competitivo de afinidade moderada para os recetores glutamatérgicos do tipo NMDA; bloqueia a neurotoxicidade excitotóxica do cálcio.",
    "indicacoes": "Tratamento de doentes com doença de Alzheimer em estadio moderado a grave.",
    "alerta": "Titular semanalmente para minimizar o aparecimento de tonturas, cefaleias, obstipação e sonolência transitórias."
  }
];