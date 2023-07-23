
import { ModalEditMerendeira } from '../ModalEditMerendeira/ModalEditMerendeira';
import styles from './CardMerendeira.module.css';


export function CardMerendeira(props) {



    return (
        <div className={styles.card}>

            <div key={props.id}>

                <p><span>Nome<span className={styles.pontos}>:</span></span> {props.nome}</p>
            
            </div>


            <div className={styles.buttons}>

                <ModalEditMerendeira nome={props.nome} id={props.id} carregarMerendeiras={props.carregarMerendeiras} />
                <button onClick={() => { props.excluirMerendeira(props.id) }} className={styles.vermelho}>Excluir</button>
            
            </div>
        </div>
    )
}