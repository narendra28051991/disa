import './Games.css';

import SingleGame from './SingleGame';

import GameOne from '../../images/carrom.png';
import GameTwo from '../../images/chess.png';
import GameThree from '../../images/yoga.png';
import GameFour from '../../images/badminton.png';

export default function Games() {
  return (
    <div id="games">
      <h1>SEASON 2022-2023</h1>
      <h3>Valid Period: September-2022 to June-2023</h3>
      <div className="game-box">
        <SingleGame image={GameOne} title="Carroms" day="Monday" time1="18:00 to 19:00" time2="19:00 to 20:00" />
        <SingleGame image={GameTwo} title="Chess" day="Tuesday" time1="18:00 to 19:00" time2="19:00 to 20:00" />
        <SingleGame image={GameThree} title="Family Yoga" day="Saturday" time1="09:30 to 10:30" time2=" " />
        <SingleGame image={GameFour} title="Badminton" day="Wednesday" time1=" " time2=" " />
      </div>
    </div>
  )
}
