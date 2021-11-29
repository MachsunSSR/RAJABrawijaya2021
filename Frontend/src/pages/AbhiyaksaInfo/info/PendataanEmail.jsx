import React from 'react';
import InfoTemplate from './InfoTemplate';
const PendataanEmail = () => {
	return (
		<InfoTemplate
			title={'Pendataan Email UB yang Terkendala'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Halo Abhiyaksa 59!
			</h1>
			<p className="my-8 text-lg">
				Silahkan lakukan pendataan apabila email anda mengalami kendala
				seperti:
			</p>
			<ol className="list-decimal my-8 text-lg ml-5">
				<li>Gagal masuk ke Google Classroom</li>
				<li>Email dinon-aktifkan atau disable</li>
				<li>
					Akses presensi dan kuis di Google Classroom ditolak meskipun
					sudah menggunakan email UB
				</li>
			</ol>
			<p className="my-8 text-lg uppercase font-bold">
				PENGISIAN HARAP DILAKUKAN DENGAN HATI-HATI DAN TELITI SEBELUM
				MENSUBMIT. PENGISIAN HANYA DAPAT DILAKUKAN 1X. KEKELIRUAN PENGISIAN
				DATA BUKAN TANGGUNG JAWAB KAMI.
			</p>
			<p className="my-8 text-lg">
				Link: <a href="https://forms.gle/7ocwojh9tPG1uFw6A">di sini</a>
			</p>
		</InfoTemplate>
	);
};

export default PendataanEmail;
