import React, { useState } from 'react';
import styles from './Logo.module.css';
import Sections from './Sections';
import classNames from 'classnames';
import logoData from './logoData';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

const Logo = () => {
	const [active, setActive] = useState(1);
	const [nameActive, setNameActive] = useState('Jamang Susun 3');
	const [imgActive, setImgActive] = useState('jamang');
	const [descActive, setDescActive] = useState(
		'Melambangkan 3 rangkaian Raja Brawijaya sebagai awal (PKKMB), tengah (PBPK), dan akhir (OH) perjalanan sebagai mahasiswa baru, serta melambangkan Tri Dharma Perguruan Tinggi.'
	);
	const handleActive = (e, nama, desc, img, id) => {
		setNameActive(nama);
		setDescActive(desc);
		setImgActive(img);
		setActive(id);
	};

	return (
		<Sections
			propsClass={
				'justify-center items-center relative bg-orange bg-logo-bg bg-cover no-repeat'
			}
			propsClass2={'w-full'}
		>
			<div className="py-25 xs:py-10">
				<div>
					<h1
						className={classNames(
							styles.logoHeadline,
							'batavia text-purpleMaghrib'
						)}
                  data-aos="fade-up"
					>
						Makna Logo
					</h1>
				</div>
				<div
					className={classNames(
						styles.maknaContentContainer,
						'flex xs:flex-col-reverse sm:flex-col-reverse flex-row items-center'
					)}
				>
					<div className={classNames(styles.left, 'xs:mt-5')}>
						<div className="">
							<div
								className={classNames(
									styles.logoBoxContainer,
									'xs:justify-center justify-between'
								)}
							>
								{logoData.map(({ nama, desc, img, id }) => {
									return (
										<div
											className={`${classNames(
												styles.logoBox,
												id === active
													? 'bg-purpleMaghrib'
													: 'bg-transparent'
											)}`}
											onClick={(e) =>
												handleActive(e, nama, desc, img, id)
											}
											key={id}
                                 
										>
											<img
												src={`${process.env.PUBLIC_URL}/assets/logo/${img}.png`}
												alt={`${img}`}
												className={``}
											/>
										</div>
									);
								})}
							</div>
							<div
								className={classNames(
									styles.logoTextContainer,
									'flex xs:flex-col-reverse items-center flex-row mt-10 xs:mt-5'
								)}
							>
								<div
									className={`warnaContainer bg-purpleMaghrib rounded-2 p-5 flex flex-col space-y-2 ${styles.boxColor} xs:mt-5`}
								>
									<div className="flex items-center space-x-3">
										<div className="bg-deepBlue rounded-full p-5"></div>
										<p className="text-white">Bertanggung Jawab</p>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-midRed rounded-full p-5"></div>
										<p className="text-white">Semangat</p>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-softPink rounded-full p-5"></div>
										<p className="text-white">Kepedulian</p>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-midYellow rounded-full p-5"></div>
										<p className="text-white">
											Optimis dan rasa ingin tahu tinggi
										</p>
									</div>
								</div>
								<div className={`${styles.textContainer} xs:ml-0 `}>
									<h1
										className={`text-purpleMaghrib text-4xl xs:text-3xl font-bold xs:text-center`}
                              
									>
										{nameActive}
									</h1>
									<p className={`text-white font-light text-md mt-3 xs:text-center`}>
										{descActive}
									</p>
                           <div className={`${styles.lines}`}></div>
								</div>
							</div>
						</div>
					</div>
					<div className={classNames(styles.logoShowContainer)} key={Math.random()}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/logo/${imgActive}.png`}
							alt={`${imgActive}`}
							className={` ${styles.imgLogo}`}
						/>
					</div>
				</div>
			</div>
		</Sections>
	);
};

export default Logo;
