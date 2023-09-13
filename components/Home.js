import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Moviz from "./Movie";

export default function Home() {
  // const moviesData = [];

  const [moviesData, setMoviesData] = useState([]);
  const API_KEY = '691f574e729240538ef09fcb461dedc3'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        const formatedData = data.results.map((movie, i) => {
          const poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
          let overview = movie.overview;
          if(overview.length > 250) {
            overview = overview.slice(0, 250)+ '...';
          }
          return {
            poster,
            overview,
            title : movie.title,
            voteAverage : movie.vote_average,
            voteCount : movie.vote_count,
          }
        })
        setMoviesData(formatedData);
      });
  }, []);

  const movies = moviesData.map((movie, i) => {
   return <Moviz {...movie} key={i}/>;
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
