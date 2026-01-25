export const MEDICAL_RANGES = {
    // CBC
    'hemoglobin': {
        min: 12.5, max: 16.0, unit: 'gm/dl',
        foods: ['Spinach', 'Red Meat', 'Pumpkin Seeds'],
        impact: { low: "You may experience higher fatigue during cardio. Consider lower intensity now.", high: "Rarely caused by high altitude or smoking. Ensure good hydration." }
    },
    'total_count': {
        min: 4000, max: 11000, unit: 'cells/cumm',
        foods: ['Vitamin C', 'Garlic', 'Ginger'],
        impact: { low: "Immunity might be lower. Skip high-intensity sessions if you feel weak.", high: "Body is fighting something. Rest and recover properly." }
    },
    'neutrophil': { min: 40, max: 70, unit: '%', foods: [], impact: {} },
    'lymphocyte': { min: 20, max: 45, unit: '%', foods: [], impact: {} },
    'eosinophil': { min: 2, max: 8, unit: '%', foods: [], impact: {} },
    'monocyte': { min: 1, max: 6, unit: '%', foods: [], impact: {} },
    'basophil': { min: 0, max: 1, unit: '%', foods: [], impact: {} },
    'platelet_count': {
        min: 1.5, max: 4.5, unit: 'Lakhs/cumm',
        foods: ['Papaya Leaf', 'Pomegranate'],
        impact: { low: "Careful to avoid injury. High-impact sports are not recommended.", high: "Can indicate inflammation. Focus on recovery." }
    },
    'esr': { min: 0, max: 20, unit: 'mm/hr', foods: ['Anti-inflammatory foods'], impact: { high: "High inflammation. Focus on light movement and stretching." } },
    'mcv': { min: 80, max: 100, unit: 'fL', foods: ['Vitamin B12', 'Folic Acid'], impact: { low: "Lower oxygen capacity. Strength training may feel significantly harder." } },
    'mch': { min: 27, max: 32, unit: 'pg', foods: ['Iron rich foods'], impact: { low: "Fatigue risk. Focus on foundational strength movements." } },
    'mchc': { min: 32, max: 36, unit: 'g/dL', foods: [], impact: {} },

    // Thyroid
    't3': { min: 0.85, max: 2.68, unit: 'nmol/L', foods: ['Brazil Nuts', ' Seaweed'], impact: { low: "Lowered metabolism. You might find it harder to maintain energy." } },
    't4': { min: 5.1, max: 14.1, unit: 'ug/dL', foods: ['Dairy', 'Eggs', 'Fish'], impact: { low: "Similar to T3, watch for sluggishness during workouts." } },
    'tsh': { min: 0.27, max: 4.2, unit: 'uIU/mL', foods: ['Avoid cruciferous veg if hypothyroid'], impact: { high: "Watch for weight gain and low energy levels during routine." } },

    // Sugar & Lipids
    'glucose_fasting': {
        min: 70, max: 100, unit: 'mg/dL',
        foods: ['Low Carb', 'High Fiber'],
        impact: { high: "Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.", low: "Potential for dizziness. Have a small snack before exercise." }
    },
    'glucose_pp': { min: 70, max: 140, unit: 'mg/dL', foods: ['Complex Carbs', 'Vegetables'], impact: { high: "Spikes can affect recovery. A 10-min walk after meals is recommended." } },
    'cholesterol': { min: 0, max: 200, unit: 'mg/dL', foods: ['Oats', 'Nuts', 'Olive Oil'], impact: { high: "Focus on heart-healthy cardio like swimming or brisk walking." } },
    'triglycerides': { min: 0, max: 150, unit: 'mg/dL', foods: ['Avoid Sugar', 'Eat Fish'], impact: { high: "Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio." } },
    'hdl_cholesterol': { min: 40, max: 60, unit: 'mg/dL', foods: ['Avocado', 'Salmon'], impact: { low: "HIIT or intensive cardio can help boost this 'good' cholesterol." } },
    'ldl_cholesterol': { min: 0, max: 100, unit: 'mg/dL', foods: ['Fiber', 'Soy', 'Almonds'], impact: { high: "Heart health priority. Daily steady movement is mandatory." } },

    // Kidney
    'urea': { min: 15, max: 40, unit: 'mg/dL', foods: ['Reduce Protein', 'Hydrate'], impact: { high: "Kidney stress. Hydrate well and limit protein supplement intake temporarily." } },
    'creatinine': { min: 0.6, max: 1.2, unit: 'mg/dL', foods: ['Reduce Red Meat', 'Hydrate'], impact: { high: "Ensure excellent hydration; avoid over-exertion in extreme heat." } },
    'uric_acid': { min: 3.5, max: 7.2, unit: 'mg/dL', foods: ['Avoid Alcohol', 'Cherries', 'Vitamin C'], impact: { high: "Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore." } },
    'sodium': { min: 135, max: 145, unit: 'mmol/L', foods: ['Hydrate'], impact: { low: "Performance risk. Monitor salt loss during long workout sessions." } },
    'potassium': { min: 3.5, max: 5.5, unit: 'mmol/L', foods: ['Banana', 'Coconut Water'], impact: { low: "High risk of muscle cramps. Ensure steady electrolyte intake." } },

    // Liver
    'bilirubin_total': { min: 0.3, max: 1.2, unit: 'mg/dL', foods: ['Radish', 'Lemon Water'], impact: { high: "Liver stress. Keep training intensity moderate and skip supplements." } },
    'sgot': { min: 5, max: 40, unit: 'U/L', foods: ['Leafy Greens', 'Coffee'], impact: { high: "Could be muscle damage from training or liver stress. Take a rest day." } },
    'sgpt': { min: 7, max: 56, unit: 'U/L', foods: ['Whole Grains', 'Avoid Alcohol'], impact: { high: "Focus on recovery. Avoid using pain killers like Tylenol if high." } },
    'alkaline_phosphatase': { min: 44, max: 147, unit: 'IU/L', foods: ['Vitamin D'], impact: { low: "Vitamin D deficiency. Impacts bone health and muscle strength." } }
};

