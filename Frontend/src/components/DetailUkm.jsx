import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailAllUkm, versions } from '../pages/ukmData';
import Sections from './Sections';
import styles from '../components/DetailUkm.module.css';
import styles1 from '../pages/Faq.module.css';
import classnames from 'classnames';
import { Skeleton } from '@mui/material';
import DetailUkmSkeleton from './DetailUkmSkeleton';

const DetailUkm = () => {
	let { slug } = useParams();
	const [clicked, setClicked] = useState(false);
	const [idActive, setIdActive] = useState(0);

	const handleClick = (id) => {
		setClicked(!clicked);
		setIdActive(id);
	};

	const [dataDetail, setDataDetail] = useState([]);
	const getDataBySlug = () => {
		let data = JSON.parse(localStorage.getItem('data'));
		data = data.filter((data) => data.slug === slug);
		setDataDetail(data);
	};

	const getData = () => {
		axios.get(`https://rajabrawijaya.ub.ac.id/api/maba/ukm/getDetailAllUkm`).then((res) => {
			let data = [];
			localStorage.setItem('data', JSON.stringify(res.data.data));
			getDataBySlug();
		});
	};

	useEffect(() => {
		if (
			localStorage.getItem('data') === null ||
			JSON.parse(localStorage.getItem('version')) !== versions
		) {
			getData();
			localStorage.setItem('version', JSON.stringify(versions));
			console.log('fetching to server....');
		} else {
			getDataBySlug();
			console.log('fetching to local...');
		}
		return () => {
			getDataBySlug();
		};
	}, []);

	return (
		<div className="bg-yellowPucat">
			<Sections
				propsClass={`justify-center items-start min-h-screen relative bg-yellowPucat`}
				propsClass2={'mt-25 lg:mb-5 xl:mb-5 w-full'}
			>
				{dataDetail.length === 0 ? (
					<>
						<DetailUkmSkeleton />
					</>
				) : (
					dataDetail.map((data, index) => {
						return <DetailUkmSkeleton data={data} key={index}/>;
					})
				)}
			</Sections>
			<Sections
				propsClass={`justify-center items-start min-h-screen relative bg-redUkm-bg bg-no-repeat bg-top bg-cover`}
				propsClass2={'my-25 lg:mb-5 xl:mb-5 w-full'}
			>
				<h1 className="text-white font-bold text-2x text-center mb-10">
					Kegiatan UKM
				</h1>

				<div className="">
					<div className="grid grid-cols-3 gap-5 xs:grid-cols-1">
						{dataDetail.length !== 0
							? dataDetail.map((data, index) => {
									return (
										// <div key={index}>
											data.kegiatan.map((dataKegiatan, index) => {
												return (
													<div
														className={`${styles.cardKegiatan} text-center p-5`}
														key={index}
													>
														<h1 className="text-white font-bold text-xl mb-2">
															{dataKegiatan.nama_kegiatan}
														</h1>
														<p className="text-lg text-white mt-5">
															{dataKegiatan.deskripsi}
														</p>
													</div>
												);
											})
										// </div>
									);
							  })
							: [1, 2, 3].map((data) => {
									return (
										<Skeleton
                    key = {data}
											variant="rectangular"
											animation="wave"
											width={'100%'}
											height={300}
										/>
									);
							  })}
					</div>
				</div>

				<h1 className="text-white font-bold text-2x text-center my-10">
					FAQ UKM
				</h1>

				<div>
					{dataDetail.length !== 0 ? (
						dataDetail.map((data, indexs) => {
							return (
								<div key={indexs}>
									{data.faq.map(({ question, answer }, index) => {
										return (
											<div
												className={`${styles.a1} mt-2`}
												onClick={() => handleClick(index)}
												key={index}
											>
												<div
													className={`${styles.ask} ${
														clicked && idActive === index
															? 'bg-yellowPucat text-black'
															: 'bg-greenDetail text-purpleMaghrib'
													}`}
												>
													<h1>{question}</h1>
													<img
														src={`${process.env.PUBLIC_URL}/assets/faqicon.svg`}
														alt="icon"
														className={`${styles.faqIcon}`}
													/>
												</div>
												<div
													className={classnames(
														styles.ans,
														clicked && idActive === index
															? `${styles.show} 'bg-white'`
															: ''
													)}
												>
													<p>{answer}</p>
												</div>
											</div>
										);
									})}
								</div>
							);
						})
					) : (
						<Skeleton
							variant="rectangular"
							animation="wave"
							width={'100%'}
							height={50}
						/>
					)}
				</div>
			</Sections>
		</div>
	);
};

export default DetailUkm;
