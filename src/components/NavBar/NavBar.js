import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar_main}>
            <ul>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Youtube</li>
                <li>Whatsapp</li>
            </ul>
        </div>
    )
}