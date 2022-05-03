import React, {useState, useEffect} from 'react'
import styles from '../../styles/Places.module.css'
import CardTemp from '../../components/CardTemp'
import JSON from '../../stores.json'

export default function Index() {
  const [data, setData] = useState(JSON);
  return (
    <>
        <div className={styles.Places}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Stores</h2>
            </div>
            <div className={styles.filterContainer}>
                <input className={styles.search} placeholder='Search' type="text" />
                  <select placeholder='Categories' name="Tags" className={styles.categories}>
                      <option value="" disabled selected hidden>Categories</option>
                      <option value="">Any</option>
                      <option value="Groceries">Groceries</option>
                      <option value="School">School</option>
                      <option value="Tech">Tech</option>
                      <option value="Clothes"> Clothes</option>
                  </select>
            </div>
            <div className={styles.cardContainer}>
                  {data.map((store)=>{
                     return  (<CardTemp key={store.id} place={store} />)
                  })}
            </div>
        </div>
    </>
  )
}