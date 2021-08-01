import React from 'react';
import Sections from '../components/Sections';
import Cards from '../components/SekilasCard';
import styles from './AdhikaraInfo.module.css';
import { Link } from 'react-router-dom';
const AdhikaraInfo = () => {
	return (
		<>
			<Sections
				propsClass={
					'justify-center items-center min-h-info max-h-info bg-galeri-bg bg-cover bg-no-repeat relative '
				}
				propsClass2={'mt-25 lg:mb-5 xl:mb-5 w-full'}
			>
				<div className="text-right">
					<h1
						className={`batavia text-5xl text-white ${styles.adhikaraInfoHeading}`}
					>
						Abhiyaksa Info
					</h1>
					<p className={`text-white pb-5 ${styles.adhikaraInfoDesc}`}>
						Informasi terupdate seputar PKKMB RAJA Brawijaya
					</p>
				</div>
				<img
					src={`${process.env.PUBLIC_URL}/assets/galeriVector.svg`}
					alt=""
					className={`${styles.vector}`}
				/>
			</Sections>
			<Sections
				propsClass={'justify-center relative lg:px-20 justify-center '}
				propsClass2={'w-full my-20  w-full '}
			>
				<div className={`${styles.infoCardWrapper}`}>
					<Link to={`/adhikara-info/info-twibbon`}>
						<Cards title={'Informasi Twibbon'} bg={'bg-sekilas1-bg'}/>
					</Link>
					<Link to={`/adhikara-info/info-atribut`}>
						<Cards title={'Informasi Atribut'} bg={'bg-sekilas2-bg'}/>
					</Link>
					<Link to={`/adhikara-info/informasi-lain1`}>
						<Cards title={'Informasi 1'} bg={'bg-sekilas3-bg'}/>
					</Link>
					<Link to={`/adhikara-info/informasi-lain2`}>
						<Cards title={'Informasi 2'} bg={'bg-sekilas1-bg'}/>
					</Link>
				</div>
			</Sections>
		</>
	);
};

export default AdhikaraInfo;
