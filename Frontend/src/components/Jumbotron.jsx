import React from 'react';
import Sections from './Sections';
import styles from './Jumbotron.module.css';

// bg-jumbotron-bg bg-cover bg-no-repeat bg-center
const Jumbotron = () => {
	return (
		<>
			<video
				preload="true"
				autoplay="autoplay"
				loop="loop"
				muted
				className={`${styles.jumbotronVideo}`}
			>
				<source
					src={`${process.env.PUBLIC_URL}/assets/welcoming.mp4`}
					type="video/mp4"
				/>
			</video>
			<Sections
				propsClass={
					`justify-center items-center lg:items-end xl:items-end ${styles.sectionProps1} `
				}
				propsClass2={'xs:mt-10 lg:mb-5 xl:mb-5 w-full'}
			>
				<div className="w-3/3  w-min sm:pb-8">
					<div
						className={`pb-3 border-b-2 border-orange ${styles.jumbotronAkronim}`}
					>
						<h1 className={`text-white text-xl `} >
							Rangkaian Acara Jelajah Almamater Universitas Brawijaya
						</h1>
					</div>

					<div className="relative">
						<h1
							className={`batavia text-white ${styles.jumbotronHeadline1}`}
						>
							RAJA
						</h1>
						<h1
							className={`batavia text-white ${styles.jumbotronHeadline2}`}
						>
							Brawijaya 2021
						</h1>
					</div>
				</div>
			</Sections>
		</>
	);
};

export default Jumbotron;

// text-jumbotronlg xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd
