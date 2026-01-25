export const generateDietPlan = (analysisResults) => {
    // 1. Base Healthy Diet (Default)
    let plan = {
        breakfast: [
            { name: "Oatmeal with Walnuts & Apple", calories: 350, carbs: "60g", protein: "12g", fat: "8g", benefits: ["Heart Healthy", "High Fiber"] },
            { name: "Egg Whites & Whole Wheat Toast", calories: 300, carbs: "30g", protein: "20g", fat: "5g", benefits: ["Muscle Repair"] }
        ],
        lunch: [
            { name: "Grilled Chicken Salad with Quinoa", calories: 500, carbs: "40g", protein: "40g", fat: "15g", benefits: ["Lean Protein", "Complete Meal"] },
            { name: "Lentil Soup (Dal) & Brown Rice", calories: 450, carbs: "60g", protein: "18g", fat: "8g", benefits: ["Plant Protein", "Easy Digestion"] }
        ],
        snacks: [
            { name: "Greek Yogurt with Berries", calories: 150, carbs: "15g", protein: "12g", fat: "0g", benefits: ["Probiotics", "Antioxidants"] },
            { name: "Handful of Almonds", calories: 160, carbs: "6g", protein: "6g", fat: "14g", benefits: ["Healthy Fats"] }
        ],
        dinner: [
            { name: "Baked Salmon with Steamed Broccoli", calories: 550, carbs: "10g", protein: "45g", fat: "30g", benefits: ["Omega-3", "Light Dinner"] },
            { name: "Stir-Fried Tofu with Mixed Veggies", calories: 400, carbs: "15g", protein: "25g", fat: "20g", benefits: ["Vegan Option", "Light"] }
        ],
        recommendations: [
            "Drink 3-4 liters of water daily.",
            "Eat dinner at least 2 hours before sleep.",
            "Include a serving of raw salad with lunch.",
            "Limit processed sugar intake."
        ],
        restrictions: [] // Items to avoid
    };

    if (!analysisResults || !analysisResults.results) {
        return plan;
    }

    const { results } = analysisResults;

    // Helper to find specific parameter result
    const getResult = (param) => results.find(r => r.parameter === param);

    // --- CONDITION-BASED MODIFICATIONS ---

    // 1. High Sugar (Diabetes/Pre-diabetes)
    const glucoseF = getResult('glucose_fasting');
    const glucosePP = getResult('glucose_pp');
    if ((glucoseF && glucoseF.status === 'High') || (glucosePP && glucosePP.status === 'High')) {
        plan.recommendations.unshift("⚠️ STRICT LOW GLYCEMIC INDEX DIET RECOMMENDED");
        plan.restrictions.push("White bread, white rice, pasta", "Sugary drinks & desserts", "High-sugar fruits (mango, grapes)");

        // Modify Breakfast
        plan.breakfast = [
            { name: "Steel-Cut Oats with Cinnamon (No Sugar)", calories: 300, carbs: "50g", protein: "10g", fat: "6g", benefits: ["Low GI", "Cinnamon Helps Insulin"] },
            { name: "Vegetable Omelette (Double Spinach)", calories: 320, carbs: "5g", protein: "22g", fat: "20g", benefits: ["Keto-Friendly", "Iron Boost"] }
        ];

        // Modify Snacks (Remove fruit yogurt if sugary, remove general fruits)
        plan.snacks = [
            { name: "Roasted Chana (Chickpeas)", calories: 180, carbs: "20g", protein: "10g", fat: "4g", benefits: ["Complex Carbs", "Satiety"] },
            { name: "Cucumber & Hummus Sticks", calories: 150, carbs: "15g", protein: "6g", fat: "8g", benefits: ["Hydrating", "Low Carb"] }
        ];
    }

    // 2. High Cholesterol / Triglycerides (Heart Health)
    const chol = getResult('cholesterol');
    const trig = getResult('triglycerides');
    const ldl = getResult('ldl_cholesterol');

    if ((chol && chol.status === 'High') || (trig && trig.status === 'High') || (ldl && ldl.status === 'High')) {
        plan.recommendations.unshift("⚠️ HEART HEALTHY FATS ONLY (Avoid Saturated Fats)");
        plan.restrictions.push("Red meat", "Butter/Ghee", "Fried foods", "Full-fat dairy");

        // Force Dinner Modification (Fish is good, but check prep)
        plan.dinner = [
            { name: "Grilled Mackerel/Salmon (No Butter)", calories: 500, carbs: "0g", protein: "40g", fat: "25g", benefits: ["High Omega-3", "Lowers inflammation"] },
            { name: "Quinoa Bowl with Beans", calories: 450, carbs: "60g", protein: "18g", fat: "8g", benefits: ["Fiber lowers cholesterol"] }
        ];

        // Ensure Breakfast has soluble fiber
        if (!plan.breakfast.some(i => i.name.includes("Oat"))) {
            plan.breakfast.unshift({ name: "Bowl of Oatmeal with Flaxseeds", calories: 350, carbs: "55g", protein: "12g", fat: "10g", benefits: ["Soluble Fiber", "Cholesterol Lowering"] });
        }
    }

    // 3. Low Iron (Anemia)
    const hb = getResult('hemoglobin');
    if (hb && hb.status === 'Low') {
        plan.recommendations.unshift("⚠️ IRON-RICH DIET (Consume Vitamin C for absorption)");

        // Add Iron boosters
        plan.lunch.forEach(item => {
            if (!item.name.includes("Spinach")) item.name += " + Side Spinach Salad";
            item.benefits.push("Iron Booster");
        });

        plan.snacks.push({ name: "Dates & Walnuts", calories: 200, carbs: "40g", protein: "4g", fat: "8g", benefits: ["High Iron", "Energy"] });

        // Remove tea/coffee with meals (inhibits iron)
        plan.restrictions.push("Tea/Coffee within 1 hour of meals (Inhibits Iron absorption)");
    }

    // 4. High Uric Acid (Gout Risk)
    const uric = getResult('uric_acid');
    if (uric && uric.status === 'High') {
        plan.recommendations.unshift("⚠️ LOW PURINE DIET (Manage Uric Acid)");
        plan.restrictions.push("Red meat", "Shellfish", "Spinach", "Cauliflower", "Alcohol");

        // Replace Spinach in any plan
        ['breakfast', 'lunch', 'dinner', 'snacks'].forEach(meal => {
            plan[meal] = plan[meal].map(item => {
                if (item.name.includes("Spinach")) {
                    return { ...item, name: item.name.replace("Spinach", "Cucumber"), benefits: item.benefits.filter(b => b !== "Iron Booster") };
                }
                // Replace Salmon/Fish if strict? Usually moderation. let's keep it simple.
                return item;
            });
        });

        plan.snacks.push({ name: "Bowl of Cherries / Berries", calories: 100, carbs: "25g", protein: "1g", fat: "0g", benefits: ["Lowers Uric Acid"] });
    }

    // 5. Thyroid Issues (Hypo - High TSH)
    const tsh = getResult('tsh');
    if (tsh && tsh.status === 'High') {
        plan.recommendations.unshift("⚠️ THYROID SUPPORT (Limit Goitrogens raw)");
        plan.restrictions.push("Raw Cruciferous Veggies (Cabbage, Broccoli, Cauliflower) - Cook them well");

        // Ensure Iodine
        plan.recommendations.push("Ensure iodized salt usage or eat seaweed.");

        plan.breakfast.push({ name: "Brazil Nuts (2-3) & Smoothie", calories: 300, carbs: "40g", protein: "10g", fat: "15g", benefits: ["Selenium for Thyroid"] });
    }

    return plan;
};
