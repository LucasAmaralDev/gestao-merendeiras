import styles from './Header.module.css';
import headerLogo from '../../img/icon.png'

export function Header(props) {

    return (
        <header id='header' className={styles.header}>

            <div className={styles.content}>

                <img src={headerLogo} alt="" srcset="" />
                <h1>{props.title}</h1>

            </div>

        </header>
    )
}