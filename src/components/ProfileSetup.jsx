import React, { useState } from 'react';

const ProfileSetup = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'male',
        weight: '',
        heightCm: '',
        heightFt: '',
        heightIn: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateCmFromFeet = (ft, inch) => {
        return Math.round((parseInt(ft || 0) * 30.48) + (parseInt(inch || 0) * 2.54));
    };

    // Sync feet/inch to cm logic could be added, but for now we take both as user input per request

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.age || !formData.weight) return;

        // Normalize data
        const finalData = {
            ...formData,
            // If user entered feet/inches but not CM, calculate it. 
            // If user entered CM, prioritize that or just store both.
            // Let's ensure we have a consistent height in Cm for BMI later.
            heightCm: formData.heightCm || calculateCmFromFeet(formData.heightFt, formData.heightIn)
        };

        onComplete(finalData);
    };

    return (
        <div className="profile-container fade-in">
            <div className="card profile-card">
                <div className="header">
                    <h2>Let's know you better</h2>
                    <p>Enter your details for personalized health insights.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input-field"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                className="input-field"
                                placeholder="25"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select
                                name="gender"
                                className="input-field"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            className="input-field"
                            placeholder="70.5"
                            value={formData.weight}
                            onChange={handleChange}
                            step="0.1"
                            required
                        />
                    </div>

                    <div className="height-section">
                        <label>Height</label>
                        <div className="tabs">
                            {/* Simplified for this version: Show both inputs or let user decide. 
                   User request: "height(cm and feet)" - implying both options or fields.
                   I'll layout them side by side for clarity.
               */}
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label className="sub-label">CM</label>
                                <input
                                    type="number"
                                    name="heightCm"
                                    className="input-field"
                                    placeholder="175"
                                    value={formData.heightCm}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="or-divider">OR</div>
                            <div className="form-group">
                                <label className="sub-label">Feet</label>
                                <input
                                    type="number"
                                    name="heightFt"
                                    className="input-field"
                                    placeholder="5"
                                    value={formData.heightFt}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="sub-label">Inches</label>
                                <input
                                    type="number"
                                    name="heightIn"
                                    className="input-field"
                                    placeholder="9"
                                    value={formData.heightIn}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '2rem' }}>
                        Continue
                    </button>
                </form>
            </div>

            <style>{`
        .profile-container {
          padding: var(--spacing-md);
          min-height: 100vh;
          background-color: var(--color-background);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-card {
           width: 100%;
           max-width: 450px;
        }
        .header {
          margin-bottom: var(--spacing-xl);
          text-align: center;
        }
        .header h2 {
          color: var(--color-text-main);
          margin-bottom: var(--spacing-xs);
        }
        .header p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }
        .row {
          display: flex;
          gap: var(--spacing-md);
        }
        .row .form-group {
          flex: 1;
        }
        .form-group {
          margin-bottom: var(--spacing-md);
        }
        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        .sub-label {
          font-size: var(--font-size-xs) !important;
          color: var(--color-text-muted) !important;
        }
        .or-divider {
          display: flex;
          align-items: center;
          font-size: var(--font-size-xs);
          color: var(--color-text-muted);
          font-weight: bold;
        }
        .height-section {
           background: #f1f5f9;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
        }
        .fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default ProfileSetup;
