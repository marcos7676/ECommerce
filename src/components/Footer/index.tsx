import { Container } from "./style";

import { 
    AiOutlineGithub as Github,
    AiOutlineMail as Email,
    AiOutlineLinkedin as Linkedin

} from "react-icons/ai";

export const Footer= () => {

    function openGithub(){
        window.open("https://github.com/marcos7676");
    }

    function openLinkedin(){
        window.open("https://www.linkedin.com/in/marcos-vizani-6251a3231/");
    }

    return(
        <Container>
            <div className="contato">
                <h5>
                    <Email onClick={() => navigator.clipboard.writeText("mavssoftware@gmail.com")} />                       
                    <p>mavssoftware@gmail.com</p>
                </h5>
                
                <h5>
                    <Github onClick={openGithub}/>
                    <p>marcos7676</p>
                </h5>
                <h5>
                    <Linkedin onClick={openLinkedin}/>
                    <p>Marcos Vizani</p>
                </h5>
            </div>
        </Container>
    )
};

