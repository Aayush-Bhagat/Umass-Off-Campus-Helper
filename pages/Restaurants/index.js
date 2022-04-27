import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../../styles/Places.module.css'

export default function index() {
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
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    <Card className={styles.cards}>
                        <img width="90px" height="90px" src="https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w" alt="" />
                        <Card.Body className={styles.body}>
                            <Card.Title>Target</Card.Title>
                            <p className={styles.address}>367 Russell St, Hadley, MA 01035</p>
                            <div className={styles.tags}>
                                <div className={styles.tag} style={{ backgroundColor: '#63BDFF' }}>Groceries</div>
                                <div className={styles.tag} style={{ backgroundColor: '#FF6363' }}>School</div>
                                <div className={styles.tag} style={{ backgroundColor: '#FFC163' }}>Tech</div>
                                <div className={styles.tag} style={{ backgroundColor: '#9E63FF' }}>Clothes</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

