import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Informasi from "../components/penugasan/Informasi";
import Link from "../components/penugasan/Link";
import { UserContext } from "../context/UserContext";

const TugasGaung = () => {
    const [user, setUser] = useContext(UserContext);
    const [tema, setTema] = useState("");
    const history = useHistory();

    const acakTema = () => {
        if (
            user.cluster == null ||
            user.kelompok == null ||
            user.cluster == undefined ||
            user.kelompok == undefined ||
            user.cluster == 0 ||
            user.kelompok == 0
        ) {
            setTema("");
            return;
        }
        const angka = Math.abs(user.cluster + user.kelompok);
        if (angka % 5 == 0) {
            setTema("Kuliner Daerah");
        } else if (angka % 4 == 0) {
            setTema("Cagar budaya / tempat bersejarah");
        } else if (angka % 3 == 0) {
            setTema("Tarian daerah");
        } else if (angka % 2 == 0) {
            setTema("Tradisi/ upacara adat");
        } else if (angka % 1 == 0) {
            setTema("Lagu & Alat music daerah");
        } else {
            setTema("");
        }
    };

    useEffect(() => {
        if (user.penilaian.nilai_gaung_budaya !== null) {
            // swal(
            //     "Anda sudah mengerjakan tugasnya",
            //     `Eitss kamu udah ngerjain tugas ini. kesempatan kamu cuma sekali, gaada kesempatan kedua. makanya kalo ada kesempatan jangan disia siain :(`,
            //     "warning"
            // );
            // history.push("/apps/penugasan");
            swal(
                "Kamu udah ngumpulin!",
                "Kalau sudah menginputkan link post twibbon RAJA yang benar, anda tidak perlu mengirim ulang. tetapi apabila anda salah mengirim link, silahkan kirim link yang terbaru. jangan salah lagi yaa.. aku udah ngasih kesempatan ke 2 nih buat kamu :(",
                "warning"
            );
        }
        acakTema();
        swal(
            "Tema anda berubah?",
            `Kalo kamu uda ngerjain tp tema nya berubah, gpp kumpulin aja. Tapi kalo belum ngerjain, pakai tema yang terbaru. Semangat ya lov <3`,
            "warning"
        );
    }, [user]);

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
                link="https://drive.google.com/drive/folders/1XGFV1ZoJbl2geaVdQIqEdGwfSI9fkQ4W"
            />
            <h6 className="text-center my-3">Tema anda : {tema}</h6>
            <Link linkUrl="https://rajabrawijaya.ub.ac.id/api/maba/penugasan/gaung_budaya" />
        </div>
    );
};

export default TugasGaung;
