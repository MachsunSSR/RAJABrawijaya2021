import React from 'react';
import InfoTemplate from './InfoTemplate';

const InformasiRangkaian = () => {
	return (
		<InfoTemplate
			title={'Informasi Pelaksanaan Rangkaian'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-4xl">
				Halo Abhiyaksa 59!
			</h1>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl my-8">
				Informasi PKKMB RAJA Brawijaya
			</h1>
			<p className="my-8 text-lg">
				Mahasiswa Baru Universitas Brawijaya 2021 WAJIB untuk menghadiri
				rangkaian PKKMB 2021 sebagai berikut:
			</p>

			<div>
				<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl my-8">
					Gladi Bersih PKKMB 2021
				</h1>
				<p className="my-8 text-lg">
					16 Agustus 2021 Pukul 12:00 WIB - 17.00 WIB <br />
					Untuk informasi lebih lanjut dapat dilihat{' '}
					<a
						href="https://rajabrawijaya.ub.ac.id/#/abhiyaksa-info/pengumuman-pelaksanaan-gladi"
						className="underline"
					>
						di sini
					</a>
				</p>
				<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl my-8">
					Upacara Penerimaan Mahasiswa Baru 2021
				</h1>
				<p className="my-8 text-lg">
					17 Agustus 2021 Pukul 07:00 WIB <br />
					Untuk informasi lebih lanjut akan diperbarui pada website ini
				</p>
				<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl my-8">
					PKKMB Online RAJA Brawijaya 2021
				</h1>
				<p className="my-8 text-lg">
					18-19 Agustus 2021 Pukul 06:00 - 16:30 WIB <br />
					Untuk informasi lebih lanjut akan diperbarui pada website ini
				</p>
			</div>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl my-8">
				Download Susunan Acara
			</h1>
			<a
				href="https://drive.google.com/drive/folders/1PbAMLNR77HKmybROIAY7MLs94Pg-fiKV?usp=sharing"
				target="_blank"
				rel="noreferrer"
				className="w-full bg-orange block  p-3 rounded-3 my-5"
			>
				<h2 className="text-md font-bold text-center text-white xs:text-sm sm:text-sm">
					Download Rundown
				</h2>
			</a>
			<embed
				src={`${process.env.PUBLIC_URL}/assets/susunanacara.pdf`}
				className="w-full h-screen "
				type="application/pdf"
			></embed>
		</InfoTemplate>
	);
};

export default InformasiRangkaian;
