import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/people/')
    const data = await res.json()

    return {
        props: {data},
    }
}

const Home = ({ data }) => {

    if(!data) return <div>Loading...</div>

    const { query } = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        query.replace('/profile')
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
        <h1 className={styles.title}>My Next Web App</h1>
 
        <ul><div className={styles.grid}>
            {data.map(product => (
            <li key={product.id} className={styles.card}>
                <Link href={`/product/${product.id}`}>
                <a > {product.name} </a>
                </Link>  
            </li>
            ))}
        </div>
        </ul>
        <ul><div className={styles.grid}>
        <Link href='/blog' >
            <a className={styles.container}>Blog</a>
        </Link>

        <Link href='/product'>
            <a className={styles.container}>Featured Products</a>
        </Link>

        </div>
        </ul>
        </main>
        </div>
    )
}

export default Home;