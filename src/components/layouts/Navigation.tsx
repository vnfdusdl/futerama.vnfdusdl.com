import Link from 'next/link';
import styled from '@emotion/styled';
import { ROUTES } from '../../constants';

interface ROUTE {
    ID: number;
    PATH: string;
    LABEL: string;
}
export const Navigation = () => {
    return (
        <Header>
            <FuturamaTitle>FuturamaInfo.com</FuturamaTitle>
            <Nav>
                <NavUl>
                    {ROUTES.map((routeObject: ROUTE) => {
                        console.log(routeObject);
                        return (
                            <NavList>
                                <Link href={routeObject.PATH}>
                                    <a>{routeObject.LABEL}</a>
                                </Link>
                            </NavList>
                        );
                    })}
                </NavUl>
            </Nav>
        </Header>
    );
};
const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #6155a6;
    background-color: #fff;
`;

const FuturamaTitle = styled.h1`
    margin-top: 20px;
    font-size: 1.6rem;
    text-align: center;
    color: #6155a6;
    text-shadow: 2px 1px 3px #B983FF;
    letter-spacing: 3px;
`;

const Nav = styled.nav`
    width: 95%;
    margin: 0 auto;
`;

const NavUl = styled.ul`
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 15px auto;
    padding-left: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`;
const NavList = styled.li`
    list-style: none;
    font-size: 0.8rem;
    padding: 10px 10px;
    box-sizing: border-box;
    &:hover {
        color: #fff;
        background-color: #6155a6;
        border-radius: 5px;
    }
`;
