import React, { useEffect, useState } from 'react';
import Sections from './Sections';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Statistik = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [count4, setCount4] = useState(0);
	const handleMouse = (maba, panitia, fakultas, prodi) => {
		let minimum = 0;

		const counter1 = (minimum, maximum) => {
			for (let count = minimum; count <= maximum; count++) {
				setTimeout(() => {
					setCount1(count);
				}, 1000);
			}
		};
		const counter2 = (minimum, maximum) => {
			for (let count = minimum; count <= maximum; count++) {
				setTimeout(() => {
					setCount2(count);
				}, 500);
			}
		};
		const counter3 = (minimum, maximum) => {
			for (let count = minimum; count <= maximum; count++) {
				setTimeout(() => {
					setCount3(count);
				}, 600);
			}
		};
		const counter4 = (minimum, maximum) => {
			for (let count = minimum; count <= maximum; count++) {
				setTimeout(() => {
					setCount4(count);
				}, 700);
			}
		};
		counter1(minimum, maba);
		counter2(minimum, panitia);
		counter3(minimum, fakultas);
		counter4(minimum, prodi);
	};

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<Sections
			propsClass={'justify-center items-center relative min-h-info'}
			propsClass2={'w-full'}
		>
			<div className="relative py-20 xs:py-10 sm:py-10 ">
				<div className="bg-white flex xs:flex-col sm:flex-col py-25 xs:py-10 rounded-lg xs:space-y-7">
					<div
						className="cursor-pointer flex flex-col items-center flex-grow-default"
						onMouseEnter={() => handleMouse(13214, 283, 16, 175)}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/maba.png`}
							alt="maba"
							width="80px"
						/>
						<h1 className="text-2xl text-orange my-3">{count1}</h1>
						<h1 className="text-purpleMaghrib text-lg ex:text-xl exl:text-xl">Mahasiswa Baru</h1>
					</div>
					<div
						className="cursor-pointer flex flex-col items-center flex-grow-default"
						onMouseEnter={() => handleMouse(13214, 283, 16, 175)}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/panitia.png`}
							alt="maba"
							width="80px"
						/>
						<h1 className="text-2xl text-orange my-3">{count2} </h1>
						<h1 className="text-purpleMaghrib text-lg ex:text-xl exl:text-xl">Panitia RABRAW</h1>
					</div>
					<div
						className="cursor-pointer flex flex-col items-center flex-grow-default"
						onMouseEnter={() => handleMouse(13214, 283, 16, 175)}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/fakultas.png`}
							alt="maba"
							width="80px"
						/>
						<h1 className="text-2xl text-orange my-3">{count3} </h1>
						<h1 className="text-purpleMaghrib text-lg ex:text-xl exl:text-xl">Fakultas</h1>
					</div>
					<div
						className="cursor-pointer flex flex-col items-center flex-grow-default"
						onMouseEnter={() => handleMouse(13214, 283, 16, 175)}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/prodi.png`}
							alt="maba"
							width="80px"
						/>
						<h1 className="text-2xl text-orange my-3">{count4} </h1>
						<h1 className="text-purpleMaghrib text-lg ">Program Studi</h1>
					</div>
				</div>
			</div>
		</Sections>
	);
};

export default Statistik;
