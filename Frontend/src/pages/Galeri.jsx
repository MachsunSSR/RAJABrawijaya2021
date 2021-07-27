import React, { useState, useCallback } from 'react';
import Sections from '../components/Sections';
import styles from './Galeri.module.css';
import Viewer from 'react-viewer';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import classNames from 'classnames';
import { photos } from './photos';
const Galeri = () => {
   const [ visible, setVisible ] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
      setVisible(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setVisible(false);
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
						<div className="max-w-sm lg:self-start md:self-start xl:self-start">
							<h1
								className={`batavia text-5xl text-white ${styles.galeriHeading}`}
							>
								Galeri
							</h1>
							<p className={`text-white pb-5 ${styles.galeriDesc}`}>
								Berikut adalah beberapa foto dan video pada rangkaian
								RAJA Brawijaya sebelumnya.
							</p>
						</div>
						<div className={`${styles.galeriJumbotronContainer}`}>
							<img
								src={`${process.env.PUBLIC_URL}/assets/jumbotronGaleri.svg`}
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
				propsClass={
					'justify-center items-center relative lg:px-20'
				}
				propsClass2={'w-full my-20  w-full'}
			>
				<div>
					<div className="flex space-x-3 mb-5">
						<p className={classNames('cursor-pointer text-lg font-bold text-purpleMaghrib')}>Semua</p>
						<p className={classNames('cursor-pointer text-lg text-purpleMaghrib')}>Foto</p>
						<p className={classNames('cursor-pointer  text-lg text-purpleMaghrib')}>Video</p>
					</div>
					<div>
						<Viewer
							visible={visible}
							onClose={closeLightbox}
							images={photos}
                     activeIndex={currentImage}
						/>
                  <Gallery photos={photos} onClick={openLightbox} />
					</div>
				</div>
			</Sections>
		</>
	);
};

export default Galeri;
