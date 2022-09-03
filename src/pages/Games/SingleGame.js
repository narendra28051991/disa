import React from 'react'

export default function SingleGame(props) {
  return (
    <div className="single-game">
      <div className="single-game-img">
        <img src={props.image} alt="" />
      </div>
      <div className="single-game-text">
        <h2>{props.title}</h2>
        <p>Taastrup</p>
      </div>
    </div>
  )
}
