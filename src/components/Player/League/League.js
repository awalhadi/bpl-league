import React from 'react';

const League = (props) => {
    const leaguePlayer = props.player;
    const totalBudget = leaguePlayer.reduce( (budget, player) => budget + Number(player.salary), 0 )
    return (
        <div>
            <h4><u>BPL Player List</u></h4>
            <br/>
            <p><small>Total Player added : {leaguePlayer.length}</small></p>
            <div className="player-name">
                <strong><u>Selected League Player:</u></strong>
                <ul>
                    {
                        leaguePlayer.map(player => <li key={player.id}><strong>Name</strong>: {player.name} <strong>Salary</strong>: ${player.salary}</li>)
                    }
                </ul>
            </div>
            <p>Budget in USD: {totalBudget}</p>
        </div>
    );
};

export default League;