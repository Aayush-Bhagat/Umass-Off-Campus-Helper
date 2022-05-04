import React, {useState, useEffect} from 'react'
import styles from '../../styles/Places.module.css'
import FavCards from '../../components/FavCards'

export default function Index() {
    const [favs, setFavs] = useState(null)

    useEffect(() => {
        // Perform localStorage action
        if (localStorage.getItem('favorites') !== null) {
            const item = JSON.parse(localStorage.getItem('favorites'))
            setFavs(item)
        }
        else {
            setFavs({
                Entertainment: [],
                Stores: [],
                Restaurants: []
            })
        }
    }, [])

    const renderFavs = (favs)=>{
        return(
            <>
                <div className={styles.favContainer}>
                    <div>
                        <h1>Stores</h1>
                        <div className={styles.favCardContainer}>
                            {favs.Stores.map((store) => {
                                return (<FavCards key={store.id} place={store} link={`/Stores/${store.id}`} />)
                            })}
                        </div>

                    </div>
                    <div >
                        <h1>Entertainment</h1>
                        <div className={styles.favCardContainer}>
                            {favs.Entertainment.map((ent) => {
                                return (<FavCards key={ent.id} name={"Stores"} place={ent} link={`/Entertainment/${ent.id}`} />)
                            })}
                        </div>
                    </div>
                    <div>
                        <h1>Restaurants</h1>
                        <div className={styles.favCardContainer}>
                            {favs.Restaurants.map((rest) => {
                                return (<FavCards key={rest.id} name={"Stores"} place={rest} link={`/Restaurants/${rest.id}`} />)
                            })}
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
  return (
      <>
          <h1> Favorites</h1>
          <div>
              {favs === null ? null : renderFavs(favs)}
          </div>
      </>
  )
}
