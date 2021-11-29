import Jumbotron from '../components/Jumbotron/Jumbotron';
import Logo from '../components/ArtiLogo/Logo';
import Ragam from '../components/Ragam/Ragam';
import Rangkaian from '../components/Rangkaian/Rangkaian';
import Sekilas from '../components/Sekilas/Sekilas';
import Statistik from '../components/Statistik/Statistik';

const Landing = () => {
	return (
		<>
			<Jumbotron />
			<div className="bg-white-bg bg-repeat bg-auto">
				<Sekilas />
				<Rangkaian />
			</div>
			<div className="bg-orange bg-logo-bg bg-repeat">
				<Logo />
				<Ragam />
				<Statistik />
			</div>
		</>
	);
};

export default Landing;
