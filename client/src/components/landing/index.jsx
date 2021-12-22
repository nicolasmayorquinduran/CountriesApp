import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(https://i.giphy.com/media/U4FkC2VqpeNRHjTDQ5/giphy.webp);
    background-position: center;
    background-color: #000;
    background-size: 70%;
    background-repeat: no-repeat;
& a {
    position: absolute;
    width: 25vw;
    height: 25vh;
    transform: translate(-50%, -50%);
    top: 50vh;
} & button {
    border-radius: 50%
} 
`

const Index = () => {
    return (
        <>
        <Container>
           <Link to="/home">
           <button>Explore the world</button>
           </Link>
        </Container>
        </>
    );
};

export default Index;