import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react";

export function Comments() {
    return <div className={styles.Comment}>
        <img className={styles.avatar} src="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.CommentContainer}>
            <div className={styles.CommentContent}>
                <header >
                    <div className={styles.CommentInfo}>
                        <strong>Devon Lane</strong>
                        <time dateTime="2022-02-12 09:54:12">Cerca de 2h atrás</time>
                    </div>
                    <Trash />
                </header>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. U
                    t voluptate perferendis quam vitae magni commodi, consequuntur odit.
                </p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    <p>Aplaudir<span>22</span></p>
                </button>
            </footer>
        </div>
    </div>;
}
