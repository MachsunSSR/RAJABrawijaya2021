import React from "react";
import PresensiCard from "../components/cards/PresensiCard";

const Presensi = () => {
    return (
        <>
            <h6>Presensi</h6>
            <section
                id="Kode Presensi"
                className="flex flex-col justify-center text-center space-y-8"
            >
                <h1 className="font-semibold text-3xl dark:text-gray-200">
                    Presensi RAJA Brawijaya
                </h1>
                <p className="text-gray-400">
                    presensi hanya dapat dilakukan pada jam yang telah
                    ditentukan oleh panitia
                </p>
                <div
                    id="containerCard"
                    className="flex flex-wrap gap-8 lg:space-x-16 justify-center items-center"
                >
                    <PresensiCard judul="PKKMB" kode="RAJAPKKMB2021" />
                    <PresensiCard judul="PBPK" kode="RAJAPBPK2021" />
                    <PresensiCard judul="Open House" kode="RAJAOH2021" />
                </div>
            </section>
        </>
    );
};

export default Presensi;
