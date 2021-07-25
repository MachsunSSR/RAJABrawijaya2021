import React from "react";
import DashboardCard from "../components/cards/DashboardCard";
import ProfileCard from "../components/cards/ProfileCard";
import SosialCard from "../components/cards/SosialCard";
import KelompokCard from "../components/cards/KelompokCard";

const Dashboard = () => {
    return (
        <>
            <h6>Dashboard RAJA</h6>
            <section
                id="containerCards"
                className="grid md:grid-cols-4 grid-cols-2 gap-8 justify-center items-center"
            >
                <DashboardCard judul="Tugas Yang Belum Dikerjakan" />
                <DashboardCard judul="CountodwnRangkaian Selanjutnya" />
                <DashboardCard judul="UKM Yang Diminati" />
                <DashboardCard judul="Keminatan MABA" />
            </section>
            <section
                id="containerBawah"
                className="grid grid-cols-1 lg:grid-cols-2 justify-center py-10 gap-8"
            >
                <KelompokCard />
                <div
                    id="dataSosmed"
                    className="space-y-10 row-start-1 lg:row-start-auto"
                >
                    <ProfileCard />
                    <SosialCard />
                </div>
            </section>
        </>
    );
};

export default Dashboard;
