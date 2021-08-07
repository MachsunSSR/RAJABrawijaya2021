import React from 'react';
// import Footer from '../components/Footer';

import Jumbotron from '../components/Jumbotron';
import Logo from '../components/Logo';
import Ragam from '../components/Ragam';
import Rangkaian from '../components/Rangkaian';
import Sekilas from '../components/Sekilas';
const Landing = () => {
	return (
		<div>
			<Jumbotron />
			<div className="bg-white-bg no-repeat bg-auto">
				<Sekilas />
				<Rangkaian />
			</div>
			<div className="bg-orange bg-logo-bg no-repeat">
				<Logo />
				<Ragam />
			</div>
		</div>
	);
};

export default Landing;
