import { Fundo, Header } from "./styledsComuns"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function TelaDeEntrada(){

    const navigate = useNavigate();

    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    function cadastrarEntrada(e){
        e.preventDefault();
        if(valor.includes(",") || valor.includes("-")){
            return alert('Insira um valor positivo' )
        }
        const requisicao = axios.post("http://localhost:5000/movimentacoes",{
            "descricao": descricao,
            "valor": valor,
            "tipo": "entrada"
        },{headers: {"autorizacao": `${JSON.parse(localStorage.getItem("wallet")).token}`}});

        requisicao.then(()=> {alert('entrada criada'); navigate("/wallet");})
        requisicao.catch((err)=>alert(err.response.data));
        
    }

    return(
        <Fundo>
        <Header><h1>Nova entrada</h1></Header>
        <form onSubmit={cadastrarEntrada}>
        <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} required/>
        <input type="text" placeholder="Descrição"value={descricao} onChange={e => setDescricao(e.target.value)} required/>
        <button type="submit"><p>Salvar entrada</p></button>
        </form>
        </Fundo>
    )
}