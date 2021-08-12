import React from 'react';
import InfoTemplate from './InfoTemplate'
const Penugasan = () => {
	return (
		<InfoTemplate
			title={'Informasi Penugasan RAJA Brawijaya 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Penugasan RAJA Brawijaya 2021
			</h1>
			<p className="my-8 text-lg">
				Halo mahasiswa baru Universitas Brawijaya, berikut adalah beberapa
				tugas yang harus kalian kerjakan agar bisa mengenali Universitas
				Brawijaya lebih baik lagi!
			</p>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Penugasan Cluster
			</h1>
			<p className="my-8 text-lg">
				Dalam penugasan cluster ini, mahasiswa akan dibagi menjadi beberapa
				kelompok dimana kelompok tersebut dapat dilihat di RAJA Apps tanggal
				13 Agustus 2021 pukul 14.00 WIB, tugas tersebut diantaranya:
			</p>
			<ol className="list-decimal my-8 ml-5 text-lg">
				<li>Video TRANSFORMER (Transisi For Merdeka)</li>
				<li>BISKUIT (Bisnis Kui Tancep)</li>
			</ol>
			<iframe
				title="Youtube Video"
				src={`https://www.youtube.com/embed/vsfiEgFzugU`}
				className="my-0 mx-auto"
				width="100%"
				frameBorder="0"
				height="100%"
			/>
			<p className="my-8 text-lg">
				Ketentuan lebih lanjut dapat dilihat pada panduan, yang bisa
				didownload{' '}
				<a
					href="https://drive.google.com/file/d/1ZuYJgTMzOvQDWR0BBY3XDjCv-gN7VIhx/view?usp=sharing"
               target="_blank"
               rel="noreferrer"
					className="underline"
				>
					di sini
				</a>
			</p>

			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Penugasan Individu
			</h1>
			<ol className="list-decimal my-8 ml-5 text-lg">
				<li>Kenali Brawijaya</li>
				<li>Dharma Warta Abhiyaksa</li>
				<li>Gaung Budaya Nusantara</li>
			</ol>
         <iframe
				title="Youtube Video"
				src={`https://www.youtube.com/embed/BC3FhyPfhVw`}
				className="my-0 mx-auto"
				width="100%"
				frameBorder="0"
				height="100%"
			/>
			<p className="my-8 text-lg">
				Ketentuan lebih lanjut dapat dilihat pada panduan, yang bisa
				didownload{' '}
				<a
					href="https://drive.google.com/file/d/1N4Ir9knBTo0ZH39qmVf_flfNNjpm9ZXh/view?usp=sharing"
               target="_blank"
               rel="noreferrer"
					className="underline"
				>
					di sini
				</a>
			</p>
         <p className="my-8 text-lg">
				Seluruh penugasan dikumpulkan di RAJA Apps, jangan lupa baca panduan penugasan dengan baik, jangan malas membaca! semangat dan sehat selalu Brawijaya Muda!
			</p>
		</InfoTemplate>
	);
};

export default Penugasan;
