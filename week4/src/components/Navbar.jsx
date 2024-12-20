// src/components/Navbar.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

const Logo = styled.h1`
    cursor: pointer;
`;

const AuthButton = styled.button`
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Link to="/">
                <Logo>YONGCHA</Logo>
            </Link>
            <div>
                <Link to="/login">
                    <AuthButton>로그인</AuthButton>
                </Link>
                <Link to="/signup">
                    <AuthButton>회원가입</AuthButton>
                </Link>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
