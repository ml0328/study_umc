// src/pages/Popular.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useFetchMovies from '../hooks/useFetchMovies';

const PopularContainer = styled.div`
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

const Popular = () => {
    const API_KEY = '0e464a6b2548d802d39f4dac5df97610'; 
    const url = 'https://api.themoviedb.org/3/movie/popular';
    const navigate = useNavigate();

    const { data: movies, loading, error } = useFetchMovies(API_KEY, url);

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>오류 발생: {error}</div>;
    }

    return (
        <PopularContainer>
            {movies.map(movie => (
                <MovieCard key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </MovieCard>
            ))}
        </PopularContainer>
    );
};

export default Popular;
