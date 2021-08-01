import React from 'react';
import styles from './SekilasCard.module.css';
const Cards = ({ title, bg }) => {
	return (
		<div className={`min-w-cards min-h-cards ${bg} bg-center flex justify-end items-end ${styles.cardAnimations}`}>
			<div className={`relative z-3`}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/sekilasPlace.png`}
					alt=""
				/>
				<p className={`${styles.cardText} pl-5 text-white`}>{title}</p>
			</div>
		</div>
	);
};

export default Cards;
