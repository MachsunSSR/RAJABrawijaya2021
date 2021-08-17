import React from "react";
import Informasi from "../components/penugasan/Informasi";
import Link from "../components/penugasan/Link";

const TugasTransformer = () => {
    const dataInfo = [
        "Mahasiswa Baru 2021 wajib mengupload Video TRANSFORMER (Transisi For Merdeka) beserta caption yang sudah ditentukan di IGTV Instagram pribadi ",
        "Mahasiswa baru menggunakan baju atasan putih bawahan hitam ke baju batik bebas sopan",
        "Video berdurasi maksimal 2 menit dengan disertakan bumper RAJA Brawijaya di awal video, sound jingle RAJA Brawijaya, dan jargon “Kita Satu Brawijaya” di akhir video",
        "Setelah memposting video, salin link postingan Instagram tersebut dan kumpulkan melalui link di bawah ini",
        "Pengumpulan link terakhir pada tanggal 12 September 2021 jam 23.59",
        "Akun Instagram untuk pengumpulan post tidak boleh dihapus/diarsip/private akun Instagram sampai 17 Desember 2021",
    ];
    return (
        <div>
            <h6 className="text-center mt-6">Pengumpulan Tugas Transformer</h6>
            <Informasi
                data={dataInfo}
                link="https://drive.google.com/file/d/1HmFBVmBf1uWDsPQEiUpu4jQcpnjS9hFf/view?usp=sharing"
            />
            <Link />
        </div>
    );
};

export default TugasTransformer;
