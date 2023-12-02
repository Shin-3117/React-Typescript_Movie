import config from "../config/config";
import axios from 'axios';

const movie_key = config.movie_key
/**
 * 
 * @param movieListType ["popular", "top_rated", "upcoming"] 영화리스트 종류
 * @param page 요청할 페이지
 * @returns 영화데이터
 */
export const getMovies =async (movieListType:string, page:number) => {
  const url = `https://api.themoviedb.org/3/movie/${movieListType}?language=ko-KR&page=${page}`
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${movie_key}`
  }
  const set_axios ={
    method : 'get',
    url : url,
    headers : headers
  }

    const response = await axios(set_axios);
    return response.data
}