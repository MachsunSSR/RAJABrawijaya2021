import React from "react";
import TimerCard from "../components/cards/TimerCard";
import { DataPenugasan } from "../services/Penugasan";

export default function Penugasan() {
    return (
        <>
            <h6>Penugasan</h6>
            <p className="mb-10 text-gray-600 italic font-bold dark:text-gray-300 text-center lg:text-left">
                "Aduhh kok udah penugasan sihhh" <br /> Ndak og, kalian fokus
                aja dulu sama kegiatan PKKMB RAJA Brawijaya. semangat yaaaa
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-8">
                {DataPenugasan.map((data) => {
                    return (
                        <TimerCard
                            tanggal={data.deadline}
                            judul={data.judul}
                            route={data.route}
                        />
                    );
                })}
            </div> */}
        </>
    );
}
