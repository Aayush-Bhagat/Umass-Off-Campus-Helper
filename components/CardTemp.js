import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../styles/Places.module.css'
export default function CardTemp(props) {
  return (
      <Card className={styles.cards}>
          <img className={styles.img} src={props.place.image} alt="" />
          <Card.Body className={styles.body}>
              <Card.Title>{props.place.name}</Card.Title>
              <p className={styles.address}>{props.place.address}</p>
              <div className={styles.tags}>
                  {props.place.tags.map(((tag, i)=>{
                      return (<div key={i} className={`${styles.tag} ${styles[tag]}`}> {tag} </div>)
                  }))}
              </div>
          </Card.Body>
      </Card>
  )
}
