import Link from "next/link";
import styles from '../styles/Home.module.css'
import Navbar from "./Navbar";

export default function Layout({children}) {
    return(
        <Navbar>
            <div className={styles.grid}>
                {children}
            </div>
        </Navbar>
    )
}