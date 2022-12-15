/* eslint-disable no-useless-concat */
import { Container } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FaExpandAlt as Expand } from "react-icons/fa"

import Bolo from "../../assets/bolo.jpg";
import Chocolate from "../../assets/chocolate.jpg";
import Croissant from "../../assets/croissant.jpg";
import Cupcake from "../../assets/cupcake.jpg";
import Donuts from "../../assets/donuts.jpg";
import Rocambole from "../../assets/rocambole.jpg";
import Sorvete from "../../assets/sorvete.jpg";
import Waffle from "../../assets/waffle.jpg";

import api from "../../services/api";

/// Seta URL de acordo com ID do produto cadastrado na API, fazendo a renderização no componente "Detail"

const Showcase = () => {   
    const [produtos, setProdutos] = useState([])

    useState(() => {
        api
        .get("/produtos")
        
        .then((response)=> {
            setProdutos(response.data)
         })

        .catch(() => {
            console.error("Ocorreu um erro durante a operação, tente novamente em alguns segundos! ");
        });

    }, []);  

    const filterIds = produtos.map((produtos) => produtos.id)

    const boloId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 83)
    : [];

    const chocolateId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 84)
    : [];
    
    const croissantId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 85)
    : [];
    
    const cupcakeId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 86)
    : [];
    
    const donutsId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 87)
    : [];
    
    const rocamboleId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 88)
    : [];
    
    const sorveteId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 89)
    : [];
    
    const waffleId = filterIds.length > 0
    // eslint-disable-next-line eqeqeq
    ?filterIds.filter(produto => produto == 90)
    : [];
    
    return(
        <Container>
            <section>
                <div>
                     {/* eslint-disable-next-line eqeqeq */}
                    <Link to={"/Detail" + "/" + boloId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Bolo } alt="" />
                </div>
                <div>
                    <Link to={"/Detail" + "/" + chocolateId }>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Chocolate } alt="" />
                </div>
                <div>
                    <Link to={"/Detail" + "/" + croissantId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Croissant } alt="" />
                </div>
                <div>
                    <Link to={"/Detail" + "/" + cupcakeId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Cupcake } alt="" />
                </div>
            </section>

            <section>
                <div>
                    <Link to={"/Detail" + "/" + donutsId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Donuts } alt="" />
                </div>
                <div>
                    <Link to={"/Detail" + "/" + rocamboleId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Rocambole } alt="" />
                </div>
                <div>
                    <Link to={"/Detail" + "/" + sorveteId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Sorvete } alt="" />
                </div>
                <div>
                    <Link to={"/Detail" + "/" + waffleId}>
                        <Expand className="Expand" />
                    </Link>
                    <img src={ Waffle } alt="" />
                </div>
            </section>
        </Container>
    )
}

export default Showcase;