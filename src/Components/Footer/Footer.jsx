
import styles from './Footer.module.css';

export function Footer() {

    return (
        <>
            <footer>
                <a className={styles.voltarTopo} href="#header"> Voltar para o topo</a>
                <div>
                    <a
                        className={styles.last_element}
                        href="https://www.linkedin.com/in/lucasamaral-dev/"
                        target="blank"
                    >

                        <p>Desenvolvido por: Lucas Henrique Amaral</p>
                    </a>
                </div>
            </footer>
        </>
    )
}