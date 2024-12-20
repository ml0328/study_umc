// src/layouts/RootLayout.jsx
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const MainContent = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

const RootLayout = () => {
    return (
        <LayoutContainer>
            <Navbar /> {/* Navbar 사용 */}
            <MainContent>
                <Sidebar />
                <Outlet /> {/* 자식 컴포넌트가 여기에 렌더링됨 */}
            </MainContent>
        </LayoutContainer>
    );
};

export default RootLayout;
