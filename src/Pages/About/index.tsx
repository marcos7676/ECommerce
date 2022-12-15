import { Container } from "./style";
import Profile from "../../assets/profile.jpg";

const About = () => {
    return(
        <Container>
                <img src={ Profile } alt="" />
            <div className="trajetoria">
                <h6>
                    Trajetória
                </h6>
                <p>
                    Olá eu sou Marcos Alexandre, e vou te contar minha trajetória. Em 2018 eu estava me formado
                     no ensino médio, logo após, em 2018 ainda em dezembro comecei a trabalhar em uma serraria, 
                     onde fazia parte do setor de compras, em 2021 comecei a me interessar pelo desenvolvimento 
                     de software, aonde me inscrevi para uma bolsa de estudos na TECH4ME, o curso de desenvolvimento, 
                     em 2022 fui chamado para está fazendo o curso de front-end, aonde, como prova final foi feito 
                     esse projeto, onde você vai está vendo um pouco do que eu aprendi com o curso de front-end.
                </p>
            </div>

            <div className="projeto">
                <h6>
                    Projeto
                </h6>
                <p>
                    Header: estática, onde será feito a navegação para outras páginas, Home, Vitrine, Sobre, contendo um modal para cadastro.
                </p>

                <p>
                    Home: apenas para apresentação da logo marca.
                </p>

                <p>
                    Vitrine: Apresentação de produtos, cada produto está disponibilizando uma nova página, onde irá trazer seus detalhes.
                </p>

                <p>
                    Sobre: Informações sobre o projeto, minha trajetória e meu aprendizado no curso da TECH4ME, onde desenvolvi esse projeto.
                </p>
            </div>
            
            <div className="aprendizado">
                <h6>Aprendizado</h6>
                <p>
                    Com o curso da TECH4ME, eu consegui aprender sobre o front-end, e pude aprender como trabalhar com: HTML5, 	CSS, Javascript, ReactJs. 
                </p>
                <p>
                    Ao longo de 2022 eu tive outra oportunidade de está estudando o front-end aonde comecei a estudar sobre: 	Typescript, Angular, Vue.js, Python, PostgreSQL e desenvolvimento para Mobile, Android e IOS.
                    Previsto para conclusão ao início de 2024.
                </p>                
            </div>
        </Container>
    )
}

export default About;