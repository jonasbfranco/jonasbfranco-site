import styles from './NavBar.module.css'
import Image from 'next/image'


export default function NavBar() {
    return (
        <div className={styles.navbar_main}>
            <div >
                <Image src="/jonas.png" alt="Jonas B. Franco" width={150} height={150} className={styles.img_logo} />
            </div>
            <ul>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Youtube</li>
                <li>Whatsapp</li>
            </ul>
        </div>
    )
}