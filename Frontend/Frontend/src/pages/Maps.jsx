import React from 'react';
import Sections from '../components/Sections';
import styles from './Maps.module.css';

const Maps = () => {
	return (
		<>
			<Sections
				propsClass={
					'justify-center items-center min-h-galeri max-h-galeri bg-galeri-bg bg-cover bg-no-repeat relative '
				}
				propsClass2={'mt-25 lg:mb-5 xl:mb-5 w-full'}
			>
				<div className="relative z-2 ">
					<div className={``}>
						<div className="max-w-sm lg:self-start md:self-start xl:self-start ex:self-start exl:self-start">
							<h1
								className={`batavia text-5xl text-white`}
								data-aos="fade-right"
							>
								Galeri
							</h1>
							<p className={`text-white pb-5`} data-aos="fade-up">
								Berikut adalah beberapa foto dan video pada rangkaian
								RAJA Brawijaya sebelumnya.
							</p>
						</div>
					</div>
				</div>
			</Sections>
			<Sections
				propsClass={'justify-center relative lg:px-20 justify-center'}
				propsClass2={'w-full my-20  w-full'}
			>
				<div className={`relative border-2`}>
					<img
						src={`${process.env.PUBLIC_URL}/assets/maptes.png`}
						alt="maps"
					/>
					<div className={`${styles.mark7}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/mark7.png`}
							alt="mark1"
						/>
					</div>
				</div>
			</Sections>
		</>
	);
};

export default Maps;
