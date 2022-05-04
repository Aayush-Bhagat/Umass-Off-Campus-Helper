import React, {useState, useEffect} from 'react'
import CardTemp from '../../components/CardTemp'
import styles from '../../styles/Places.module.css'
import json from '../../Entertainment.json';

export default function Index() {
    const [data, setData] = useState(json)
    const [text, setText] = useState("")
    const [categories, setCategories] = useState("")
    const [favs, setFavs] = useState(null)

    useEffect(() => {
        // Perform localStorage action
        if (localStorage.getItem('favorites') !== null) {
            const item = JSON.parse(localStorage.getItem('favorites'))
            const rests = item.Entertainment.map(e => e.id);
            setFavs(rests)
        }
        else {
            setFavs([])
        }
    }, [])

    const handleOnChange = (event) => {
        const value = event.target.value
        setText((t) => value);
    }

    const categoriesChange = (event) => {
        const value = event.target.value;
        setCategories((category) => value)
    }

    useEffect(() => {
        let filtered = json.filter((e) => e.name.toUpperCase().startsWith(text.toUpperCase()))
        categories === '' ? null : filtered = filtered.filter((e) => e.tags.includes(categories));
        setData(filtered)

    }, [text, categories])


    return (
        <>
            {favs === null ? null : 
            <div className={styles.Places}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Entertainment</h2>
                </div>
                <div className={styles.filterContainer}>
                    <input className={styles.search} onChange={handleOnChange} placeholder='Search' type="text" />
                    <select placeholder='Categories' onChange={categoriesChange} name="Tags" className={styles.categories}>
                        <option value="" disabled selected hidden>Categories</option>
                        <option value="">Any</option>
                        <option value="Movies">Movies</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Games">Games</option>
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    {data.map((ent) => {
                        return (<CardTemp key={ent.id} setFavs={setFavs} isFav={favs.includes(ent.id)}  name={"Entertainment"} place={ent} link={`/Entertainment/${ent.id}`} />)
                    })}
                </div>
            </div>}
        </>
    )
}

