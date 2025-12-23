import React from 'react';
import { X, TrendingUp, LogOut } from 'lucide-react';

const ProfileMenu = ({ onClose, onNavigate, onLogout }) => {
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="profile-menu fade-in">
                <button className="close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                <h3>Profile Menu</h3>

                <div className="menu-options">
                    <button className="menu-item" onClick={() => { onClose(); onNavigate('weightprogress'); }}>
                        <div className="icon-box weight">
                            <TrendingUp size={20} />
                        </div>
                        <div className="text-box">
                            <h4>Weight Progress</h4>
                            <p>Track your weight journey</p>
                        </div>
                    </button>

                    <button className="menu-item logout" onClick={onLogout}>
                        <div className="icon-box logout-icon">
                            <LogOut size={20} />
                        </div>
                        <div className="text-box">
                            <h4>Logout</h4>
                            <p>Sign out of your account</p>
                        </div>
                    </button>
                </div>

                <style>{`
                    .overlay {
                        position: fixed;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background: rgba(0,0,0,0.5);
                        z-index: 999;
                    }
                    .profile-menu {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: white;
                        border-radius: var(--radius-lg);
                        padding: 25px;
                        width: 90%;
                        max-width: 350px;
                        box-shadow: var(--shadow-xl);
                        z-index: 1000;
                        animation: slideIn 0.2s ease;
                    }
                    @keyframes slideIn {
                        from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
                        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    }
                    .close-btn {
                        position: absolute;
                        top: 15px; right: 15px;
                        background: #f1f5f9;
                        width: 30px; height: 30px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #64748b;
                    }
                    .profile-menu h3 {
                        margin-bottom: 20px;
                        color: var(--color-text-main);
                    }
                    .menu-options {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .menu-item {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        padding: 15px;
                        background: #f8fafc;
                        border-radius: var(--radius-md);
                        border: 1px solid #e2e8f0;
                        transition: all 0.2s;
                        text-align: left;
                        width: 100%;
                    }
                    .menu-item:hover {
                        background: #f1f5f9;
                        transform: translateX(2px);
                    }
                    .menu-item.logout {
                        border-color: #fee2e2;
                        background: #fef2f2;
                    }
                    .menu-item.logout:hover {
                        background: #fee2e2;
                    }
                    .icon-box {
                        width: 45px;
                        height: 45px;
                        border-radius: var(--radius-md);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }
                    .icon-box.weight {
                        background: #dcfce7;
                        color: #166534;
                    }
                    .icon-box.logout-icon {
                        background: #fee2e2;
                        color: #991b1b;
                    }
                    .text-box h4 {
                        font-size: 15px;
                        margin-bottom: 2px;
                        color: var(--color-text-main);
                    }
                    .text-box p {
                        font-size: 12px;
                        color: var(--color-text-secondary);
                    }
                `}</style>
            </div>
        </>
    );
};

export default ProfileMenu;
