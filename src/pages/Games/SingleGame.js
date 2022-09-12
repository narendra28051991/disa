
export default function SingleGame(props) {
  return (
    <div className="single-game">
      <div className="single-game-img">
        <img src={props.image} alt="" />
      </div>
      <div className="single-game-text">
        <div className="line">
          <h2 className="pop-outin">{props.title}</h2>
        </div>
        <p>{props.day}</p>
        <p>{props.time1}</p>
        <p>{props.address}</p>
        <p>{props.optional}</p>
        <p>{props.time2}</p>
        <p>{props.time3}</p>
        <p>{props.venue}</p>
      </div>
    </div>
  )
}
