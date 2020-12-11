import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from '../Data/data.json';

import styles from './LaunchShoe.module.css'

const LaunchShoe = () => {
	const { slug } = useParams();

	const shoe = shoes[slug];

	const { name, img } = shoe;

	if (!shoe) return <h1>Not Found!</h1>;

	return (
		<div className={styles.container}>
			<h2>{name}</h2>
			<img src={img} alt={name} />
		</div>
	);
};

export default LaunchShoe;
