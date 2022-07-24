import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr';

const ProductDetail = () => {
    const { query } = useRouter()
    const productId = query.productId
    const { data , error } = useSWR(`/api/people/${query.productId}`, (url) => fetch(url).then(res => res.json()))

    if(!data) return <div>Loading...</div>

    return (
        <div className={styles.container}>
        <Head>
            <title>Product - {data.name}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>
        <Link href='/'>
        <a className={styles.home}>Home</a>
        </Link>
        </h1>

        <div className={styles.main}>
        <h1 className={styles.container}>Product {productId}: {data.name}</h1>
        <table className={styles.container}>
            <tr className={styles.container}>Name: {data.name}</tr>
            <tr className={styles.container}>Height: {data.height}</tr>
            <tr className={styles.container}>Mass: {data.mass}</tr>
            <tr className={styles.container}>Hair color: {data.hair_color}</tr>
            <tr className={styles.container}>Skin color: {data.skin_color}</tr>
            <tr className={styles.container}>Eye color: {data.eye_color}</tr>
            <tr className={styles.container}>Birth year: {data.birth_year}</tr>
            <tr className={styles.container}>Gender: {data.gender}</tr>
        </table>
        </div>

        </div>
    
    )
}

export default ProductDetail