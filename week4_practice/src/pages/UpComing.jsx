// src/pages/UpComing.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UpComingContainer = styled.div`
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

const UpComing = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = '0e464a6b2548d802d39f4dac5df97610'; 

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR`);
            const data = await response.json();
            setMovies(data.results);
        };

        fetchUpcomingMovies();
    }, [API_KEY]);

    return (
        <UpComingContainer>
            {movies.map(movie => (
                <MovieCard key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </MovieCard>
            ))}
        </UpComingContainer>
    );
};

export default UpComing;
