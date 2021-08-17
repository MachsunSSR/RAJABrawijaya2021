import React from "react";
import Essay from "../components/penugasan/Essay";
import Informasi from "../components/penugasan/Informasi";

const TugasDharma = () => {
    const listInfo = [
        'Pengerjaan "Dharma Warta Abiyaksa" dilakukan secara individu.',
        'Perhatikan ketentuan pada saat pengerjaan penugasan "Dharma Warta Abiyaksa".',
        "Infografik dikerjakan pada template yang sudah tersedia. Template infografik dapat diunduh pada laman panduan penugasan “Dharma Warta Abiyaksa”.",
        "Infografik tidak boleh dihapus/diarsipkan/private akun instagram selama 1 semester atau sampai 17 desember 2021.",
    ];
    return (
        <div>
            <h6 className="text-center mt-6">
                Pengumpulan Tugas Dharma Warta Abhiyaksa
            </h6>
            <Informasi
                data={listInfo}
                link="https://drive.google.com/file/d/1FcOf074C5umbAE_7iRaJ8N2H46jOmX-W/view?usp=sharing"
            />
            <Essay />
        </div>
    );
};

export default TugasDharma;
