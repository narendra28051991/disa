import { Link } from "react-scroll";

import './Home.css';

export default function Home() {
  return (
    <div id="home">
      <div className="home-heading">

        <div className="container">
          <h1 className="title">
            <span className="title-word title-word-1">Denmark</span>
            <span className="title-word title-word-2"> Indian</span>
            <span className="title-word title-word-3"> Sports</span>
            <span className="title-word title-word-4"> Association</span>
          </h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-character"> DISA</h3>
            </div>
          </div>
        </div>

        <p className="home-detail">DISA is founded in 2022 in Høje-Taastrup Kommune.</p>
        <p className="home-detail">The main goal is "SPORTS-FOR-ALL".</p>
        <p className="home-detail">Focus on family sports activities that involves whole family, irrespective of age.</p>
        <p className="home-detail">We introduce a new type of family sport activities to Danish society.</p>
        <div className="home-tab">
            <button className="home-btn"><Link to="games" smooth={true} duration={1000}>REGISTRATIONS OPEN</Link></button>
        </div>
      </div>
    </div>
  )
}
