import React from 'react'
import styles from '../../styles/placeInfo.module.css'

export default function Stores() {
    return (
        <>
            <div className={styles.placeContainer}>
                <div className="placeInfo">
                    <div className={styles.placeHeader}>
                        <div className={styles.nameContainer}>
                            <div>
                                <img width="150px" height="150px" src="https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w" alt="" />
                            </div>
                            <div className={styles.title}>
                                <h1 className={styles.name}>Target</h1>
                                <p className={styles.address}>367 Russell St, Hadley, MA 01035</p>
                                <p className={styles.phone}>413-586-5945</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.webbutton}>Website</button>
                            <button className={styles.dirbutton}>Directions</button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h1>Description</h1>
                        <p>Description goes here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

