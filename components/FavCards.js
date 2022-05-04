import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../styles/Places.module.css'
import yellowStar from '../public/yellow-star.svg'
import Image from 'next/image'

export default function CardTemp(props) {

    return (
        <Card className={styles.cards}>
            <img className={styles.img} src={props.place.image} alt="" />
            <Card.Body className={styles.body}>
                <div className={styles.cardTitle}>
                    <Link href={props.link} passHref>
                        <Card.Title>{props.place.name}</Card.Title>
                    </Link>
                    <div className={styles.star}>
                        <Image  viewBox="0 0 30 30" width="25px" height="25px" className={styles.star} src={yellowStar} alt="star"></Image>
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