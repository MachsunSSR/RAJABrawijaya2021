import React from 'react';
import RangkaianCard from './RangkaianCard';
import styles from './Rangkaian.module.css';
import Sections from './Sections';


const Rangkaian = () => {
	return (
		<Sections
			propsClass={'justify-center items-center relative lg:px-20 bg-white-bg bg-cover no-repeat bg-fixed'}
			propsClass2={'w-full'}
		>
			<div className="flex justify-between">
				{/* <img
					src={`${process.env.PUBLIC_URL}/assets/visual2.svg`}
					alt=""
					className={`${styles.visual1}`}
				/> */}
            <div></div>
            <div className={`${styles.line} bg-pinkThrid`}></div>
			</div>
			<div className="relative py-30 xs:py-10">
				<div className={`${styles.rangkaianTextHeading}`}>
					<h1
						className={`batavia text-jumbotronmd xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd text-pinkThrid ${styles.rangkaianHeadline}`}
					>
						Rangkaian Acara
					</h1>
				</div>
				<div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 lg:flex-row xl:flex-row lg:space-y-0 xl:space-y-0 space-x-6 xs:space-x-0 sm:space-x-0">
               <RangkaianCard nama={'pkkmb'} img={'bg-pk2-bg'}/>
               <RangkaianCard nama={'pbpk'} img={'bg-pbpk-bg'}/>
               <RangkaianCard nama={'oh'} img={'bg-oh-bg'}/>
				</div>
			</div>
		</Sections>
	);
};

export default Rangkaian;
