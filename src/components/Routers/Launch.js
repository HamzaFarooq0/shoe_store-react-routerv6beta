import React from 'react'
import { Outlet } from 'react-router-dom';

import styles from './Launch.module.css'

const Launch = () => {
    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    )
}

export default Launch
