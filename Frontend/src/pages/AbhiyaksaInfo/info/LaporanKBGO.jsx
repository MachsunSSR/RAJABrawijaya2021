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
			<p className="my-8 text-lg">
				Link Pengaduan Pencegahan Perundungan Kekerasan Seksual Universitas
				Brawijaya. Bagi Mahasiswa Baru yang mengalamai perundungan,
				kekerasan seksual selama rangkaian kegiatan pkkmb dapat melaporkan
				tindakan tersebut melalui.
			</p>
			<p className="my-8 text-lg font-bold">
				Form :{' '}
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSew1G6pySCTdTwtDib8D-cTzZ4343aDfrZ2Nfo6GuigwD5U_A/viewform?vc=0&c=0&w=1&flr=0"
					className="underline"
				>
					di sini
				</a>
			</p>
			<p className="my-8 text-lg">
				Jangan pernah takut untuk melawan supaya pelaku jera, ingat bahwa
				kalian tidak sendiri!
			</p>
		</InfoTemplate>
	);
};

export default LaporanKBGO;
