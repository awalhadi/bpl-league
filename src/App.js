import { useEffect, useState } from 'react';
import './App.css';
import League from './components/Player/League/League';
import Player from './components/Player/Player';
import allPlayers from "./fakeData/players.json";


function App() {
 
  const[players, setPlayers] = useState([]);
  const [league, setLeague] = useState([]);

  useEffect(() => {
    setPlayers(allPlayers);
  }, []);
  const clickHandlarToLeague = (player) => {
    const newLeague = [...league, player];
    setLeague(newLeague);
  }
  return (
    <div className="App">
      <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="player">
                {
                  players.map(player => <Player key={player.id} player={player} clickHandlar={clickHandlarToLeague}></Player>)
                }
              </div>
            </div>
            <div className="col-md-4">
              <div className="league-player">
                <League player={league}></League>
              </div>
            </div>
          
          </div>
      </div>
    </div>
  );
}

export default App;
