import React, {useState, useEffect} from 'react'
import styles from '../../styles/Places.module.css'
import CardTemp from '../../components/CardTemp'
import restaurants from '../../Restaurants.json'

export default function Index() {
    const json = restaurants
    const [data, setData] = useState(restaurants)
    const [text, setText] = useState("")
    const [categories, setCategories] = useState("")
    const [favs, setFavs] = useState(null)

    useEffect(() => {
        // Perform localStorage action
        if(localStorage.getItem('favorites') !== null){
            const item = JSON.parse(localStorage.getItem('favorites'))
            const rests = item.Restaurants.map(e => e.id);
            setFavs(rests)
        }
        else{
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
                    <h2 className={styles.title}>Restaurants</h2>
                </div>
                <div className={styles.filterContainer}>
                    <input className={styles.search} onChange={handleOnChange} placeholder='Search' type="text" />
                    <select placeholder='Categories' onChange={categoriesChange} name="Tags" className={styles.categories}>
                        <option value="" disabled selected hidden>Categories</option>
                        <option value="">Any</option>
                        <option value="Italian">Italian</option>
                        <option value="Fast">Fast</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Mexican">Mexican</option>
                        <option value="SitDown">Sit down</option>
                        <option value="TakeOut"> Take Out</option>
                        <option value="Mediterranean">Mediterranean</option>
                        <option value="Wings"> Wings</option>
                        <option value="Burgers">Burgers</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Grill">Grill</option>
                        <option value="Soup">Soup</option>
                        <option value="Sandwiches">Sandwiches</option>
                        <option value="Steakhouse">Steakhouse</option>
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    {data.map((rest) => {
                        return (<CardTemp key={rest.id} setFavs={setFavs} isFav={favs.includes(rest.id)} name={"Restaurants"} place={rest} link={`/Restaurants/${rest.id}`} />)
                    })}

                </div>
            </div> 
            }
        </>
    )
}

