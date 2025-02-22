import {Header} from "./components/Header";
import {SideBar} from "./components/SideBar";

import styles from "./App.module.css";

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <SideBar />
                <main>
                    <h1>Home</h1>
                </main>
            </div>
        </>
    );
}

export default App;
