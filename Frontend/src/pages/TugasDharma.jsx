import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Essay from "../components/penugasan/Essay";
import Informasi from "../components/penugasan/Informasi";
import { UserContext } from "../context/UserContext";

const TugasDharma = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (user.penilaian.nilai_dharma_warta !== null) {
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
    }, []);

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
                link="https://drive.google.com/drive/folders/1z-EXCGoLibv1sjB51LFCHLzpxDTXZRYd"
            />
            <Essay />
        </div>
    );
};

export default TugasDharma;
