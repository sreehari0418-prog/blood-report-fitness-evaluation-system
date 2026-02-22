/**
 * Predefined Health QA Utility
 * Matches user queries against the expert health knowledge base instantly in the frontend.
 */

const MEDICAL_KEYWORDS = new Set([
    'creatinine', 'hemoglobin', 'glucose', 'sugar', 'cholesterol', 'thyroid', 'platelet',
    'wbc', 'rbc', 'uric', 'crp', 'urea', 'liver', 'kidney', 'heart', 'anemia', 'diabetes',
    'vitamin', 'b12', 'vit d', 'sgpt', 'sgot', 'albumin', 'hba1c', 'ldl', 'hdl', 'triglyceride'
]);

const EXPERT_QA = {
    "blood_report_and_lab_values": [
        { "question": "What is creatinine and why does it increase?", "answer": "Creatinine is a waste product from muscle breakdown, filtered by the kidneys. It increases when kidney function is impaired, or due to severe dehydration and high protein intake." },
        { "question": "How can I reduce my creatinine level naturally?", "answer": "Stay well-hydrated, reduce intense exercise temporarily, and limit high-protein foods like red meat if your levels are elevated." },
        { "question": "What causes high urea levels in the blood?", "answer": "High urea (BUN) can be caused by kidney dysfunction, dehydration, high protein intake, or even certain medications." },
        { "question": "What does a low hemoglobin level indicate?", "answer": "Low hemoglobin typically indicates anemia, which means your blood isn't carrying enough oxygen. It's often caused by iron, B12, or folate deficiency." },
        { "question": "How can I increase my hemoglobin quickly?", "answer": "Eat iron-rich foods (red meat, spinach, lentils) along with Vitamin C (lemon, citrus) to boost absorption. Pomegranate and beetroot are excellent natural boosters." },
        { "question": "What is the normal range for white blood cells (WBC)?", "answer": "The normal WBC range is generally between 4,000 and 11,000 cells per microliter (mcL)." },
        { "question": "What does a high WBC count mean?", "answer": "A high WBC count (leukocytosis) usually indicates your body is fighting an infection, inflammation, or responding to high stress." },
        { "question": "Why might my platelet count be low?", "answer": "Low platelets (thrombocytopenia) can be caused by viral infections (like Dengue), vitamin B12 deficiency, or certain immune conditions." },
        { "question": "How can I improve my platelet count naturally?", "answer": "Papaya leaf extract, pomegranate, and Vitamin B12-rich foods can help support healthy platelet production." },
        { "question": "What does a high ESR value indicate?", "answer": "ESR (Erythrocyte Sedimentation Rate) is a non-specific marker for inflammation in the body. It increases during infections or chronic inflammatory conditions." },
        { "question": "What does a low RBC count mean?", "answer": "A low RBC count means your body has fewer oxygen-carrying cells than normal, often leading to fatigue and weakness (Anemia)." },
        { "question": "How can I increase my RBC count through diet?", "answer": "Focus on iron, Vitamin B12, and folic acid. Leafy greens, eggs, and fortified cereals are key." },
        { "question": "What is bilirubin, and why might it be high?", "answer": "Bilirubin is a yellowish pigment from old red blood cells. High levels often indicate liver issues, gallbladder blockages, or high breakdown of RBCs (Jaundice)." },
        { "question": "What causes elevated liver enzymes (SGPT, SGOT)?", "answer": "Elevation usually signals liver cell damage, often caused by fatty liver, alcohol consumption, certain medications, or viral hepatitis." },
        { "question": "What is the normal blood sugar level?", "answer": "Fasting blood sugar is normally 70–99 mg/dL. 100–125 mg/dL is pre-diabetic, and 126+ mg/dL indicates diabetes." },
        { "question": "How to control high fasting blood sugar?", "answer": "Reduce evening carb intake, increase fiber, ensure 7+ hours of sleep, and stay active with daily walking." },
        { "question": "What does a high HbA1c mean?", "answer": "HbA1c measures your average blood sugar over the past 3 months. A high level indicates poor long-term sugar control (6.5%+ is diabetic)." },
        { "question": "What does low vitamin D in my blood report mean?", "answer": "Low Vit D can lead to bone pain and weak immunity. It's often due to lack of sun exposure or poor absorption." },
        { "question": "How can I increase vitamin D naturally?", "answer": "Sunlight (15-20 min daily) is the best source. Fatty fish, egg yolks, and fortified milk also help." },
        { "question": "What are the symptoms of low vitamin B12?", "answer": "Common signs include fatigue, dizziness, numbness in hands/feet, and brain fog." },
        { "question": "How can I increase vitamin B12 levels?", "answer": "Meat, fish, eggs, and dairy are the best sources. Vegans often need supplements or fortified foods." },
        { "question": "What causes high cholesterol in the blood?", "answer": "Diets high in saturated/trans fats, lack of exercise, smoking, and genetics are the primary causes." },
        { "question": "How can I lower my LDL cholesterol naturally?", "answer": "Increase soluble fiber (oats, beans), eat nuts, and use olive oil instead of butter." },
        { "question": "What is HDL cholesterol and how can I increase it?", "answer": "HDL is 'good' cholesterol that protects your heart. Increase it with regular cardio and healthy fats like fish and walnuts." },
        { "question": "What does high triglyceride mean?", "answer": "High triglycerides are a type of fat in your blood. High levels increase heart risk and are often due to excess sugar, alcohol, and calories." },
        { "question": "How can I reduce triglycerides fast?", "answer": "Cut out sugar, refined carbs, and alcohol. Increase physical activity and eat omega-3 rich foods." },
        { "question": "What does high uric acid mean?", "answer": "High uric acid can lead to Gout (joint pain). It's caused by a diet rich in purines (red meat, seafood) and sugar." },
        { "question": "How to lower uric acid naturally?", "answer": "Drink plenty of water, avoid red meat and sugary drinks, and eat low-fat dairy and cherries." },
        { "question": "What is CRP and why is it tested?", "answer": "CRP (C-Reactive Protein) is a marker of inflammation. It helps detect acute infections or chronic inflammatory risks." },
        { "question": "What does a high CRP level indicate?", "answer": "It means there is significant inflammation in your body. It could be due to a recent infection, injury, or an underlying chronic condition." }
    ],
    "kidney_and_liver_health": [
        { "question": "What foods support kidney function?", "answer": "Hydrating foods like cucumber, water-rich fruits like apples/berries, and low-sodium vegetables." },
        { "question": "Can dehydration cause high creatinine?", "answer": "Yes, dehydration reduces the volume of blood filtered by the kidneys, which can cause a temporary spike in creatinine." },
        { "question": "What are the early symptoms of kidney disease?", "answer": "Fatigue, swelling in ankles (edema), changes in urination frequency, and foamy urine." },
        { "question": "How much water should I drink for healthy kidneys?", "answer": "Generally 3-4 liters for men and 2.5-3 liters for women, adjusted for activity and weather." },
        { "question": "What foods should I avoid if my urea is high?", "answer": "Limit high-protein foods like red meat, organ meats, and excessive legumes until levels stabilize." },
        { "question": "Can exercise help lower creatinine?", "answer": "Moderate exercise supports overall health, but intense weightlifting can actually spike creatinine because it's a byproduct of muscle metabolism." },
        { "question": "What are liver function tests (LFTs)?", "answer": "A group of blood tests (SGPT, SGOT, Bilirubin, Albumin) that measure how well your liver is working." },
        { "question": "What foods help cleanse the liver?", "answer": "Leafy greens, garlic, beets, and turmeric support the liver's natural detoxification process." },
        { "question": "Can alcohol increase SGPT and SGOT?", "answer": "Yes, regular or excessive alcohol causes liver inflammation, which raises these enzyme levels." },
        { "question": "What are signs of fatty liver in blood tests?", "answer": "Mildly elevated SGPT/SGOT and high SGPT-to-SGOT ratio are common markers for fatty liver." },
        { "question": "How to reverse fatty liver naturally?", "answer": "Lose weight through a low-carb diet, quit alcohol, and engage in daily physical activity." },
        { "question": "Can turmeric help with liver health?", "answer": "Yes, curcumin in turmeric has potent anti-inflammatory effects that support liver healing." },
        { "question": "How often should I check my kidney function?", "answer": "Healthy adults should check once a year. Those with diabetes or BP should check every 3-6 months." },
        { "question": "What is eGFR and what does it indicate?", "answer": "eGFR (Estimated Glomerular Filtration Rate) is the best marker for kidney function. Higher is better; below 60 suggests kidney issue." },
        { "question": "What are the causes of low albumin levels?", "answer": "Low albumin can indicate liver disease, kidney issues, or chronic inflammation/malnutrition." }
    ],
    "heart_and_cholesterol": [
        { "question": "What causes high LDL cholesterol?", "answer": "Saturated fats (butter, fried food), trans fats, inactivity, and genetics." },
        { "question": "Which foods increase HDL (good cholesterol)?", "answer": "Walnuts, fatty fish (salmon), flaxseeds, and olive oil." },
        { "question": "How to lower cholesterol without medicine?", "answer": "Eat more oats/fiber, avoid trans fats, walk 30 mins daily, and lose excess body fat." },
        { "question": "What is the normal triglyceride level?", "answer": "Below 150 mg/dL is considered normal. Above 200 is high." },
        { "question": "Can stress cause high cholesterol?", "answer": "Yes, stress triggers cortisol, which can increase the production of triglyecrides and bad cholesterol." },
        { "question": "Is omega-3 good for heart health?", "answer": "Absolutely. It reduces triglycerides, lowers BP slightly, and reduces the risk of irregular heartbeats." },
        { "question": "How does blood pressure affect heart health?", "answer": "High blood pressure (Hypertension) strains the heart and damages arteries, increasing the risk of heart attack and stroke." },
        { "question": "What foods can help control high blood pressure?", "answer": "Potassium-rich foods like bananas and spinach, and nitrate-rich ones like beetroot." },
        { "question": "Can exercise lower cholesterol?", "answer": "Yes, regular aerobic exercise increases HDL (good) and helps reduce LDL (bad) cholesterol." },
        { "question": "What are warning signs of heart disease in blood tests?", "answer": "High LDL, high triglycerides, high CRP (inflammation), and high Homocysteine." }
    ],
    "nutrition_and_vitamins": [
        { "question": "What are the best foods to boost iron levels?", "answer": "Red meat, liver, spinach, lentils, and pomegranate." },
        { "question": "Can low iron cause fatigue?", "answer": "Yes, low iron leads to low hemoglobin, which means less oxygen reaches your organs, causing tiredness." },
        { "question": "How to increase vitamin C naturally?", "answer": "Eat bell peppers, citrus fruits (lemon, orange), strawberries, and guava." },
        { "question": "What are the symptoms of calcium deficiency?", "answer": "Muscle cramps, brittle nails, and in severe cases, weakened bones or heart rhythm issues." },
        { "question": "How to increase calcium absorption?", "answer": "Ensure you have adequate Vitamin D, as the body cannot absorb calcium without it." },
        { "question": "What foods are rich in folic acid?", "answer": "Leafy green vegetables (foliage), beans, peas, and fortified grains." },
        { "question": "What are the signs of low magnesium?", "answer": "Muscle twitches, fatigue, irregular heartbeat, and difficulty sleeping." },
        { "question": "How to increase potassium levels naturally?", "answer": "Bananas, sweet potatoes, coconut water, and white beans are great sources." },
        { "question": "Can diet affect blood test results?", "answer": "Significantly. Recent meals, hydration levels, and alcohol can change sugar, lipid, and enzyme readings." },
        { "question": "Should I fast before a blood test?", "answer": "For Sugar and Lipid profile (Cholesterol), a 10-12 hour fast is usually required." },
        { "question": "How to detox the body naturally?", "answer": "Your liver and kidneys are your main detox organs. Support them with hydration, fiber, and avoiding processed toxins/alcohol." },
        { "question": "Which fruits are good for blood purification?", "answer": "Beetroot, pomegranate, cranberries, and apples are excellent for supporting blood health." },
        { "question": "Can lack of sleep affect blood reports?", "answer": "Yes, it can increase cortisol (stress hormone), spike sugar levels, and raise BP." },
        { "question": "What are the best foods for improving immunity?", "answer": "Vitamin C fruits, garlic, ginger, turmeric, and zinc-rich seeds like pumpkin seeds." },
        { "question": "How much protein should I eat daily?", "answer": "Sedentary adults need about 0.8-1g per kg body weight; active adults need 1.2-2g." }
    ],
    "diabetes_and_blood_sugar": [
        { "question": "What is HbA1c and why is it important?", "answer": "It shows your average blood sugar over 3 months. It's the most reliable test for identifying long-term sugar trends." },
        { "question": "How to lower blood sugar naturally?", "answer": "Increase fiber, walk 15 mins after every meal, manage stress, and choose low-GI whole foods." },
        { "question": "What are the early symptoms of diabetes?", "answer": "Frequent urination, excessive thirst, sudden weight loss, and slow-healing wounds." },
        { "question": "Can walking reduce blood sugar?", "answer": "Yes, light walking after meals helps muscles use the glucose from your blood, preventing sugar spikes." },
        { "question": "What foods cause blood sugar spikes?", "answer": "Refined sugar, white rice, white bread, pastries, and sweetened juices." },
        { "question": "Is intermittent fasting safe for diabetics?", "answer": "It can be beneficial but MUST be done under medical supervision to avoid dangerous sugar crashes (hypoglycemia)." },
        { "question": "How to control sugar cravings?", "answer": "Eat more protein and fiber, stay hydrated, and ensure you're getting enough sleep." },
        { "question": "What fruits are safe for diabetics?", "answer": "Apples, Berries, Guava, and Pears are safer due to their lower GI and high fiber." },
        { "question": "Can stress increase blood sugar levels?", "answer": "Yes, stress hormones (cortisol and adrenaline) signal the liver to release extra glucose into the blood." },
        { "question": "What is the normal range of post-meal glucose?", "answer": "Ideally under 140 mg/dL two hours after eating for a healthy individual." }
    ],
    "hormones_and_general_health": [
        { "question": "What does TSH mean in a blood report?", "answer": "TSH measures your thyroid function. High TSH means your thyroid is underactive (Hypothyroidism); Low TSH means overactive (Hyperthyroidism)." },
        { "question": "What are symptoms of thyroid imbalance?", "answer": "Weight changes, fatigue, hair loss, feeling too cold or too hot, and mood shifts." },
        { "question": "How can I control hypothyroidism naturally?", "answer": "Ensure adequate iodine and selenium, avoid excess soy/raw cruciferous veg, and manage stress." },
        { "question": "What is cortisol and how does stress affect it?", "answer": "Cortisol is the stress hormone. Chronic stress keeps it high, which leads to weight gain, high BP, and high sugar." },
        { "question": "How does dehydration affect blood reports?", "answer": "It can artificially inflate readings for hemoglobin, hematocrit, and creatinine." },
        { "question": "What are signs of anemia?", "answer": "Pale skin, dizziness, shortness of breath, cold hands/feet, and constant fatigue." },
        { "question": "How can I boost energy naturally?", "answer": "Eat complex carbs, stay hydrated, maintain B12 levels, and get consistent sunlight." },
        { "question": "What is the importance of regular blood tests?", "answer": "They act as an early warning system, detecting issues like high sugar or organ strain before symptoms appear." }
    ],
    "lifestyle_and_ai_guidance": [
        { "question": "How often should I test my blood levels?", "answer": "Once a year for healthy adults. Every 3-6 months if you have a chronic condition like diabetes or high BP." },
        { "question": "Can I get diet suggestions based on my blood report?", "answer": "Yes! Our AI analyzes your report and provides customized diet plans (Anemia diet, Diabetic diet, etc.) based on your results." },
        { "question": "What exercise is best for improving my health reports?", "answer": "A mix of 150 mins/week moderate cardio (fasting or after-meal walking) and 2 days of strength training." },
        { "question": "Should I take supplements if my vitamin levels are low?", "answer": "Usually yes, but it's best to confirm the dosage with your doctor after seeing the blood report values." },
        { "question": "What foods should I avoid if I have high cholesterol?", "answer": "Fried snacks, buttery pastries, red meat, and processed meats like sausages." },
        { "question": "Can AI help track my blood results over time?", "answer": "Yes, our AI monitors your trends across multiple reports to see if your health is improving or declining over time." },
        { "question": "How can your AI chatbot help me understand my blood report?", "answer": "Our AI acts as a proactive health coach. It doesn't just read values; it analyzes trends, explains medical terminology, and provides specific diet and lifestyle steps based on YOUR data." }
    ]
};

