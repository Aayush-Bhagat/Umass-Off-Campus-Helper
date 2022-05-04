import styles from '../../styles/placeInfo.module.css'
import { useRouter } from 'next/router'
import JSON from '../../Restaurants.json'
import Link from 'next/link';

export default function Stores() {
    const router = useRouter();

    const { id } = router.query


    const data = id === undefined ? null : JSON[id - 1]
    return (
        <>
            {data !== null ? <div className={styles.placeContainer}>
                <div className="placeInfo">
                    <div className={styles.placeHeader}>
                        <div className={styles.nameContainer}>
                            <div>
                                <img className={styles.img} src={data.image} alt="" />
                            </div>
                            <div className={styles.title}>
                                <h1 className={styles.name}>{data.name}</h1>
                                <p className={styles.address}>{data.address}</p>
                                <p className={styles.phone}>{data.phone}</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Link href={data.Website} passHref><button className={styles.webbutton}>Website</button></Link>
                            <Link href={data["Google maps link"]} passHref><button className={styles.dirbutton}>Directions</button></Link>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h1>Description</h1>
                        <p>{data.Description}</p>
                    </div>
                </div>
            </div> : null}
        </>
    )
}

