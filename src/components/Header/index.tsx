import { Container } from "./styles";
import { FcInvite, FcHome, FcShop, FcViewDetails} from "react-icons/fc";

import { Link } from "react-router-dom";

interface HeaderProps {
    onOpenCadastroModal: () => void;
}

export const Header = ({ onOpenCadastroModal }: HeaderProps) => {
    return(
        <Container>
                <h6>GOLD</h6>
                <h5>CANDY</h5>
                
                <header>
                    <Link to="/">
                        <FcHome title="Home"/>
                    </Link>
                </header>
                <header>
                    <Link to="/Showcase">    
                        <FcShop title="Showcase"/>
                    </Link>
                </header>
                <header>
                    <Link to="/About">
                        <FcViewDetails title="About"/>
                    </Link>
                </header>
                <header>
                    <FcInvite title="Cadastro" onClick={onOpenCadastroModal} />
                </header>
        </Container>
    )
}

export default Header;
