import React from 'react';
import InfoTemplate from './InfoTemplate';

const InformasiGladi = () => {
	return (
		<InfoTemplate
			title={'Informasi Gladi Bersih PKKMB Online 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="ml-5 my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Pengumuman Pelaksanaan Gladi
			</h1>

			<p className="ml-5 my-8 text-lg">
				Mahasiswa Baru Universitas Brawijaya 2021 WAJIB untuk menghadiri
				gladi bersih PKKMB 2021 yang diadakan pada:
			</p>

			<ul className="ml-5 my-8 text-lg">
				<li>Tanggal : Senin, 16 Agustus 2021</li>
				<li>Waktu : 12.00 - 17.00 WIB</li>
				<li>
					Tempat : Daring menggunakan Zoom (Link akan diperbarui pada
					website ini)
				</li>
			</ul>
			<p className="my-8 ml-5 text-lg">
				Dengan ketentuan pakaian saat gladi sebagai berikut :
			</p>

			<ol type="1" className="list-decimal ml-10 my-8 text-lg">
				<li>Pakaian bebas dan rapi menggunakan atasan batik</li>
				<li>Laki Laki celana panjang bawahan gelap</li>
				<li>
					Peremuan rok bawahan gelap dengan jilbab putih untuk yang
					berjilbab
				</li>
				<li>Memakai NameTag sesuai data diri</li>
			</ol>
		</InfoTemplate>
	);
};

export default InformasiGladi;
