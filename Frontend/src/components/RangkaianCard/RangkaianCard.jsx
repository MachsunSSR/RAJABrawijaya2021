import React, { useState } from 'react';
import styles from './RangkaianCard.module.css';
const Cards = ({ nama, desc, img }) => {
	const [onHover, setOnHover] = useState(false);

	return (
		<div
			className={`flex justify-end items-end ${styles.rangkaianCard} overflow-hidden cursor-pointer bg-purpleMaghrib ${img}`}
		>
			<img
				src={`${process.env.PUBLIC_URL}/assets/rangkaianFrame.png`}
				alt="frame"
				className={`${styles.frame}`}
			/>
			<div
				className={`${styles.cardDetail} bg-pinkThrid `}
				onMouseEnter={() => setOnHover(true)}
				onMouseLeave={() => setOnHover(false)}
			>
				<div
					className={`flex items-center justify-between h-full ${
						onHover ? 'hidden' : 'block'
					}`}
				>
					<div>
						<h1 className="pl-5 text-white uppercase ex:text-3xl exl:text-4xl">
							{nama}
						</h1>
					</div>
					<svg
						width="53"
						height="50"
						viewBox="0 0 53 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M26.0752 17.2812L13.0376 29.7813L16.1014 32.7188L26.0752 23.1771L36.049 32.7188L39.1129 29.7813L26.0752 17.2812Z"
							fill="#452B48"
						/>
					</svg>
				</div>
				<p
					className={`${
						onHover
							? 'inline text-white ex:text-xl exl:text-xl'
							: 'hidden'
					}`}
				>
					{desc}
				</p>
			</div>
		</div>
	);
};

export default Cards;
