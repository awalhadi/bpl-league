import React from 'react';
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name,img, type, salary } = props.player;
    const clickHandlar = props.clickHandlar;
    return (
        <div className="player-section">
            
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-4 player-img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h3>{name}</h3>
                        <h5>Role: {type}</h5>
                        <p>Salary: ${salary}</p>
                        <br/>
                        <button onClick={() => clickHandlar(props.player)} className="btn btn-success"> <FontAwesomeIcon icon={faUserPlus} /> Add to League</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Player;