import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import drone_image from  '../../assets/images/drone_image.jpg';

interface Props {
    title: string;
}

// Create Styled Components with styled-components
const Root = styled("div",{
    name: 'Root',
    slot: 'Wrapper'
})({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('div')({
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
const NavA = {
    display: 'block',
    padding: '1em',
    color: 'black'
}
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${drone_image});`,
    width: '100%',
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

export const Home = (props: Props) => {

    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <Link to="/" ><LogoA>Ranger Drones</LogoA></Link>
                </Logo>
                <LogoNavigation>
                    <li>
                        <Link to="/" style={NavA}>Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" style={NavA}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="signin" style={NavA}>Signin</Link>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p> Drones are cool.</p>
                    <Button color='primary' variant='contained'>See the Drones</Button>
                </MainText>
            </Main>

        </Root>
        
    )
}