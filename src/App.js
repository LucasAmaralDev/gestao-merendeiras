import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import "./Global.css"
import { CardMerendeira } from "./Components/CardMerendeira/CardMerendeira";
import { ModalAddMerendeira } from "./Components/ModalAddMerendeira/ModalAddMerendeira";
import { Footer } from "./Components/Footer/Footer";

const { getMerendeira, deleteMerendeira } = require("./services/merendeiraServices");

function App() {

  // Estado responsavel por armazenar os dados recebidos da api
  const [merendeiras, setMerendeiras] = useState([])


  // Funcão para pegar os dados do banco de dados
  async function carregarMerendeiras() {

    try {
      // Faz a requisição para a api
      const data = await getMerendeira()

      // Atualiza o estado do componente
      setMerendeiras(data)

    } catch (error) {

      // Caso de algum erro mostra uma mensagem de erro
      alert("Erro ao carregar os merendeiras")

    }
  }


  // Effect usado para carregar os dados assim que o componente for montado
  useEffect(() => {
    carregarMerendeiras()
  }, [])



  // Funcao para deletar os dados no banco de dados
  async function excluirMerendeira(id) {

    try {

      // Faz a requisição para a api
      const data = await deleteMerendeira(id)

      //  Mostra uma mensagem de da api
      if (data.nome){
        alert(`Merendeira ${data.nome} excluida com sucesso`)
      }

      // Atualiza os dados
      carregarMerendeiras()

    } catch (error) {

      // Caso de algum erro mostra uma mensagem de erro
      alert("Erro ao excluir merendeira")

    }
  }






  return (
    <>

      <div className="App">


        <Header title='Gestão de Merendeiras' />

        <ModalAddMerendeira carregarMerendeiras={carregarMerendeiras} />

        {
          merendeiras.length > 0

            ? merendeiras.map((merendeira) => {
              return (

                <CardMerendeira key={merendeira.id} id={merendeira.id} nome={merendeira.nome} excluirMerendeira={excluirMerendeira} carregarMerendeiras={carregarMerendeiras} />

              )
            })

            : <h1 className='sem-conteudo'>Não há Merendeiras Cadastradas</h1>
        }

      </div>
      <Footer />
    </>
  );
}

export default App;
