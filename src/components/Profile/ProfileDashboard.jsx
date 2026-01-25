import React, { useState, useEffect } from 'react';
import { ChevronLeft, User, Activity, FileText, Settings, Heart, Save, Share2 } from 'lucide-react';
// PDF Import removed

// ... (inside component) ...

const ProfileDashboard = ({ user, onClose, onLogout, onNavigate }) => {
    {/* Export button removed */ }
    const [activeTab, setActiveTab] = useState('health'); // Default to health
    const [isEditing, setIsEditing] = useState(false);

    // Form Data
    const [formData, setFormData] = useState({
        name: user.name || '',
        age: user.age || '',
        gender: user.gender || 'Male',
        height: user.height || '',
        weight: user.weight || '',
        bloodGroup: user.bloodGroup || '',
        diseases: user.diseases || '',
        allergies: user.allergies || '',
        notes: user.notes || ''
    });

    // History (from LocalStorage)
    const [reportHistory, setReportHistory] = useState([]);

    useEffect(() => {
        // Load existing user data if detailed profile exists
        const savedProfile = localStorage.getItem(`profile_${user.email}`);
        if (savedProfile) {
            setFormData({ ...formData, ...JSON.parse(savedProfile) });
        }

        // Load Reports
        const reportKey = user.email ? `reports_${user.email}` : 'blood_reports';
        const reports = JSON.parse(localStorage.getItem(reportKey) || '[]');
        setReportHistory(reports);
    }, [user.email]);

    const handleSave = () => {
        // Save to persistent storage
        localStorage.setItem(`profile_${user.email}`, JSON.stringify(formData));
        setIsEditing(false);
        // Dispatch custom event or callback if needed to update global user context
        alert("Profile saved successfully!");
    };

    const calculateBMI = () => {
        if (!formData.height || !formData.weight) return null;
        const h = formData.height / 100;
        return (formData.weight / (h * h)).toFixed(1);
    };

    const bmi = calculateBMI();

    return (
        <div className="profile-dashboard fixed-fullscreen">
            {/* Header */}
            <div className="profile-header">
                <button onClick={onClose} className="p-back-btn"><ChevronLeft size={24} /></button>
                <h3>My Profile</h3>
                <button onClick={onLogout} className="p-logout">Logout</button>
            </div>

            {/* Hero Section */}
            <div className="p-hero">
                <div className="p-avatar">
                    <User size={40} color="white" />
                </div>
                <h2>{formData.name || 'User'}</h2>
                <div className="p-badges">
                    {bmi && <span className="p-badge">BMI: {bmi}</span>}
                    {formData.bloodGroup && <span className="p-badge red">{formData.bloodGroup}</span>}
                </div>
            </div>

            {/* Tabs */}
            <div className="p-tabs">
                {/* Details Tab Removed */}
                <button className={`p-tab ${activeTab === 'health' ? 'active' : ''}`} onClick={() => setActiveTab('health')}>Health Profile</button>
                <button className={`p-tab ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>Reports</button>
            </div>

            <div className="p-content">
                {activeTab === 'health' && (
                    <div className="tab-pane fade-in">
                        <div className="pane-header">
                            <h4>Personal & Medical Data</h4>
                            {!isEditing && <button className="edit-toggle" onClick={() => setIsEditing(true)}>Edit</button>}
                        </div>

                        {/* Merged Basic Details into Health */}
                        <div className="form-grid" style={{ marginBottom: '20px' }}>
                            <div className="field">
                                <label>Age</label>
                                <input type="number" disabled={!isEditing} value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
                            </div>
                            <div className="field">
                                <label>Blood Group</label>
                                <select disabled={!isEditing} value={formData.bloodGroup} onChange={e => setFormData({ ...formData, bloodGroup: e.target.value })}>
                                    <option value="">Select</option>
                                    <option>A+</option><option>A-</option>
                                    <option>B+</option><option>B-</option>
                                    <option>O+</option><option>O-</option>
                                    <option>AB+</option><option>AB-</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Weight (kg)</label>
                                <input type="number" disabled={!isEditing} value={formData.weight} onChange={e => setFormData({ ...formData, weight: e.target.value })} />
                            </div>
                            <div className="field">
                                <label>Height (cm)</label>
                                <input type="number" disabled={!isEditing} value={formData.height} onChange={e => setFormData({ ...formData, height: e.target.value })} />
                            </div>
                        </div>

                        <div className="health-form">
                            <label>Existing Conditions (Diseases)</label>
                            <textarea
                                disabled={!isEditing}
                                placeholder="e.g. Diabetes, Hypertension..."
                                value={formData.diseases}
                                onChange={e => setFormData({ ...formData, diseases: e.target.value })}
                            />

                            <label>Allergies</label>
                            <textarea
                                disabled={!isEditing}
                                placeholder="e.g. Peanuts, Penicillin..."
                                value={formData.allergies}
                                onChange={e => setFormData({ ...formData, allergies: e.target.value })}
                            />

                            <label>Health Notes</label>
                            <textarea
                                className="large-text"
                                disabled={!isEditing}
                                placeholder="Write your fitness goals here..."
                                value={formData.notes}
                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </div>

                        {isEditing && (
                            <button className="save-btn" onClick={handleSave}>
                                <Save size={18} /> Save Health Data
                            </button>
                        )}

                        {/* Weight Tracker Link */}
                        <div className="milestones-preview" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => onNavigate('weightprogress')}>
                            <div className="pane-header" style={{ marginBottom: '10px' }}>
                                <h5>Weight Tracker</h5>
                                <span style={{ fontSize: '12px', color: 'var(--color-primary)' }}>View Graph →</span>
                            </div>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>Track your weight journey over time.</p>
                        </div>

                        {/* Milestones Section Removed */}
                    </div>
                )}

                {activeTab === 'reports' && (
                    <div className="tab-pane fade-in">
                        <h4>Recent Blood Reports</h4>
                        {reportHistory.length === 0 ? (
                            <p className="empty-state">No reports uploaded yet.</p>
                        ) : (
                            <div className="reports-list">
                                {reportHistory.map((report, idx) => (
                                    <div key={idx} className="report-item">
                                        <div className="r-icon"><FileText size={20} /></div>
                                        <div className="r-info">
                                            <span className="r-date">{report.date}</span>
                                            <span className="r-summary">{report.results.length} Parameters Analyzed</span>
                                        </div>
                                        <button className="r-action" onClick={() => alert("Report details view simulated.")}>View</button>
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Export button removed */}
                    </div>
                )}
            </div>

            <style>{`
                .fixed-fullscreen {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: #f8fafc; z-index: 2000;
                    overflow-y: auto;
                    font-family: var(--font-family-body);
                }
                .profile-header {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 20px; background: white;
                }
                .profile-header h3 { margin: 0; font-size: 18px; }
                .p-back-btn { background: none; font-size: 24px; padding: 0; }
                .p-logout { color: #ef4444; background: none; font-weight: 600; font-size: 14px; }

                .p-hero {
                    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
                    color: white; padding: 30px; text-align: center;
                    border-radius: 0 0 30px 30px; margin-bottom: 20px;
                    box-shadow: 0 10px 30px rgba(230, 57, 70, 0.2);
                }
                .p-avatar {
                    width: 80px; height: 80px; background: rgba(255,255,255,0.2);
                    border-radius: 50%; margin: 0 auto 15px;
                    display: flex; align-items: center; justify-content: center;
                    backdrop-filter: blur(5px); border: 2px solid rgba(255,255,255,0.4);
                }
                .p-badges { display: flex; justify-content: center; gap: 10px; margin-top: 10px; }
                .p-badge { background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 600; }
                .p-badge.red { background: #fee2e2; color: #991b1b; }

                .p-tabs {
                    display: flex; padding: 0 20px; gap: 10px; border-bottom: 1px solid #e2e8f0;
                }
                .p-tab {
                    flex: 1; padding: 12px; background: none; border-bottom: 3px solid transparent;
                    color: #64748b; font-weight: 600; font-size: 14px;
                }
                .p-tab.active { border-color: var(--color-primary); color: var(--color-primary); }

                .p-content { padding: 20px; }
                .tab-pane { animation: fadeIn 0.3s ease; }
                .pane-header { display: flex; justify-content: space-between; margin-bottom: 20px; align-items: center; }
                .edit-toggle { color: var(--color-primary); font-size: 14px; font-weight: 600; background: none; }

                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .field label { display: block; font-size: 12px; color: #64748b; margin-bottom: 5px; }
                .field input, .field select {
                    width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;
                    background: white; font-weight: 500;
                }
                .field input:disabled { background: #f1f5f9; color: #94a3b8; }

                .health-form label { display: block; font-size: 13px; font-weight: 600; margin-top: 15px; margin-bottom: 5px; }
                .health-form textarea {
                    width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 12px;
                    font-family: inherit; resize: none; height: 60px;
                }
                .health-form textarea.large-text { height: 100px; }

                .save-btn {
                    width: 100%; background: var(--color-primary); color: white;
                    padding: 14px; border-radius: 12px; margin-top: 25px;
                    font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;
                    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.2);
                }

                .reports-list { display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }
                .report-item {
                    background: white; padding: 15px; border-radius: 12px;
                    display: flex; align-items: center; gap: 15px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                .r-icon {
                    width: 40px; height: 40px; background: #eff6ff; color: #3b82f6;
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                }
                .r-info { flex: 1; display: flex; flex-direction: column; }
                .r-date { font-weight: 600; font-size: 14px; }
                .r-summary { font-size: 12px; color: #64748b; }
                .r-action { font-size: 12px; color: var(--color-primary); border: 1px solid var(--color-primary); padding: 4px 10px; border-radius: 6px; background: none; }

                .export-btn {
                     width: 100%; margin-top: 20px; padding: 12px;
                     border: 1px dashed #cbd5e1; background: white; color: #475569;
                     border-radius: 12px; display: flex; justify-content: center; gap: 8px;
                     align-items: center;
                }

                .milestones-preview { margin-top: 30px; padding: 15px; background: #fff7ed; border-radius: 12px; }
                .milestone-badges { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
                .m-badge { background: white; padding: 5px 10px; border-radius: 8px; font-size: 12px; font-weight: 600; color: #c2410c; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

                .fade-in { animation: fadeIn 0.4s ease; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default ProfileDashboard;
