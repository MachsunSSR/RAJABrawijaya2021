import React from 'react';
import styles from './SekilasCard.module.css';
const Cards = () => {
	return (
		<div className={`min-w-cards min-h-cards mx-2 bg-sekilas1-bg bg-center flex justify-end items-end ${styles.cardAnimations}`}>
			<div className={`relative z-3`}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/sekilasPlace.png`}
					alt=""
				/>
				<p className={`${styles.cardText} pl-5 text-white`}>Galeri Raja Brawijaya</p>
			</div>
		</div>
	);
};

export default Cards;
