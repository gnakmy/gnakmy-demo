import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

//to get the data for one specific person
export async function getStaticProps( context ) {
    const res = await fetch(`https://swapi.dev/api/people/${context.params.id}`);
    const data = await res.json();
    return {
        props:{
            people: data
        }
    };
}

//fetch all the people and create an paths list.
export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();

    const paths = data.results.map((people, i) => ({
        params: {
            id: i.toString(),
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

export default function ProductId ({ people }) {

    return (
        <div className={styles.container}>
        
        <Head>
            <><title>Character - {people.name}</title><link rel="icon" href="/favicon.ico" /></>
        </Head>
        <h1 className={styles.container}>
        <Link href='/'>
        <a>Home</a>
        </Link>
        </h1>
            <div className={styles.main}>
            <div><h1 className={styles.container}>Product : {people.name}</h1>
            <table className={styles.container}>
                <tr className={styles.container}>Name: {people.name}</tr>
                <tr className={styles.container}>Height: {people.height}</tr>
                <tr className={styles.container}>Mass: {people.mass}</tr>
                <tr className={styles.container}>Hair color: {people.hair_color}</tr>
                <tr className={styles.container}>Skin color: {people.skin_color}</tr>
                <tr className={styles.container}>Eye color: {people.eye_color}</tr>
                <tr className={styles.container}>Birth year: {people.birth_year}</tr>
                <tr className={styles.container}>Gender: {people.gender}</tr>
            </table>
            </div>
            </div>
        
        </div>
    )
}