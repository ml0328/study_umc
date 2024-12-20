// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';
import SignupPage from './pages/SignupPage';
import NotFound from './pages/NotFound';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';

// GlobalStyle 정의
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #121212;
        color: #fff;
        height: 100vh; 
        display: flex;
        flex-direction: column;
    }

    h1, h2, h3 {
        margin: 20px 0; 
    }
`;

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="movies" element={<MoviePage />} />
                    <Route path="movies/now-playing" element={<NowPlaying />} />
                    <Route path="movies/popular" element={<Popular />} />
                    <Route path="movies/top-rated" element={<TopRated />} />
                    <Route path="movies/up-coming" element={<UpComing />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
