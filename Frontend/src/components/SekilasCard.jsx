import React from 'react';
import styles from './SekilasCard.module.css';
import styled from 'styled-components';

const CardWrapper = styled.div`
	background-image: url(${(props) => props.bgFetch});
`;

const Cards = ({ title, bg, fetchImg }) => {
	return (
		<>
			{bg !== '' ? (
				<div
					className={`min-w-cards min-h-cards ${bg} bg-center flex justify-end items-end ex:min-w-cards-ex ex:min-h-cards-ex ${styles.cardAnimations} `}
					
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
			) : (
				<CardWrapper
					className={`min-w-cards min-h-cards bg-center flex justify-end items-end ex:min-w-cards-ex ex:min-h-cards-ex ${styles.cardAnimations} `}
					bgFetch={`${fetchImg}`}
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
				</CardWrapper>
			)}
		</>
	);
};

export default Cards;
