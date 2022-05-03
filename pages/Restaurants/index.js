import React, {useState} from 'react'
import styles from '../../styles/Places.module.css'
import CardTemp from '../../components/CardTemp'
import restaurants from '../../Restaurants.json'

export default function Index() {
    const [data, setData] = useState(restaurants)
    return (
        <>
            <div className={styles.Places}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Restaurants</h2>
                </div>
                <div className={styles.filterContainer}>
                    <input className={styles.search} placeholder='Search' type="text" />
                    <select placeholder='Categories' name="Tags" className={styles.categories}>
                        <option value="" disabled selected hidden>Categories</option>
                        <option value="Any">Any</option>
                        <option value="Italian">Italian</option>
                        <option value="Fast">Fast</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Sitdown">Sitdown</option>
                        <option value="Mediterranean">Mediterranean</option>
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    {data.map((rest) => {
                        return (<CardTemp key={rest.id} place={rest} />)
                    })}
                    
                </div>
            </div>
        </>
    )
}

