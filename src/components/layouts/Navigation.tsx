import Link from 'next/link';
import styled from '@emotion/styled';
import { ROUTES } from '../../constants';

interface ROUTE {
    ID: number,
    PATH: string,
    LABEL: string,
}
export const Navigation = () => {
    return (
        <Header>
        <FuteramaTitle>
            💫 FuteramaInfo.com
        </FuteramaTitle>
        <Nav>
            <NavUl>
                {
                ROUTES.map((routeObject : ROUTE) => {
                    console.log(routeObject);
                    return (
                        <NavList><Link href={routeObject.PATH}><a>{routeObject.LABEL}</a></Link></NavList>
                        )
                        
                })
                }
            </NavUl>
        </Nav>
    </Header>
    )

}
const Header = styled.header`
width: 100%;
border-bottom: 1px solid #fff;
`

const FuteramaTitle = styled.h1`
margin-top: 0;
`
const Nav = styled.nav`
    width: 60%;
`

const NavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 40px;
    padding-left: 0;
    
`
const NavList = styled.li`
    list-style: none;
    font-size: 1.2rem;
    padding: 10px 20px;
    &:hover {
        color: #fff;
        background-color: #6155A6;
        border-radius: 5px;
    }
`