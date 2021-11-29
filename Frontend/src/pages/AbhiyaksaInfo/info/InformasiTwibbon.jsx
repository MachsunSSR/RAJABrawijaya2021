import React, { useRef, useState } from 'react';
import InfoTemplate from '../info/InfoTemplate';
import styles from '../../Faq/Faq.module.css';

const Twibbon = () => {
	const textAreaRef = useRef(null);
   const [nama, setNama] = useState('(NAMA)')
   const [fak, setFak] = useState('(FAKULTAS)')



	function copyToClipboard(e) {
      
		textAreaRef.current.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		e.target.focus();
      alert('Berhasil Mencopy Caption!')
	}

	return (
		<InfoTemplate
			title={'Twibbon PKKMB RAJA Brawijaya 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<video
				preload="true"
				autoplay="autoplay"
				loop="loop"
				className={'w-full max-w-md my-0 mx-auto'}
			>
				<source
					src={`${process.env.PUBLIC_URL}/assets/twibbon.mp4`}
					type="video/mp4"
				/>
			</video>

			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				A. Cara penggunaan dan Download Twibbon
			</h1>
			<a
				href="https://drive.google.com/drive/folders/13h9uD7SUbvrFRnVNwYgXJnv0ZQ2PKUbJ?usp=sharing"
				target="_blank"
				rel="noreferrer"
				className="w-full bg-orange block  p-3 rounded-3"
			>
				<h2 className="text-md font-bold text-center text-white xs:text-sm sm:text-sm">
					Download Twibbon
				</h2>
			</a>
			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				B. Caption
			</h1>

			<div className="xs:w-full my-5">
				<form>
					<input
						type="text"
						name="nama"
						id="nama"
						className={`w-full ${styles.searchBox} text-black`}
						placeholder={'Masukkan nama lengkap kamu'}
						onChange={(e) => setNama(e.target.value)}
					/>
				</form>
			</div>
			<div className="xs:w-full my-5">
				<form>
					<input
						type="text"
						name="fak"
						id="fak"
						className={`w-full ${styles.searchBox}`}
						placeholder={'Masukkan nama fakultas kamu'}
						onChange={(e) => setFak(e.target.value)}
					/>
				</form>
			</div>

			<form>
				<textarea
					ref={textAreaRef}
					className="w-full h-screen text-sm ex:text-lg exl:text-xl rounded-2 p-5"
					value={`"Cakra Manggilingan, Ngundhuh Wohing Pakerti"

Detik-detik perjuangan akan terus berjalan. Tawa dan air mata merupakan pasang surut sebuah
kehidupan seperti roda yang akan selalu berputar. Kerendahan hati, keberanian, serta tanggung jawab
akan membawa perubahan.

Semangat Brawijaya Muda dalam menggapai asa dan cita masa depan yang penuh karya di kampus
biru, kampus perjuangan, Universitas Brawijaya.

Saya ${nama} dari ${fak} potret Abhiyaksa 59 yang berani dan tangguh menghadapi
tantangan. Siap berjuang meneruskan tongkat estafet kejayaan Brawijaya melalui RAJA Brawijaya
Online pada tanggal 18-19 Agustus 2021.

Leburkan asa dan karya untuk kreasi nyata Brawijaya Muda!

Kita Satu Brawijaya!
#Abhiyaksa59
#MabaUB2021
#RAJABrawijaya2021
#KitaSatuBrawijaya
#AsadanKaryaBrawijaya`}
				/>
			</form>

			{
				/* Logical shortcut for only displaying the 
          button if the copy command exists */
				document.queryCommandSupported('copy') && (
					<div
						className="w-full bg-orange block p-3 rounded-3 cursor-pointer my-5"
						onClick={copyToClipboard}
					>
						<h2 className="text-md font-bold text-center text-white xs:text-sm sm:text-sm">
							Salin Caption
						</h2>
					</div>
				)
			}
		</InfoTemplate>
	);
};

export default Twibbon;
