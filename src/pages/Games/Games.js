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
        <SingleGame
          image={GameOne}
          title="Carroms"
          day="Monday"
          time1="18:00 - 19:00"
          time2="19:00 - 20:00"
        />
        <SingleGame
          image={GameTwo}
          title="Chess"
          day="Tuesday"
          time1="18:00 - 19:00"
          time2="19:00 - 20:00"
        />
        <SingleGame
          image={GameThree}
          title="Family Yoga"
          day="Saturday"
          time1="09:30 - 10:30"
        />
        <SingleGame
          image={GameFour}
          title="Badminton"
          day="Wednesday"
          time1="Free Play 17:00 - 18:00"
          address="Charlottegårdsvej"
          optional="Friday"
          time2="Training 18:00 - 19:00"
          time3="Free Play 19:00 - 20:00"
        />
      </div>
      <div className="venue">
        <p><span>Venue 1:</span>  Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</p>
        <p><span>Venue 2:</span>  Hall, Charlottegårdsvej 1, 2640 Hedehusene</p>
      </div>
    </div>
  )
}
