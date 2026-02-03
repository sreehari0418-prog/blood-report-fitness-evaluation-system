// Comprehensive Medical Database

// Helper for keywords (OCR synonyms)
// 1. Hematology (Extended)
'hemoglobin': ['hemoglobin', 'haemoglobin', 'hb', 'hgb'],
    'rbc_count': ['rbc count', 'total rbc', 'red blood cells', 'erythrocyte count'],
        'total_count': ['total leucocyte count', 'tlc', 'wbc count', 'white blood cells', 'total count'],
            'platelet_count': ['platelet count', 'platelet', 'plt'],
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
                                                                                                                                                                                                        'bicarbonate': ['bicarbonate', 'hco3', 'co2 content'],
                                                                                                                                                                                                            'calcium': ['calcium', 'total calcium'],
                                                                                                                                                                                                                'ionized_calcium': ['ionized calcium'],
                                                                                                                                                                                                                    'phosphorus': ['phosphorus', 'phosphate', 'po4'],
                                                                                                                                                                                                                        'magnesium': ['magnesium'],
                                                                                                                                                                                                                            'anion_gap': ['anion gap'],

                                                                                                                                                                                                                                // 5. Diabetes/Glucose
                                                                                                                                                                                                                                'glucose_fasting': ['glucose fasting', 'fasting glucose', 'fbs', 'fasting blood sugar'],
                                                                                                                                                                                                                                    'glucose_pp': ['glucose pp', 'ppbs', 'post prandial'],
                                                                                                                                                                                                                                        'glucose_random': ['random glucose', 'rbs'],
                                                                                                                                                                                                                                            'hba1c': ['hba1c', 'glycated hemoglobin', 'glycosylated hemoglobin'],
                                                                                                                                                                                                                                                'insulin': ['insulin fasting', 'fasting insulin'],
                                                                                                                                                                                                                                                    'c_peptide': ['c-peptide'],

                                                                                                                                                                                                                                                        // 6. Lipids
                                                                                                                                                                                                                                                        'cholesterol': ['total cholesterol', 'serum cholesterol'],
                                                                                                                                                                                                                                                            'hdl_cholesterol': ['hdl cholesterol', 'hdl'],
                                                                                                                                                                                                                                                                'ldl_cholesterol': ['ldl cholesterol', 'ldl'],
                                                                                                                                                                                                                                                                    'triglycerides': ['triglycerides'],
                                                                                                                                                                                                                                                                        'vldl': ['vldl'],
                                                                                                                                                                                                                                                                            'ldl_hdl_ratio': ['ldl/hdl ratio'],
                                                                                                                                                                                                                                                                                'chol_hdl_ratio': ['total cholesterol/hdl ratio', 'chol/hdl'],
                                                                                                                                                                                                                                                                                    'non_hdl_cholesterol': ['non-hdl cholesterol'],

                                                                                                                                                                                                                                                                                        // 7. Thyroid
                                                                                                                                                                                                                                                                                        'tsh': ['thyroid stimulating hormone', 'tsh', 'thyrotropin'],
                                                                                                                                                                                                                                                                                            't3': ['triiodothyronine', 'total t3', 't3'],
                                                                                                                                                                                                                                                                                                't4': ['thyroxine', 'total t4', 't4'],
                                                                                                                                                                                                                                                                                                    'free_t3': ['free t3', 'ft3'],
                                                                                                                                                                                                                                                                                                        'free_t4': ['free t4', 'ft4'],
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
                                                                                                                                                                                                                                                                                                                                                                                        'amylase': ['amylase', 'serum amylase'],
                                                                                                                                                                                                                                                                                                                                                                                            'lipase': ['lipase', 'serum lipase']
};

