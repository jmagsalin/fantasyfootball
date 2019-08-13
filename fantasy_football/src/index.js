import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Boxscore from './boxscore/boxscore';
import BoxscorePlayer from './boxscore-player/boxscore-player';
import Client from './client/client';
import FreeAgentPlayer from './free-agent-player/free-agent-player';
import Player from './player/player';
import PlayerStats from './player-stats/player-stats';
import Team from './team/team';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export {
    Boxscore,
    BoxscorePlayer,
    Client,
    FreeAgentPlayer,
    Player,
    PlayerStats,
    Team
  };