// Comprehensive Medical Database

// Helper for keywords (OCR synonyms)
export const KEYWORD_MAP = {
    // 1. Hematology (Extended)
    'hemoglobin': ['hemoglobin', 'haemoglobin', 'hb', 'hgb'],
    'rbc_count': ['rbc count', 'total rbc', 'red blood cells', 'erythrocyte count'],
    'total_count': ['total leucocyte count', 'tlc', 'wbc count', 'white blood cells', 'total count', 'leukocyte count', 'white cells', 'total wbc', 't.l.c'],
    'platelet_count': ['platelet count', 'platelet', 'plt', 'thrombocyte count', 'platelets'],
    'hematocrit': ['hematocrit', 'hct', 'pcv', 'packed cell volume'],
    'mcv': ['mcv', 'mean corpuscular volume'],
    'mch': ['mch', 'mean corpuscular hemoglobin'],
    'mchc': ['mchc', 'mean corpuscular hemoglobin concentration'],
    'rdw': ['rdw', 'red cell distribution width', 'rdw-cv', 'rdw-sd'],  // Merged CV/SD
    'neutrophil': ['neutrophils', 'polymorphs', 'neutrophil', 'neutrophil %'],
    'lymphocyte': ['lymphocytes', 'lymphocyte', 'lymphocyte %'],
    'monocyte': ['monocytes', 'monocyte', 'monocyte %'],
    'eosinophil': ['eosinophils', 'eosinophil', 'eosinophil %'],
    'basophil': ['basophils', 'basophil', 'basophil %'],
    'reticulocyte_count': ['reticulocyte count', 'retic count'],
    'esr': ['esr', 'erythrocyte sedimentation rate'],
    'absolute_neutrophil_count': ['absolute neutrophil count', 'anc'],
    'absolute_lymphocyte_count': ['absolute lymphocyte count', 'alc'],
    'absolute_monocyte_count': ['absolute monocyte count'],
    'absolute_eosinophil_count': ['absolute eosinophil count', 'aec'],
    'mpv': ['mpv', 'mean platelet volume'],
    'pdw': ['pdw', 'platelet distribution width'],
    'pct': ['pct', 'plateletcrit'],

    // 2. Kidney
    'bun': ['blood urea nitrogen', 'bun'],
    'creatinine': ['serum creatinine', 'creatinine'],
    'urea': ['blood urea', 'urea', 'serum urea'], // Pure Urea
    'uric_acid': ['serum uric acid', 'uric acid'],
    'bun_creatinine_ratio': ['bun/creatinine ratio', 'bun/creat ratio'],
    'egfr': ['egfr', 'estimated glomerular filtration rate'],
    'urine_ph': ['urine ph', 'reaction (ph)'],
    'urine_specific_gravity': ['urine specific gravity', 'sp. gravity'],
    'urine_pus_cells': ['pus cells', 'leukocytes (urine)'],
    'urine_rbc': ['rbc (urine)', 'red blood cells (urine)'],
    'urine_protein': ['albumin (urine)', 'protein (urine)'],
    'urine_sugar': ['sugar (urine)', 'glucose (urine)'],

    // 3. Liver
    'bilirubin_total': ['total bilirubin', 'bilirubin total'],
    'bilirubin_direct': ['direct bilirubin', 'conjugated bilirubin'],
    'bilirubin_indirect': ['indirect bilirubin', 'unconjugated bilirubin'],
    'sgot': ['sgot', 'ast', 'aspartate aminotransferase'],
    'sgpt': ['sgpt', 'alt', 'alanine aminotransferase'],
    'alkaline_phosphatase': ['alkaline phosphatase', 'alp'],
    'total_protein': ['total protein', 'serum protein'],
    'albumin': ['albumin'],
    'globulin': ['globulin'],
    'ag_ratio': ['a/g ratio', 'albumin/globulin ratio'],
    'ggt': ['gamma gt', 'ggt', 'gamma-glutamyl transferase'],
    'ldh': ['ldh', 'lactate dehydrogenase'],
    'ammonia': ['ammonia'],

    // 4. Electrolytes
    'sodium': ['sodium', 'na+', 'serum sodium'],
    'potassium': ['potassium', 'k+', 'serum potassium'],
    'chloride': ['chloride', 'cl-', 'serum chloride'],
    'bicarbonate': ['bicarbonate', 'hco3', 'co2 content', 'carbon dioxide'], // Added Carbon Dioxide
    'calcium': ['calcium', 'total calcium'],
    'ionized_calcium': ['ionized calcium'],
    'phosphorus': ['phosphorus', 'phosphate', 'po4'],
    'magnesium': ['magnesium'],
    'anion_gap': ['anion gap'],

    // 5. Diabetes/Glucose
    'glucose_fasting': ['glucose fasting', 'fasting glucose', 'fbs', 'fasting blood sugar', 'glucose'], // Added generic Glucose
    'glucose_pp': ['glucose pp', 'ppbs', 'post prandial'],
    'glucose_random': ['random glucose', 'rbs'],
    'hba1c': ['hba1c', 'glycated hemoglobin', 'glycosylated hemoglobin'],
    'insulin': ['insulin fasting', 'fasting insulin'],
    'c_peptide': ['c-peptide'],

    // 6. Lipids
    'cholesterol': ['total cholesterol', 'serum cholesterol', 'cholesterol'],
    'hdl_cholesterol': ['hdl cholesterol', 'hdl'],
    'ldl_cholesterol': ['ldl cholesterol', 'ldl', 'ldl chol., calculated'], // Added Calculated
    'triglycerides': ['triglycerides'],
    'vldl': ['vldl'],
    'ldl_hdl_ratio': ['ldl/hdl ratio'],
    'chol_hdl_ratio': ['total cholesterol/hdl ratio', 'chol/hdl', 'chol/hdl ratio'],
    'non_hdl_cholesterol': ['non-hdl cholesterol'],

    // 7. Thyroid
    'tsh': ['thyroid stimulating hormone', 'tsh', 'thyrotropin'],
    't3': ['triiodothyronine', 'total t3', 't3'],
    't4': ['thyroxine', 'total t4', 't4'],
    'free_t3': ['free t3', 'ft3'],
    'free_t4': ['free t4', 'ft4', 'free thyroxine'], // Added Free Thyroxine
    'anti_tpo': ['anti-tpo', 'thyroid peroxidase antibody'],

    // 8. Vitamins & Hormones & Iron
    'vitamin_b12': ['vitamin b12', 'cobalamin'],
    'vitamin_d': ['vitamin d', '25-oh vitamin d', 'total vitamin d'],
    'folate': ['folate', 'folic acid'],
    'testosterone': ['testosterone', 'total testosterone'],
    'estradiol': ['estradiol', 'e2'],
    'progesterone': ['progesterone'],
    'cortisol': ['cortisol'],
    'prolactin': ['prolactin'],
    'ferritin': ['ferritin'],
    'iron': ['serum iron', 'iron'],
    'tibc': ['tibc', 'total iron binding capacity'],
    'transferrin_saturation': ['transferrin saturation', '% saturation', 'transferrin sat'],
    'crp': ['crp', 'c-reactive protein'],
    'hs_crp': ['hs-crp', 'high sensitivity crp'],
    'troponin_i': ['troponin i'],
    'troponin_t': ['troponin t'],
    'ck_total': ['ck', 'cpk', 'creatine kinase'],
    'ck_mb': ['ck-mb'],

    // 9. Pancreas
    'amylase': ['amylase', 'serum amylase', 'amylase, serum'],
    'lipase': ['lipase', 'serum lipase'],

    // 10. Extended Hematology
    'granulocyte': ['granulocyte', 'gra#', 'gra%', 'granulocytes'], // Added
    'ldh': ['ldh', 'lactate dehydrogenase', 'ld'], // Added LD
    'globulin': ['globulin', 'globulin, calculated'] // Added Calculated
};

