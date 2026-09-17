// medicamentos.js
const pharmaData = [
  {
    "drug": "Amoxicilina 1g - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas"
  },
  {
    "drug": "Amoxicilina 250mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas"
  },
  {
    "drug": "Amoxicilina 500mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas"
  },
  {
    "drug": "Benzilpenicilina benzatínica 1,2MUI/4ml - sol.injectável",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas"
  },
  {
    "drug": "Benzilpenicilina benzatínica 2,4MUI/6,5ml - sol.injectável",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas"
  },
  {
    "drug": "Flucloxacilina 500mg - cáps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas"
  },
  {
    "drug": "Amoxicilina e ácido clavulânico 250mg+62,5mg/5ml sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas associadas a Inibidores das Beta-lactamases"
  },
  {
    "drug": "Amoxicilina e ácido clavulânico 400mg+57mg/5ml - sol. oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas associadas a Inibidores das Beta-lactamases"
  },
  {
    "drug": "Amoxicilina e ácido clavulânico 875+125mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Penicilinas associadas a Inibidores das Beta-lactamases"
  },
  {
    "drug": "Doxiciclina 100mg - caps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Tetraciclinas"
  },
  {
    "drug": "Azitromicina 3,75mg/0,25g colirio rec unidose",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos"
  },
  {
    "drug": "Azitromicina 10 mg/ml Pó susp oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos"
  },
  {
    "drug": "Azitromicina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos"
  },
  {
    "drug": "Claritromicina 125mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos"
  },
  {
    "drug": "Claritromicina 250mg/5ml - sol.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos"
  },
  {
    "drug": "Claritromicina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Macrólidos"
  },
  {
    "drug": "Cotrimoxazol (Sulfametoxazol+Trimetoprim) 800+160mg-comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Sulfonamidas e associações"
  },
  {
    "drug": "Sulfametoxazol + Trimetoprim (200+40)mg/5ml (EF)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Sulfonamidas e associações"
  },
  {
    "drug": "Ciprofloxacina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Quinolonas / Fluoroquinolonas"
  },
  {
    "drug": "Levofloxacina 500mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Quinolonas / Fluoroquinolonas"
  },
  {
    "drug": "Clindamicina 150 mg Comp (EF)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos"
  },
  {
    "drug": "Etambutol 400 mg Comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos"
  },
  {
    "drug": "Fosfomicina 3000mg - saquetas",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos"
  },
  {
    "drug": "Isoniazida 300mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos"
  },
  {
    "drug": "Metronidazol 250mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antibacterianos",
    "subsubgrupo": "Outros antibacterianos"
  },
  {
    "drug": "Fluconazol 50 mg (EF)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais"
  },
  {
    "drug": "Itraconazol 100mg - cáps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais"
  },
  {
    "drug": "Nistatina 100000UI/ml - susp.oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais"
  },
  {
    "drug": "Terbinafina 250mg - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antifúngicos",
    "subsubgrupo": "Antifúngicos gerais"
  },
  {
    "drug": "Valaciclovir 1000mg comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antivíricos gerais"
  },
  {
    "drug": "Bictegravir 50 mg + Emtricitabina 200 mg + Tenofovir alafenamida 25 mg (Biktarvy)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "DARUNAVIR 800 mg + COBICISTATE 150 mg (REZOLSTA)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "Darunavir 800mg - comp (Prezista)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "Dolutegravir 50mg (Tivicay) - comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "Dolutegravir+Abacavir+Lamivudina 50+600+300mg (Triumeq)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "Lamivudina + Dolutegravir 300 mg + 50 mg (Dovato)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "Lopinavir+Ritonavir 200+50mg (Kaletra)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antirretrovirais"
  },
  {
    "drug": "Glecaprevir 100 mg + pibrentasvir 40 mg (Maviret)",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antivíricos para hepatite C"
  },
  {
    "drug": "Ribavirina 200mg - caps",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Antivíricos",
    "subsubgrupo": "Antivíricos para hepatite C"
  },
  {
    "drug": "Albendazol 20mg/ml, sol oral",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Anti-helmínticos",
    "subsubgrupo": "Anti-helmínticos gerais"
  },
  {
    "drug": "Albendazol 400 mg Comp",
    "grupo": "Anti-infeciosos",
    "subgrupo": "Anti-helmínticos",
    "subsubgrupo": "Anti-helmínticos gerais"
  },
  {
    "drug": "Lidocaína 1% (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Anestésicos locais",
    "subsubgrupo": "Anestésicos locais"
  },
  {
    "drug": "Biperideno 4mg retard - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiparkinsónicos",
    "subsubgrupo": "Anticolinérgicos"
  },
  {
    "drug": "Biperideno 5 mg/1 ml Sol inj Fr 1 ml IM IV",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiparkinsónicos",
    "subsubgrupo": "Anticolinérgicos"
  },
  {
    "drug": "Carbamazepina 200mg comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Bloqueadores dos canais de sódio"
  },
  {
    "drug": "Carbamazepina 400 mg - Comp LP",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Bloqueadores dos canais de sódio"
  },
  {
    "drug": "Clonazepam 2 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Benzodiazepinas antiepiléticas"
  },
  {
    "drug": "Gabapentina 100mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides"
  },
  {
    "drug": "Gabapentina 300mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides"
  },
  {
    "drug": "Lamotrigina 100 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos de largo espetro"
  },
  {
    "drug": "Lamotrigina 50 mg - Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos de largo espetro"
  },
  {
    "drug": "Pregabalina 25mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides"
  },
  {
    "drug": "Pregabalina 50mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Gabapentinóides"
  },
  {
    "drug": "Topiramato 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos moduladores de GABA/Glutamato"
  },
  {
    "drug": "Topiramato 25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos moduladores de GABA/Glutamato"
  },
  {
    "drug": "Topiramato 50mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Antiepiléticos moduladores de GABA/Glutamato"
  },
  {
    "drug": "Valproato de sódio 200mg/ml - sol.oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Derivados do ácido valpróico"
  },
  {
    "drug": "Valproato de sódio 300mg - comp LP",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Derivados do ácido valpróico"
  },
  {
    "drug": "Valproato de sódio 500mg - comp LP",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antiepiléticos e Anticonvulsivantes",
    "subsubgrupo": "Derivados do ácido valpróico"
  },
  {
    "drug": "Alprazolam 0.25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Alprazolam 0.5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Alprazolam 1mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Alprazolam 1mg LM - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Clonazepam 0,5 mg Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Diazepam 10mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Diazepam 10mg/2ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Diazepam 5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Diazepam 5mg/2,5ml - enema",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Estazolam 2mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Flurazepam 15mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Flurazepam 30mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Loflazepato de etilo 2mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Lorazepam 1mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Lorazepam 2.5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Midazolam 15 mg/3 ml (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Ansiolíticos, Sedativos e Hipnóticos (Benzodiazepinas)"
  },
  {
    "drug": "Valeriana 45mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Sedativos de origem vegetal"
  },
  {
    "drug": "Zolpidem 10mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Agonistas dos recetores GABA (Fármacos Z)"
  },
  {
    "drug": "Amissulprida 50mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Ciamemazina 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Clorpromazina 25mg/5ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Clorpromazina 50mg/2ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Haloperidol 1 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Haloperidol 2mg/ml - sol.oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Haloperidol 5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Haloperidol 5mg/ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Haloperidol dec. 100mg/ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Haloperidol dec. 50mg/ml - sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Levomepromazina 100 mg Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Levomepromazina 25 mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Levomepromazina 25 mg/ml - amp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Olanzapina 10mg - comp orodisp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Olanzapina 2.5mg - Comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Olanzapina 5mg - comp orodisp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Quetiapina 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Quetiapina 200mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Quetiapina 25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Risperidona 0,5mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Risperidona 1mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Risperidona 2mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Tiapride 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Tiapride 100mg/2ml -sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antipsicóticos"
  },
  {
    "drug": "Amitriptilina 10mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores Tricíclicos (ADT)"
  },
  {
    "drug": "Amitriptilina 25mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores Tricíclicos (ADT)"
  },
  {
    "drug": "Bupropiom 150 mg Comp LM",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (Inibidores da recaptação de NA e Dopamina)"
  },
  {
    "drug": "Bupropiom 300 mg Comp LM",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (Inibidores da recaptação de NA e Dopamina)"
  },
  {
    "drug": "Fluoxetina 20mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)"
  },
  {
    "drug": "Lítio 400 mg (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Estabilizadores do humor"
  },
  {
    "drug": "Mirtazapina 15mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (NaSSA)"
  },
  {
    "drug": "Mirtazapina 30mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (NaSSA)"
  },
  {
    "drug": "Paroxetina 20mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)"
  },
  {
    "drug": "Sertralina 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)"
  },
  {
    "drug": "Sertralina 50mg-comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRS)"
  },
  {
    "drug": "Trazodona 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)"
  },
  {
    "drug": "Trazodona 150mg (não AC) - comprimido",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)"
  },
  {
    "drug": "Trazodona 150mg AC-comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)"
  },
  {
    "drug": "Trazodona AC 100mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)"
  },
  {
    "drug": "Trazodona AC 50mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (SARI)"
  },
  {
    "drug": "Venlafaxina 150mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRSN)"
  },
  {
    "drug": "Venlafaxina 37.5mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRSN)"
  },
  {
    "drug": "Venlafaxina 75mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Psicofármacos",
    "subsubgrupo": "Antidepressores (ISRSN)"
  },
  {
    "drug": "Tramadol 100 mg/2ml (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Narcóticos / Opióides",
    "subsubgrupo": "Opióides fracos"
  },
  {
    "drug": "Tramadol 50mg - cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Narcóticos / Opióides",
    "subsubgrupo": "Opióides fracos"
  },
  {
    "drug": "Acetilsalicilato de lisina 1800mg/5ml-sol. injectável",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Salicilatos injetáveis"
  },
  {
    "drug": "Clonixina 300ng-cáps",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Clonixinato de lisina"
  },
  {
    "drug": "Paracetamol 125mg-supp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)"
  },
  {
    "drug": "Paracetamol 200mg/5ml - soi.oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)"
  },
  {
    "drug": "Paracetamol 250mg - sup",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)"
  },
  {
    "drug": "Paracetamol 500mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos e Antipiréticos",
    "subsubgrupo": "Anilinas (Paracetamol)"
  },
  {
    "drug": "Ergotamina + paracetamol+beladona+cafeína (Migretil)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antienxaquicosos",
    "subsubgrupo": "Alcalóides da cravagem do centeio associados"
  },
  {
    "drug": "Betahistina 16mg - comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Outros (Sistema Nervoso Central)",
    "subsubgrupo": "Antivertiginosos"
  },
  {
    "drug": "Doxilamina+dicloverina+piridoxina 10+10+10mg (Nausefe)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Outros (Sistema Nervoso Central)",
    "subsubgrupo": "Antieméticos do SNC"
  },
  {
    "drug": "Buprenorfina 2mg - comp (SL)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Agonistas parciais dos recetores opióides"
  },
  {
    "drug": "Buprenorfina 8mg - comp (SL)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Agonistas parciais dos recetores opióides"
  },
  {
    "drug": "Metadona 10mg/ml - solução oral",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Opióides agonistas puros de longa duração"
  },
  {
    "drug": "Morfina 10mg LP-comp (EF)",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Analgésicos Opióides",
    "subsubgrupo": "Alcalóides naturais do ópio"
  },
  {
    "drug": "Mononitrato de isossorbida 60 mg - comp LP",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados"
  },
  {
    "drug": "Mononitrato de isossorbido 20mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados"
  },
  {
    "drug": "Nitroglicerina 10mg/24h - Sist transd",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados"
  },
  {
    "drug": "Nitroglicerina 5mg/24h - Sist transd",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Nitratos e derivados"
  },
  {
    "drug": "Pentoxifilina 400mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antianginosos e Vasodilatadores",
    "subsubgrupo": "Vasodilatadores periféricos"
  },
  {
    "drug": "Diosmina 450mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Vasoprotetores",
    "subsubgrupo": "Bioflavonóides venotrópicos"
  },
  {
    "drug": "Espironolactona 100mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos poupadores de potássio"
  },
  {
    "drug": "Espironolactona 25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos poupadores de potássio"
  },
  {
    "drug": "Furosemida 20mg/2ml - sol. Injectável (EF....)",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos da ansa"
  },
  {
    "drug": "Furosemida 40mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos da ansa"
  },
  {
    "drug": "Indapamida 2.5mg -",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Diuréticos tiazídicos e afins"
  },
  {
    "drug": "Captopril 25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Inibidores da ECA"
  },
  {
    "drug": "Lisinopril 20mg-comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Inibidores da ECA"
  },
  {
    "drug": "Lisinopril 5mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Inibidores da ECA"
  },
  {
    "drug": "Losartam 50mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Antagonistas dos recetores da angiotensina II (ARA II)"
  },
  {
    "drug": "Amlodipina 5mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Antagonistas do cálcio (Di-hidropiridinas)"
  },
  {
    "drug": "Bisoprolol 2,5mg - Comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores cardioseletivos"
  },
  {
    "drug": "Bisoprolol 5mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores cardioseletivos"
  },
  {
    "drug": "Carvedilol 25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Alfa e Betabloqueadores"
  },
  {
    "drug": "Carvedilol 6,25mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Alfa e Betabloqueadores"
  },
  {
    "drug": "Propranolol 10mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores não seletivos"
  },
  {
    "drug": "Propranolol 40mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Anti-hipertensores e Diuréticos",
    "subsubgrupo": "Betabloqueadores não seletivos"
  },
  {
    "drug": "Atorvastatina 10mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Atorvastatina 20mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Ezetimiba 10 mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Inibidores da absorção do colesterol"
  },
  {
    "drug": "Fenofibrato 145 mg Comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Fibratos"
  },
  {
    "drug": "Fenofibrato 267 mg Comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Fibratos"
  },
  {
    "drug": "Gemfibrozil 600mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Fibratos"
  },
  {
    "drug": "Pravastatina 20 mg (EF)",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Pravastatina 40 mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Rosuvastatina 10 mg (EF)",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Sinvastatina 10mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Sinvastatina 20mg - comp",
    "grupo": "Sistema Cardiovascular",
    "subgrupo": "Antidislipidémicos",
    "subsubgrupo": "Estatinas (Inibidores da HMG-CoA redutase)"
  },
  {
    "drug": "Ácido fólico 5mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Ácido fólico e derivados"
  },
  {
    "drug": "Cianocobalamina 1 mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Vitamina B12"
  },
  {
    "drug": "Cianocobalamina 1 mg/1 ml Sol inj Fr 1 ml IM",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Vitamina B12"
  },
  {
    "drug": "Ferro 178,6mg 6mg/ml - sol.oral",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Compostos de ferro"
  },
  {
    "drug": "Sulfato ferroso 247,25mg - comp LP",
    "grupo": "Sangue",
    "subgrupo": "Antianémicos",
    "subsubgrupo": "Compostos de ferro"
  },
  {
    "drug": "Acenocumarol 4 mg - Comp (EF)",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antagonistas da vitamina K"
  },
  {
    "drug": "Ácido acetilsalicilico 100mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antiagregantes plaquetários"
  },
  {
    "drug": "Apixabano 2,5mg comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Anticoagulantes orais diretos (DOACs - Inibidores do fator Xa)"
  },
  {
    "drug": "Apixabano 5mg comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Anticoagulantes orais diretos (DOACs - Inibidores do fator Xa)"
  },
  {
    "drug": "Clopidogrel 75 mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antiagregantes plaquetários (Inibidores do recetor P2Y12)"
  },
  {
    "drug": "Enoxaparina 20 mg/0.2 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)"
  },
  {
    "drug": "Enoxaparina 40 mg/0.4 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)"
  },
  {
    "drug": "Enoxaparina 60 mg/0.6 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)"
  },
  {
    "drug": "Enoxaparina sódica (LOVENOX) 100 mg/1 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)"
  },
  {
    "drug": "Enoxaparina sódica (LOVENOX) 80 mg/0.8 ml Sol inj Ser",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinas de baixo peso molecular (HBPM)"
  },
  {
    "drug": "Heparinóide 3 mg/g - creme",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Heparinóides tópicos"
  },
  {
    "drug": "Varfarina 5mg - comp",
    "grupo": "Sangue",
    "subgrupo": "Anticoagulantes e antiagregantes",
    "subsubgrupo": "Antagonistas da vitamina K"
  },
  {
    "drug": "Brometo de ipratrópio 20 µg/dose Sol pressu inal (Atrovent)",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Anticolinérgicos inalados (SAMA)"
  },
  {
    "drug": "Budesonida 0,5mg/ml - amp.p/nebulizag",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados"
  },
  {
    "drug": "Budesonida 160 µg/dose + Formoterol 4.5 µg/dose Pó inal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Associações Corticosteroide + Agonista Beta-2 (ICS + LABA)"
  },
  {
    "drug": "Budesonida 200 µg Pó inal, cáps Blist",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados"
  },
  {
    "drug": "Budesonida 200 µg/dose Pó inal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados"
  },
  {
    "drug": "Budesonida 200mcg/dose-sol.press.p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides inalados"
  },
  {
    "drug": "Budesonida 320 µg/dose + Formoterol 9 µg/dose Pó inal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Associações Corticosteroide + Agonista Beta-2 (ICS + LABA)"
  },
  {
    "drug": "Budesonida 64mcg/dose - susp.p/pulveriz.nasal",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Corticosteroides de ação local"
  },
  {
    "drug": "Formoterol 12mcg/dose - caps p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de longa ação (LABA)"
  },
  {
    "drug": "Ipratrópio 250mcg/2ml - sol p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Anticolinérgicos inalados (SAMA)"
  },
  {
    "drug": "Mometasona 136 + Indacaterol 114 + Brometo Glicopirrónio 46 (ENERZAIR)",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Terapêutica tripla inalada (ICS + LABA + LAMA)"
  },
  {
    "drug": "Montelucaste 10 mg (EF)",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Antagonistas dos recetores dos leucotrienos"
  },
  {
    "drug": "Salbutamol 100mcg/dose - sol.press.p/inalação",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de curta ação (SABA)"
  },
  {
    "drug": "Salbutamol 2mg/5ml - sol. oral",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de curta ação (SABA)"
  },
  {
    "drug": "Salbutamol 5mg/ml - sol. resp.",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Broncodilatadores e antiasmáticos",
    "subsubgrupo": "Agonistas Beta-2 de curta ação (SABA)"
  },
  {
    "drug": "Acetilcisteína 600mg - comp efervescentes",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Mucolíticos e expetorantes",
    "subsubgrupo": "Mucolíticos derivados de aminoácidos"
  },
  {
    "drug": "Ambroxol 15mg/5ml - sol.oral",
    "grupo": "Aparelho Respiratório",
    "subgrupo": "Mucolíticos e expetorantes",
    "subsubgrupo": "Mucolíticos e expetorantes"
  },
  {
    "drug": "Hidróxido de alumínio 240mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Antiácidos locais"
  },
  {
    "drug": "Omeprazol 20mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Inibidores da bomba de protões (IBP)"
  },
  {
    "drug": "Pantoprazol 20 mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Inibidores da bomba de protões (IBP)"
  },
  {
    "drug": "Pantoprazol 40 mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Inibidores da bomba de protões (IBP)"
  },
  {
    "drug": "Ranitidina 50mg/2ml (EF)",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Antagonistas dos recetores H2"
  },
  {
    "drug": "Sucralfato 1g/5ml-susp. oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiácidos e antiulcerosos",
    "subsubgrupo": "Protetores da mucosa gástrica"
  },
  {
    "drug": "Bisacodilo 5mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes estimulantes"
  },
  {
    "drug": "Domperidona 10mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos"
  },
  {
    "drug": "Gelatina + glicerina (Bebegel) - gel rectal criança",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes por via retal"
  },
  {
    "drug": "Gelatina + glicerina (Dagragel) - gel rectal adulto",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes por via retal"
  },
  {
    "drug": "Lactulose 10 g/15 ml Xar Saq",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes osmóticos"
  },
  {
    "drug": "Lactulose 666.7 mg/ml Xar Fr",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Laxantes osmóticos"
  },
  {
    "drug": "Metoclopramida 1 mg/ml Sol oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos"
  },
  {
    "drug": "Metoclopramida 10mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos"
  },
  {
    "drug": "Metoclopramida 10mg/2ml - sol. injectável",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antieméticos e procinéticos"
  },
  {
    "drug": "Pancreatina+ dimeticone (Pankreoflat) - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antiflatulentos associados"
  },
  {
    "drug": "Simeticone 105mg/ml - emulsão oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Laxantes, antieméticos e motilidade",
    "subsubgrupo": "Antiflatulentos"
  },
  {
    "drug": "Loperamida 0,2mg/ml - sol.oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da motilidade intestinal"
  },
  {
    "drug": "Loperamida 2mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da motilidade intestinal"
  },
  {
    "drug": "Racecadotril 10 mg - pó p/lactentes",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da encefalinase intestinal"
  },
  {
    "drug": "Racecadotril 30mg - pó p/susp.oral lactentes",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antidiarreicos",
    "subsubgrupo": "Inibidores da encefalinase intestinal"
  },
  {
    "drug": "Butilescopolamina 10mg - comp",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiespasmódicos",
    "subsubgrupo": "Anticolinérgicos espasmolíticos"
  },
  {
    "drug": "Butilescopolamina 20mg/ml - sol. injectável",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiespasmódicos",
    "subsubgrupo": "Anticolinérgicos espasmolíticos"
  },
  {
    "drug": "Propinoxato 3,2mg/ml - sol.oral",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Antiespasmódicos",
    "subsubgrupo": "Antiespasmódicos musculotrópicos"
  },
  {
    "drug": "Pancreatina 150mg caps",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Enzimas digestivas e Probióticos",
    "subsubgrupo": "Enzimas pancreáticas"
  },
  {
    "drug": "Saccharomyces boulardii 250 mg Pó susp oral Saq",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Enzimas digestivas e Probióticos",
    "subsubgrupo": "Leveduras e probióticos"
  },
  {
    "drug": "Acetonido de fluocinolona + Lidocaína + Subgalhato bismuto (Synalar rectal)",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Preparações retais",
    "subsubgrupo": "Anti-hemorroidários associados"
  },
  {
    "drug": "Benzidamina 1.5 mg/ml - sol lav boca colutório",
    "grupo": "Aparelho Digestivo",
    "subgrupo": "Preparações buco-gingivais",
    "subsubgrupo": "Anti-inflamatórios orofaríngeos"
  },
  {
    "drug": "Cloreto de dequalínio 10 mg Comp vag",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antisséticos e anti-infeciosos ginecológicos"
  },
  {
    "drug": "Clotrimazol 100mg - comp.vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antifúngicos vaginais"
  },
  {
    "drug": "Clotrimazol 10mg/g - creme vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antifúngicos vaginais"
  },
  {
    "drug": "Estriol 0,125mg/g - creme vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Estrogénios tópicos"
  },
  {
    "drug": "lodopovidona 100mg/ml - sol.vaginal",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antisséticos ginecológicos"
  },
  {
    "drug": "Metronidazol 500mg - óvulo vag.",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Preparações vaginais",
    "subsubgrupo": "Antiprotozoários e antibacterianos vaginais"
  },
  {
    "drug": "Bromocriptina 10mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas relacionadas com a prolactina",
    "subsubgrupo": "Agonistas da dopamina / Inibidores da prolactina"
  },
  {
    "drug": "Bromocriptina 2.5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas relacionadas com a prolactina",
    "subsubgrupo": "Agonistas da dopamina / Inibidores da prolactina"
  },
  {
    "drug": "Betametasona 0.5mg/ml - sol.oral",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos"
  },
  {
    "drug": "Betametasona, dipropionato + Betametasona, fosfato sódico (Diprofos)",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos injetáveis"
  },
  {
    "drug": "Prednisolona 20mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos"
  },
  {
    "drug": "Prednisolona 25mg/ml - sol. injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos"
  },
  {
    "drug": "Prednisolona 5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Corticosteroides sistémicos",
    "subsubgrupo": "Glucocorticóides sistémicos"
  },
  {
    "drug": "lodeto de potássio 0.2 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Compostos de iodo"
  },
  {
    "drug": "Levotiroxina 0,1mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)"
  },
  {
    "drug": "Levotiroxina sódica 0.025mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)"
  },
  {
    "drug": "Levotiroxina sódica 0.088 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)"
  },
  {
    "drug": "Levotiroxina sódica 0.112 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Hormonas tiroideias sintéticas (T4)"
  },
  {
    "drug": "Tiamazol 5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas tiroideias e antitiroideus",
    "subsubgrupo": "Antitiroideus derivados de tioimidazol"
  },
  {
    "drug": "Insulina Aspártico [Fiasp] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação rápida/ultrarrápida"
  },
  {
    "drug": "Insulina Degludec [Tresiba] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas basais de ação ultralonga"
  },
  {
    "drug": "Insulina Glargina 100Ul/ml [LANTUS] - sol. Injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas basais de ação prolongada"
  },
  {
    "drug": "Insulina Glulisina [Apidra] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação rápida"
  },
  {
    "drug": "Insulina humana 100Ul/ml [ACTRAPID] - sol. Injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação curta (regular)"
  },
  {
    "drug": "Insulina humana+isofânica 30+70Ul/ml [MIXTARD/HUMULIN M3]",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Misturas de insulina bifásica"
  },
  {
    "drug": "Insulina issofânica 100Ul/ml [INSULATARD/HUMULIN NPH]",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação intermédia (NPH)"
  },
  {
    "drug": "Insulina lispro (solúvel + protamina) 100 U/ml [HUMALOG MIX 25]",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Misturas de insulina análoga bifásica"
  },
  {
    "drug": "Insulina Lispro [Humalog Kwiqpen] 100U/ml",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Insulinas de ação rápida"
  },
  {
    "drug": "Acarbose 50mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores da alfa-glucosidase"
  },
  {
    "drug": "Dapagliflozina 10 mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores do cotransportador SGLT2"
  },
  {
    "drug": "Empagliflozina 10 mg Comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores do cotransportador SGLT2"
  },
  {
    "drug": "Empagliflozina 25 mg Comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores do cotransportador SGLT2"
  },
  {
    "drug": "Gliclazida 30mg LM - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Sulfonilureias"
  },
  {
    "drug": "Metformina 1g - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Biguanidas"
  },
  {
    "drug": "Metformina 500mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Biguanidas"
  },
  {
    "drug": "Metformina 850mg-comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Biguanidas"
  },
  {
    "drug": "Sitagliptina 100mg comp.",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores da DPP-4 (Gliptinas)"
  },
  {
    "drug": "Slinda Drospirenona 4 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progestagénios isolados"
  },
  {
    "drug": "Amelye - Dienogest 2 mg + Etinilestradiol 0.03 mg Comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos hormonais combinados"
  },
  {
    "drug": "Aranka - Drospirenona+etinilestradiol 3+0.03mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos hormonais combinados"
  },
  {
    "drug": "Cerazette- Desogestrel 0.075mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos só de progestagénio"
  },
  {
    "drug": "Depo-Provera - Medroxiprogesterona 150mg/ml - sol. injectável",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progestagénios injetáveis de depósito"
  },
  {
    "drug": "Dienogest 2mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progestagénios para endometriose"
  },
  {
    "drug": "Harmonet- Etinilestradiol+gestodeno 0.02+0.075mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Contracetivos hormonais combinados"
  },
  {
    "drug": "Activelle- Estradiol+noretisterona 0,5mg+0.1mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Terapêutica hormonal de substituição combinada"
  },
  {
    "drug": "Estradiol 2 mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Estrogénios orais"
  },
  {
    "drug": "Ciproterona 50 mg - comp (EF)",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Antiandrogénios"
  },
  {
    "drug": "Livial - Tibolona 2.5mg - comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Moduladores do recetor de estrogénios"
  },
  {
    "drug": "Progesterona 200mg",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Hormonas sexuais",
    "subsubgrupo": "Progesterona micronizada"
  },
  {
    "drug": "Diclofenac 10mg/g - gel",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs tópicos derivados do ácido acético"
  },
  {
    "drug": "Diclofenac 50mg - comp",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs orais derivados do ácido acético"
  },
  {
    "drug": "Diclofenac 75mg/3ml-sol. injectável",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs injetáveis"
  },
  {
    "drug": "Ibuprofeno 20mg/ml - sol.oral",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs derivados do ácido propiónico"
  },
  {
    "drug": "Ibuprofeno 600mg- comp",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Anti-inflamatórios não esteroides (AINEs)",
    "subsubgrupo": "AINEs derivados do ácido propiónico"
  },
  {
    "drug": "Ácido alendrónico 70 mg - comp",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Medicamentos para doenças ósseas",
    "subsubgrupo": "Bisfosfonatos para osteoporose"
  },
  {
    "drug": "Glucosamina 1500 mg Pó sol oral Saq",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Medicamentos para doenças ósseas",
    "subsubgrupo": "Condroprotetores e artrose"
  },
  {
    "drug": "Tiocolquicosido 4mg - cáps",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Relaxantes musculares",
    "subsubgrupo": "Miorrelaxantes de ação central"
  },
  {
    "drug": "Tiocolquicosido 4mg/2ml - sol. Injectável",
    "grupo": "Aparelho Locomotor",
    "subgrupo": "Relaxantes musculares",
    "subsubgrupo": "Miorrelaxantes de ação central"
  },
  {
    "drug": "Cetirizina 10mg - comp",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 2ª geração"
  },
  {
    "drug": "Cetirizina 1 mg/ml - sol.oral",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 2ª geração"
  },
  {
    "drug": "Di-hexazina 6 mg Comp",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos estimulantes do apetite"
  },
  {
    "drug": "Dimetindeno 1 mg/ml - sol.oral",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 1ª geração"
  },
  {
    "drug": "Hidroxizina 25mg - comp",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 1ª geração"
  },
  {
    "drug": "Hidroxizina 2 mg/ml - sol.oral",
    "grupo": "Antialérgicos",
    "subgrupo": "Anti-histamínicos",
    "subsubgrupo": "Anti-histamínicos H1 de 1ª geração"
  },
  {
    "drug": "Aciclovir 5% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antivíricos tópicos"
  },
  {
    "drug": "Ácido fusídico 20 mg/g - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antibacterianos tópicos"
  },
  {
    "drug": "Bacitracina+retinol 500+2000UI/g - pomada",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antibacterianos tópicos cicatrizantes"
  },
  {
    "drug": "Cetoconazol 20 mg/g - champô",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antifúngicos dermatológicos"
  },
  {
    "drug": "Clotrimazol 1% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antifúngicos dermatológicos"
  },
  {
    "drug": "lodopovidona 100mg/ml - sol. cutânea",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antisséticos e desinfetantes cutâneos"
  },
  {
    "drug": "lodopovidona 40 mg/ml - espuma cutânea",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antisséticos e desinfetantes cutâneos"
  },
  {
    "drug": "Permetrina 10 mg/g Creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Ectoparasiticidas e escabicidas"
  },
  {
    "grupo": "Pele e Mucosas",
    "subgrupo": "Anti-infeciosos tópicos",
    "subsubgrupo": "Antisséticos secantes cutâneos"
  },
  {
    "drug": "CREME LOÇÃO HIDRATANTE CORPORAL",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Hidratantes corporais"
  },
  {
    "drug": "EXTRA FORMULÁRIO - Salicilato de colina 87 mg/g Gel bucal",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Géis analgésicos bucais"
  },
  {
    "drug": "Sabonete Líquido Neutro 500ml",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Higiene da pele sensível"
  },
  {
    "drug": "Vaselina esterilizada - pomada",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Emolientes oclusivos neutros"
  },
  {
    "drug": "Vitamina A composta - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Emolientes e protetores cutâneos",
    "subsubgrupo": "Cicatrizantes epiteliais"
  },
  {
    "drug": "Isotretinoína 10mg - cáps",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antiacneicos",
    "subsubgrupo": "Retinóides sistémicos para o acne"
  },
  {
    "drug": "Peróxido de benzoílo 50 mg/g - gel",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antiacneicos",
    "subsubgrupo": "Antiacneicos tópicos oxidantes"
  },
  {
    "drug": "Betametasona 0.5 mg/g + Ácido salicílico 20 mg/g Sol cut",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides associados a queratolíticos"
  },
  {
    "drug": "Betametasona ácido salicilico 0,5+30mg/g - pomada",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides associados a queratolíticos"
  },
  {
    "drug": "Dexametasona + clioquinol 0.1+3% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides associados a anti-infeciosos"
  },
  {
    "drug": "Dexametasona 0.1% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides tópicos de média potência"
  },
  {
    "drug": "Hidrocortisona 1% - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Corticosteroides tópicos",
    "subsubgrupo": "Corticosteroides tópicos de baixa potência"
  },
  {
    "drug": "Dimetindeno 1 mg/g Gel Bisn 30 g",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antipruriginosos tópicos",
    "subsubgrupo": "Anti-histamínicos tópicos"
  },
  {
    "drug": "Prometazina 2mg/g - creme",
    "grupo": "Pele e Mucosas",
    "subgrupo": "Antipruriginosos tópicos",
    "subsubgrupo": "Anti-histamínicos tópicos"
  },
  {
    "drug": "Cloranfenicol 8 mg/ml - colirio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Anti-infeciosos oftálmicos",
    "subsubgrupo": "Antibacterianos oftálmicos"
  },
  {
    "drug": "Gentamicina 3mg/g - pomada oft.",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Anti-infeciosos oftálmicos",
    "subsubgrupo": "Aminoglicosídeos oftálmicos"
  },
  {
    "drug": "Gentamicina 3 mg/ml - colirio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Anti-infeciosos oftálmicos",
    "subsubgrupo": "Aminoglicosídeos oftálmicos"
  },
  {
    "drug": "Prednisolona 10mg/ml - colirio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Corticosteroides oftálmicos",
    "subsubgrupo": "Corticosteroides oftálmicos puros"
  },
  {
    "drug": "Ácido espaglúmico 19 mg/ml Col, sol Fr 10 ml",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Antialérgicos e descongestionantes oftálmicos",
    "subsubgrupo": "Antialérgicos oftálmicos tópicos"
  },
  {
    "drug": "Fenilefrina 1,25 mg/ml - colírio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Antialérgicos e descongestionantes oftálmicos",
    "subsubgrupo": "Descongestionantes oftálmicos / Midriáticos"
  },
  {
    "drug": "Betaxolol 5 mg/ml Col, sol Fr",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Betabloqueadores antiglaucomatosos"
  },
  {
    "drug": "Carbómero 2 mg/ml Gel oft Bisn 10 g",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Lágrimas artificiais e lubrificantes oculares"
  },
  {
    "drug": "Dexametasona + gentamicina 0.3+3mg/g - pomada oft.",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Corticosteroide associado a antibacteriano"
  },
  {
    "drug": "Dexametasona+gentamicina colírio",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Corticosteroide associado a antibacteriano"
  },
  {
    "drug": "Dexametasona + neomicina 1+5mg/ml - sol.oto-oftálm.",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Corticosteroide associado a antibacteriano"
  },
  {
    "drug": "Tafluprost 0.015 mg/ml + Timolol 5 mg/ml col",
    "grupo": "Oftalmologia e Otorrinolaringologia",
    "subgrupo": "Outros medicamentos oftálmicos",
    "subsubgrupo": "Antiglaucomatosos associados"
  },
  {
    "drug": "Acetonido de fluocinolona+Neomicina+PolimixinaB Got aur",
    "grupo": "Ouvidos (Otologia)",
    "subgrupo": "Anti-infeciosos e anti-inflamatórios auriculares",
    "subsubgrupo": "Associações óticas com corticosteroides"
  },
  {
    "drug": "Alopurinol 100mg comp",
    "grupo": "Medicamentos Vários / Metabolismo",
    "subgrupo": "Antigotosos e Uricossúricos",
    "subsubgrupo": "Inibidores da xantina oxidase"
  },
  {
    "drug": "Oxibutinina 5 mg - comp",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Urologia e Bexiga Hiperativa",
    "subsubgrupo": "Antimuscarínicos antiespasmódicos urinários"
  },
  {
    "drug": "Solifenacina 5mg comp",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Urologia e Bexiga Hiperativa",
    "subsubgrupo": "Antagonistas seletivos M3 da bexiga"
  },
  {
    "drug": "Tansulosina 0.4mg - cáps LP",
    "grupo": "Aparelho Geniturinário",
    "subgrupo": "Urologia e Hiperplasia Benigna da Próstata",
    "subsubgrupo": "Antagonistas alfa-1 adrenérgicos uroseletivos"
  },
  {
    "drug": "Linagliptina 5mg comp",
    "grupo": "Hormonas e Tratamento Endócrino",
    "subgrupo": "Antidiabéticos",
    "subsubgrupo": "Inibidores da DPP-4 (Gliptinas)"
  },
  {
    "drug": "Memantina 10mg comp",
    "grupo": "Sistema Nervoso Central",
    "subgrupo": "Antidementes",
    "subsubgrupo": "Antagonistas dos recetores NMDA"
  }
];