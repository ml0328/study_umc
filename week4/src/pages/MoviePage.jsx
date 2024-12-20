// src/pages/MoviePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; //useNavigate는 페이지 경로를 변경할 수 있게 해주는 react-router-dom의 훅
import styled from 'styled-components';


const MoviePage = () => {
    const navigate = useNavigate(); // navigate 훅 사용

    const handleCategoryClick = (path) => {
        navigate(path); 

    };
    /* MoviePage 컴포넌트를 정의
navigate 훅 ->  경로 이동 기능을 구현
handleCategoryClick: 클릭한 카테고리의 path로 이동 */

    return (
        <MovieContainer>
            <Title>카테고리</Title>
            <CategoryContainer>
                {categories.map((category, index) => (
                    <CategoryCard key={index} onClick={() => handleCategoryClick(category.path)}>
                        <img src={category.image} alt={category.alt} />
                        <div className="overlay">{category.title}</div>
                    </CategoryCard>
                ))}
            </CategoryContainer>
        </MovieContainer>
    );
};
/* categories.map: categories 배열을 순회하며 각 카테고리 카드(CategoryCard)를 생성
 onClick={() => handleCategoryClick(category.path)}: 클릭하면 해당 path로 이동합니다.
 img와 overlay: 각 카테고리의 이미지와 제목을 화면에 표시 */
export default MoviePage;

const MovieContainer = styled.div`
    margin-left: 220px; /* 사이드바 너비 */
    padding: 20px;
    color: #fff; /* 텍스트 색상 */
    background-color: #121212; /* 배경색 */
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;  /flex-wrap -> 카드들이 여러 줄에 걸쳐 배치될 수 있도록 설정
    gap: 20px; /* 카드 간격 */
`;

const CategoryCard = styled.div`
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
    flex: 1 1 200px; /* 기본 너비 설정 */
    max-width: 200px; /* 카드 최대 너비 */
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        height: auto; /* 비율 유지 */
    }

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        text-align: center;
        padding: 10px;
    }
`;

const categories = [
    {
        title: "현재 상영중인",
        image: "https://www.bingkai.com.au/wp-content/uploads/2016/12/now-playing-slim-lightbox-4.jpg",
        alt: "현재상영중인",
         path: "/movies/now-playing",
    },
    {
        title: "인기있는",
        image: "https://cdn.mytheatreland.com/images/show/38248_show_1279x840_hero.jpg",
        alt: "인기있는",
        path: "/movies/popular",
    },
    {
        title: "높은 평점을 받은",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3fA6AKBikqQ8-6nbSYPvVPH5wijK5fozrw&s",
        alt: "높은평점을받은",
        path: "/movies/top-rated",
    },
    {
        title: "개봉 예정인",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2VsY7jCo4JKAQ50wb7Z9XET0lwUtOh9jeA&s",
        alt: "개봉예정인",
        path: "/movies/up-coming"
    },
];