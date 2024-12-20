// src/pages/NowPlaying.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useFetchMovies from '../hooks/useFetchMovies'; // 커스텀 훅 임포트


const NowPlaying = () => {
    const API_KEY = '0e464a6b2548d802d39f4dac5df97610'; 
    const url = 'https://api.themoviedb.org/3/movie/now_playing';
    const navigate = useNavigate();
    //useNavigate를 통해 페이지 이동 기능을 사용할 수 있도록 준비

    const { data: movies, loading, error } = useFetchMovies(API_KEY, url); // 커스텀 훅 사용 -> 영화데이터 부르기!

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    };
//영화 카드가 클릭될 때 호출되는 함수. 클릭한 영화의 ID를 사용하여 해당 영화의 상세 페이지로 이동

    if (loading) {
        return <div>로딩 중...</div>; // 로딩 상태
    }

    if (error) {
        return <div>오류 발생했습니다! {error}</div>; // 에러 처리
    }

    return (
        <NowPlayingContainer>
            {movies.map(movie => (
                <MovieCard key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </MovieCard>
            ))}
        </NowPlayingContainer>
    );
};

export default NowPlaying;

const NowPlayingContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-y: auto;
    height: calc(100vh - 60px);
`;

const MovieCard = styled.div`
    width: 200px;
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 10px;
    }
`;
