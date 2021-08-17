import React from "react";
import Informasi from "../components/penugasan/Informasi";
import Link from "../components/penugasan/Link";

const TugasBiskuit = () => {
    const listArr = [
        "Mahasiswa Baru 2021 wajib mengupload Poster BISKUIT di feeds dan Video Presentasi BISKUIT di IGTV beserta caption yang sudah ditentukan di Instagram pribadi ",
        "Poster berukuran 4:5 memuat penjelasan konsep wirausaha dengan template border poster dan logo yang sudah diberikan.",
        "Video presentasi kelompok berdurasi minimal 5 menit maksimal 10 menit memuat penjelasan poster sesuai panduan penugasan beserta subtitle dengan menggunakan baju bebas sopan",
        "Setelah memposting poster dan video, salin link masing-masing postingan Instagram tersebut dan kumpulkan melalui link di bawah ini",
        "Pengumpulan link terakhir pada tanggal 12 September 2021 jam 23.59",
        "Akun Instagram untuk pengumpulan post tidak boleh dihapus/diarsip/private akun Instagram sampai 17 Desember 2021",
    ];
    return (
        <div>
            <h6 className="text-center mt-6">Pengumpulan Tugas Biskuit</h6>
            <Informasi
                data={listArr}
                link="https://drive.google.com/file/d/1HmFBVmBf1uWDsPQEiUpu4jQcpnjS9hFf/view?usp=sharing"
            />
            <Link />
        </div>
    );
};

export default TugasBiskuit;