export const MEDICAL_RANGES = {
    // 1. Hematology
    'hemoglobin': { min: 13, max: 17, unit: 'g/dL', foods: ['Spinach', 'Red Meat', 'Beetroot'], impact: { low: "Fatigue, low stamina. Focus on endurance cautiously.", high: "Dehydration risk. Hydrate well." } },
    'rbc_count': { min: 4.5, max: 5.9, unit: 'mil/µL', foods: ['Iron-rich foods', 'B12'], impact: {} }, // Averaged male/female
    'total_count': { min: 4000, max: 11000, unit: '/µL', foods: ['Vitamin C', 'Garlic'], impact: { low: "Low immunity. Avoid growing crowds/gyms.", high: "Body fighting infection. Rest." } },
    'platelet_count': { min: 1.5, max: 4.5, unit: 'Lakh/µL', foods: ['Papaya Leaf'], impact: { low: "Bleeding risk. Avoid contact sports." } },
    'hematocrit': { min: 38, max: 50, unit: '%', foods: ['Iron', 'Water'], impact: {} },
    'mcv': { min: 80, max: 100, unit: 'fL', foods: ['B12', 'Folate'], impact: { low: "Microcytic anemia risk.", high: "Macrocytic (B12 deficiency) risk." } },
    'mch': { min: 27, max: 33, unit: 'pg', foods: [], impact: {} },
    'mchc': { min: 32, max: 36, unit: 'g/dL', foods: [], impact: {} },
    'rdw': { min: 11.5, max: 14.5, unit: '%', foods: [], impact: {} },
    'neutrophil': { min: 40, max: 75, unit: '%', foods: [], impact: { high: "Bacterial infection likely. Rest." } },
    'lymphocyte': { min: 20, max: 45, unit: '%', foods: [], impact: { high: "Viral infection likely. Rest." } },
    'monocyte': { min: 2, max: 10, unit: '%', foods: [], impact: {} },
    'eosinophil': { min: 1, max: 6, unit: '%', foods: [], impact: { high: "Allergy or parasite. Monitor breathing." } },
    'basophil': { min: 0, max: 1, unit: '%', foods: [], impact: {} },
    'esr': { min: 0, max: 20, unit: 'mm/hr', foods: ['Anti-inflammatory', 'Turmeric'], impact: { high: "High Inflammation. Focus on recovery, light stretching." } },

    // 2. Kidney
    'bun': { min: 7, max: 20, unit: 'mg/dL', foods: ['Low Protein', 'Water'], impact: { high: "Kidney load high. Hydrate." } },
    'creatinine': { min: 0.6, max: 1.3, unit: 'mg/dL', foods: ['Less Red Meat', 'Cucumber'], impact: { high: "Kidney stress. Avoid creatine supplements." } },
    'uric_acid': { min: 3.5, max: 7.2, unit: 'mg/dL', foods: ['Cherries', 'No Alcohol'], impact: { high: "Gout risk. Avoid high-impact jumping." } },
    'egfr': { min: 90, max: 150, unit: 'mL/min', foods: [], impact: { low: "Kidney functionality concern. Consult doctor." } },

    // 3. Liver
    'bilirubin_total': { min: 0.3, max: 1.2, unit: 'mg/dL', foods: ['Radish', 'Lemon'], impact: { high: "Jaundice risk. No heavy lifting." } },
    'sgot': { min: 10, max: 40, unit: 'U/L', foods: ['Liver Detox'], impact: { high: "Liver/Muscle stress. Take rest days." } },
    'sgpt': { min: 7, max: 56, unit: 'U/L', foods: ['Whole grains'], impact: { high: "Liver enzyme elevation. Avoid alcohol/painkillers." } },
    'alkaline_phosphatase': { min: 44, max: 147, unit: 'U/L', foods: [], impact: {} },
    'total_protein': { min: 6.3, max: 8.2, unit: 'g/dL', foods: ['Lean Protein'], impact: {} },
    'albumin': { min: 3.5, max: 5.0, unit: 'g/dL', foods: [], impact: {} },

    // 4. Electrolytes
    'sodium': { min: 135, max: 145, unit: 'mmol/L', foods: ['Balanced Salt'], impact: { low: "Hyponatremia risk. Salt intake needed.", high: "Dehydration." } },
    'potassium': { min: 3.5, max: 5.1, unit: 'mmol/L', foods: ['Banana', 'Coconut Water'], impact: { low: "Cramp risk. Electrolytes needed.", high: "Heart rhythm risk. Medical attention." } },
    'calcium': { min: 8.5, max: 10.5, unit: 'mg/dL', foods: ['Milk', 'Yogurt'], impact: { low: "Bone weakness. Resistance train carefully." } },
    'magnesium': { min: 1.7, max: 2.4, unit: 'mg/dL', foods: ['Nuts', 'Seeds'], impact: { low: "Muscle twitching/cramps." } },

    // 5. Glucose
    'glucose_fasting': { min: 70, max: 100, unit: 'mg/dL', foods: ['Fiber', 'Low GI'], impact: { high: "Diabetes risk. Cardio recommended." } },
    'glucose_pp': { min: 70, max: 140, unit: 'mg/dL', foods: ['Vegetables'], impact: { high: "Insulin resistance." } },
    'hba1c': { min: 4.0, max: 5.6, unit: '%', foods: ['Low Carb'], impact: { high: "Long term sugar control poor." } },
    'insulin': { min: 2, max: 25, unit: 'µIU/mL', foods: [], impact: {} },

    // 6. Lipids
    'cholesterol': { min: 0, max: 200, unit: 'mg/dL', foods: ['Oats', 'Garlic'], impact: { high: "Cardiac risk. Steady state cardio." } },
    'hdl_cholesterol': { min: 40, max: 100, unit: 'mg/dL', foods: ['Nuts', 'Fish'], impact: { low: "Good cholesterol low. Needs exercise." } },
    'ldl_cholesterol': { min: 0, max: 100, unit: 'mg/dL', foods: ['Fiber'], impact: { high: "Bad cholesterol. Diet control needed." } },
    'triglycerides': { min: 0, max: 150, unit: 'mg/dL', foods: ['No Sugar', 'Fish Oil'], impact: { high: "Metabolic syndrome risk." } },

    // 7. Thyroid
    'tsh': { min: 0.4, max: 4.0, unit: 'µIU/mL', foods: [], impact: { high: "Hypothyroid (Slow metabolism).", low: "Hyperthyroid (Fast HR)." } },
    't3': { min: 80, max: 200, unit: 'ng/dL', foods: [], impact: {} },
    't4': { min: 5.0, max: 12.0, unit: 'µg/dL', foods: [], impact: {} },

    // 8. Vitamins & Hormones
    'vitamin_b12': { min: 200, max: 900, unit: 'pg/mL', foods: ['Meat', 'Eggs', 'Supplements'], impact: { low: "Nerve health/Energy low." } },
    'vitamin_d': { min: 30, max: 100, unit: 'ng/mL', foods: ['Sunlight', 'Mushrooms', 'Supplements'], impact: { low: "Bone density/Immunity risk." } },
    'testosterone': { min: 300, max: 1000, unit: 'ng/dL', foods: ['Zinc', 'Strength Training'], impact: { low: "Muscle loss, fatigue." } }, // Male default roughly
    'cortisol': { min: 5, max: 25, unit: 'µg/dL', foods: ['Ashwagandha', 'Sleep'], impact: { high: "High stress. Reduce intensity." } },
    'ferritin': { min: 20, max: 300, unit: 'ng/mL', foods: [], impact: { low: "Iron stores low." } },
    'iron': { min: 60, max: 170, unit: 'µg/dL', foods: ['Spinach'], impact: { low: "Anemia." } },

    // 9. Cardiac / Inflammation
    'crp': { min: 0, max: 10, unit: 'mg/L', foods: ['Anti-inflammatory'], impact: { high: "Systemic inflammation." } },
    'hs_crp': { min: 0, max: 1, unit: 'mg/L', foods: [], impact: { high: "Cardiac risk marker." } },
    'troponin_i': { min: 0, max: 0.04, unit: 'ng/mL', foods: [], impact: { high: "CRITICAL: Heart muscle damage. ER immediately." } },
    'ck_total': { min: 20, max: 200, unit: 'U/L', foods: [], impact: { high: "Muscle breakdown (could be hard training or rhabdo)." } },

    // 10. New Additions (Defaults)
    'mpv': { min: 7, max: 11, unit: 'fL', foods: [], impact: {} },
    'pdw': { min: 9, max: 17, unit: 'fL', foods: [], impact: {} },
    'pct': { min: 0.1, max: 0.4, unit: '%', foods: [], impact: {} },
    'absolute_neutrophil_count': { min: 1500, max: 8000, unit: '/µL', foods: [], impact: { low: "Neutropenia. Low immunity." } },
    'absolute_lymphocyte_count': { min: 1000, max: 4800, unit: '/µL', foods: [], impact: {} },
    'absolute_monocyte_count': { min: 200, max: 950, unit: '/µL', foods: [], impact: {} },
    'absolute_eosinophil_count': { min: 0, max: 500, unit: '/µL', foods: [], impact: { high: "Allergy/Parasite." } },
    'transferrin_saturation': { min: 20, max: 50, unit: '%', foods: [], impact: { low: "Iron deficiency." } },
    'amylase': { min: 30, max: 110, unit: 'U/L', foods: [], impact: { high: "Pancreas inflammation (Pancreatitis)." } },
    'lipase': { min: 0, max: 160, unit: 'U/L', foods: [], impact: { high: "Pancreas damage." } },
    'urine_pus_cells': { min: 0, max: 5, unit: '/hpf', foods: ['Cranberry'], impact: { high: "Urinary Tract Infection (UTI)." } },
    'urine_rbc': { min: 0, max: 3, unit: '/hpf', foods: [], impact: { high: "Blood in urine. Consult urologist." } }
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
