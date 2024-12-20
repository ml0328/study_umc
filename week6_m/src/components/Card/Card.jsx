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
    width: 150px; /* 카드 너비 조정 */
    height: 250px; /* 카드 높이 조정 */
`;

const CardImage = styled.img`
    width: 100%;
    height: 75%; /* 이미지 높이 조정 */
    object-fit: cover; /* 이미지 비율 유지 */
`;

const CardTitle = styled.h3`
    font-size: 1rem; /* 제목 크기 조정 */
    margin: 10px 0;
`;

const Card = ({ movie }) => {
    return (
        <CardContainer>
            <CardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <CardTitle>{movie.title}</CardTitle>
            <p>{movie.release_date}</p>
        </CardContainer>
    );
};

export default Card;
