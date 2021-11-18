import React from 'react';
import styles from './SekilasCard.module.css';

const Cards = ({ title, bg, from }) => {
	return (
		<>
			{from === 'ukm' ? (
				<div
					className={`ex:min-w-cards-ex ex:min-h-cards-ex min-w-cards min-h-cards ${bg} bg-center flex justify-end items-end relative bg-cover rounded-2 ${styles.cardAnimations2} bg-no-repeat`}
				>
					<p
						className={`${styles.cardText2} px-5 text-white exl:text-2xl text-bold font-semibold ex:text-1xl  text-center rounded-3 bg-greenLumut opacity-95 py-1`}
					>
						{title}
					</p>
				</div>
			) : (
				<div
					className={`ex:min-w-cards-ex ex:min-h-cards-ex min-w-cards min-h-cards ${bg} bg-center flex justify-end items-end  ${styles.cardAnimations}`}
				>
					<div className={`relative z-3`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/sekilasPlace.png`}
							alt=""
							className="w-full"
						/>
						<p
							className={`${styles.cardText} pl-5 text-white exl:text-2xl text-bold font-semibold ex:text-1xl`}
						>
							{title}
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Cards;
