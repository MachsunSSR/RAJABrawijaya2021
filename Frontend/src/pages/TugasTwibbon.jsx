import React from "react";
import Link from "../components/penugasan/Link";
import Informasi from "../components/penugasan/Informasi";

const TugasTwibbon = () => {
    const dataInfo = [
        "Mahasiswa Baru 2021 wajib mengupload twibbon RAJA Brawijaya di Instagram pribadi dan mengumpulkan link postingan twibbon pada kolom input link",
        "Gunakan foto terbaik mu untuk menunjukkan rasa bangga menjadi Brawijaya Muda!",
        "Pengumpulan link terakhir pada tanggal 19 Agustus 2021 jam 23.59",
        "Akun instagram untuk pengumpulan post tidak boleh di private, dan pastikan postingan tidak dihapus / di archive hingga tanggal 17 Desember 2021",
    ];
    return (
        <div>
            <h6 className="text-center mt-6">Pengumpulan Tugas Twibbon</h6>
            <div className="flex flex-col-reverse lg:flex-col">
                <Informasi
                    data={dataInfo}
                    link="https://rajabrawijaya.ub.ac.id/#/abhiyaksa-info/info-twibbon"
                />
                <Link />
            </div>
        </div>
    );
};

export default TugasTwibbon;
