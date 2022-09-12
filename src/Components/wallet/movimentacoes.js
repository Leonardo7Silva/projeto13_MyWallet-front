import styled from "styled-components"

let cor = ""

export default function Movimentacoes({descricao, valor, data, tipo, deletarMovimentacao, id}){
    cor = tipo;
    return (
        <Movimento>
            <div>
                <h3>{`${data}`}</h3>
                <h4>{`${descricao}`}</h4>
            </div>
            <div>
                <h5>{Math.abs(`${valor}`).toFixed(2)}</h5>
                <ion-icon onClick={()=> deletarMovimentacao(id)} name="close-outline"></ion-icon>
            </div>
        </Movimento>
    )
}

const Movimento = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    font-family: 'Raleway', sans-serif;
    justify-content: space-between;
    margin: 1.5vh 0;

    div{
        width: auto;
        height: auto;
        display: flex;
    }


    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
        margin-right: 1vh;
    }
    h4{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
    h5{
        margin-right: 1vh;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => cor === "saida" ? "#C70000" : "#03AC00"};
    }
    ion-icon{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
        cursor: pointer;
    }
`