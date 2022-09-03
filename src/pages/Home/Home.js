import './Home.css';

export default function Home() {
  return (
    // <div id="home">
    //   <div className="home-box">
    //     <h2>DISA Sports</h2>
    //     <h1><span>Registrations Open </span>2022-23</h1>
    //     <p className="home-detail">Denmark Indian Sports Association</p>
    //     <div className="home-tab">
    //         <a href="#" className="home-btn">JOIN US</a>
    //     </div>
    //   </div>
    // </div>
    <div id="home">
      <div className="home-heading">
        <h3>Registrations Open</h3>
        <h1><span>DISA SPORTS</span> FOR<br/> 2022-23</h1>
        <p className="home-detail">Click the button below to Register</p>
        <p className="home-detail">Season: September - 2022 to June - 2023</p>
        <div className="home-tab">
            <a href="#" className="home-btn">JOIN US</a>
        </div>
      </div>
    </div>
  )
}
