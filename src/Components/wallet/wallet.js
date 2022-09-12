import { Fundo, Header } from "../styledsComuns"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import Movimentacoes from "./movimentacoes"
import Saldo from "./saldo"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Wallet(){

    const[contador, setContador] = useState(0);
    const[data, setData] = useState([]);

    const navigate = useNavigate();

    function listarMovimentacoes(){
        const requisicao = axios.get("http://localhost:5000/movimentacoes",{
            headers: {"autorizacao": `${JSON.parse(localStorage.getItem("wallet")).token}`}
        });

        requisicao.then((res)=> {setData(res.data);});
        requisicao.catch((err)=>alert(err.response.data));
    }

    function somarBalaco(){
        let aux = 0;
        data.map((value) =>{
            if(value.tipo === "saida"){
                aux -= parseFloat(value.valor)
                return 
            }else return aux += parseFloat(value.valor)
        })
        return setContador(aux);
    }

    useEffect(listarMovimentacoes, []);
    useEffect(somarBalaco, [data]);

    return(

        <Fundo>
            <Header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="exit-outline" onClick={()=>{
                    localStorage.clear('wallet');
                    navigate("/");
                }} ></ion-icon>
            </Header>
            <FundoWallet>
                {data.length ===0 ? 
                <MensagemVazio>
                    <h2>Não há registros de entrada ou saída</h2>
                </MensagemVazio> : 
                data.map((value,index) => 
                <Movimentacoes 
                key={index}
                data={value.data} 
                descricao={value.descricao} 
                valor={value.valor}
                tipo={value.tipo}
                />)
                }
                {data.length ===0 ? "" :
                <Saldo total={parseFloat(contador)}/>}
            </FundoWallet>
            <Botoes>
                <Link to="/entrada">
                <div>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <div><p>Nova entrada</p></div>
                </div>
                </Link>
                <Link to="/saida">
                <div>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <div><p>Nova saída</p></div>
                </div>
                </Link>
            </Botoes>
        </Fundo>
    )
}

const FundoWallet = styled.div`
    width: 100%;
    height: 67vh;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1vh;
    position: relative;
    overflow-y: scroll;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 7vh;
`
const MensagemVazio= styled.div`
    width: 210px;
    height: auto;
    margin: 27vh auto;

    h2{
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`
const Botoes = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
    font-family: 'Raleway', sans-serif;

    ion-icon{
        font-size: 23px;
        color: #FFFFFF;
    }
    div{
        width: 41.4vw;
        height: 16vh;
        background-color: #A328D6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 1vh;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s;
    }
    div:active{
        transform: scale(0.9);
    }
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
    div div{
        height: auto;
        width: 40px;
    }
`