import React from 'react';
import './NavyBlueStrip.css';

const NavyBlueStrip = () => {
    return (
        <div className="navy-blue-strip">
            <div className="flex-1"></div>
            <div className="divider"></div>
            <div className="flex-content">
                <h2 className="bold-text">Artificial Intelligence</h2>
                <p>Building AI-powered solutions</p>
            </div>
            <div className="divider"></div>
            <div className="flex-content">
                <h2 className="bold-text">Advanced Analytics</h2>
                <p>Drive insights from your data</p>
            </div>
            <div className="divider"></div>
            <div className="flex-content">
                <h2 className="bold-text">Consulting</h2>
                <p>Bringing capabilities and<br /> consultative approach</p>
            </div>
        </div>
    );
};

export default NavyBlueStrip;

