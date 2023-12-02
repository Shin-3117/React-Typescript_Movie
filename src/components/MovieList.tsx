import { useEffect, useState } from 'react';
import {getMovies} from '../api/movies'
import styles from './movies.module.scss';
import Movie from '../interface';
import Modal_movie from './modal_movie';
type movieProps = {
  movieListType: string, //["popular", "top_rated", "upcoming"]
  title: string
}
/**
 * 
 * @param props 
    movieListType: ["popular", "top_rated", "upcoming"]

    title: string
 * @returns 영화 리스트 컴포넌트
 */
const MovieList = (props:movieProps) => {
  const [movies, setMovies] = useState<Movie[] | null>([])

  useEffect(() => {
    const fetchData = async (page:number) => {
      const data = await getMovies(props.movieListType,page)
      if(data.results){
        setMovies(data.results);
      }
    }
    fetchData(1)
  }, [])

  const [modalOpen,setModalOpen] = useState(false)
  const [modalData,setModalData] = useState<Movie|null>(null)
  const modalOnOff = (movieData:Movie) =>{
    setModalOpen(!modalOpen);
    setModalData(movieData)
  }
  return (
    <>
    {movies && (
    <section className={styles.popularMoviesSection}>
      <h2>{props.title}</h2>
        
      <div className={styles.popularMoviesContainer}>
        {/* <button type='button' className='btnL'>&lt;</button> */}

        { movies.map(movie => (
            <article className={styles.popularMovieCard} key={movie.id}>
              <img className={styles.popularMovieImg} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title} />
              <div className={styles.movieInfo}>
                <h3 >{movie.title}</h3>
                <p>평점: {movie.vote_average}</p>
                <button className={styles.modalOpenBtn} onClick={()=>modalOnOff(movie)}>자세히 보기</button>
              </div>
              {modalOpen && 
              <Modal_movie movie={modalData} modalOnOff={modalOnOff}/>}
            </article>
        ))}
      </div>
    </section>
    )}
    </>
  );
};

export default MovieList;