import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  //useParams는 URL 매개변수를 쉽게 가져올 수 있도록 함
import styled from 'styled-components';

//영화 세부 정보를 담는 컨테이너의 스타일을 정의
const DetailContainer = styled.div`
    padding: 20px;
    color: white;
`;

//더 추가해도 됨!
const MovieTitle = styled.h1``;
const MovieOverview = styled.p``;

const MovieDetail = () => {
    const { movieId } = useParams();  // url 에서 movieId를 가져옴 (라우터에서 정의된 영화의 고유 식별자)
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    /* movie와 error 상태 변수를 초기화. 
    movie는 영화 정보를 저장하고, error는 API 호출 중 발생할 수 있는 오류 메시지를 저장 */

    const API_KEY = '0e464a6b2548d802d39f4dac5df97610';

    //컴포넌트가 마운트될 때 영화 세부 정보를 가져오기 위해 useEffect를 사용 ! 
    useEffect(() => {
        const fetchMovieDetail = async () => { 
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`);
                if (!response.ok) {
                    throw new Error('영화 정보를 가져오는 데 실패했습니다.');
                }
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                setError(error.message);
            }
        };
/* fetchMovieDetail 함수는 TMDB API에서 영화 정보를 비동기적으로 가져온다. 
movieId와 API_KEY가 변경될 때마다 이 효과가 다시 실행 */

        fetchMovieDetail();
    }, [movieId, API_KEY]);

    if (error) return <div>에러 발생: {error}</div>;
    if (!movie) return <div>로딩 중...</div>;  // 비동기 데이터 로딩 상태를 처리하는 방법

    return (
        <DetailContainer>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieOverview>{movie.overview}</MovieOverview>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </DetailContainer>
    );
    /* 영화 데이터가 성공적으로 로드되면, 영화 제목, 개요, 포스터 이미지를 표시 
    DetailContainer로 감싸서 스타일을 적용 */
};

export default MovieDetail;