export const MEDICAL_RANGES = {
    // 1. Hematology
    'hemoglobin': { min: 13, max: 17, unit: 'g/dL', foods: ['Spinach', 'Red Meat', 'Beetroot', 'Lentils'], impact: { low: "Fatigue, low stamina. Focus on iron-rich foods and light exercise.", high: "Dehydration risk or polycythemia. Hydrate well and avoid high altitudes." } },
    'rbc_count': { min: 4.5, max: 5.9, unit: 'mil/µL', foods: ['Iron-rich foods', 'Vitamin B12', 'Leafy greens'], impact: { low: "Anemia risk. Focus on recovery and nutrition.", high: "Oxygen transport stress. Ensure adequate hydration." } },
    'total_count': { min: 4000, max: 11000, unit: '/µL', foods: ['Vitamin C', 'Garlic', 'Zinc-rich foods'], impact: { low: "Low immunity. Avoid high-intensity public gyms during recovery.", high: "Body fighting infection. Prioritize rest and hydration." } },
    'platelet_count': { min: 1.5, max: 4.5, unit: 'Lakh/µL', foods: ['Papaya Leaf Extract', 'Pumpkin', 'Spinach'], impact: { low: "Bleeding risk. Avoid contact sports and heavy lifting.", high: "Clotting risk. Maintain mobility and stay hydrated." } },
    'hematocrit': { min: 38, max: 50, unit: '%', foods: ['Iron-rich foods', 'Sufficient Water'], impact: { low: "Low blood volume/Anemia. Increase iron and hydration.", high: "Thick blood risk. Increase water intake significantly." } },
    'mcv': { min: 80, max: 100, unit: 'fL', foods: ['Vitamin B12', 'Folate', 'Eggs'], impact: { low: "Microcytic anemia risk. Check iron levels.", high: "Macrocytic risk (B12/Folate deficiency). Focus on B-vitamins." } },
    'mch': { min: 27, max: 33, unit: 'pg', foods: ['Lean Meat', 'Lentils', 'Spinach'], impact: { low: "Check for iron deficiency anemia.", high: "Check for B12/Folate deficiency." } },
    'mchc': { min: 32, max: 36, unit: 'g/dL', foods: ['Iron-rich diet', 'Citrus fruits'], impact: { low: "Hypochromic anemia. Increase iron absorption.", high: "Rare; usually indicates spherocytosis or high concentration." } },
    'rdw': { min: 11.5, max: 14.5, unit: '%', foods: ['Balanced diet', 'B-Complex vitamins'], impact: { high: "Variation in cell size. Likely nutritional deficiency." } },
    'neutrophil': { min: 40, max: 75, unit: '%', foods: ['Garlic', 'Ginger', 'Yogurt'], impact: { low: "Weakened immune system. Practice hygiene.", high: "Bacterial infection indicator. Rest and recover." } },
    'lymphocyte': { min: 20, max: 45, unit: '%', foods: ['Berries', 'Green Tea', 'Vitamin D'], impact: { low: "Possible viral stress or immune suppressed.", high: "Viral infection indicator. Limit strenuous activity." } },
    'monocyte': { min: 2, max: 10, unit: '%', foods: ['Walnuts', 'Turmeric', 'Omega-3'], impact: { high: "Chronic inflammation or infection recovery." } },
    'eosinophil': { min: 1, max: 6, unit: '%', foods: ['Anti-inflammatory foods', 'Apple cider vinegar'], impact: { high: "Allergy or parasite response. Monitor for inflammation." } },
    'basophil': { min: 0, max: 1, unit: '%', foods: ['Nutrient-dense whole foods'], impact: { high: "Inflammatory or allergic condition." } },
    'esr': { min: 0, max: 20, unit: 'mm/hr', foods: ['Anti-inflammatory', 'Turmeric', 'Ginger'], impact: { high: "High Inflammation. Focus on low-impact recovery exercises." } },

    // 2. Kidney
    'bun': { min: 7, max: 20, unit: 'mg/dL', foods: ['Cucumber', 'Cauliflower', 'Water'], impact: { low: "Usually indicates low protein intake.", high: "Kidney load high. Reduce processed salts and hydrate." } },
    'creatinine': { min: 0.6, max: 1.3, unit: 'mg/dL', foods: ['Cabbage', 'Bell peppers', 'Berries'], impact: { high: "Kidney stress. Avoid heavy creatine or protein supplements." } },
    'urea': { min: 15, max: 50, unit: 'mg/dL', foods: ['Low Protein', 'Distilled Water'], impact: { low: "Low protein or high hydration.", high: "Increased protein breakdown. Check kidney function." } },
    'uric_acid': { min: 3.5, max: 7.2, unit: 'mg/dL', foods: ['Cherries', 'Apple', 'Lemon Water'], impact: { low: "Rare; may need more nutrient density.", high: "Gout risk. Avoid high-purine foods and heavy impacts." } },
    'egfr': { min: 90, max: 150, unit: 'mL/min', foods: ['Kidney-friendly diet', 'Berries'], impact: { low: "Reduced kidney function. Increase water and see doctor." } },

    // 4. Electrolytes
    'sodium': { min: 135, max: 145, unit: 'mmol/L', foods: ['Celtic Salt', 'Broth'], impact: { low: "Hyponatremia risk. Balanced salt intake needed.", high: "Dehydration. Increase water intake immediately." } },
    'potassium': { min: 3.5, max: 5.1, unit: 'mmol/L', foods: ['Banana', 'Coconut Water', 'Potatoes'], impact: { low: "Cramp risk. Increase potassium-rich fruits.", high: "Heart rhythm risk. Seek medical monitoring." } },
    'chloride': { min: 96, max: 106, unit: 'mmol/L', foods: ['Sea salt', 'Seaweed'], impact: { low: "Metabolic alkalosis risk.", high: "Dehydration or metabolic acidosis." } },
    'bicarbonate': { min: 22, max: 29, unit: 'mmol/L', foods: ['Vegetables', 'Apples'], impact: { high: "Metabolic Alkalosis. Check respiratory health.", low: "Metabolic Acidosis. Focus on pH balancing foods." } },
    'calcium': { min: 8.5, max: 10.5, unit: 'mg/dL', foods: ['Milk', 'Yogurt', 'Collard Greens'], impact: { low: "Bone weakness. Perform moderate resistance training.", high: "Kidney stone risk. Ensure magnesium balance." } },
    'magnesium': { min: 1.7, max: 2.4, unit: 'mg/dL', foods: ['Dark Chocolate', 'Almonds', 'Pumpkin Seeds'], impact: { low: "Muscle cramps and spasms. Supplement if needed.", high: "Usually due to supplement overdose. Monitor heart rate." } },
    'phosphorus': { min: 2.5, max: 4.5, unit: 'mg/dL', foods: ['Cheese', 'Nuts', 'Whole Grains'], impact: { low: "Weak bones/muscles. Increase dairy or nuts.", high: "Kidney stress. Avoid dark sodas and preservatives." } },

    // 3. Liver (Extended)
    'bilirubin_total': { min: 0.3, max: 1.2, unit: 'mg/dL', foods: ['Radish', 'Lemon', 'Bitter Gourd'], impact: { high: "Liver stress/Jaundice risk. Avoid heavy alcohol and lifting." } },
    'bilirubin_direct': { min: 0, max: 0.3, unit: 'mg/dL', foods: ['Beetroot juice', 'Coffee'], impact: { high: "Biliary tract issue risk. Stick to light diet." } },
    'sgot': { min: 10, max: 40, unit: 'U/L', foods: ['Avocado', 'Green Leafy Vegetables'], impact: { high: "Liver/Muscle stress. Take extra rest days from training." } },
    'sgpt': { min: 7, max: 56, unit: 'U/L', foods: ['Broccoli', 'Walnuts'], impact: { high: "Liver inflammation risk. Limit high-fat foods." } },
    'alkaline_phosphatase': { min: 44, max: 147, unit: 'U/L', foods: ['Salmon', 'Milk'], impact: { low: "Possible nutritional deficiency.", high: "Bone or Liver activity. Monitor intake." } },
    'ggt': { min: 9, max: 48, unit: 'U/L', foods: ['Coffee', 'Oats'], impact: { high: "Liver stress from toxins. Focus on detox and hydration." } },
    'total_protein': { min: 6.3, max: 8.2, unit: 'g/dL', foods: ['Lean Protein', 'Eggs', 'Soy'], impact: { low: "Poor nutrition or liver issue.", high: "Dehydration or chronic inflammation." } },
    'albumin': { min: 3.5, max: 5.0, unit: 'g/dL', foods: ['Egg Whites', 'Cottage Cheese'], impact: { low: "Malnutrition or liver stress.", high: "Indicates dehydration usually." } },
    'globulin': { min: 2.0, max: 3.5, unit: 'g/dL', foods: ['Fermented foods', 'Garlic'], impact: { low: "Possible immune suppression.", high: "Infection or inflammatory response." } },
    'ag_ratio': { min: 1.0, max: 2.2, unit: '', foods: ['Balanced protein and fiber'], impact: { low: "Liver or Kidney concern.", high: "Possible genetic or blood disorder." } },

    // Iron / Anemia
    'iron': { min: 60, max: 170, unit: 'µg/dL', foods: ['Spinach', 'Red Meat', 'Pumpkin Seeds'], impact: { low: "Anemia risk. Low energy for cardio.", high: "Hemochromatosis risk. Limit vitamin C with iron." } },
    'tibc': { min: 240, max: 450, unit: 'µg/dL', foods: ['Iron-rich diet'], impact: { high: "Iron deficiency indicator. Supplement iron." } },
    'transferrin_saturation': { min: 20, max: 50, unit: '%', foods: ['Heme iron (Meat)', 'Non-heme iron'], impact: { low: "Iron stores depleted. Perform light activity only." } },

    // 5. Glucose
    'glucose_fasting': { min: 70, max: 100, unit: 'mg/dL', foods: ['Oats', 'Chia Seeds', 'Lean Protein'], impact: { low: "Hypoglycemia risk. Take fast carbs during exercise.", high: "Diabetes risk. Prioritize regular walking and fiber." } },
    'glucose_pp': { min: 70, max: 140, unit: 'mg/dL', foods: ['High Fiber', 'Vinegar before meals'], impact: { high: "Poor post-meal control. Walk for 15 mins after eating." } },
    'hba1c': { min: 4.0, max: 5.6, unit: '%', foods: ['Cinnamon', 'Low GI Foods'], impact: { high: "Long term glucose control issues. Maintain weight." } },
    'insulin': { min: 2, max: 25, unit: 'µIU/mL', foods: ['Berries', 'Apple cider vinegar'], impact: { high: "Insulin resistance risk." } },

    // 6. Lipids
    'cholesterol': { min: 0, max: 200, unit: 'mg/dL', foods: ['Oats', 'Avocado', 'Olive Oil'], impact: { high: "Cardiac risk. Focus on zone 2 aerobic exercise." } },
    'hdl_cholesterol': { min: 40, max: 100, unit: 'mg/dL', foods: ['Fatty Fish', 'Olive Oil', 'Nuts'], impact: { low: "Low 'Good' cholesterol. Increase aerobic intensity.", high: "Excellent protective profile." } },
    'ldl_cholesterol': { min: 0, max: 100, unit: 'mg/dL', foods: ['Fiber-rich foods', 'Beans'], impact: { high: "Bad cholesterol marker. Reduce saturated fats." } },
    'triglycerides': { min: 0, max: 150, unit: 'mg/dL', foods: ['Omega-3 (Fish)', 'No Sugar'], impact: { high: "Metabolic syndrome risk. Reduce refined carbs." } },

    // 7. Thyroid
    'tsh': { min: 0.4, max: 4.0, unit: 'µIU/mL', foods: ['Iodized Salt', 'Seaweed'], impact: { high: "Hypothyroid. Metabolism is slow. Focus on strength.", low: "Hyperthyroid. High metabolism. Ensure calorie intake." } },
    't3': { min: 80, max: 200, unit: 'ng/dL', foods: ['Selenium (Brazil nuts)', 'Zinc'], impact: { low: "Metabolism slowdown.", high: "Risk of heart racing/anxiety." } },
    't4': { min: 5.0, max: 12.0, unit: 'µg/dL', foods: ['Iodine-rich foods'], impact: { low: "Hypothyroid symptoms.", high: "Hyperthyroid symptoms." } },

    // 8. Vitamins & Hormones
    'vitamin_b12': { min: 200, max: 900, unit: 'pg/mL', foods: ['Clams', 'Beef', 'Fortified Cereals'], impact: { low: "Nerve health and energy low. Limit high intensity." } },
    'vitamin_d': { min: 30, max: 100, unit: 'ng/mL', foods: ['Sunlight exposure', 'Egg Yolks', 'Mushrooms'], impact: { low: "Bone density risk. Focus on balance and stability." } },
    'testosterone': { min: 300, max: 1000, unit: 'ng/dL', foods: ['Zinc-rich foods', 'Healthy Fats'], impact: { low: "Muscle loss and low libido. Perform heavy lifting." } },
    'cortisol': { min: 5, max: 25, unit: 'µg/dL', foods: ['Dark Chocolate', 'Bananas', 'Herbal Tea'], impact: { high: "Chronically high stress. Lower workout intensity." } },
    'ferritin': { min: 20, max: 300, unit: 'ng/mL', foods: ['Iron-rich foods', 'Vitamin C'], impact: { low: "Low long-term iron stores." } },

    // 9. Cardiac / Inflammation
    'crp': { min: 0, max: 10, unit: 'mg/L', foods: ['Blueberries', 'Turmeric', 'Green Tea'], impact: { high: "High systemic inflammation. Focus on mobility/yoga." } },
    'hs_crp': { min: 0, max: 1, unit: 'mg/L', foods: ['Walnuts', 'Salmon'], impact: { high: "Increased cardiac risk marker. Focus on heart health." } },
    'troponin_i': { min: 0, max: 0.04, unit: 'ng/mL', foods: ['Heart healthy diet', 'Omega-3'], impact: { high: "CRITICAL: Seek Emergency Medical attention immediately." } },
    'ck_total': { min: 20, max: 200, unit: 'U/L', foods: ['Hydration with electrolytes'], impact: { high: "Severe muscle breakdown. Rest completely." } },

    // 10. New Additions (Defaults)
    'mpv': { min: 7, max: 11, unit: 'fL', foods: ['Balanced minerals'], impact: { high: "Inflammatory or bone marrow response." } },
    'pdw': { min: 9, max: 17, unit: 'fL', foods: ['Clean whole foods'], impact: { high: "Possible platelet production issue." } },
    'pct': { min: 0.1, max: 0.4, unit: '%', foods: ['Vitamin K-rich foods'], impact: { low: "Bleeding tendency.", high: "Clotting tendency." } },
    'absolute_neutrophil_count': { min: 1500, max: 8000, unit: '/µL', foods: ['Astragalus', 'Mushrooms'], impact: { low: "Neutropenia risk. Avoid public exposure." } },
    'absolute_lymphocyte_count': { min: 1000, max: 4800, unit: '/µL', foods: ['Elderberry', 'Vitamin C'], impact: { low: "Lowered immune resilience." } },
    'absolute_monocyte_count': { min: 200, max: 950, unit: '/µL', foods: ['Omega-3 rich foods'], impact: { high: "Ongoing chronic inflammation recovery." } },
    'absolute_eosinophil_count': { min: 0, max: 500, unit: '/µL', foods: ['Probiotics', 'Fermented foods'], impact: { high: "Potential allergic triggers or parasites." } },
    'amylase': { min: 30, max: 110, unit: 'U/L', foods: ['Low-fat diet', 'Papaya'], impact: { high: "Acute Pancreas stress. Liquid diet recommended." } },
    'lipase': { min: 0, max: 160, unit: 'U/L', foods: ['Lighter meals', 'No alcohol'], impact: { high: "Pancreatic enzyme elevation. See doctor." } },
    'urine_pus_cells': { min: 0, max: 5, unit: '/hpf', foods: ['Cranberry juice', 'D-Mannose'], impact: { high: "Possible UTI. Increase water intake and see doctor." } },
    'urine_rbc': { min: 0, max: 3, unit: '/hpf', foods: ['Low salt diet', 'Adequate water'], impact: { high: "Requires specialist consultation for kidney/bladder." } },
    'granulocyte': { min: 2, max: 8, unit: '10^3/µL', foods: ['Balanced vitamins'], impact: { high: "Sign of active immune response/infection." } },
    'ldh': { min: 140, max: 280, unit: 'U/L', foods: ['Antioxidant-rich berries', 'Vitamin C'], impact: { high: "Tissue stress or cellular turnover. Rest is vital." } }
};

