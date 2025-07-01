import React from 'react';
import './comic-theme.css';

const TrimesterSchedule = () => {
    const trimesters = [
        { number: 1, qrCode: '/assets/qr-codes/trimester1.png' },
        { number: 2, qrCode: '/assets/qr-codes/trimester2.png' },
        { number: 3, qrCode: '/assets/qr-codes/trimester3.png' },
        { number: 4, qrCode: '/assets/qr-codes/trimester4.png' },
        { number: 5, qrCode: '/assets/qr-codes/trimester5.png' },
    ];

    return (
        <div className="trimester-schedule">
            <h2>Horarios por Trimestre</h2>
            {trimesters.map(trimester => (
                <div key={trimester.number} className="trimester">
                    <h3>Trimestre {trimester.number}</h3>
                    <img src={trimester.qrCode} alt={`QR Code for Trimester ${trimester.number}`} />
                </div>
            ))}
        </div>
    );
};

export default TrimesterSchedule;