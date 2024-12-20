// src/components/Card/Card.jsx
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: #222;
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
    margin: 10px 0;
`;

const Card = ({ movie }) => {
    return (
        <CardContainer>
            <CardImage src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <CardTitle>{movie.title}</CardTitle>
            <p>{movie.release_date}</p>
        </CardContainer>
    );
};

export default Card;
