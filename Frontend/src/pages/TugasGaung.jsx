import React from "react";
import Informasi from "../components/penugasan/Informasi";
import Link from "../components/penugasan/Link";

const TugasGaung = () => {
    return (
        <div>
            <h6 className="text-center mt-6">
                Pengumpulan Tugas Gaung Budaya Nusantara
            </h6>
            <Informasi />
            <Link />
        </div>
    );
};

export default TugasGaung;
