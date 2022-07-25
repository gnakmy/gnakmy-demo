import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const defaultEndpoint = `https://swapi.dev/api/people/`;

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
  
    return { props: { people: data.results } };
  }

export default function Product({ people }) {

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

        <main className={styles.list}>
          <h1>Characters</h1>

          <ul className={styles.gridList}>
          {people.map((person) => (

            <ul key={person.name} className={styles.card}>
                
              <h2>{person.name}</h2>
              <p>Name: {person.name}</p>
              <p>Gender: {person.gender}</p>
              <p>Height: {person.height}</p>
              <p>Mass: {person.mass}</p>
              <p>Hair Color: {person.hair_color}</p>
              <p>Skin Color: {person.skin_color}</p>
              <p>Eye Color: {person.eye_color}</p>
              <p>Birth Year: {person.birth_year}</p>

            </ul>

          ))}
          </ul>

        </main>
        </div>
      );
  
}