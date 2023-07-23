// Objetivo: Arquivo responsavel por fazer a comunicação com a api

// URL da api
const URL_API = "https://64bc75297b33a35a4447362f.mockapi.io/api/v1/"


// Funcao que é responsavel por adicionar uma merendeira no banco de dados
export async function getMerendeira() {

    try {

        // Faz a requisição para a api
        const response = await fetch(`${URL_API}merendeiras`)

        // Converte a resposta da api em um objeto
        const data = await response.json()

        // Retorna os dados
        return data

    } catch (error) {

        return error
    }


}


// Funcao responsavel por apagar uma merendeira no banco de dados
export async function deleteMerendeira(id) {

    try {
        // Faz a requisição para a api
        const response = await fetch(`${URL_API}merendeiras/${id}`, {
            method: 'DELETE'
        })

        // Converte a resposta da api em um objeto
        const data = await response.json()

        // Retorna os dados
        return data

    } catch (error) {

        return error

    }

}


// Funcao responsavel por atualizar uma merendeira no banco de dados
export async function updateMerendeira(data) {

    try {

        // Faz a requisição para a api
        const result = await fetch(`${URL_API}merendeiras/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        // converte a resposta da api em um objeto
        const responseAPI = await result.json()

        // retorna os dados
        return responseAPI

    } catch (error) {

        return error

    }

}

// Funcao reponsavel por adicionar uma merendeira no banco de dados
export async function addMerendeira(data) {

    console.log("data", data)
    try {

        // Envia os dados do formulario para cadastrar uma nova merendeira
        const result = await fetch(`${URL_API}merendeiras`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        // Converte a resposta da api em um objeto
        const retornoApi = await result.json()

        console.log(retornoApi)

        // Retorna os dados
        return retornoApi

    } catch (error) {

        return error

    }


}