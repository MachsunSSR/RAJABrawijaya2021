import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Sections from '../Section/Sections';
import Cards from '../SekilasCard/SekilasCard';
import styles from './Sekilas.module.css';
import styles1 from '../Modal.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';
import { abhiyaksaInfo } from '../../pages/AbhiyaksaInfo/AbhiyaksaInfoData';

const Sekilas = () => {
	let history = useHistory();
	const [modalData, setModalData] = useState();
	const breakPoints = [
		{ width: 1, itemsToShow: 1, showArrows: false },
		{ width: 530, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 3 },
	];

	let close = true;
	const handleOpenModal = (slug, title, link, desc) => {
		if (slug !== null) {
			return history.push(slug);
		}
		setModalData({ title, link, desc, close });
	};
	const handleCloseModal = () => {
		setModalData();
	};

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<Sections
			propsClass={'justify-center items-center relative'}
			propsClass2={'w-full'}
		>
			<div className={`${styles.box}`}></div>
			<div className="relative py-25 xs:py-10">
				<div className={`${styles.sekilasTextHeading}`}>
					<h1
						className={`batavia text-jumbotronmd xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd text-purpleMaghrib ${styles.sekilasHeadline}`}
						data-aos="fade-up"
					>
						Sekilas Rabraw
					</h1>
				</div>
				<Carousel breakPoints={breakPoints} className="space-x-2">
					{abhiyaksaInfo.map(
						({ slug, title, link, desc, bg, comp, index }) => {
							return (
								<div
									key={index}
									onClick={() =>
										handleOpenModal(slug, title, link, desc)
									}
									className="mx-2 xs:mx-0"
								>
									<Cards title={title} bg={bg} />
								</div>
							);
						}
					)}
				</Carousel>
				<div
					className={`${styles1.modal} ${
						modalData ? 'flex justify-center items-center' : 'hidden'
					}`}
					onClick={handleCloseModal}
				>
					<div
						className={`${styles1.modalContent} xs:px-0 sm:px-0 md:px-10 px-20`}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/vectorkiri.svg`}
							alt=""
							className={`${styles1.vectorKiri}`}
						/>
						<div className="p-5 relative z-4">
							<h1
								className={`text-center text-2xl text-purpleMaghrib exl:text-5xl`}
							>
								{modalData ? modalData.title : 'Kosongbro'}
							</h1>

							{modalData ? (
								modalData.desc === null ? (
									<div className="h-full mt-5">
										<iframe
											title="Youtube Video"
											src={`${modalData.link}`}
											className="my-0 mx-auto"
											width="100%"
											frameBorder="0"
											height="100%"
										/>
									</div>
								) : (
									<p
										className={`mt-5 text-purpleMaghrib exl:text-2xl text-justify`}
									>
										{modalData ? modalData.desc : 'Kosong Bro'}
									</p>
								)
							) : (
								''
							)}
						</div>
						<img
							src={`${process.env.PUBLIC_URL}/assets/vectorkanan.svg`}
							alt=""
							className={`${styles1.vectorKanan}`}
						/>
					</div>
				</div>
			</div>
			<img
				src={`${process.env.PUBLIC_URL}/assets/visual1.svg`}
				alt=""
				className={`${styles.visual1}`}
			/>
		</Sections>
	);
};

export default Sekilas;
