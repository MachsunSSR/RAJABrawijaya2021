import React from 'react';
import styles from './Cards.module.css';
const Cards = () => {
	return (
		<div className=" min-w-cards min-h-cards mx-2 bg-sekilas1-bg bg-cover bg-center flex justify-end items-end">
			<div className="relative">
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