export const generateDiseasePredictions = (extractedValues) => {
    const predictions = [];

    Object.keys(extractedValues).forEach(key => {
        const val = parseFloat(extractedValues[key]);
        const range = MEDICAL_RANGES[key];
        if (!range || isNaN(val)) return;

        // Anemia / Hgb
        if (key === 'hemoglobin' && val < 11) {
            predictions.push({ condition: 'Anemia', risk: 'High', color: '#ef4444', advice: 'Consult doctor for iron supplements.' });
        }

        // Diabetes
        if ((key === 'glucose_fasting' && val > 126) || (key === 'hba1c' && val > 6.5)) {
            predictions.push({ condition: 'Diabetes', risk: 'High', color: '#ef4444', advice: 'Manage sugar intake strictly.' });
        } else if ((key === 'glucose_fasting' && val > 100) || (key === 'hba1c' > 5.7)) {
            predictions.push({ condition: 'Pre-Diabetes', risk: 'Medium', color: '#f59e0b', advice: 'Lifestyle changes needed.' });
        }

        // Kidney
        if (key === 'creatinine' && val > 1.4) {
            predictions.push({ condition: 'Renal Insufficiency Risk', risk: 'High', color: '#ef4444', advice: 'Kidney function concern.' });
        }

        // Cardiac
        if (key === 'troponin_i' && val > 0.04) {
            predictions.push({ condition: 'Myocardial Injury Risk', risk: 'CRITICAL', color: '#b91c1c', advice: 'Seek immediate medical attention.' });
        }
        if (key === 'hs_crp' && val > 3) {
            predictions.push({ condition: 'High Cardiovascular Risk', risk: 'High', color: '#ef4444', advice: 'Inflammation marker high.' });
        }

        // Vitamin D
        if (key === 'vitamin_d' && val < 20) {
            predictions.push({ condition: 'Vitamin D Deficiency', risk: 'Medium', color: '#f59e0b', advice: 'Supplementation recommended.' });
        }

        // Thyroid
        if (key === 'tsh' && val > 5) {
            predictions.push({ condition: 'Hypothyroidism Risk', risk: 'Medium', color: '#f59e0b', advice: 'Metabolism might be slow.' });
        }
    });

    return predictions;
};

export const analyzeBloodReport = (extractedValues, existingRisks = []) => {
    const results = [];
    const suggestions = [];

    Object.keys(extractedValues).forEach(key => {
        const val = parseFloat(extractedValues[key]);
        const range = MEDICAL_RANGES[key];
        if (!range) return;

        let status = 'Normal';
        if (val < range.min) status = 'Low';
        if (val > range.max) status = 'High';

        const fitnessImpact = status === 'Low' ? range.impact?.low : (status === 'High' ? range.impact?.high : null);

        if (status !== 'Normal') {
            suggestions.push({
                parameter: key,
                status: status,
                foods: range.foods,
                fitnessImpact: fitnessImpact
            });
        }

        results.push({
            parameter: key,
            value: val,
            unit: range.unit,
            range: `${range.min}-${range.max}`,
            status,
            fitnessImpact
        });
    });

    // If risks weren't passed, generate them now
    const risks = existingRisks.length > 0 ? existingRisks : generateDiseasePredictions(extractedValues);

    return {
        date: new Date().toLocaleDateString(),
        values: extractedValues,
        results,
        suggestions,
        risks
    };
};
