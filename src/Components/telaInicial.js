import { Fundo } from "./styledsComuns"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function TelaInicial(){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function fazerLogin(e){
        e.preventDefault();

        const requisicao = axios.post("http://localhost:5000/login",{
            "email": email,
            "senha": senha
        })
        requisicao.then((res)=>{
            localStorage.setItem('wallet', JSON.stringify(res.data));
            navigate("/wallet");
        });
        requisicao.catch((err)=>alert(err.response.data));
    }

    return (
        <FundoTelaInicial>
            <h1>MyWallet</h1>
            <form onSubmit={fazerLogin}>
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
            <button type="submit"><p>Entrar</p></button>
            </form>
            <Link to="/cadastro">
                <h6>Primeira vez? Cadastre-se!</h6>
            </Link>
        </FundoTelaInicial>
    )
}

const FundoTelaInicial = styled(Fundo)`
    justify-content: center;

    h1{
        color: #ffffff;
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        margin-bottom: 2vh;
    }

    h6 {
        color: #ffffff;
        font-size: 15px;
        font-weight: bold;
        margin-top: 3vh;
        cursor: pointer;
    }

`