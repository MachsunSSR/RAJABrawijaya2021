import React from 'react';
import Sections from '../../components/Section/Sections';
import Cards from '../../components/SekilasCard/SekilasCard';
import styles from './AdhikaraInfo.module.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { abhiyaksaInfo } from './AbhiyaksaInfoData';

Aos.init();

const AdhikaraInfo = () => {
	return (
		<>
			<Sections
				propsClass={
					'justify-center items-center min-h-info max-h-info bg-galeri-bg bg-cover bg-no-repeat relative '
				}
				propsClass2={'mt-25 lg:mb-5 xl:mb-5 w-full'}
			>
				<div className="text-right xs:mb-15">
					<h1
						className={`batavia text-5xl text-white ${styles.adhikaraInfoHeading}`}
						data-aos="fade-left"
					>
						Abhiyaksa Info
					</h1>
					<p
						className={`text-white pb-5 ${styles.adhikaraInfoDesc}`}
						data-aos="fade-up"
					>
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
					{abhiyaksaInfo.map((data, index) => {
						if (data.slug !== null) {
							return (
								<Link to={data.slug}>
									<Cards title={data.title} bg={data.bg} key={index} />
								</Link>
							);
						}
					})}
					<div></div>
				</div>
			</Sections>
		</>
	);
};

export default AdhikaraInfo;
