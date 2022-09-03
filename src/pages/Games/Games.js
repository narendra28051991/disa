import './Games.css';

import SingleGame from './SingleGame';

import GameOne from '../../images/carrom.png';
import GameTwo from '../../images/chess.png';
import GameThree from '../../images/yoga.png';
import GameFour from '../../images/badminton.png';

export default function Games() {
  return (
    <div id="games">
      <h1>GAMES</h1>
      <div className="game-box">
        <SingleGame image={GameOne} title="Carroms" />
        <SingleGame image={GameTwo} title="Chess" />
        <SingleGame image={GameThree} title="Family Yoga" />
        <SingleGame image={GameFour} title="Badminton" />
      </div>
    </div>
  )
}
