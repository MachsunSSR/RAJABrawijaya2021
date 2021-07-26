import React from 'react';
import Sections from '../components/Sections';
import styles from './Galeri.module.css';
const Galeri = () => {
	return (
		<Sections
			propsClass={
				'justify-center items-center min-h-galeri max-h-galeri bg-galeri-bg bg-cover bg-no-repeat relative '
			}
			propsClass2={'mt-12 lg:mb-5 xl:mb-5 w-full'}
		>
			<div className=" relative z-2">
				<div className={`${styles.jumbotronGaleriContainer}`}>
					<div className=" border-midRed max-w-sm">
						<h1 className={`batavia text-5xl text-white ${styles.galeriHeading}`}>Galeri</h1>
						<p className={`text-white pb-5 ${styles.galeriDesc}`}>
							Berikut adalah beberapa foto dan video pada rangkaian RAJA
							Brawijaya sebelumnya.
						</p>
					</div>
					<div>
						<img
							src={`${process.env.PUBLIC_URL}/assets/jumbotronGaleri.svg`}
							alt="galeriJumbotron"
							className={`${styles.galeriJumbotron}`}
						/>
					</div>
				</div>
			</div>
         <img src={`${process.env.PUBLIC_URL}/assets/galeriVector.svg`} alt="" className={`${styles.vector}`}/>
		</Sections>
	);
};

export default Galeri;
