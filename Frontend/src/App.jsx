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

export default function App() {
	return (
		<>
			<Router>
				<Navbar />
				<AnnounceButton />
				<Switch>
					<Route exact path={'/'} component={Landing} />
					<Route path={'/galeri'} component={Galeri} />
					<Route exact path={'/abhiyaksa-info'} component={AdhikaraInfo} />
					<Route path={'/faq'} component={Faq} />
					<Switch>
						<Route
							exact
							path={'/abhiyaksa-info/info-twibbon'}
							component={Twibbon}
						/>
						<Route
							exact
							path={'/abhiyaksa-info/info-atribut'}
							component={Atribut}
						/>
					</Switch>
					<Route path={'*'} component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}
