import React, { useContext, useState, useEffect } from "react";
import FormPerizinan from "../components/perizinan/FormPerizinan";
import Informasi from "../components/cards/Informasi";
import { UserContext } from "../context/UserContext";

const Perizinan = () => {
    const [user, setUser] = useContext(UserContext);
    const [rangkaian, setRangkaian] = useState("oh");
    const [izin, setPerizinan] = useState([]);
    const [status, setStatus] = useState([]);
    const listInformasi = [
        "Perizinan HANYA boleh dilakukan sesuai dengan ketentuan perizinan yang tertera pada link nomor 5",
        "Silahkan isi form dibawah ini untuk melakukan perizinan",
        "Untuk surat pernyataan dan surat izin, upload menjadi 1 folder di google drive, kemudian salin & masukkan link folder drive yang sudah diberi akses public ke dalam form dibawah ini",
        "Surat pernyataan WAJIB ditanda tangani dengan materai Rp. 10000",
    ];

    function isIzin() {
        if (user.perizinan.length > 0) {
            let arr = ["", "", "", ""];
            let arr2 = ["", "", "", ""];
            for (let i = 0; i < user.perizinan.length; i++) {
                arr[i] = user.perizinan[i].rangkaian;
                arr2[i] = user.perizinan[i].status;
            }
            setPerizinan(arr);
            setStatus(arr2);
        }
    }
    useEffect(() => {
        isIzin();
    }, []);

    const getStatus = () => {
        console.log(rangkaian);
        if (rangkaian === "") {
            return <FormPerizinan rangkaianAcara={rangkaian} disable={true} />;
        }
        if (izin.includes(rangkaian)) {
            const index = izin.indexOf(rangkaian);
            if (status[index] === "pending") {
                return (
                    <h6 className="text-center">
                        Perizinan anda sedang kami proses
                    </h6>
                );
            } else if (status[index] === "diterima") {
                return (
                    <h6 className="text-center">
                        Perizinan anda
                        <span className="text-green-600"> DITERIMA :) </span>
                    </h6>
                );
            } else if (status[index] === "ditolak") {
                return (
                    <h6 className="text-center">
                        Perizinan anda
                        <span className="text-red-600"> DITOLAK :( </span>
                    </h6>
                );
            }
        } else {
            return <FormPerizinan rangkaianAcara={rangkaian} />;
        }
    };

    return (
        <>
            <h6>Perizinan</h6>
            <Informasi
                data={listInformasi}
                link="https://drive.google.com/drive/folders/1TBGobhqtBeiYlGv3ikNtstWx9qghvIkV?usp=sharing"
            />
            <section
                id="Kode Presensi"
                className="flex flex-col justify-center text-center space-y-8"
            >
                <h1 className="font-semibold text-3xl dark:text-gray-200">
                    Form Perizinan Rangkain Open House
                </h1>
                {getStatus()}
            </section>
        </>
    );
};

export default Perizinan;
