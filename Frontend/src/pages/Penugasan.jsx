import React from "react";
import TimerCard from "../components/cards/TimerCard";

export default function Penugasan() {
    return (
        <>
            <h6>Penugasan</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-8">
                <TimerCard tanggal="August 23, 2021" judul="Twibbon RAJA" />
                <TimerCard tanggal="August 31, 2021" judul="TTS RAJA" />
                <TimerCard tanggal="September 20, 2021" judul="Essay RAJA" />
                <TimerCard
                    tanggal="August 18, 2021"
                    judul="Video Tentang Aku"
                />
                <TimerCard tanggal="August 18, 2021" judul="Video Kelompok" />
            </div>
        </>
    );
}
