import React from 'react';
import './comic-theme.css';
import heroImage from '../../public/hero-placeholder.jpg';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Our School Portfolio</h1>
                <p className="hero-description">Explore our trimesters, schedules, and teams!</p>
            </div>
        </div>
    );
};

export default HeroSection;