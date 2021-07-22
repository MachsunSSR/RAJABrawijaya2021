import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Galeri from './pages/Galeri';
import AdhikaraInfo from './pages/AdhikaraInfo';
import Faq from './pages/Faq';

export default function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={'/'} component={Landing} />
					<Route path={'/galeri'} component={Galeri} />
					<Route path={'/adhikara-info'} component={AdhikaraInfo} />
					<Route path={'/faq'} component={Faq} />
				</Switch>
			</Router>
		</>
	);
}
