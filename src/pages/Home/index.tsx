
import MovieList from '../../components/MovieList';
import styles from './Home.module.scss';

const Home = () => {
  
  return (
    <main className={styles.wrap}>
      <MovieList movieListType="popular" title="최신 인기작"/>
      <MovieList movieListType="top_rated" title="역대 고평가 작품"/>
      <MovieList movieListType="upcoming" title="개봉 예정작"/>
    </main>
  );
};

export default Home;