import {Header} from "./components/Header";
import {SideBar} from "./components/SideBar";
import {Post} from "./components/Post";

import styles from "./App.module.css";

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <SideBar />
                <main>
                    <Post />
                    <Post />
                    <Post />
                </main>
            </div>
        </>
    );
}

export default App;
