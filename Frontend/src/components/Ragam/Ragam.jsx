import React, { useState } from 'react';
import Sections from '../Section/Sections';
import styles from './Ragam.module.css';
import { ragamData } from './ragamData';
import classNames from 'classnames';
import Tilt from 'react-tilt';

const Ragam = () => {
	const [active, setActive] = useState(ragamData[0]);
	return (
		<Sections
			propsClass={'justify-center items-center relative'}
			propsClass2={'w-full '}
		>
			<div className="py-25 xs:py-10">
				<div className="flex xs:flex-col sm:flex-col xs:space-x-0 sm:space-x-0 space-x-5 xs:min-h-0 sm:min-h-0 min-h-ragamMaskot  border-matePink">
					<div className="image flex justify-center items-start">
						<Tilt
							options={{
								max: 8,
								perspective: 1000,
								scale: 1,
								reverse: false,
							}}
						>
							<img
								src={`${process.env.PUBLIC_URL}/assets/maskot.png`}
								alt="maskot"
								className=""
							/>
						</Tilt>
					</div>
					<div
						className={`flex flex-col xs:items-center sm:items-center items-start max-w-sm ex:max-w-md exl:max-w-xl `}
					>
						<div
							className={`space-y-2 space-x-2 xs:my-10 sm:my-10 mb-5 flex flex-wrap xs:justify-center sm:justify-center justify-start flex-start ${styles.circleContainer}`}
						>
							<div></div>
							{ragamData.map(({ id, namaOspek, desc, sosmed, img }) => {
								return (
									<img
										key={id}
										src={`${process.env.PUBLIC_URL}/assets/osfakLogo/${img}.png`}
										alt={`${namaOspek}`}
										className={`${classNames(
											'cursor-pointer object-cover',
											styles.logoOnhover,
											id === active.id ? styles.circleLogo : ''
										)}`}
										onClick={() =>
											setActive({ id, namaOspek, desc, sosmed })
										}
									/>
								);
							})}
						</div>
						<div className="textContentContainer xs:ml-0 sm:ml-0 ml-2">
							<h1
								className={`text-purpleMaghrib text-4xl xs:text-3xl xs:text-center uppercase sm:text-center exl:text-5xl ${styles.namaOsfak}`}
							>
								{active ? active.namaOspek : 'PK2MABA FILKOM'}
							</h1>
							<p className="text-white font-light text-md mt-3 lg:max-w-2xl xs:text-center sm:text-center exl:text-xl text-justify">
								{active
									? active.desc
									: 'PK2MABA - Pengenalan Kehidupan Kampus bagi Mahasiswa Baru Fakultas Ilmu Komputer selanjutnya disingkat PK2MABA FILKOM adalah suatu kegiatan yang memberikan pembekalan kepada mahasiswa tentang kehidupan kampus, baik dari segi akademik maupun non akademik. STARTUP ACADEMY - Merupakan kelanjutan setelah PK2MABA FILKOM yang memfasilitasi mahasiswa dalam pembinaan karya ilmiah, pengenalan organisasi mahasiswa, dan pelaksanaan krida mahasiswa tingkat Program Studi.'}
							</p>
							<div className="">
								<h1 className="text-purpleMaghrib font-semibold text-xl xs:text-center mt-10 mb-5 sm:text-center">
									LINIMASA
								</h1>
								<div className="flex space-x-2 xs:justify-center sm:justify-center items-center">
									{active ? (
										active.sosmed.map((n, index) => {
											return (
												<a
													href={active.sosmed[index][0]}
													target="_blank"
													rel="noreferrer"
													key={index}
												>
													<img
														src={`${process.env.PUBLIC_URL}/assets/icon/${active.sosmed[index][1]}.png`}
														alt={active.sosmed[index][1]}
														width="45px"
													/>
												</a>
											);
										})
									) : (
										<a
											href={
												'https://www.instagram.com/pk2maba_filkom/'
											}
											target="_blank"
											rel="noreferrer"
										>
											<img
												src={`${process.env.PUBLIC_URL}/assets/icon/instagram.png`}
												alt="instagram"
												width="45px"
											/>
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Sections>
	);
};

export default Ragam;
