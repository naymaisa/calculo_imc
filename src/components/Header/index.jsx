import styles from './Header.module.css';
import balaca from '../imagens/balaca.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <p>Calculo do IMC</p>
            <img className={styles.img} src={balaca} alt="Balança" />
        </header>
    )
}

export default Header;