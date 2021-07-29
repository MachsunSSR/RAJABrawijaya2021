import React, { useState } from 'react';
import Sections from './Sections';
import Carousel from 'react-elastic-carousel';
import Cards from './SekilasCard';
import styles from './Sekilas.module.css';
import styles1 from './Modal.module.css';
import { sekilasData } from './sekilasData';
// import Modal from './Modal';
const Sekilas = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1, showArrows: false },
		{ width: 530, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 3 },
	];
	const [modalData, setModalData] = useState();
	let close = true;
	const handleOpenModal = (title, link, desc) => {
		setModalData({ title, link, desc, close });
	};
	const handleCloseModal = () => {
		setModalData();
	};
	return (
		<Sections
			propsClass={
				'justify-center items-center relative bg-white-bg bg-cover no-repeat bg-fixed'
			}
			propsClass2={'w-full'}
		>
			<div className={`${styles.box}`}></div>
			<div className="relative py-25 xs:py-10">
				<div className={`${styles.sekilasTextHeading}`}>
					<h1
						className={`batavia text-jumbotronmd xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd text-purpleMaghrib ${styles.sekilasHeadline}`}
					>
						Sekilas Rabraw
					</h1>
				</div>
				<Carousel breakPoints={breakPoints}>
					{sekilasData.map(({ id, title, link, desc }) => {
						return (
							<div
								key={id}
								onClick={() => handleOpenModal(title, link, desc)}
                        className="mx-2"
							>
								<Cards title={title} bg={``} />
							</div>
						);
					})}
				</Carousel>
				<div
					className={`${styles1.modal} ${
						modalData ? 'flex justify-center items-center' : 'hidden'
					}`}
					onClick={handleCloseModal}
				>
					<div className={`${styles1.modalContent}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/vectorkiri.svg`}
							alt=""
							className={`${styles1.vectorKiri}`}
						/>
						<div className="p-5 relative z-4">
							<h1 className={`text-center text-2xl text-purpleMaghrib`}>
								{modalData ? modalData.title : 'Kosongbro'}
							</h1>

							{modalData ? (
								modalData.desc === '' ? (
									<div className="h-full mt-5">
										<iframe
											src={`${modalData.link}`}
											className="my-0 mx-auto"
											width="100%"
											frameBorder="0"
											height="100%"
										/>
									</div>
								) : (
									<p className={`text-center mt-5 text-purpleMaghrib`}>
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
			{/* <img src={`${process.env.PUBLIC_URL}/assets/visual1.svg`} alt=""  className={`${styles.visual1}`}/> */}
		</Sections>
	);
};

export default Sekilas;
