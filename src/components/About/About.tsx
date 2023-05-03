import React from 'react';
import logo from '../../assets/images/logo.png';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
   

interface Props {
    header: string;
}

export const About = (props:Props) => {

    return (
       
<div className='container'>
{/* <NavbarContainer>
                <LogoNavigation>
                    <li>
                        <NavA href= '/about'>About</NavA>
                    </li>
                    <li>
                        <NavA href= '/profile' >Profile</NavA>
                    </li>
                    <li>
                        <NavA href='/dashboard' >Dashboard</NavA>
                    </li>
                    <li>
                        <NavA href="https://www.smithsonianmag.com/innovation/how-pez-evolved-from-anti-smoking-tool-to-beloved-collectors-item-180976545/" >History of PEZ</NavA>
                    </li>
                </LogoNavigation>
</NavbarContainer> */}
        <Box sx={{ width: 500 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent={'center'}>
          <Item><img className="logo" src={logo} alt="PEZ Logo" /></Item>
          <Item><h2 className='header'>{props.header}</h2></Item>
          <Item><p>We here at PEZ Collectors United are very passionate about PEZ dispensers, and everything PEZ! 
                We created this App, so that like-minded people like us could show of their collection, check out what other people have, and 
                maybe set up buying, selling, or trading transactions!</p></Item>
          <Item><p> 'But What Is PEZ', you ask? </p>
                <p>Pez is the brand name of an Austrian candy and associated manual candy dispensers. The candy is a pressed, dry, 
                    straight-edged, curved-corner block 15 mm (5⁄8 inch) long, 8 mm (5⁄16 inch) wide and 5 mm (3⁄16 inch) high, 
                    with each Pez dispenser holding 12 candy pieces.
                    Pez was invented in Austria and later exported worldwide. The all-uppercase spelling of the logo echoes the trademark's 
                    style on the packaging and the dispensers, with the logo drawn in perspective and giving the appearance that the letters 
                    are built out of 44 brick-like Pez mints (14 bricks in the P and 15 in each of the E and Z).
                    Despite the widespread recognition and popularity of the Pez dispenser, the company considers itself to be primarily a 
                    candy company, and today, billions of PEZ candies are consumed annually in the U.S.A. alone. 
                    Pez dispensers are a part of popular culture in many nations, an example being "Soul Candy" in the Japanese manga series 
                    Bleach. Because of the large number of dispenser designs over the years, they are collected by many.</p>
          </Item>
        </Stack>
      </Box>
      </div>
    );
  }


//   const NavA = styled('a')({
//     display: 'block',
//     padding: '1em',
//     color: 'black'
// })

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  backgroundColor: '#00A1E1'

}));


// const LogoNavigation = styled('ul')( {
//     listStyle: 'none',
//     textTransform: 'uppercase',
//     textDecoration: 'none',
//     display: 'flex'
// })


// const NavbarContainer = styled('div')( {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
// })