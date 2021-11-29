import React, { useState, useCallback } from 'react';
import Sections from '../../components/Section/Sections';
import styles from './Galeri.module.css';
import Viewer from 'react-viewer';
import Gallery from 'react-photo-gallery';
import classNames from 'classnames';
import { photos } from './photos';
import { videos } from './videos';
import styles1 from '../../components/Modal.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

const Galeri = () => {
	const [viewerData, setViewerData] = useState({
		visible: false,
		currentImg: 0,
	});
	const [modalData, setModalData] = useState();
	const [filtered, setFiltered] = useState('semua');

	const openLightbox = useCallback(
		(event, { photo, index }) => {
			if (photo.links !== '') {
				setModalData({ link: photo.links });
			} else {
				setViewerData((viewerData) => ({
					visible: true,
					currentImg: index,
				}));
			}
		},
		[setModalData]
	);

	const closeLightbox = () => {
		setViewerData((viewerData) => ({ visible: false, currentImg: 0 }));
	};

	return (
		<>
			<Sections
				propsClass={
					'justify-center items-center min-h-galeri max-h-galeri bg-galeri-bg bg-cover bg-no-repeat relative '
				}
				propsClass2={'mt-25 lg:mb-5 xl:mb-5 w-full'}
			>
				<div className="relative z-2 ">
					<div className={`${styles.jumbotronGaleriContainer}`}>
						<div className="max-w-sm lg:self-start md:self-start xl:self-start ex:self-start exl:self-start">
							<h1
								className={`batavia text-5xl text-white ${styles.galeriHeading}`}
								data-aos="fade-right"
							>
								Galeri
							</h1>
							<p
								className={`text-white pb-5 ${styles.galeriDesc}`}
								data-aos="fade-up"
							>
								Berikut adalah beberapa foto dan video pada rangkaian
								RAJA Brawijaya sebelumnya.
							</p>
						</div>
						<div className={`${styles.galeriJumbotronContainer}`}>
							<img
								src={`${process.env.PUBLIC_URL}/assets/jumbotronGaleri.png`}
								alt="galeriJumbotron"
								className={`${styles.galeriJumbotron}`}
							/>
						</div>
					</div>
				</div>
				<img
					src={`${process.env.PUBLIC_URL}/assets/galeriVector.svg`}
					alt=""
					className={`${styles.vector}`}
				/>
			</Sections>

			<Sections
				propsClass={'justify-center relative lg:px-20 justify-center'}
				propsClass2={'w-full my-20  w-full'}
			>
				<div>
					<div className="flex space-x-3 mb-5">
						<p
							className={classNames(
								'cursor-pointer text-lg text-purpleMaghrib ex:text-xl exl:text-2xl',
								filtered === 'semua'
									? 'font-bold border-b-2 border-purpleMaghrib'
									: ''
							)}
							onClick={() => setFiltered('semua')}
						>
							Semua
						</p>
						<p
							className={classNames(
								'cursor-pointer text-lg text-purpleMaghrib ex:text-xl exl:text-2xl',
								filtered === 'foto'
									? 'font-bold border-b-2 border-purpleMaghrib'
									: ''
							)}
							onClick={() => setFiltered('foto')}
						>
							Foto
						</p>
						<p
							className={classNames(
								'cursor-pointer  text-lg text-purpleMaghrib ex:text-xl exl:text-2xl',
								filtered === 'video'
									? 'font-bold border-b-2 border-purpleMaghrib'
									: ''
							)}
							onClick={() => setFiltered('video')}
						>
							Video
						</p>
					</div>
					<div>
						<Viewer
							visible={viewerData.visible}
							onClose={closeLightbox}
							images={photos}
							activeIndex={viewerData.currentImg}
						/>
						{filtered === 'semua' ? (
							<div
								className={`${styles.contentWrapper} object-cover flex-start`}
								key={Math.random()}
							>
								<Gallery
									photos={photos}
									className={`object-cover flex-start`}
									onClick={openLightbox}
								/>
								<Gallery
									photos={videos}
									className={`object-cover flex-start`}
									onClick={openLightbox}
								/>
							</div>
						) : filtered === 'foto' ? (
							<div
								className={`${styles.contentWrapper} object-cover flex-start`}
								key={Math.random()}
							>
								<Gallery
									photos={photos}
									className={`object-cover flex-start`}
									onClick={openLightbox}
								/>
							</div>
						) : filtered === 'video' ? (
							<div
								className={`${styles.contentWrapper} object-cover flex-start`}
								key={Math.random()}
							>
								<Gallery
									photos={videos}
									className={`object-cover flex-start`}
									onClick={openLightbox}
								/>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<div
					className={`${styles1.modal} ${
						modalData ? 'flex justify-center items-center' : 'hidden'
					}`}
					onClick={() => setModalData()}
				>
					<div className={`${styles1.modalContent}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/vectorkiri.svg`}
							alt=""
							className={`${styles1.vectorKiri}`}
						/>
						<div className="p-5 relative z-4">
							{modalData ? (
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
			</Sections>
		</>
	);
};

export default Galeri;
