import React from 'react';
import InfoTemplate from './InfoTemplate';
const InfoHaloSelma = () => {
	return (
		<InfoTemplate
			title={'Informasi Pertanyaan Seputar PKKMB RAJA Brawijaya 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="ml-5 my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Informasi Tata Cara Bertanya Melalui Halo Selma
			</h1>

			<p className="my-8 ml-5 text-lg">
				Seluruh pertanyaan mahasiswa baru yang berkaitan dengan PKKMB RAJA
				Brawijaya 2021 bisa ditanyakan ke{' '}
				<a href="https://haloselma.ub.ac.id" className="underline">
					halo selma
				</a>{' '}
				dengan langkah-langkah sebagai berikut:
			</p>

			<ol type="1" className="list-decimal ml-5 my-8 text-lg">
				<li>
					Mahasiswa mengakses{' '}
					<a href="https://haloselma.ub.ac.id" className="underline">
						haloselma.ub.ac.id
					</a>
					<img
						src={`${process.env.PUBLIC_URL}/assets/article/haloselma/1.png`}
						alt="cowo"
						className="w-full my-5"
					/>
				</li>
				<li>
					Klik tombol "Open a New Ticket" jika ingin menanyakan sesuatu
				</li>
				<li>
					Isi nama lengkap dan email kamu, lalu pilih topik "PKKMB RAJA
					Brawijaya"
					<img
						src={`${process.env.PUBLIC_URL}/assets/article/haloselma/2.png`}
						alt="cowo"
						className="w-full my-5"
					/>
				</li>
				<li>
					Isi judul atau subjek pertanyaan yang ingin ditanyakan pada kolom
					input subjek permasalahan dan deskripsikan pertanyaan kamu pada
					kolom deskripsi, ingat jangan lupa mengisikan kode captcha
					<img
						src={`${process.env.PUBLIC_URL}/assets/article/haloselma/3.png`}
						alt="cowo"
						className="w-full my-5"
					/>
				</li>
				<li>Tekan tombol "Create Ticket"</li>
				<li>
					Notifikasi balasan dari pertanyaan kamu, akan dikirimkan pada
					email yang kamu tuliskan pada saat pembuatan tiket, ketika tiket
					sudah berhasil dibuat kamu akan mendapati email seperti ini:
					<img
						src={`${process.env.PUBLIC_URL}/assets/article/haloselma/4.png`}
						alt="cowo"
						className="w-full my-5"
					/>
					Untuk mengecek status tiket atau pertanyaan kamu, tekan tulisan
					"link ini" pada footer email tersebut
				</li>
				<li>
					Apabila ada pertanyaan diluar PKKMB, kamu bisa memilih help
					topik lainnya pada open ticket halo selma
				</li>
			</ol>
		</InfoTemplate>
	);
};

export default InfoHaloSelma;
