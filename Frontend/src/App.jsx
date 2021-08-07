import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Galeri from './pages/Galeri';
import AdhikaraInfo from './pages/AdhikaraInfo';
import Faq from './pages/Faq';
import AnnounceButton from './components/AnnounceButton';
import Twibbon from './pages/info/InformasiTwibbon';
import Atribut from './pages/info/InformasiAtribut';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import createHistory from "history/createBrowserHistory";
import ScrollTop from './components/ScrollTop';
import ComingSoon from './components/ComingSoon';
// import Aos from 'aos'/;

export default function App() {
   
	return (
		<>
			<Router>
            <ScrollTop/>
				<Navbar />
				<AnnounceButton />
				<Switch>
					<Route exact path={'/'} component={Landing} />
					<Route path={'/galeri'} component={Galeri} />
					<Route exact path={'/abhiyaksa-info'} component={AdhikaraInfo} />
					<Route path={'/faq'} component={Faq} />
					<Route path={'/raja-apps'} component={ComingSoon} />
					<Route path={'/maps'} component={ComingSoon} />
					<Switch>
						<Route
							exact
							path={'/abhiyaksa-info/info-twibbon'}
							component={ComingSoon}
						/>
						<Route
							exact
							path={'/abhiyaksa-info/info-atribut'}
							component={ComingSoon}
						/>
					</Switch>
					<Route path={'*'} component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}