const DISCLAIMER = "⚠️ This is AI-generated advice based on general guidelines. Always consult your doctor for medical decisions.";

export const getInstantResponse = (query) => {
    const queryClean = query.toLowerCase().replace(/[^\w\s]/g, '').trim();
    const queryWords = queryClean.split(/\s+/).filter(w => w.length > 0);

    if (queryWords.length === 0) return null;

    let bestMatch = null;
    let highestScore = 0;

    for (const category in EXPERT_QA) {
        for (const qa of EXPERT_QA[category]) {
            const qClean = qa.question.toLowerCase().replace(/[^\w\s]/g, '').trim();
            const qWords = qClean.split(/\s+/);

            // 1. Exact Match
            if (queryClean === qClean) {
                return {
                    text: `${qa.answer}\n\n${DISCLAIMER}`,
                    confidence: 1.0,
                    intent: 'predefined_exact'
                };
            }

            // 2. Fuzzy Match
            const common = qWords.filter(w => queryWords.includes(w));
            if (common.length === 0) continue;

            const recall = common.length / qWords.length;
            const precision = common.length / queryWords.length;

            let score = (recall * 0.7) + (precision * 0.3);

            // Medical Keyword Boost
            const medicalHits = common.filter(w => MEDICAL_KEYWORDS.has(w));
            if (medicalHits.length > 0) {
                score += 0.15;
            }

            if (score > highestScore && score >= 0.4) {
                highestScore = score;
                bestMatch = {
                    text: `${qa.answer}\n\n${DISCLAIMER}`,
                    confidence: Math.min(score, 0.99),
                    intent: 'predefined_fuzzy'
                };
            }
        }
    }

    return bestMatch;
};
