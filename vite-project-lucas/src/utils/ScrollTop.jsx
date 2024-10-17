
import { useEffect } from "react"; //ativa quando constantes mudam
import { useLocation } from "react-router-dom"; //url da pagina


const ScrollToTop = () => {
    const {pathname} = useLocation() //url so site

    useEffect(()=>{
        window.scrollTo(0,0) //vai para o topo da página
    },[pathname]) //quando a url muda, ativa o useefect

    return null //nao quero retornar valor ou dado
}

export default ScrollToTop



