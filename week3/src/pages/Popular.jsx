// src/pages/Popular.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PopularContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-y: auto; /* 세로 스크롤 가능 */
    height: calc(100vh - 60px);
`;

const MovieCard = styled.div`
    width: 200px;
    img {
        width: 100%;
        border-radius: 10px;
    }
`;

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = 'f50f83debe01a1276ea554c083174f31'; // 여기에 TMDB API 키를 입력하세요.

    useEffect(() => {
        const fetchPopularMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`);
            const data = await response.json();
            setMovies(data.results);
        };

        fetchPopularMovies();
    }, [API_KEY]);

    return (
        <PopularContainer>
            {movies.map(movie => (
                <MovieCard key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </MovieCard>
            ))}
        </PopularContainer>
    );
};

export default Popular;
