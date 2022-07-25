import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

//to get the data for one specific person
export async function getStaticProps( context ) {
    const res = await fetch(`https://swapi.dev/api/people/${context.params.id}`);
    const data = await res.json();
    return {
        props:{
            person: data
        }
    };
}

//fetch all the people and create an paths list.
export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();

    const paths = data.results.map((person, i) => ({
        params: {
            id: i.toString(),
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

function ProductId ({ person }) {

    return (
        <div className={styles.container}>
        
        <Head>
            <><title>Character - {person?.name}</title><link rel="icon" href="/favicon.ico" /></>
        </Head>
        <h1 className={styles.container}>
        <Link href='/'>
        <a>Home</a>
        </Link>
        </h1>
            <div className={styles.main}>
            <div><h1 className={styles.container}>Product : {person?.name}</h1>
            <table className={styles.container}>
                <tr className={styles.container}>Name: {person?.name}</tr>
                <tr className={styles.container}>Height: {person?.height}</tr>
                <tr className={styles.container}>Mass: {person?.mass}</tr>
                <tr className={styles.container}>Hair color: {person?.hair_color}</tr>
                <tr className={styles.container}>Skin color: {person?.skin_color}</tr>
                <tr className={styles.container}>Eye color: {person?.eye_color}</tr>
                <tr className={styles.container}>Birth year: {person?.birth_year}</tr>
                <tr className={styles.container}>Gender: {person?.gender}</tr>
            </table>
            </div>
            </div>
        
        </div>
    )
}

export default ProductId;