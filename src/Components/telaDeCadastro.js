import { Fundo } from "./styledsComuns";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";


export default function TelaDeCadastro(){

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    console.log({
        nome,
        email,
        senha,
        confirmSenha
    })

    function fazerCadastro(event){
        event.preventDefault();
        if(senha !== confirmSenha){
            return alert("A senha está diferente de sua confirmação")
        }
        const requisicao = axios.post("http://localhost:5000/cadastros",{
            "nome": nome,
            "email": email,
            "senha": senha
        })

        requisicao.then(()=> {alert("Cadastro criado"); navigate("/");});
        requisicao.catch(()=> alert("erro interno"));

    
    };

    return (
        <FundoTelaCadastro>
            <h1>MyWallet</h1>
            <form onSubmit={fazerCadastro}>
            <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required/>
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Senha" min={8} value={senha} onChange={e => setSenha(e.target.value)} required/>
            <input type="password" placeholder="Confirme a senha" value={confirmSenha} onChange={e => setConfirmSenha(e.target.value)} required/>
            <button type="submit"><p>Cadastrar</p></button>
            </form>
            <Link to="/">
                <h6>Já tem uma conta? Entre agora!</h6>
            </Link>
        </FundoTelaCadastro>
    )
}

const FundoTelaCadastro = styled(Fundo)`
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