
//função que pega os dados da api, transforma em json e te retorna
export const getApiData = async (endpoint, params) => {
    try{
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`) //facilita pegar endpoit
        const response = await fetch(url, { //seleciona a url da api
            method: 'GET', //pega os dados da api
        })
        
        if(!response.ok){ //se der erro, enviamos mensagem de erro
            console.error(e) (`Error: ${response.status}`)
        }

        const data = await response.json() //transforma os dados em .json
        return data   //função retorna a resposta em json

    }catch(e){   //se der erro, enviamos mensagem de erro
        console.error('Cactch error:',e)
    }
}