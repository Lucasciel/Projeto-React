
//importsImportando funções e hooks do React e serviços
import { createContext, useState, useEffect, Children } from "react";  
import {getApiData} from '../services/apiServices'



export const AppContext = createContext()//AppContext será usado para dar acesso deseus componentes para outros

export const AppProvider = ({children}) => {
    //localstorage salvar idioma escolhido
    const savedLanguage = localStorage.getItem('lang')

    const [language, setLanguage] = useState(savedLanguage ?? 'br') //o botão muda a linguagem em todos os componentes
    const [languages, setLanguages] = useState({}) //aqui é o texto todo da api en e br
    const [loading, setLoading] = useState(true) //se os dados estao carregando ou nao

    useEffect(() => {
        //criando função que pega dados da api e guarda no languages
        const fetchLanguages = async () => {
            try{
                //so estamos mandando todo texto da api para languages
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            } catch(e){
                console.error(e)
            } finally{
                setLoading(false)
            }
        }

        //usamos a função que pega dados da api e guarda no languages
        fetchLanguages()

    }, [])


    useEffect(()=> {
        localStorage.setItem('lang', language)
    }, [language])


    //1 AppProvider se torna um provedor, os valores compartilhados são {{...}}
    //2 componentes filhos terão acesso aos valores do contexto.
    return (
        <AppContext.Provider value={{language,languages,setLanguage,loading}}>
            {children}
        </AppContext.Provider>
    )
}









