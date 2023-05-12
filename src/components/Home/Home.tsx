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
                    <LogoA href='/about' ><img className="logo" src={ logo } alt="PEZ Logo" /></LogoA>
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
                        <NavA to="/signin">Sign In</NavA>
                    </li>
										<li>
                        <NavA to="/signup">Sign Up</NavA>
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
                    <Button  className='pez_button' color='secondary' variant='contained' component={Link} to='/dashboard'>Check out those PEZ</Button>
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
const Logo = styled('a')({
    margin: '2vw 2vw 1vw 2vw',
 

})
const LogoA = styled('a')( {
   margin: 0,
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    justifyContent: 'space-between',
    display: 'flex',
   
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black',
    marginRight:'2vw',
    fontWeight: 'bold',
    fontSize: '2.8vh',
    fontFamily: 'High Tower Text, Georgia, Arial'
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
    color: 'white',
    fontFamily: 'High Tower Text, Georgia, Arial'
})


