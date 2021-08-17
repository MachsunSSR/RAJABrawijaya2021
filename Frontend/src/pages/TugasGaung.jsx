import React from "react";
import Informasi from "../components/penugasan/Informasi";
import Link from "../components/penugasan/Link";

const TugasGaung = () => {
    const listInfo = [
        "Mahasiswa baru membuat video pemaparan mengenai budaya yang berasal/ada di daerah masing-masing, sesuai subtopik yang telah ditentukan",
        "Mahasiswa baru wajib mengunggah video di Instagram utama dan publik melalui fitur IGTV",
        "Setelah memposting video, salin link postingan instagram tersebut dan kumpulkan pada kolom di bawah ini",
        'Perhatikan panduan dengan seksama! Perhatikan pula bagian yang wajib untuk disampaikan dan dicantumkan pada penugasan "Gaung Budaya Nusantara"!',
        "Penugasan dikumpulkan sesuai waktu yang tercantum pada panduan penugasan dengan memperhatikan cluster masing-masing",
        "Akun Instagram untuk pengumpulan video tidak boleh di private dan video tidak boleh dihapus serta diarsipkan hingga 17 Desember 2021",
    ];
    return (
        <div>
            <h6 className="text-center mt-6">
                Pengumpulan Tugas Gaung Budaya Nusantara
            </h6>
            <Informasi
                data={listInfo}
                link="https://drive.google.com/file/d/1FxMXl-kiT-uKJh_Ubyx--SllOEimkSfJ/view?usp=sharing"
            />
            <Link />
        </div>
    );
};

export default TugasGaung;
