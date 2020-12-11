import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to Shoe Store</h1>
            <p>Your foots are blessing, Take care of it.</p>
            <button className={styles.button}><Link to="/launch">Let's Shop</Link></button>
        </div>
    )
}

export default Home
