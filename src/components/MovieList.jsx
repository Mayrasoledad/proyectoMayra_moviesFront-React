import React from "react";
import Link from "next/link";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const listMovies = movies.map((oneMovie) => {
    return (
      <div key={oneMovie._id}>
        <li className={styles.list} >
          {oneMovie.title}
          <img src={oneMovie.image} height="300px" width="200px" />
          <Link href={`/movie/${oneMovie._id}`}>
            <a>Ver más</a>
          </Link>
        </li>
      </div>
    );
  });
  return <ul className={styles.containerList}>{listMovies}</ul>;
};

export default MovieList;
