import styles from "./Post.module.css";

export function Post() {
    return (
        <aside className={styles.Post}>
            <header>
                <div className={styles.userInfo}>
                    <img
                        className={styles.avatar}
                        src="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className={styles.box}>
                        <strong>João Victor</strong>
                        <p>Web Developer</p>
                    </div>
                </div>

                <time datetime="2025-02-22 12:52:21">Publicado agora</time>
            </header>
            <main>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa.</p>
                <p>
                    É um projeto que fiz no NLW Return, evento da Rocketseat.
                    <p>O nome do projeto é DoctorCare 🚀</p>
                </p>
                <p>
                    <a href="">👉 jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="">#rocketseat</a>
                </p>

                <form>
                    <strong>Deixe seu feedback</strong>
                    <textarea placeholder="Escreva seu comentário"></textarea>
                    <button type="submit">Publicar</button>
                </form>
            </main>
        </aside>
    );
}
