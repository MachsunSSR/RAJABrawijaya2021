import Jumbotron from "../components/Jumbotron";
import Logo from "../components/Logo";
import Ragam from "../components/Ragam";
import Rangkaian from "../components/Rangkaian";
import Sekilas from "../components/Sekilas";
import Statistik from "../components/Statistik";

const Landing = () => {
    return (
        <div>
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
        </div>
    );
};

export default Landing;
