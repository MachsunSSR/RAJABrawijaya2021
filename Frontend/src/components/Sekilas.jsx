import React from 'react';
import Sections from './Sections';
import Carousel from 'react-elastic-carousel';
import Cards from './SekilasCard';
import styles from './Sekilas.module.css'
const Sekilas = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 530, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 4, itemsToScroll: 2 },
		{ width: 1450, itemsToShow: 5 },
		{ width: 1750, itemsToShow: 6 },
	];
	return (
		<Sections
			propsClass={'justify-center items-center relative bg-white-bg bg-cover no-repeat bg-fixed'}
			propsClass2={'w-full'}
		>
         <div className={`${styles.box}`}></div>
			<div className="relative py-25 xs:py-10">
				<div className={`${styles.sekilasTextHeading}`}>
					<h1 className={`batavia text-jumbotronmd xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd text-purpleMaghrib ${styles.sekilasHeadline}`}>
						Sekilas Rabraw
					</h1>
				</div>
				<Carousel breakPoints={breakPoints}>
					<Cards>2</Cards>
					<Cards>2</Cards>
					<Cards>2</Cards>
					<Cards>2</Cards>
					<Cards>2</Cards>
				</Carousel>
			</div>
         {/* <img src={`${process.env.PUBLIC_URL}/assets/visual1.svg`} alt=""  className={`${styles.visual1}`}/> */}
		</Sections>
	);
};

export default Sekilas;
