import React from 'react';
import InfoTemplate from './InfoTemplate';
const LaporanKBGO = () => {
	return (
		<InfoTemplate
			title={'Laporan Pelecehan Seksual'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Halo Abhiyaksa 59!
			</h1>
			<h2 className="text-black xs:text-lg sm:text-lg ex:text-xl exl:text-xl my-8 font-bold">
				Hotline Lekas.pulih
			</h2>
			<p className="my-2 text-lg">
				Unit Pemberdayaan Perempuan Progresif EM UB 2021
			</p>
			<p className="my-8 text-lg">
				Bagi kalian atau para mahasiswa baru yang merasa mendapatkan
				perlakuan tidak nyaman atau tindakan seperti KBGO/Kekerasan Seksual bisa menghubungi kami:
			</p>
			<p className="my-8 text-lg font-bold">
				Sandrina : 081296992172 <br />
				Yaning : 082333334143
			</p>
			<p className="my-8 text-lg font-bold">
				Atau melalui :{' '}
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdLtmMO6YnpoPKhqLMWtLcfJ2Chh3EloUEPFhxaHGYNlGlL9A/viewform?vc=0&c=0&w=1"
					className="underline"
				>
					form berikut
				</a>
			</p>
			<p className="my-8 text-lg">
				Jangan pernah takut untuk melawan supaya pelaku jera, ingat bahwa
				kalian tidak sendiri! <br/> @pemberdayaanperempuanub
			</p>
		</InfoTemplate>
	);
};

export default LaporanKBGO;
