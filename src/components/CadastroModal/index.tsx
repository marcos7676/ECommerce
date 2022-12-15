import Modal from "react-modal"
import { FormEvent, useState } from "react";

import { Container } from "./style";
import { AiOutlineClose } from "react-icons/ai"
import api from "../../services/api";

interface CadastroModalProps{
    isOpen: boolean;
    onRequestClose: () => void; 
}

export default function CadastroModal({ isOpen, onRequestClose }: CadastroModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    function handleCreateCadastro(this: any, event: FormEvent){
        event.preventDefault();

        const data ={
            name,
            email,
            tel,
        };
        api.post("/cadastro", data)           
        }

        function clear(){
            Array.from(document.querySelectorAll('input')).forEach(
                input => (input.value = "")
            );
        }
    return(
        
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >

            <Container onSubmit={handleCreateCadastro}>
                <AiOutlineClose 
                onClick={onRequestClose} 
                className="react-modal-close"
                />

                <h2>Cadastre-se para receber nossas promoções!</h2>
                <div className="form-control">
                    <input 
                    placeholder="Nome" 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="off"
                    />
                    </div>
                    <div className="form-control">
                    <input 
                    type="string" 
                    placeholder="E-mail" 
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="off"
                    />
                    </div>

                <div className="form-control">
                    <input 
                    type="string" 
                    placeholder="Telefone" 
                    id="tel"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                    autoComplete="off"
                    />
                </div>
                <button type="submit" onClick={clear} value="">CADASTRAR</button>
            </Container>
        </Modal>
    )
}
