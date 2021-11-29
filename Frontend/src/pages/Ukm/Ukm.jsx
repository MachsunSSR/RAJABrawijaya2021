import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sections from '../../components/Section/Sections';
import styles from './Ukm.module.css';
import classNames from 'classnames';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { getDetailAllUkm, loading, versions } from './ukmData';

const Ukm = () => {
	const [pageCount, setPageCount] = useState();
	const [dataToBePosted, setData] = useState([]);
	const [pages, setPages] = useState(1);
	const [scroll, setScroll] = useState();
	const [filtered, setFiltered] = useState('Semua');

	const getApiData = () => {
		localStorage.setItem('data', JSON.stringify(getDetailAllUkm));
		getLocalData();
		// let data = [];
		// axios
		// 	.get(`https://rajabrawijaya.ub.ac.id/api/maba/ukm/getDetailAllUkm`)
		// 	.then((res) => {
		// 		localStorage.setItem('data', JSON.stringify(res.data.data));
		// 		getLocalData();
		// 	});
	};

	const getLocalData = (e, value = 1) => {
		//filter data
		let hasFiltered = [];
		if (filtered === 'Semua') {
			hasFiltered = JSON.parse(localStorage.getItem('data'));
		} else {
			JSON.parse(localStorage.getItem('data')).forEach((data) => {
				data.kriteria.forEach((kriteria) => {
					if (kriteria.kriteria === filtered) hasFiltered.push(data);
				});
			});
		}
		//lakukan perhitungan pagination
		hasFiltered = handlePagination(hasFiltered, value);
		//set data yang akan dipost
		setData(hasFiltered);
	};

	const handlePagination = (hasFiltered, value) => {
		//total data bagi data yang ditampilkan perpage
		let splitPageByTotalData = Math.ceil(hasFiltered.length / 12);
		//set hasilnya jadi berapa page yang akan dipagination
		setPageCount(splitPageByTotalData);
		//set value di component pagination, page 1.. page 2 ... dst
		setPages(value);
		//set offset atau pergeseran data tiap page yang diklik
		const offset = value * 12;
		//slice array dari indeks awal sampai batas atasnya tiap pergeseran pagination
		let copyData = hasFiltered.slice(offset - 12, offset);
		return copyData;
	};

	useEffect(() => {
		if (
			localStorage.getItem('data') === null ||
			JSON.parse(localStorage.getItem('version')) !== versions
		) {
			getApiData();
			localStorage.setItem('version', JSON.stringify(versions));
			console.log('fetching to server....');
		} else {
			getLocalData();
			console.log('fetching to local...');
		}
	}, [filtered]);

	useEffect(() => {
		window.onscroll = () => {
			setScroll(window.scrollY);
		};
	}, [scroll]);

	return (
		<>
			<div className="relative bg-midYellow overflow-hidden">
				<Sections
					propsClass={`justify-center items-center min-h-info bg-center bg-no-repeat relative ${styles.treeContainer}`}
					propsClass2={'mt-25  w-full'}
				>
					<div
						className={`w-full flex justify-center relative  ${styles.ukmCloud}`}
					>
						<h1
							className={`text-center batavia ${styles.title}`}
							style={{ top: `${scroll * 1.1}px` }}
						>
							UKM
						</h1>
						<img
							src={`${process.env.PUBLIC_URL}/assets/cloud.png`}
							alt="honpo"
							className={`${styles.cloud}`}
							style={{ right: `${scroll * 0.5}px` }}
						/>
						<div className="p-20 "></div>
					</div>
					<img
						src={`${process.env.PUBLIC_URL}/assets/ukmss2.png`}
						alt="tree"
						className={`${styles.bg}`}
					/>
				</Sections>
				{/* xs:bg-ukm-bg bg-cover bg-center bg-no-repeat sm:bg-ukm-bg */}
				<Sections
					propsClass={`justify-center items-center min-h-screen relative bg-redUkm`}
					propsClass2={'lg:mb-5 xl:mb-5 w-full mb-10'}
				>
					<div className="flex space-x-3 mb-10 w-full justify-center items-center overflow-auto xs:space-x-0 xs:justify-start py-2">
						<p
							className={classNames(
								'cursor-pointer text-lg text-white ex:text-xl exl:text-2xl py-2 px-3 ',
								filtered === 'Semua'
									? 'font-bold  bg-greenLumut rounded-3'
									: ''
							)}
							onClick={() => setFiltered('Semua')}
						>
							Semua
						</p>
						<p
							className={classNames(
								'cursor-pointer text-lg text-white ex:text-xl exl:text-2xl py-2 px-3 ',
								filtered === 'Olahraga'
									? 'font-bold  bg-greenLumut rounded-3'
									: ''
							)}
							onClick={() => setFiltered('Olahraga')}
						>
							Olahraga
						</p>
						<p
							className={classNames(
								'cursor-pointer  text-lg text-white ex:text-xl exl:text-2xl py-2 px-3 ',
								filtered === 'Khusus'
									? 'font-bold  bg-greenLumut  rounded-3'
									: ''
							)}
							onClick={() => setFiltered('Khusus')}
						>
							Khusus
						</p>
						<p
							className={classNames(
								'cursor-pointer  text-lg text-white ex:text-xl exl:text-2xl py-2 px-3 ',
								filtered === 'Kesenian'
									? 'font-bold  bg-greenLumut  rounded-3'
									: ''
							)}
							onClick={() => setFiltered('Kesenian')}
						>
							Kesenian
						</p>
						<p
							className={classNames(
								'cursor-pointer  text-lg text-white ex:text-xl exl:text-2xl py-2 px-3 ',
								filtered === 'Penalaran'
									? 'font-bold  bg-greenLumut  rounded-3'
									: ''
							)}
							onClick={() => setFiltered('Penalaran')}
						>
							Penalaran
						</p>
						<p
							className={classNames(
								'cursor-pointer  text-lg text-white ex:text-xl exl:text-2xl py-2 px-3 ',
								filtered === 'Kesejahteraan'
									? 'font-bold  bg-greenLumut  rounded-3'
									: ''
							)}
							onClick={() => setFiltered('Kesejahteraan')}
						>
							Kesejahteraan
						</p>
					</div>
					<div className={`${styles.cardWrapperContainer}`}>
						<div
							className={`${styles.gridCard} grid xs:grid-cols-1 justify-center content-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-cols-4 grid-auto-col xs:place-items-center  w-full`}
						>
							{dataToBePosted.length !== 0
								? dataToBePosted.map((data) => {
										return (
											<Link to={`/ukm/${data.slug}`} key={data.id}>
												<div
													className={`${styles.cardUkm} bg-cardUkm-bg flex justify-center bg-no-repeat items-center px-2`}
												>
													<p
														className={`text-center text-lg font-semibold rounded-3 opacity-95 bg-greenLumut text-white py-2 px-4 w-full ${styles.textContainer}`}
													>
														{data.nama}
													</p>
												</div>
											</Link>
										);
								  })
								: loading.map((data) => {
										return (
											<Skeleton
												variant="rectangular"
												animation="wave"
												width={220}
												height={190}
												className={`${styles.cardUkm}`}
												key={data}
											/>
										);
								  })}
						</div>
					</div>
					<div className="w-full flex justify-center items-center mt-10">
						<Stack spacing={2}>
							<Pagination
								count={pageCount}
								page={pages}
								color="primary"
								onChange={getLocalData}
							/>
						</Stack>
					</div>
				</Sections>
			</div>
		</>
	);
};

export default Ukm;
