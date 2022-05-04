import React, {useState, useEffect} from 'react'
import styles from '../../styles/Places.module.css'
import CardTemp from '../../components/CardTemp'
import json from '../../stores.json'

export default function Index() {
  const [data, setData] = useState(json);
  const [text, setText] = useState("")
  const [categories, setCategories] = useState("")
  const [favs, setFavs] = useState(null)

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem('favorites') !== null) {
      const item = JSON.parse(localStorage.getItem('favorites'))
      const rests = item.Stores.map(e => e.id);
      setFavs(rests)
    }
    else {
      setFavs([])
    }
  }, [])

  const handleOnChange = (event)=>{
    const value = event.target.value
    setText((t)=> value);
  }

  const categoriesChange = (event)=>{
    const value = event.target.value;
    setCategories((category)=> value)
  }

  useEffect(()=>{
    let filtered = json.filter((e) => e.name.toUpperCase().startsWith(text.toUpperCase()))
    categories=== ''? null : filtered = filtered.filter((e)=> e.tags.includes(categories));
    setData(filtered)

  }, [text, categories])

  return (
    <>
      {favs === null ? null : 
      <div className={styles.Places}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Stores</h2>
        </div>
        <div className={styles.filterContainer}>
          <input className={styles.search} onChange={handleOnChange} placeholder='Search' type="text" />
          <select placeholder='Categories' onChange={categoriesChange} name="Tags" className={styles.categories}>
            <option value="" disabled selected hidden>Categories</option>
            <option value="">Any</option>
            <option value="Groceries">Groceries</option>
            <option value="School">School</option>
            <option value="Tech">Tech</option>
            <option value="Clothes"> Clothes</option>
            <option value="Sports">Sports</option>
            <option value="Misc">Misc</option>
          </select>
        </div>
        <div className={styles.cardContainer}>
          {data.map((store) => {
            return (<CardTemp key={store.id} setFavs={setFavs} isFav={favs.includes(store.id)} name={"Stores"} place={store} link={`/Stores/${store.id}`} />)
          })}
        </div>
      </div>}
    </>
  )
}