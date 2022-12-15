import api from "../../services/api";

import { Link } from "react-router-dom";
import { memo, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

import { GiReturnArrow as Return } from "react-icons/gi"

interface PostProps{
    id: string;
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
}

function Detail(){
    const [ posts, setPosts] = useState<PostProps[]>([]);

    useState(() => {
        api.get("/produtos")
        .then((response) => {
            setPosts(response.data);
            
        }).catch(() => {
            console.log("Ocorreu um erro durante a operação, tente novamente em alguns segundos! ");
        });
    })

    const { id } = useParams();

    return(
        <Container>
             {/* eslint-disable-next-line array-callback-return */}
            {posts.map(element => {
                // eslint-disable-next-line eqeqeq
                if(element.id == id){
                    return(
                        <div key={element.id}>

                            <Link to="/Showcase">
                                <Return className="Return"/>
                            </Link>

                             {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img src={element.imagem}></img>

                            <h6>{element.nome} - {element.descricao}</h6>

                            <section>
                                {element.preco}
                            </section>
                            
                        </div>
                    )
                }
            })}
        </Container>
    )
}

export default memo(Detail)
    