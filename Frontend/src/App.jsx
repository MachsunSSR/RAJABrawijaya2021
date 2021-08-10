import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Galeri from "./pages/Galeri";
import AdhikaraInfo from "./pages/AdhikaraInfo";
import Faq from "./pages/Faq";
import AnnounceButton from "./components/AnnounceButton";
import Twibbon from "./pages/info/InformasiTwibbon";
import Atribut from "./pages/info/InformasiAtribut";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import createHistory from "history/createBrowserHistory";
import ScrollTop from "./components/ScrollTop";
import ComingSoon from "./components/ComingSoon";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { ArticlesContext } from "./routes/Context";
import { getArticles } from "./routes/FetchArticles";
import FetchInfo from "./pages/info/FetchInfo";

// import Aos from 'aos'/;

export default function App() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
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
                <Switch>
                    <Route exact path={"/"} component={Landing} />
                    <Route path={"/galeri"} component={Galeri} />
                    <Route
                        exact
                        path={"/abhiyaksa-info"}
                        component={AdhikaraInfo}
                    />
                    <Route path={"/faq"} component={Faq} />
                    <Route path={"/raja-apps"} component={ComingSoon} />
                    <Route path={"/maps"} component={ComingSoon} />
                    <Route
                        exact
                        path={"/abhiyaksa-info/info-twibbon"}
                        component={Twibbon}
                    />
                    <Route
                        exact
                        path={"/abhiyaksa-info/info-atribut"}
                        component={Atribut}
                    />
                    <Route path={`/abhiyaksa-info/:slug`}>
                        <FetchInfo />
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
