import React from 'react';
import Sections from '../../components/Section/Sections';
const NotFound = () => {
	return (
		<Sections
			propsClass={
				'justify-center items-center bg-galeri-bg bg-cover bg-repeat relative'
			}
			propsClass2={
				'bg-whiteSoft w-full rounded-2 xs:p-5 sm:p-5 p-20 my-24 lg:mb-5 xl:mb-5 drop-shadow-xl'
			}
		>
			<h1 className="batavia text-purpleMaghrib text-center font-bold text-5xl my-24">
				KAMU NYARI APA IH? GAADA TAU DI WEBSITE INI..
			</h1>
		</Sections>
	);
};

export default NotFound;
