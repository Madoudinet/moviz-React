import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Moviz from "./Movie";

export default function Home() {

  const moviesData = [
    {
      title: "Forrest Gump",
      poster: "forrestgump.jpg",
      voteAverage: 9.2,
      voteCount: 22_705,
      overview:
        "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case.",
    },
    {
      title: "The Dark Knight",
      poster: "thedarkknight.jpg",
      voteAverage: 8.5,
      voteCount: 27_547,
      overview:
        "Batman raises the stakes in his war on crime and sets out to dismantle the remaining criminal organizations that plague the streets.",
    },
    {
      title: "Your name",
      poster: "yourname.jpg",
      voteAverage: 8.5,
      voteCount: 8_691,
      overview:
        "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places.",
    },
    {
      title: "Iron Man",
      poster: "ironman.jpg",
      voteAverage: 7.6,
      voteCount: 22_7726,
      overview:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    },
    {
      title: "Inception",
      poster: "inception.jpg",
      voteAverage: 8.4,
      voteCount: 31_546,
      overview:
        "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.",
    },
  ];

  // const movies = [];

  // for (let i = 0; i < 10; i++) {
  //   movies.push(<Moviz />);
  // }

  const movies = moviesData.map((movie, i) => {
    return (
      <Moviz key={i}
        title={movie.title}
        poster={movie.poster}
        voteAverage={movie.voteAverage}
        voteCount={movie.voteCount}
        overview={movie.overview}
      />
    );
  });

 
  return (
    <>
      <div className={styles.main}>
        <header className={styles.header}>

            <img src="/img/logo.png" alt="" width={50} height={50} />
            <img src="/img/logoletter.png" alt="" width={200} height={50} />
        </header>

        <div className={styles.cards}>{movies}</div>
      </div>
    </>
  );
}