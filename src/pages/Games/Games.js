import './Games.css';

import SingleGame from './SingleGame';

import GameOne from '../../images/carrom.png';
import GameTwo from '../../images/chess.png';
import GameThree from '../../images/yoga.png';
import GameFour from '../../images/badminton.png';
import Mobilepay from '../../images/mobilepay.png';
import BankTransfer from '../../images/banktransfer.png';

export default function Games() {
  return (
    <div id="games">

      <div className="calendar">
        <div className="content">
          <h1>SEASON 2022-2023</h1>
          <h1>SEASON 2022-2023</h1>
        </div>
      </div>
      
      <h3>Valid Period: September-2022 to June-2023</h3>
      <div className="game-box">
        <SingleGame
          image={GameOne}
          title="Carroms"
          day="Monday"
          time1="18:00 - 19:00"
          time2="19:00 - 20:00"
          venue="Canteen (Venue 1)"
        />
        <SingleGame
          image={GameTwo}
          title="Chess"
          day="Tuesday"
          time1="18:00 - 19:00"
          time2="19:00 - 20:00"
          venue="Canteen (Venue 1)"
        />
        <SingleGame
          image={GameThree}
          title="Family Yoga"
          day="Saturday"
          time1="09:30 - 10:30"
          venue="Canteen (Venue 1)"
        />
        <SingleGame
          image={GameFour}
          title="Badminton"
          day="Wednesday"
          time1="Free Play 17:00 - 18:00"
          address="Hall (Venue 1)"
          optional="Friday"
          time2="Training 18:00 - 19:00"
          time3="Free Play 19:00 - 20:00"
          venue="Hall (Venue 2)"
        />
      </div>

      <div className="venue">
        <p><span>Venue 1:</span>  Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</p>
        <p><span>Venue 2:</span>  Charlottegårdsvej 1, 2640 Hedehusene</p>
      </div>

      <div className="link">
        <h2 className="lineUp"><a href="https://forms.gle/7fbb6mwZL9CeqyXZ7" target="_blank" rel="noreferrer">Click to register</a></h2>
      </div>

      <div className="payment">
        <h2 className="payment-title">Payment Details</h2>
        <div>
          <img src={Mobilepay} alt="mobile pay" />
          <ul>
            <li>box02714</li>
          </ul>
        </div>
        <div>
          <img src={BankTransfer} alt="bank transfer" />
          <div>
            <ul>
              <li><span>Reg. Nr.</span> 2277</li>
              <li><span>Kontonr.</span> 9031961316</li>
              <li><span>IBAN</span> DK 85 2000 9031 9613 16</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
