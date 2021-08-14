import React from 'react';
import InfoTemplate from './InfoTemplate';
import { ospekFakData } from './OspekFakData';
const InfoOspekFak = () => {
	return (
		<InfoTemplate
			title={'Informasi Pelaksanaan PKKMB Fakultas 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<p className="my-8 text-lg">
				Halo Abhiyaksa 59. Kalian tahu ga sih? selain PKKMB RAJA Brawijaya,
				kalian juga akan mengikuti PKKMB untuk fakultas kalian
				masing-masing. Kami sudah merangkum jadwal dan Official Instagram &
				Website untuk PKKMB dari tiap-tiap fakultas:
			</p>
			<ol className="list-decimal my-8 ml-5 text-lg">
				{ospekFakData.map((data, index) => {
					return (
						<div key={index} className="my-5">
							<li className="font-bold">{data.nama}</li>
							<p className="mt-2 text-lg">
								Waktu Pelaksanaan : {data.waktu}
							</p>
							<p className="text-lg">Linimasa: </p>
							<div className="text-lg mt-2 space-x-3 w-fit flex p-2 rounded-lg bg-purpleMaghrib">
								{data.web === '' ? (
									''
								) : (
									<a
										href={`${data.web}`}
										target="_blank"
										rel="noreferrer"
										className=""
									>
										<img
											src={`${process.env.PUBLIC_URL}/assets/icon/website.png`}
											alt="website"
											width="40px"
											className=""
										/>
									</a>
								)}
								{data.instgram === '' ? (
									''
								) : (
									<a
										href={`${data.instgram}`}
										target="_blank"
										rel="noreferrer"
										className=""
									>
										<img
											src={`${process.env.PUBLIC_URL}/assets/icon/instagram.png`}
											alt="website"
											width="40px"
											className=""
										/>
									</a>
								)}
							</div>
						</div>
					);
				})}
			</ol>
		</InfoTemplate>
	);
};

export default InfoOspekFak;
