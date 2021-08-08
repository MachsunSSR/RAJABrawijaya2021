import React, { useEffect } from "react";
import Sections from "./Sections";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Statistik = () => {
    // const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [count3, setCount3] = useState(0);
    // const [count4, setCount4] = useState(0);
    // const handleMouse = (maba, panitia, fakultas, prodi) => {
    //     let minimum = 0;

    //     const counter1 = (minimum, maximum) => {
    //         for (let count = minimum; count <= maximum; count++) {
    //             setTimeout(() => {
    //                 setCount1(count);
    //             }, 1000);
    //         }
    //     };
    //     const counter2 = (minimum, maximum) => {
    //         for (let count = minimum; count <= maximum; count++) {
    //             setTimeout(() => {
    //                 setCount2(count);
    //             }, 500);
    //         }
    //     };
    //     const counter3 = (minimum, maximum) => {
    //         for (let count = minimum; count <= maximum; count++) {
    //             setTimeout(() => {
    //                 setCount3(count);
    //             }, 600);
    //         }
    //     };
    //     const counter4 = (minimum, maximum) => {
    //         for (let count = minimum; count <= maximum; count++) {
    //             setTimeout(() => {
    //                 setCount4(count);
    //             }, 700);
    //         }
    //     };
    //     counter1(minimum, maba);
    //     counter2(minimum, panitia);
    //     counter3(minimum, fakultas);
    //     counter4(minimum, prodi);
    // };

    // useEffect(() => {
    //     Aos.init();
    // }, []);

    return (
        <Sections
            propsClass={"justify-center items-center relative"}
            propsClass2={"w-full"}
        >
            <div className="relative py-25 xs:py-10 sm:py-10 ">
                <div className="bg-white flex xs:flex-col sm:flex-col py-15 rounded-lg xs:space-y-7">
                    <div className="flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/maba.png`}
                            alt="maba"
                            width="70px"
                        />
                        <CountUp end={13214} duration={3} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg">
                            Mahasiswa Baru
                        </h1>
                    </div>
                    <div className="flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/panitia.png`}
                            alt="maba"
                            width="70px"
                        />
                        <CountUp end={283} duration={3} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg">
                            Panitia RABRAW
                        </h1>
                    </div>
                    <div className="flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fakultas.png`}
                            alt="maba"
                            width="70px"
                        />
                        <CountUp end={16} duration={3} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg">Fakultas</h1>
                    </div>
                    <div className="flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/prodi.png`}
                            alt="maba"
                            width="70px"
                        />
                        <CountUp end={175} duration={3} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg">
                            Program Studi
                        </h1>
                    </div>
                </div>
            </div>
        </Sections>
    );
};

export default Statistik;
