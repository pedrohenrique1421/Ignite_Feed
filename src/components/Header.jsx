import styles from './Header.module.css'
import IgniteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return (
        <header className={styles.Header}>
            <img src={IgniteLogo} alt="Ignite Feed" />
        </header>
    )
}