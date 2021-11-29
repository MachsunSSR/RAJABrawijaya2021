import React, { useState } from 'react';
import styles1 from '../Modal.module.css';
import styles from '../AnnounceButton/AnnounceButton.module.css'
const MusicButton = () => {
	const [modal, setModal] = useState();
	const [music, setMusic] = useState('pause');
	const [entered, setEntered] = useState(false);
	const handleClick = () => {
		setModal('close');
		setMusic('play');
	};
	return (
		<div>
			{music === 'play' ? (
				<audio
					preload="true"
					autoplay="autoPlay"
					loop="loop"
					className={``}
				>
					<source
						src={`${process.env.PUBLIC_URL}/assets/alltimes.m4a`}
						type="audio/mp3"
					/>
				</audio>
			) : (
				''
			)}
			<div
				className={`${styles1.modal} ${
					modal !== 'close' ? 'flex justify-center items-center' : 'hidden'
				}`}
			>
				<div
					className={`${styles1.modalContent} xs:px-0 sm:px-0 md:px-10 px-20`}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/vectorkiri.svg`}
						alt=""
						className={`${styles1.vectorKiri}`}
					/>
					<div className="p-5 relative z-4">
						<h1
							className={`text-center text-3xl mt-5 text-purpleMaghrib exl:text-5xl`}
						>
							Welcome Back!
						</h1>
						<p className="mt-5 text-center">
							Dua tiga tok dalang duda, selamat datang kembali brawijaya
							muda!
						</p>
						<p className="mt-5 text-center xs:hidden">
							Selamat datang di rangkaian Open House RAJA Brawijaya 2021.
							Di rangkaian ini kalian akan diperkenalkan dengan Unit
							Kegiatan Mahasiswa atau UKM yang ada di Universitas
							Brawijaya.
						</p>
						<p className="mt-5 mb-5 text-center">
							Biar lebih semangat dan merasakan euforia Open House RAJA
							Brawijaya 2021, gimana kalo websitenya kita kasih Jingle
							RAJA Brawijaya?
						</p>
						<div className="flex justify-center items-center ">
							<div className="xs:flex xs:flex-col xs:space-y-2 xs:space-x-0 space-x-3">
								<button
									className="bg-purpleMaghrib py-2 px-4 text-white rounded-3 text-sm"
									onClick={handleClick}
								>
									Gas terus min 🤙
								</button>
								<button
									className="py-2 px-4 text-white rounded-3 bg-pinkThrid text-sm"
									onClick={handleClick}
								>
									Gak dulu min 😒
								</button>
							</div>
						</div>
					</div>
					<img
						src={`${process.env.PUBLIC_URL}/assets/vectorkanan.svg`}
						alt=""
						className={`${styles1.vectorKanan}`}
					/>
				</div>
			</div>
			<div
				className={`flex space-x-2 fixed z-1000 items-center ${styles.musicButton}`}
			>
				<div
					className={`py-2 px-3 bg-pinkThrid rounded-2 text-white text-sm ${
						entered ? 'visible' : 'hidden'
					}`}
				>
					{music === 'play' ? 'Stop Jingle' : 'Play Jingle'}
				</div>
				{music === 'play' ? (
					<img
						src={`${process.env.PUBLIC_URL}/assets/pause.png`}
						alt="announce"
						width="72px"
						className="cursor-pointer"
						onMouseEnter={() => setEntered(true)}
						onMouseLeave={() => setEntered(false)}
						onClick={() => setMusic('pause')}
					/>
				) : (
					<img
						src={`${process.env.PUBLIC_URL}/assets/play.png`}
						alt="announce"
						width="72px"
						className="cursor-pointer"
						onMouseEnter={() => setEntered(true)}
						onMouseLeave={() => setEntered(false)}
						onClick={() => setMusic('play')}
					/>
				)}
			</div>
		</div>
	);
};

export default MusicButton;
