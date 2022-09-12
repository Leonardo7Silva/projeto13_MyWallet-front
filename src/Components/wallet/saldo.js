import styled from "styled-components"

let aux = 0;

export default function Saldo({total}){

    aux = total 


    return(
        <Total>
            <h2>SALDO</h2>
            <h3>{Math.abs(`${total}`).toFixed(2)}</h3>
        </Total>
    )
}

const Total = styled.div`
    width: 85vw;
    height: auto;
    padding: 2vh;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    background-color: #ffffff;
    z-index: 1;
    border-top: 1px solid #dbdbdb;
    position: fixed;
    top: 72.8vh;
    left: 7.5vw;
    box-sizing: border-box;
    
    h2{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
    h3{
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${props => aux >= 0 ? "#03AC00" : "#C70000"};
    }
`