import styles from './SideBar.module.css';
import { PencilSimpleLine } from '@phosphor-icons/react'

export function SideBar() {
    return (
        <aside className={styles.SideBar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1506146131056-bec1a27177c1?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <img className={styles.avatar} src="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <h3>Pedro Lins</h3>
            <span>CyberSecurity</span>

            <div className={styles.Line} />

            <footer>
                <a href="#">
                <PencilSimpleLine className={styles.pencil} size={16} weight='bold' />
                    <p>Editar seu perfil</p>
                </a>
            </footer>
        </aside>
    );
}
