import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Informasi from "../components/penugasan/Informasi";
import Link from "../components/penugasan/Link";
import { UserContext } from "../context/UserContext";

const TugasTransformer = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();

    // useEffect(() => {
    //     if (user.penilaian.nilai_transformer !== null) {
    //         swal(
    //             "Anda sudah mengerjakan tugasnya",
    //             `Eitss kamu udah ngerjain tugas ini. kesempatan kamu cuma sekali, gaada kesempatan kedua. makanya kalo ada kesempatan jangan disia siain :(`,
    //             "warning"
    //         );
    //         history.push("/apps/penugasan");
    //     }
    // }, []);

    const dataInfo = [
        "Mahasiswa Baru 2021 wajib mengupload Video TRANSFORMER (Transisi For Merdeka) beserta caption yang sudah ditentukan di IGTV Instagram pribadi ",
        "Mahasiswa baru menggunakan baju atasan putih bawahan hitam ke baju batik bebas sopan",
        "Video berdurasi maksimal 2 menit dengan disertakan bumper RAJA Brawijaya di awal video, sound jingle RAJA Brawijaya, dan jargon “Kita Satu Brawijaya” di akhir video",
        "Setelah memposting video, salin link postingan Instagram tersebut dan kumpulkan melalui link di bawah ini",
        "Pengumpulan link terakhir pada tanggal 24 September 2021 jam 23.59",
        "Akun Instagram untuk pengumpulan post tidak boleh dihapus/diarsip/private akun Instagram sampai 17 Desember 2021",
    ];
    return (
        <div>
            <h6 className="text-center mt-6">Pengumpulan Tugas Transformer</h6>
            <Informasi
                data={dataInfo}
                link="https://drive.google.com/drive/folders/1eN_6FU1kQ6w73U7W5u0OWDeR0tOQdeaA"
            />
            <Link linkUrl="https://rajabrawijaya.ub.ac.id/api/maba/penugasan/transformer" />
        </div>
    );
};

export default TugasTransformer;
