import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar/NavBar'
import styles from '../styles/Home.module.css'
import ContHome from '../components/ContHome/ContHome'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonas B. Franco - Portifolio</title>
        <meta name="description" content="Jonas B. Franco - Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <NavBar />
        <ContHome />
      </main> */}
      <NavBar />

    </div>
  )
}
