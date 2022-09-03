import React from 'react'

export default function SingleGame(props) {
  return (
    <div className="single-game">
      <div className="single-game-img">
        <img src={props.image} alt="" />
      </div>
      <div className="single-game-text">
        <h2>{props.title}</h2>
        <p>{props.day}</p>
        <p>{props.time1}</p>
        <p>{props.time2}</p>
        <p>Ole Rømer Skolen</p>
      </div>
    </div>
  )
}
