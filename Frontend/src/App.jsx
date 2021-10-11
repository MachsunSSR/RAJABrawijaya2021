import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
import createHistory from 'history/createBrowserHistory';
import ScrollTop from './components/ScrollTop';
import ComingSoon from './components/ComingSoon';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import { ArticlesContext } from './routes/Context';
import { getArticles } from './routes/FetchArticles';
import FetchInfo from './pages/info/FetchInfo';
import Maps from './pages/Maps';
import InfoHaloSelma from './pages/info/InformasiHaloSelma';
import Panduan from './pages/info/Panduan';
import Penugasan from './pages/info/Penugasan';
import CountDown from './components/CountDown';
import InfoOspekFak from './pages/info/InfoOspekFak';
import InformasiRangkaian from './pages/info/InformasiRangkaian';
import InfoVBG from './pages/info/InfoVBG.jsx';
import PanduanGCR from './pages/info/PanduanGCR';
import LaporanKBGO from './pages/info/LaporanKBGO';
import PanduanOH from './pages/info/PanduanOH';
import PendataanEmail from './pages/info/PendataanEmail';
import MusicButton from './components/MusicButton';
import Ukm from './pages/Ukm';
import DetailUkm from './components/DetailUkm';
// import Aos from 'aos'/;

export default function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		// let nama;
		// do {
		// 	nama = prompt('Masukin nama kamu dong bestie: ');
		// } while (nama == null || nama == '');
		// const sp = new SpeechSynthesisUtterance(
		// 	`hai ${nama}, admin ada pantun buat kamu, dua tiga pergi ke jabar, hai kamu apa kabar?`
		// );
		// sp.lang = 'id-ID';
		// speechSynthesis.speak(sp);
		async function get() {
			const res = await getArticles();
			setArticles(res);
		}
		get();

		return () => get();
	}, []);

	return (
		<ArticlesContext.Provider value={{ articles, setArticles }}>
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
					<Route
						exact
						path={'/abhiyaksa-info/info-pertanyaan'}
						component={InfoHaloSelma}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/panduan-pkkmb'}
						component={Panduan}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/info-pkkmb-fakultas'}
						component={InfoOspekFak}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/info-rangkaian'}
						component={InformasiRangkaian}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/info-vbg'}
						component={InfoVBG}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/info-kesalahan-enroll'}
						component={PanduanGCR}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/laporan-pelecehan-seksual'}
						component={LaporanKBGO}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/pendataan-email-ub-yang-terkendala'}
						component={PendataanEmail}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/penugasan'}
						component={Penugasan}
					/>
					<Route
						exact
						path={'/abhiyaksa-info/panduan-oh'}
						component={PanduanOH}
					/>
					<Route path={`/abhiyaksa-info/:slug`}>
						<FetchInfo />
					</Route>
					<Route path={`/ukm/:slug`}>
						<DetailUkm />
					</Route>
					;
					{/* {articles !== undefined ? articles.map((article) => {
						<Route path={`/abhiyaksa-info/${article.slug}`} key={article.id}>
							<FetchInfo />
						</Route>;
					}) : (
                  ''
               )} */}
					<Route exact component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</ArticlesContext.Provider>
	);
}
