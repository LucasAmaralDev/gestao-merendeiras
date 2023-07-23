import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const { updateMerendeira } = require("../../services/merendeiraServices");

export function ModalEditMerendeira(props) {
    // State e controles para manipular o modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function atualizarMerendeira(data) {

        try {
            const dadosAPI = {
                id: props.id,
                nome: data.nome
            }

            // Faz um PUT na api para atualizar uma merendeira
            const resultado = await updateMerendeira(dadosAPI)

            // caso o retorno seja negativo retorna o erro
            if (resultado.error){
                alert(resultado.error)
                return
            }

            // Atualiza a lista de merendeiras
            props.carregarMerendeiras()

            // Exibe um alerta avisando que o alimento foi atualizado com sucesso
            if (resultado.nome){
                alert(`Merendeira ${resultado.nome} atualizada com sucesso!`)
            }

            // fecha o modal
            handleClose()


        } catch (error) {

            // Exibe um alerta com o erro que ocorreu
            alert("Erro ao atualizar Merendeira!")

        }


    }



    //Usado para manipular o formulario
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Editar
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Cadastro de merendeira</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <form >

                        <div className="mb-3">
                            <label for="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" defaultValue={props.nome} id="nome" {...register("nome", { required: true })} />
                            {errors.nome && <span>Campo obrigatório</span>}
                        </div>

                    </form>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(atualizarMerendeira)}>
                        Aplicar
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}
