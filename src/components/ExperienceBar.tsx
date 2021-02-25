import React from 'react';

export default function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="currentExperience" style={{left:'50%'}}>
                    300xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}