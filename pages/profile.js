import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

function Profile(){
    return(
        <div className={styles.container}>
        <Head>
            <title>Profile</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>
        <Link href='/'>
        <a className={styles.home}>Home</a>
        </Link>
        </h1>

        <div className={styles.main}>
        <h1>Profile Page</h1>
        </div>

        </div>


    )
}

export default Profile