import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sections from '../Section/Sections';
const CountDown = () => {
	const [count, setCount] = useState();
	// const [img, setImg] = useState();
	var countDownDate = new Date('Aug 15, 2021 11:00:00').getTime();

	// Update the count down every 1 second
	var x = setInterval(function () {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		setCount({ days, hours, minutes, seconds });
		if (distance < 0) {
			clearInterval(x);
			setCount('');
		}
	}, 1000);

	return (
		<Sections
			propsClass={
				'justify-center items-center bg-white-bg bg-repeat relative overflow-hidden'
			}
			propsClass2={
				'w-full rounded-2 xs:p-5 sm:p-5 p-20 my-24 lg:mb-5 xl:mb-5'
			}
		>
			<img
				src={`${process.env.PUBLIC_URL}/assets/cspattern1.png`}
				alt="pattern"
				className="absolute top-0 left-0 right-0 min-w-vw "
			/>
			<h1 className="text-center batavia text-jumbotronlg xs:text-7xl text-purpleMaghrib xs:mt-0 sm:mt-0 mt-20">
				Segera Datang
			</h1>
			<p className="text-orange text-center text-xl">
				Siang-siang main layang-layang, malamnya sakit hati. Page ini sedang
				dalam proses pembuatan sayang. Silahkan datang lagi nanti!
			</p>
			{count !== '' ? (
				count && (
					<p className="text-orange text-center text-xl my-5">
						{count.days}d {count.hours}h {count.minutes}m {count.seconds}s
					</p>
				)
			) : (
				<>
					{/* <p className="text-orange text-center text-2xl my-5">
						Mohon maaf, internet kamu tidak bermasalah
					</p> */}
					{/* <img
						src={`${process.env.PUBLIC_URL}/assets/mem.jpg`}
						alt="meme"
                  className="mx-auto my-0 max-w-sm"
					/> */}
				</>
			)}
			<Link
				className="text-white px-6 py-2 mt-5 mb-20 xs:mb-0 bg-purpleMaghrib my-0 mx-auto block w-fit rounded-2"
				to="/"
			>
				Kembali
			</Link>
			<img
				src={`${process.env.PUBLIC_URL}/assets/cspattern2.png`}
				alt="pattern"
				className="absolute bottom-0 left-0 right-0 min-w-vw "
			/>
		</Sections>
	);
};

export default CountDown;
