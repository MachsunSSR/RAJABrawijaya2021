import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailAllUkm, versions } from '../../pages/Ukm/ukmData';
import Sections from '../Section/Sections';
import ProfileUkm from '../ProfileUkm/ProfileUkm';
import DescriptionUkm from '../DescriptionUkm/DescriptionUkm';
import KegiatanUkm from '../KegiatanUkm/KegiatanUkm';
import QuestionAnswer from '../Qna/QuestionAnswer';
const DetailUkm = () => {
	let { slug } = useParams();
	const [dataDetail, setDataDetail] = useState([]);

	const getData = () => {
		// axios.get(`https://rajabrawijaya.ub.ac.id/api/maba/ukm/getDetailAllUkm`).then((res) => {
		// 	let data = [];
		// 	localStorage.setItem('data', JSON.stringify(res.data.data));
		// 	getDataBySlug();
		// });
		localStorage.setItem('data', JSON.stringify(getDetailAllUkm));
		getDataBySlug();
	};

	const getDataBySlug = () => {
		// let data = [];
		let data = JSON.parse(localStorage.getItem('data'));
		data = data.filter((data) => data.slug === slug);
		setDataDetail(data);
		console.log(dataDetail);
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
					<div>
						<ProfileUkm data={[]} />
						<DescriptionUkm data={[]} />
					</div>
				) : (
					<div>
						<ProfileUkm data={dataDetail[0]} />
						<DescriptionUkm data={dataDetail[0]} />
					</div>
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
							? dataDetail[0].kegiatan.map((dataKegiatan, index) => {
									return (
										<div key={index}>
											<KegiatanUkm data={dataKegiatan} />
										</div>
									);
							  })
							: [1, 2, 3].map((data, index) => {
									return (
										<div key={index}>
											<KegiatanUkm data={{}} />
										</div>
									);
							  })}
					</div>
				</div>

				<h1 className="text-white font-bold text-2x text-center my-10">
					FAQ UKM
				</h1>

				<div>
					{dataDetail.length !== 0 ? (
						dataDetail[0].faq.map(({ question, answer }, index) => {
							return (
								<QuestionAnswer
									question={question}
									answer={answer}
									idx={index}
									from={'detailUkm'}
								/>
							);
						})
					) : (
						<QuestionAnswer question={''} />
					)}
				</div>
			</Sections>
		</div>
	);
};

export default DetailUkm;
