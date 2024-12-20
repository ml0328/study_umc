// src/components/Sidebar.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // 검색 아이콘
import { MdMovie } from 'react-icons/md'; // 영화 아이콘

const SidebarContainer = styled.div`
    width: 200px; /* 고정 너비 */
    background-color: #000;
    color: #fff;
    padding: 20px;
    height: 100%; /* 전체 높이 */
`;

const SidebarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:hover {
        color: #ccc;
    }

    svg {
        margin-right: 10px; /* 아이콘과 텍스트 사이 간격 */
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLink to="/search">
                <FaSearch />
                찾기
            </SidebarLink>
            <SidebarLink to="/movies">
                <MdMovie />
                영화
            </SidebarLink>
        </SidebarContainer>
    );
};

export default Sidebar;
