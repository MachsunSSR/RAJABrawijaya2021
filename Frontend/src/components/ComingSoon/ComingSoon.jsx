import React from 'react';
import Sections from '../Section/Sections';
import { Link } from 'react-router-dom';
const ComingSoon = () => {
	return (
		<Sections
			propsClass={
				'justify-center items-center bg-white-bg bg-repeat relative overflow-hidden'
			}
			propsClass2={
				'w-full rounded-2 xs:p-5 sm:p-5 p-20 my-24 lg:mb-5 xl:mb-5'
			}
		>
			<img
				src={`${process.env.PUBLIC_URL}/assets/cspattern1.png`}
				alt="pattern"
				className="absolute top-0 left-0 right-0 min-w-vw "
			/>
			<h1 className="text-center batavia text-jumbotronlg xs:text-7xl text-purpleMaghrib xs:mt-0 sm:mt-0 mt-20">
				Segera Datang
			</h1>
			<p className="text-orange text-center text-xl">
				Siang-siang main layang-layang, malamnya sakit hati. Page ini sedang
				dalam proses pembuatan sayang. Silahkan datang lagi nanti!
			</p>
			<p className="text-orange text-center text-xl mt-5">
				Pagi ini masih dalam tahap development....
			</p>
			<Link
				className="text-white px-6 py-2 mt-5 mb-20 xs:mb-0 bg-purpleMaghrib my-0 mx-auto block w-fit rounded-2"
				to="/"
			>
				Kembali
			</Link>
			<img
				src={`${process.env.PUBLIC_URL}/assets/cspattern2.png`}
				alt="pattern"
				className="absolute bottom-0 left-0 right-0 min-w-vw "
			/>
		</Sections>
	);
};

export default ComingSoon;
