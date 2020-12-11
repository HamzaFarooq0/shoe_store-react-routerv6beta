import React from 'react';
import data from '../Data/data.json';
import { Link } from 'react-router-dom';

import styles from './LaunchIndex.module.css'

const LaunchIndex = () => {
	console.log(data);

	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{Object.entries(data).map(([ slug, { name, img } ]) => (
					<li className={styles.item} key={slug}>
						<Link to={`${slug}`}>
							<h2>{name}</h2>
							<img className={styles.product} src={img} alt={name} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LaunchIndex;
