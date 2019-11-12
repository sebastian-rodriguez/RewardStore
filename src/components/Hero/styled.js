import styled from 'styled-components'
import backgroundImage from './../../assets/header-x1.png'

const HeroWrapper = styled.div`
    height: 250px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url(${ backgroundImage });
    background-size: 100% 400px;
    display: flex;
    justify-content: start;
    align-items: flex-end;

    .title{
        @import url('https://fonts.googleapis.com/css?family=Fjalla+One&display=swap');
        color: white;
        margin-left: 100px;
        margin-bottom: 15px;
        font-size: 40px;
        font-family: 'Fjalla One', sans-serif;
    }
`
export default HeroWrapper