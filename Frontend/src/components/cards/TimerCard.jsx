import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@windmill/react-ui";

const TimerCard = ({ tanggal, judul, route, latarBelakang }) => {
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    let interval;
    const day = 24 * 60 * 60 * 1000;

    const countdownDate = new Date(tanggal);

    //Timer Interval
    const countDown = () => {
        const now = new Date();
        const jarakWaktu = countdownDate - now;
        if (jarakWaktu < 0) {
            //Stop Timer
            clearInterval(interval);
            return;
        }
        const hari = ("0" + Math.floor(jarakWaktu / day)).slice(-2);
        const jam = ("0" + Math.floor((jarakWaktu % day) / 3600000)).slice(-2);
        const menit = ("0" + Math.floor((jarakWaktu % 3600000) / 60000)).slice(
            -2
        );
        // const detik = ("0" + Math.floor((jarakWaktu % 6000) / 1000)).slice(-2);
        setTimerDays(hari);
        setTimerHours(jam);
        setTimerMinutes(menit);
        // setTimerMinutes(detik);
    };

    //Fungsi timer
    const startTimer = () => {
        countDown(); //Fungsi Countdown dijalankan setidaknya sekali sebelum di delay 5 detik sekali
        setInterval(() => {
            countDown();
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(countDown);
    }, []);

    useEffect(() => {});

    return (
        <section
            className="p-5 rounded shadow-md space-y-4 px-5 bg-white dark:bg-gray-800"
            id="cardBox"
        >
            <h3
                className="text-center text-2xl font-bold dark:text-gray-200"
                id="cardJudul"
            >
                {judul}
            </h3>
            <div className="flex justify-center space-x-2" id="containerClock">
                <span className="space-y-1" id="dayContainer">
                    <div
                        className="flex items-center justify-center gap-1"
                        id="dayClock"
                    >
                        <h4 className="text-4xl font-bold dark:text-gray-200">
                            {timerDays}
                        </h4>
                    </div>
                    <h4 className="text-center dark:text-gray-400">Hari</h4>
                </span>
                <span className="text-4xl font-bold dark:text-gray-200">:</span>
                <span className="space-y-1" id="dayContainer">
                    <div
                        className="flex items-center justify-center gap-1"
                        id="dayClock"
                    >
                        <h4 className="text-4xl font-bold dark:text-gray-200">
                            {timerHours}
                        </h4>
                    </div>
                    <h4 className="text-center dark:text-gray-400">Jam</h4>
                </span>
                <span className="text-4xl font-bold dark:text-gray-200">:</span>
                <span className="space-y-1" id="dayContainer">
                    <div
                        className="flex items-center justify-center gap-1"
                        id="dayClock"
                    >
                        <h4 className="text-4xl font-bold dark:text-gray-200">
                            {timerMinutes}
                        </h4>
                    </div>
                    <h4 className="text-center dark:text-gray-400">Menit</h4>
                </span>
            </div>
            <Button className="w-full mt-5" onClick={() => openModal()}>
                Kerjakan
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader className="text-xl lg:text-3xl font-bold text-center">
                    Latar Belakang Tugas :
                </ModalHeader>
                <ModalBody className="py-5 text-center lg:text-lg">
                    {latarBelakang}
                </ModalBody>
                <ModalFooter className="w-full flex flex-col text-center ml-1">
                    <NavLink exact to={route} className="w-full">
                        <Button className="w-full">Kerjakan</Button>
                    </NavLink>
                </ModalFooter>
                <div className="py-2"></div>
            </Modal>
        </section>
    );
};

export default TimerCard;
