import  Rotas  from "./routes";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer";

export function App(){
    return(
        <>
        <Footer />

        <Rotas />
        
        <GlobalStyle />
        </>
    );
}
