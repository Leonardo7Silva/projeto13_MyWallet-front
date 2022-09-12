import TelaInicial from "./telaInicial"
import TelaDeCadastro from "./telaDeCadastro"
import TelaDeEntrada from "./entrada"
import TelaDeSaida from "./saida"
import Wallet from "./wallet/wallet"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial/>}/>
                <Route path="/cadastro" element={<TelaDeCadastro/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
                <Route path="/entrada" element={<TelaDeEntrada/>}/>
                <Route path="/saida" element={<TelaDeSaida/>}/>
            </Routes>
        </BrowserRouter>   
    )
}