// src/pages/HomePage.jsx
import React from 'react';
import { Container } from '../styles';
import Card from '../components/Card/Card'; // Card 컴포넌트 import
import { MOVIES } from '../mocks/movies'; // mocks에서 영화 데이터 import
import styled from 'styled-components'; // styled-components import

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* 카드 간의 간격 */
    padding: 20px; /* 패딩 추가 */
    overflow-y: auto; /* 세로 스크롤 가능 */
    height: calc(100vh - 60px); /* 헤더 높이를 제외한 전체 높이 */
`;

const HomePage = () => {
    return (
        <Container>
            <h1>홈페이지입니다</h1>
            <CardsContainer>
                {MOVIES.results.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </CardsContainer>
        </Container>
    );
};

export default HomePage;
