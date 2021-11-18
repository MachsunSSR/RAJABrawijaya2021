import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Galeri from './pages/Galeri';
import AdhikaraInfo from './pages/AdhikaraInfo';
import Faq from './pages/Faq';
import AnnounceButton from './components/AnnounceButton';
import MusicButton from './components/MusicButton';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ScrollTop from './components/ScrollTop';
import ComingSoon from './components/ComingSoon';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import Maps from './pages/Maps';
import CountDown from './components/CountDown';
import Ukm from './pages/Ukm';
import DetailUkm from './components/DetailUkm';
import { abhiyaksaInfo } from './pages/AbhiyaksaInfoData';

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
