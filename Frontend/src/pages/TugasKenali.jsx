import React from "react";
import Informasi from "../components/penugasan/Informasi";
import Pilgan from "../components/penugasan/Pilgan";

const TugasKenali = () => {
    return (
        <div>
            <h6 className="text-center mt-6">
                Pengerjaan Tugas Kenali Brawijaya
            </h6>
            <Informasi />
            <Pilgan />
        </div>
    );
};

export default TugasKenali;
