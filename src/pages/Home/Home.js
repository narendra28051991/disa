import './Home.css';

export default function Home() {
  return (
    <div id="home">
      <div className="home-heading">
        <h1>Denmark Indian Sports Association</h1>
        <h3>DISA</h3>
        <p className="home-detail">DISA is founded in 2022 in Høje-Taastrup Kommune.</p>
        <p className="home-detail">The main goal is "SPORTS-FOR-ALL".</p>
        <p className="home-detail">Focus on family sports activities that involves whole family, irrespective of age.</p>
        <p className="home-detail">We introduce a new type of family sport activities to Danish society.</p>
        <div className="home-tab">
            <a href="#" className="home-btn">REGISTRATIONS OPEN</a>
        </div>
      </div>
    </div>
  )
}
