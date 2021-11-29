import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AnnounceButton.module.css';
const AnnounceButton = () => {
	const [entered, setEntered] = useState(false);
	return (
		<div
			className={`flex space-x-2 fixed z-1000 items-center ${styles.announceButton}`}
		>
			<div
				className={`p-2 bg-orange rounded-2 text-white text-sm ${
					entered ? 'visible' : 'hidden'
				}`}
			>
				Cek informasi terbaru!
			</div>
			<Link to={'/abhiyaksa-info'}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/announce.png`}
					alt="announce"
					width="60px"
					className="cursor-pointer"
					onMouseEnter={() => setEntered(true)}
					onMouseLeave={() => setEntered(false)}
				/>
			</Link>
		</div>
	);
};

export default AnnounceButton;
