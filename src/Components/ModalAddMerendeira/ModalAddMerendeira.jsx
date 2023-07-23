import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

import { addMerendeira } from '../../services/merendeiraServices';

export function ModalAddMerendeira(props) {
  // State e controles para manipular o modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function cadastrarMerendeira(data) {

    try {

      console.log(data)

      // Faz um POST na api para cadastrar uma nova merendeira
      const resultado = await addMerendeira(data)
      
      // caso o retorno seja negativo retorna o erro
      if (resultado.error){
        alert(resultado.error)
        return
      }

      // Atualiza a lista de merendeiras
      props.carregarMerendeiras()

      // Exibe um alerta avisando que cadastrou a nova merendeira com sucesso
      alert('Merendeira Cadastrada com sucesso!')

      // Fecha o modal
      handleClose()

    } catch (error) {

      // Exibe um alerta com o erro caso nao seja um erro previsto
      alert("Erro desconhecido")

    }


  }



  //Usado para manipular o formulario
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      {/* BOTAO QUE ABRE O MODAL */}
      <Button variant="primary" className='p-3 fs-4' style={{ width: '95%' }} onClick={handleShow}>
        Cadastrar Nova Merendeira
      </Button>

      <Modal show={show} onHide={handleClose}>

        {/* HEADER */}

        <Modal.Header closeButton>
          <Modal.Title>Cadastro de merendeiras</Modal.Title>
        </Modal.Header>


        {/* BODY */}

        <Modal.Body>
          <form >

            <div className="mb-3">
              <label for="nome" className="form-label">Nome</label>

              <input 
              type="text" 
              className="form-control" 
              id="nome" {...register("nome", { required: true })} />
              
              {errors.nome && <span>Campo obrigatório</span>}
            </div>

          </form>
        </Modal.Body>

        {/* FOOTER */}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fechar</Button>
          <Button variant="primary" onClick={handleSubmit(cadastrarMerendeira)}>Cadastrar</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}
