import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import pez_image from '../../assets/images/pez_in_a_row.jpg';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

interface Props {
    title: string;

}

export const Home = (props:Props) => {
/* root = parent div , <stack> like flexbox, where you can 'justify content' etc.*/

    return (
        <Root>    
            <NavbarContainer>
                <Logo>
                    <LogoA href='/about' >{logo}</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to= '/' >Home</NavA>
                    </li>
                    <li>
                        <NavA to= '/about'>About</NavA>
                    </li>
                    <li>
                        <NavA to= '/profile' >Profile</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard' >Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to="https://www.smithsonianmag.com/innovation/how-pez-evolved-from-anti-smoking-tool-to-beloved-collectors-item-180976545/" >History of PEZ</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>PEZ PEZ PEZ</p>
                    <p>Show off your PEZ collection!</p>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>Check out those PEZ</Button>
                </MainText>
            </Main>
    
            </Root>
        )
    }





const Root = styled("div")({
    padding: 0,
    marginRight: 15,
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pez_image});`,
    width: '99%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})



 
