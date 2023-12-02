import {useState} from 'react'
import styles from './modal_movie.module.scss'
import Movie from '../interface'

interface ModalMovieProps {
  movie: Movie;
}

const ModalMovie = ({movie}:ModalMovieProps)=>{
  const [modalOpen,setModalOpen] = useState(false)
  const modalOnOff = () =>{
    setModalOpen(!modalOpen);
  }

return(
<>
<button onClick={modalOnOff} className={styles.modalOpenBtn}>자세히 보기</button>
{modalOpen && 
<div className={styles.modalBackground} onClick={modalOnOff}>
  <div className={styles.modalContainer}
    // 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지
    onClick={(e) => e.stopPropagation()}>
      <img className={styles.movieImg}
      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title} />
      <div className={styles.movieInfo}>
        <button onClick={modalOnOff}>x</button>
        <h3>{movie.title}</h3>
        <div className={styles.movieInfo1}>
          <p>출시일 : {movie.release_date}</p>
          <p>평점 : {movie.vote_average}</p>
        </div>
        <p>{movie.overview}</p>
      </div>
  </div>
</div>
}
</>
  )
}

export default ModalMovie;