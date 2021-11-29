import React from 'react';
import InfoTemplate from './InfoTemplate';
const PanduanGCR = () => {
	return (
		<InfoTemplate
			title={'Informasi Panduan Teknis Google Classroom'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Halo Abhiyaksa 59!
			</h1>
			<p className="my-8 text-lg">
				Bagi MABA UB 2021 bagi yang mengalami salah cluster saat melakukan
				enroll <b>Google Classroom</b>(kesalahan memasukkan code enroll)
				silahkan lakukan langkah berikut sebelum pukul 14:00 WIB:
			</p>
			<ol className="list-decimal my-8 ml-5 text-lg space-y-3">
				<li>
					Segera laporkan ke Halo Selma dengan topik “PKKMB RAJA Brawijaya”
					<ol className="list-decimal ml-10 text-lg">
						<li>Nama</li>
						<li>NIM</li>
						<li>Prodi/Fakultas</li>
						<li>Cluster Keliru</li>
						<li>Cluster yang Benar</li>
					</ol>
				</li>
				<li>Operator Google Classroom akan memberikan Code Cluster Baru</li>
				<li>
					Pastikan anda <b>keluar</b> dari Cluster Lama dan segera masuk ke
					Cluster baru
				</li>
			</ol>
		</InfoTemplate>
	);
};

export default PanduanGCR;
