import React from 'react';

const TeamsSection: React.FC = () => {
    const teams = [
        { trimester: 1, name: 'Team Alpha' },
        { trimester: 2, name: 'Team Beta' },
        { trimester: 3, name: 'Team Gamma' },
        { trimester: 4, name: 'Team Delta' },
        { trimester: 5, name: 'Team Epsilon' },
    ];

    return (
        <section className="teams-section">
            <h2>Teams by Trimester</h2>
            {teams.map((team) => (
                <div key={team.trimester} className="team">
                    <h3>Trimester {team.trimester}</h3>
                    <p>{team.name}</p>
                    <img src={`./assets/qr-codes/trimester${team.trimester}.png`} alt={`QR code for Trimester ${team.trimester}`} />
                </div>
            ))}
        </section>
    );
};

export default TeamsSection;