export const generateDiseasePredictions = (extractedValues) => {
    const predictions = [];

    Object.keys(extractedValues).forEach(key => {
        const val = parseFloat(extractedValues[key]);
        const range = MEDICAL_RANGES[key];
        if (!range || isNaN(val)) return;

        // Anemia / Hgb
        if (key === 'hemoglobin') {
            if (val < 10) predictions.push({ condition: 'Severe Anemia Risk', risk: 'High', color: '#ef4444', advice: 'Consult a specialist immediately for iron supplements.' });
            else if (val < range.min) predictions.push({ condition: 'Mild Anemia', risk: 'Medium', color: '#fbbf24', advice: 'Increase intake of spinach, red meat, and Vitamin C.' });
        }

        // Diabetes / Sugar
        if (key === 'glucose_fasting' || key === 'glucose_pp') {
            if (val > 140 && key === 'glucose_fasting') predictions.push({ condition: 'Diabetes Risk', risk: 'High', color: '#ef4444', advice: 'Strict sugar control needed. Monitor Hba1c.' });
            else if (val > range.max) predictions.push({ condition: 'Pre-Diabetes Warning', risk: 'Medium', color: '#fbbf24', advice: 'Reduce carbs/sugar and start daily brisk walking.' });
        }

        // Kidney / Creatinine
        if (key === 'creatinine') {
            if (val > 1.5) predictions.push({ condition: 'Kidney Stress', risk: 'High', color: '#ef4444', advice: 'High hydration needed. Avoid protein supplements temporarily.' });
        }

        // Infection / WBC
        if (key === 'total_count' && val > 12000) {
            predictions.push({ condition: 'Potential Infection', risk: 'Medium', color: '#fbbf24', advice: 'Body is fighting inflammation. Rest well.' });
        }

        // Cholesterol
        if ((key === 'cholesterol' && val > 240) || (key === 'triglycerides' && val > 200)) {
            predictions.push({ condition: 'Cardiovascular Risk', risk: 'High', color: '#ef4444', advice: 'Avoid saturated fats/fried food. Increase cardio.' });
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
