import React, { useContext } from "react";
import DashboardCard from "../components/cards/DashboardCard";
import ProfileCard from "../components/cards/ProfileCard";
import SosialCard from "../components/cards/SosialCard";
import KelompokCard from "../components/cards/KelompokCard";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);
    // console.log(user);
    const PKKMB = new Date("August 18, 2021");
    const now = new Date();
    const countdown = PKKMB - now;
    const day = 24 * 60 * 60 * 1000;
    const hari = Math.floor(countdown / day);

    return (
        <>
            <h6>Dashboard RAJA Apps</h6>
            <section
                id="containerCards"
                className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-4 space-x-0"
            >
                <DashboardCard judul="Tugas Anda" total="0" />
                <DashboardCard judul="Countdown PKKMB" total={`H-${hari}`} />
            </section>
            <section
                id="containerBawah"
                className="grid grid-cols-1 lg:grid-cols-2 justify-center py-10 gap-8"
            >
                <KelompokCard listKelompok={user.teman_sekelompok} />
                <div
                    id="dataSosmed"
                    className="space-y-10 row-start-1 lg:row-start-auto"
                >
                    <ProfileCard
                        nama={user.nama}
                        fakultas={user.fakultas}
                        nim={user.nim}
                        prodi={user.prodi}
                        kelompok={user.kelompok}
                        cluster={user.cluster}
                    />
                    <SosialCard />
                </div>
            </section>
        </>
    );
};

export default Dashboard;
