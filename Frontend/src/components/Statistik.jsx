import React from "react";
import Sections from "./Sections";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Statistik = () => {
    return (
        <Sections
            propsClass={"justify-center items-center relative min-h-info"}
            propsClass2={"w-full"}
        >
            <div className="relative py-20 xs:py-10 sm:py-10 ">
                <div className="bg-white flex xs:flex-col sm:flex-col py-25 xs:py-10 rounded-lg xs:space-y-7">
                    <div className="cursor-pointer flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/maba.png`}
                            alt="maba"
                            width="80px"
                        />
                        <CountUp end={13214} duration={4} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg ex:text-xl exl:text-xl">
                            Mahasiswa Baru
                        </h1>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/panitia.png`}
                            alt="maba"
                            width="80px"
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
                        <h1 className="text-purpleMaghrib text-lg ex:text-xl exl:text-xl">
                            Panitia RABRAW
                        </h1>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fakultas.png`}
                            alt="maba"
                            width="80px"
                        />
                        <CountUp end={16} duration={2} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg ex:text-xl exl:text-xl">
                            Fakultas
                        </h1>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center flex-grow-default">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/prodi.png`}
                            alt="maba"
                            width="80px"
                        />
                        <CountUp end={175} duration={2} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span
                                        ref={countUpRef}
                                        className="text-5xl text-orange my-3"
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h1 className="text-purpleMaghrib text-lg ">
                            Program Studi
                        </h1>
                    </div>
                </div>
            </div>
        </Sections>
    );
};

export default Statistik;
