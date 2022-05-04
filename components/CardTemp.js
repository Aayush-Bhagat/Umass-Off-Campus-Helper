import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../styles/Places.module.css'
import star from '../public/star.svg'
import yellowStar from '../public/yellow-star.svg'
import Image from 'next/image'
export default function CardTemp(props) {

    const handleFavoriteClick = (event)=>{
        const ss = window.localStorage
        if(ss.getItem("favorites") === null){
            const obj = {
                Entertainment: [],
                Stores: [],
                Restaurants: []
            }
            ss.setItem('favorites', JSON.stringify(obj))
        }
        const favs = JSON.parse(ss.getItem('favorites'))
        favs[props.name].push(props.place)
        ss.setItem('favorites', JSON.stringify(favs))
        props.setFavs((favs)=> [...favs, props.place.id])
    }

    const handleUnFavorite = (event)=>{
        const ls = window.localStorage
        const favs = JSON.parse(ls.getItem('favorites'));
        const newFavs = favs[props.name].filter((e)=> e.id !== props.place.id)
        console.log(newFavs)
        favs[props.name] = newFavs
        ls.setItem('favorites', JSON.stringify(favs))
        props.setFavs(newFavs.map(e => e.id))
    }



  return (
      <Card className={styles.cards}>
          <img className={styles.img} src={props.place.image} alt="" />
              <Card.Body className={styles.body}>
                  <div className={styles.cardTitle}>
                  <Link href={props.link} passHref>
                      <Card.Title>{props.place.name}</Card.Title>
                  </Link>
                      <div className={styles.star}>
                      {props.isFav ? <Image onClick={handleUnFavorite}  viewBox="0 0 30 30" width="25px" height="25px" className={styles.star} src={yellowStar} alt="star"></Image>  
                      :<Image onClick={handleFavoriteClick} viewBox="0 0 30 30" width="25px" height="25px" className={styles.star} src={star} alt="star"></Image>}  
                      </div>
                  </div>
                  <p className={styles.address}>{props.place.address}</p>
                  <div className={styles.tags}>
                      {props.place.tags.map(((tag, i) => {
                          return (<div key={i} className={`${styles.tag} ${styles[tag]}`}> {tag} </div>)
                      }))}
                  </div>
              </Card.Body>
          
      </Card>
  )
}
