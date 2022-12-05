import styles from './NavBar.module.css'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";


export default function NavBar() {
    return (
        <div className={styles.navbar_main}>
            <section >
                <Image src="/jonas.png" alt="Jonas B. Franco" width={120} height={120} className={styles.img_logo} />
                <div>
                    <h3>Jonas B. Franco</h3>
                    <p>Front End Developer</p>
                </div>
            </section>
            <div>
                <ul>
                    <li><FaGithub /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaYoutube /></li>
                    <li><FaWhatsapp /></li>
                </ul>
            </div>
            <button><IoLanguage />Mudar Idioma</button>
        </div>
    )
}