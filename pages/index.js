import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'


export default function Home () {

    const router  = useRouter()

    const handleClick = () => {
        router.replace('/profile')
    }

    return (

        <div className={styles.container}>
        <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <button onClick={handleClick} className={styles.profilebutton}>
            Profile
        </button>

        <main className={styles.main}>
        <h1 className={styles.title}>Star Wars Web App Demo</h1>

        <p className={styles.description}>
          Explore the space beyond{' '}
        </p>

        <div className={styles.grid}>

            <h2>
            <Link href='/product/1'>
                <a className={styles.card}>Luke SkyWalker</a>
            </Link>
            </h2>
            <h2>
            <Link href='/product/4'>
                <a className={styles.card}>Darth Vader</a>
            </Link>
            </h2>

            <h2>
            <Link href='/product/5'>
                <a className={styles.card}>Leia Organa</a>
            </Link>
            </h2>
        
        </div>

        <ul className={styles.container}>
            <div className={styles.grid}>
        <Link href='/blog' >
            <a className={styles.container}>Blog</a>
        </Link>

        <Link href='/product'>
            <a className={styles.container}>All Products</a>
        </Link>
        </div>
        </ul>

        </main>
        </div>
    )
}
