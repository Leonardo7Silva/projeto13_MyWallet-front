import styled from "styled-components";

const Fundo = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    min-height: 600px;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    padding-left: 6.5vw;
    padding-right: 6.5vw;
    align-items: center;

    input {
    width: 100%;
    height: 8.7vh;
    min-height: 54px;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 1vh 0;
    border: 0px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    }

    input::placeholder{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000; 
    opacity: 1;
    }

    button{
        width: 100%;
        height: 7vh;
        min-height: 46px;
        background: #A328D6;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s;
        margin: 1vh 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    }

    button:active{
        transform: scale(0.9);
    }

    button p{
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        text-decoration-line: none;
    }

`
const Header = styled.div`
    width: 100%;
    height: 12vh;
    min-height: 78px;
    margin: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #ffffff;
    }
    ion-icon{
        cursor: pointer;
        font-size: 29px;
        color: #ffffff;
        font-weight: bold;
    }
`




export {Fundo, Header};