import React, { useContext, useEffect } from "react";
import Link from "../components/penugasan/Link";
import Informasi from "../components/penugasan/Informasi";
import { UserContext } from "../context/UserContext";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const TugasTwibbon = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();

    const dataInfo = [
        "Mahasiswa Baru 2021 wajib mengupload twibbon RAJA Brawijaya di Instagram pribadi dan mengumpulkan link postingan twibbon pada kolom input link",
        "Gunakan foto terbaik mu untuk menunjukkan rasa bangga menjadi Brawijaya Muda!",
        "Pengumpulan link terakhir pada tanggal 31 Agustus 2021 jam 23.59",
        "TWIBBON RAJA BRAWIJAYA YA SAYANGG, BUKAN TWIBBON PKKMB FAKULTAS. SEMANGATTT <3",
        "Akun instagram untuk pengumpulan post tidak boleh di private, dan pastikan postingan tidak dihapus / di archive hingga tanggal 17 Desember 2021",
    ];

    useEffect(() => {
        if (user.penilaian.nilai_twibbon !== null) {
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
    return (
        <div>
            <h6 className="text-center mt-6">Pengumpulan Tugas Twibbon</h6>
            <div className="flex flex-col-reverse lg:flex-col">
                <Informasi
                    data={dataInfo}
                    link="https://rajabrawijaya.ub.ac.id/#/abhiyaksa-info/info-twibbon"
                />
                <Link linkUrl="https://rajabrawijaya.ub.ac.id/api/maba/penugasan/twibbon" />
            </div>
        </div>
    );
};

export default TugasTwibbon;
