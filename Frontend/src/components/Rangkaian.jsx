import React from 'react';
import RangkaianCard from './RangkaianCard';
import styles from './Rangkaian.module.css';
import Sections from './Sections';

const Rangkaian = () => {
	return (
		<Sections
			propsClass={'justify-center items-center relative lg:px-20'}
			propsClass2={'w-full'}
		>
			<div className="flex justify-between">
				<img
					src={`${process.env.PUBLIC_URL}/assets/visual2.svg`}
					alt=""
					className={`${styles.visual1}`}
				/>
            <div></div>
            <div className={`${styles.line}`}></div>
			</div>
			<div className="relative py-25">
				<div className={`${styles.rangkaianTextHeading}`}>
					<h1
						className={`batavia text-jumbotronmd xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd text-purpleMaghrib text-right ${styles.rangkaianHeadline}`}
					>
						Rangkaian Acara
					</h1>
				</div>
				<div className="flex ">
               <RangkaianCard/>
               <RangkaianCard/>
               <RangkaianCard/>
				</div>
			</div>
		</Sections>
	);
};

export default Rangkaian;
