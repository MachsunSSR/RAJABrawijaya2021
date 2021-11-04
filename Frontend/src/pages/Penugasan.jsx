import React, { useContext, useEffect, useState } from "react";
import TimerCard from "../components/cards/TimerCard";
import { UserContext } from "../context/UserContext";
import { DataPenugasan } from "../services/Penugasan";

export default function Penugasan() {
    const [jadwalKenali, setJadwalKenali] = useState("");
    const [user, setUser] = useContext(UserContext);
    const [dataPenugasan, setDataPenugasan] = useState(DataPenugasan);

    useEffect(() => {
        for (const [index, [key, value]] of Object.entries(
            Object.entries(user.penilaian)
        )) {
            dataPenugasan[index].nilai = value;
        }

        setJadwalKenali("3 September, 2021");
        console.log(jadwalKenali);
    }, [user]);
    return (
        <>
            <h6>Penugasan</h6>
            {/* <p className="mb-10 text-gray-600 italic font-bold dark:text-gray-300 text-center lg:text-left">
                "Aduhh kok udah penugasan sihhh" <br /> Ndak og, kalian fokus
                aja dulu sama kegiatan PKKMB RAJA Brawijaya. semangat yaaaa
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-8">
                {dataPenugasan.map((data) => {
                    return data.nilai == null ? (
                        <TimerCard
                            tanggal={data.deadline}
                            judul={data.judul}
                            latarBelakang={data.latarBelakang}
                            route={data.route}
                        />
                    ) : (
                        <></>
                    );
                    // return (
                    //     <TimerCard
                    //         tanggal={data.deadline}
                    //         judul={data.judul}
                    //         latarBelakang={data.latarBelakang}
                    //         route={data.route}
                    //     />
                    // );
                })}
            </div>
        </>
    );
}
