import React from 'react';
import styles from './LogoNamaCard.module.css';
const LogoNamaCard = ({ nama }) => {
	return (
		<div className={`${styles.logoContainerCard}`}>
			<h1 className={`text-5xl batavia text-purpleMaghrib text-center`}>
				{nama}
			</h1>
		</div>
	);
};

export default LogoNamaCard;
