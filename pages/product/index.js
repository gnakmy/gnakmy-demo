import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

function ProductList(){
    return (
        <div className={styles.container}>
        <Head>
            <title>Featured</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>
        <Link href='/'>
        <a className={styles.home}>Home</a>
        </Link>
        </h1>

        <ul className={styles.main}>
        <div className={styles.grid}>
        <h2 className={styles.container}>
            <Link href='/product/1'>
                <a className={styles.card}>Product 1</a>
            </Link>
        </h2>
        <h2 className={styles.container}>
            <Link href='/product/2'>
                <a className={styles.card}>Product 2</a>
            </Link>
        </h2>
        <h2 className={styles.container}>
            <Link href='/product/3'>
                <a className={styles.card}>Product 3</a>
            </Link>
        </h2>
        </div>
        </ul>

        </div>
    )
}

export default ProductList