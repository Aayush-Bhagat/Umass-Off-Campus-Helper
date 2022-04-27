import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h5 className={styles.title}>
          What are you Trying to Find?
        </h5>
        <div className={styles.placebtns}>
          <Link href='/Stores' passHref><button className={styles.btn}>Stores</button></Link>
          <Link href="/Restaurants" passHref><button className={styles.btn}>Restaurants</button></Link>
          <Link href="/Entertainment" passHref><button className={styles.btn}>Entertainment</button></Link>
        </div>
      </main>

        
    </div>
  )
}
