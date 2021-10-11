import { Skeleton } from '@mui/material';
import React from 'react';
import styles from '../components/DetailUkm.module.css';
import Carousel from 'react-elastic-carousel';
const DetailUkmSkeleton = ({data = null}) => {
	const breakPoints = [{ width: 1, itemsToShow: 1 }];
	return (
		<div key={data !== null ? data.id : 1}>
			<div className="flex items-center space-x-3">
				{data !== null ? (
					<img
						src={`${process.env.PUBLIC_URL}/assets/ukm/logo/${data.logo}`}
						alt="tes"
						className="w-full max-w-ospekFakIcon"
					/>
				) : (
					<Skeleton
						variant="rectangular"
						animation="wave"
						width={100}
						height={80}
					/>
				)}
				<h1 className="text-redUkm font-bold text-2xl">
					{data !== null ? (
						data.nama
					) : (
						<Skeleton
							variant="rectangular"
							animation="wave"
							width={220}
							height={30}
						/>
					)}
				</h1>
			</div>

			<div
				key={data !== null ? data.id : 1}
				className="grid grid-cols-2 gap-5 my-10 xs:grid-cols-1"
			>
				<div>
					<div className={`${styles.galeriUkm}`}>
						{data !== null ? (
							<Carousel breakPoints={breakPoints} className="space-x-2">
								{data.galeri.map((dataGaleri, index) => {
                  console.log(dataGaleri)
									return (
										<img
											src={`${process.env.PUBLIC_URL}/assets/ukm/galeri/${data.slug}/${dataGaleri.nama_file}`}
											alt="s"
											key={index}
										/>
									);
								})}
							</Carousel>
						) : (
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={'100%'}
								height={'100%'}
							/>
						)}
					</div>
				</div>
				<div>
					<div className={` ${styles.profileVideoUkm}`}>
						{data !== null ? (
							<iframe
								title="Youtube Video"
								src={`${data.video_profile.replace(
									'https://youtu.be/',
									'https://www.youtube.com/embed/'
								)}`}
								className="my-0 mx-auto"
								width="100%"
								frameBorder="0"
								height="100%"
							/>
						) : (
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={'100%'}
								height={'100%'}
							/>
						)}
					</div>
				</div>
				<div className="">
					<h1 className="text-redUkm font-bold text-2xl mb-2">
						Sekilas UKM
					</h1>
					<p className="text-lg">
						{data !== null ? (
							data.sekilas
						) : (
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={'100%'}
								height={30}
							/>
						)}
					</p>
				</div>
				<div>
					<h1 className="text-redUkm font-bold text-2xl mb-2">
						Prestasi UKM
					</h1>
					<ul className="text-lg">
						{data !== null ? (
							data.prestasi.map((dataPrestasi, index) => {
								return (
									<li key={index}>- {dataPrestasi.nama_prestasi}</li>
								);
							})
						) : (
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={'100%'}
								height={90}
							/>
						)}
					</ul>
				</div>
				<div>
					<h1 className="text-redUkm font-bold text-2xl mb-2">
						Deskripsi UKM
					</h1>
					<p className="text-lg">
						{data !== null ? (
							data.deskripsi
						) : (
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={'100%'}
								height={200}
							/>
						)}
					</p>
				</div>
				<div>
					<h1 className="text-redUkm font-bold text-2xl mb-2">
						Pesan UKM
					</h1>
					<p className="text-lg">
						{data !== null ? (
							<>
								<p className="text-lg">{data.pesan}</p>
								<p className="text-lg">
									Open Recruitmen: {data.tanggal_oprec}
								</p>
								<p className="text-lg" >
									Link Open Recruitmen: <a href={data.link_oprec} target="_blank" className="underline">{data.link_oprec}</a>
								</p>
							</>
						) : (
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={'100%'}
								height={130}
							/>
						)}
					</p>
				</div>
				<div>
					<h1 className="text-redUkm font-bold text-2xl mb-2">
						Media Sosial UKM
					</h1>
					<ul className="text-lg space-y-2">
						{data !== null ? (
							data.sosmed.map((dataSosmed, index) => {
								return (
									<li
										className="flex items-center space-x-2"
										key={index}
									>
										<img
											src={`${process.env.PUBLIC_URL}/assets/ukm/sosmed/ig.png`}
											alt="ig"
										/>
										<p className="text-lg">{dataSosmed.link}</p>
									</li>
								);
							})
						) : (
							<>
								<Skeleton
									variant="rectangular"
									animation="wave"
									width={'100%'}
									height={30}
								/>
								<Skeleton
									variant="rectangular"
									animation="wave"
									width={'100%'}
									height={30}
								/>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DetailUkmSkeleton;
