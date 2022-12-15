import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Showcase from "../Pages/Showcase";
import Header from "../components/Header";
import CadastroModal from "../components/CadastroModal";
import About from "../Pages/About";

import Modal from "react-modal";
import { useState } from "react"
import Detail from "../Pages/Detail";


Modal.setAppElement("#root")

const Rotas = () => {
    const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

    function handleOpenCadastroModal(){
        setIsCadastroModalOpen(true);
    }

    function handleCloseIsCadastroModal(){
        setIsCadastroModalOpen(false);
    }
    
    return(
        <Router>
                <Header onOpenCadastroModal={handleOpenCadastroModal}/>
                <CadastroModal
                isOpen={isCadastroModalOpen}
                onRequestClose={handleCloseIsCadastroModal}
                />

            <Routes>
                <Route element={ <Home /> } path="/" />
                <Route element={ <Showcase /> } path="/Showcase" />
                <Route element={ <Detail /> } path="/Detail/:id" />
                <Route element={ <About /> } path="/About" />
            </Routes>
        </Router>
    )
}

export default Rotas;