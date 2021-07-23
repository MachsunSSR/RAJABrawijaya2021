import React, { useState, useEffect } from "react";
import { Button } from "@windmill/react-ui";

const TimerCard = () => {
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);

    let interval;
    const day = 24 * 60 * 60 * 1000;

    const countdownDate = new Date("September 25, 2021");

    //Timer Interval
    const countDown = () => {
        const now = new Date();
        const jarakWaktu = countdownDate - now;
        if (jarakWaktu < 0) {
            //Stop Timer
            clearInterval(interval.current);
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

    return (
        <section className="p-5 rounded shadow-md space-y-4 px-5" id="cardBox">
            <h3 className="text-center" id="cardJudul">
                Judul
            </h3>
            <div className="flex justify-center gap-2" id="containerClock">
                <span className="space-y-1" id="dayContainer">
                    <div
                        className="flex items-center justify-center gap-1"
                        id="dayClock"
                    >
                        <h4>{timerDays}</h4>
                    </div>
                    <h4 className="text-center">Hari</h4>
                </span>
                <span>:</span>
                <span className="space-y-1" id="dayContainer">
                    <div
                        className="flex items-center justify-center gap-1"
                        id="dayClock"
                    >
                        <h4>{timerHours}</h4>
                    </div>
                    <h4 className="text-center">Jam</h4>
                </span>
                <span>:</span>
                <span className="space-y-1" id="dayContainer">
                    <div
                        className="flex items-center justify-center gap-1"
                        id="dayClock"
                    >
                        <h4>{timerMinutes}</h4>
                    </div>
                    <h4 className="text-center">Menit</h4>
                </span>
            </div>
            <Button className="w-full">Kerjakan</Button>
        </section>
    );
};

export default TimerCard;
