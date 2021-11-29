import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar/Navbar';
import Galeri from './pages/Galeri/Galeri';
import AdhikaraInfo from './pages/AbhiyaksaInfo/AdhikaraInfo';
import Faq from './pages/Faq/Faq';
import AnnounceButton from './components/AnnounceButton/AnnounceButton';
import MusicButton from './components/MusicButton/MusicButton';
import Footer from './components/Footer/Footer';
import NotFound from './pages/404/NotFound';
import ScrollTop from './components/ScrollTop';
import ComingSoon from './components/ComingSoon/ComingSoon';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import Maps from './pages/Maps/Maps';
import CountDown from './components/CountDown/CountDown';
import Ukm from './pages/Ukm/Ukm';
import DetailUkm from './components/DetailUkm/DetailUkm';
import { abhiyaksaInfo } from './pages/AbhiyaksaInfo/AbhiyaksaInfoData';

export default function App() {
	return (
		<Router>
			<AccessibleNavigationAnnouncer />
			<ScrollTop />
			<Navbar />
			<AnnounceButton />
			{/* <MusicButton /> */}
			<Switch>
				<Route exact path={'/'} component={Landing} />
				<Route path={'/galeri'} component={Galeri} />
				<Route exact path={'/abhiyaksa-info'} component={AdhikaraInfo} />
				<Route exact path={'/ukm'} component={Ukm} />
				<Route path={'/faq'} component={Faq} />
				<Route path={'/raja-apps'} component={CountDown} />
				<Route path={'/maps'} component={Maps} />
				{abhiyaksaInfo.map((data, index) => {
					if (data.slug !== null) {
						return (
							<Route
								exact
								path={data.slug}
								component={data.comp}
								key={index}
							/>
						);
					}
				})}
				<Route path={`/ukm/:slug`}>
					<DetailUkm />
				</Route>
				<Route exact component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
}
