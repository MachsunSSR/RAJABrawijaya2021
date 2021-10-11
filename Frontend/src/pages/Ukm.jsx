import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/SekilasCard';
import Sections from '../components/Sections';
import styles from '../pages/Ukm.module.css';
import styles1 from './AdhikaraInfo.module.css';
import classNames from 'classnames';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { getDetailAllUkm, loading, versions } from './ukmData';

const Ukm = () => {
	const [pageCount, setPageCount] = useState();
	const [offsetData, setOffsetData] = useState(0);
	const [dataToBePosted, setData] = useState([]);
	const [pages, setPages] = useState(1);
	const [scroll, setScroll] = useState();
	const [filtered, setFiltered] = useState('Semua');
	const getData = () => {
    let data = []
		axios.get(`https://rajabrawijaya.ub.ac.id/api/maba/ukm/getDetailAllUkm`).then((res) => {
			localStorage.setItem('data', JSON.stringify(res.data.data));
			getLocalData();
		});
	};

	const getLocalData = (data, words = 'Semua') => {
		let perPages = JSON.parse(localStorage.getItem('perPages'));
		if (words === 'Semua') {
			data = JSON.parse(localStorage.getItem('data'));
		}
    setData(data);
		// if (data.length <= perPages) {
    //   setPageCount(1);
    //   setData(data);
		// } else {
		// 	setPageCount(Math.ceil(data.length / perPages));
		// 	const slice = data.slice(offsetData, offsetData + perPages);
		// 	setData(slice);
		// }
    // if (filtered === 'Olahraga') {
		// 	hasFiltered = filteringByButton('Olahraga')
		// }
		// if (filtered === 'Khusus') {
		//   hasFiltered = filteringByButton('Khusus')
		// }
		// if (filtered === 'Kesenian') {
		//   hasFiltered = filteringByButton('Kesenian')
		// }
		// if (filtered === 'Penalaran') {
		//   hasFiltered = filteringByButton('Penalaran')
		// }
		// if (filtered === 'Kesejahteraan') {
		//   hasFiltered = filteringByButton('Kesejahteraan')
		// }

	};

	const handleFilteredButton = (words) => {
		setFiltered(words);
		setOffsetData(1);
		setPages(1);
		let hasFiltered = [];
		JSON.parse(localStorage.getItem('data')).forEach((data) => {
			data.kriteria.forEach((kriteria) => {
				if (kriteria.kriteria === words) hasFiltered.push(data);
			});
		});
		getLocalData(hasFiltered, words);
	};

	// const handlePagination = (e, value) => {
	// 	let perPages = JSON.parse(localStorage.getItem('perPages'));
	// 	setPages(value);
	// 	const offset = value * perPages;
	// 	setOffsetData(offset);
	// };

	useEffect(() => {
		localStorage.setItem('perPages', JSON.stringify(12));
		if (localStorage.getItem('data') === null || JSON.parse(localStorage.getItem('version')) !== versions) {
			getData();
      localStorage.setItem('version', JSON.stringify(versions));
			console.log('fetching to server....');
		} else {
			getLocalData();
			console.log('fetching to local...');
		}
	}, []);

  // const filteringByButton = (kriterias) => {
	//   let hasFiltered = [];
	//   JSON.parse(localStorage.getItem('data')).forEach((data) => {
	//     data.kriteria.forEach((kriteria) => {
	//       if (kriteria === kriterias) hasFiltered.push(data);
	//     });
	//   });

	//   return hasFiltered;
	// }

	// useEffect(() => {
	// 	getLocalData();
	// }, [filtered, offsetData]);

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
							onClick={() => handleFilteredButton('Semua')}
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
							onClick={() => handleFilteredButton('Olahraga')}
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
							onClick={() => handleFilteredButton('Khusus')}
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
							onClick={() => handleFilteredButton('Kesenian')}
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
							onClick={() => handleFilteredButton('Penalaran')}
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
							onClick={() => handleFilteredButton('Kesejahteraan')}
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
											<Link
												to={`/ukm/${data.slug}`}
												key={data.id}
											>
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
					{/* <div className="w-full flex justify-center items-center mt-10">
						<Stack spacing={2}>
							<Pagination
								count={pageCount}
								page={pages}
								color="primary"
								onChange={handlePagination}
							/>
						</Stack>
					</div> */}
				</Sections>
			</div>
		</>
	);
};

export default Ukm;
