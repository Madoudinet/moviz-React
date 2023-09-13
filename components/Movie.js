import React, { useState } from "react";
import styles from "../styles/Moviz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faVideo, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Moviz(props) {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { color: "#f1c40f" };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

  const [personalNote, setPersonalNote] = useState(0);

  const starsNote = [];
  const handleNote = () => {};
  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < personalNote) {
      style = { color: "#2196f3" };
    }
    starsNote.push(
      <FontAwesomeIcon
        onClick={() => setPersonalNote(i + 1)}
        key={i}
        icon={faStar}
        style={style}
      />
    );
  }



  const [nbView, setNbView] = useState(0);
  const handleView = () => {
    setNbView(nbView + 1);
  };
  let view = {};
  if(nbView > 0)
  {
    view = {color: '#e74c3c'}
  }
  const video = <FontAwesomeIcon icon={faVideo} style={view}/>;



  const [like, setLike] = useState(false);
  let red = {};
  if (like == true) {
    red = { color: "#e74c3c" };
  }
  const heart = (
    <FontAwesomeIcon
      onClick={() => setLike(!like)}
      icon={faHeart}
      style={red}
      className={styles.button}
    />
  );

  return (
    <>
      <div className={styles.card}>
        <img src={props.poster} width={300} height={450}></img>
        <div className={styles.desc}>
          <h4>{props.title}</h4>
          <p>{props.overview}</p>
          <p>
            {stars} ({props.voteCount})
          </p>
          <button className={styles.button} onClick={() => handleNote()}>
            {starsNote}
          </button>

          <button className={styles.video} onClick={() => handleView()}>
            {video}
          </button>
          <span>{nbView}</span>
          <button className={styles.button}>{heart}</button>
        </div>
      </div>
    </>
  );
}
