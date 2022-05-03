import React, {useState} from 'react'
import CardTemp from '../../components/CardTemp'
import styles from '../../styles/Places.module.css'
import JSON from '../../Entertainment.json';

export default function Index() {
    const [data, setData] = useState(JSON)

    return (
        <>
            <div className={styles.Places}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Entertainment</h2>
                </div>
                <div className={styles.filterContainer}>
                    <input className={styles.search} placeholder='Search' type="text" />
                    <select placeholder='Categories' name="Tags" className={styles.categories}>
                        <option value="" disabled selected hidden>Categories</option>
                        <option value="Any">Any</option>
                        <option value="Italian">Italian</option>
                        <option value="Fast">Fast</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    {data.map((ent) => {
                        return (<CardTemp key={ent.id} place={ent} />)
                    })}
                </div>
            </div>
        </>
    )
}

