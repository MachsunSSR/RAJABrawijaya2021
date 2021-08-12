import React from "react";
import Essay from "../components/penugasan/Essay";
import Informasi from "../components/penugasan/Informasi";

const TugasDharma = () => {
    return (
        <div>
            <h6 className="text-center mt-6">
                Pengumpulan Tugas Dharma Warta Abhiyaksa
            </h6>
            <Informasi />
            <Essay />
        </div>
    );
};

export default TugasDharma;
