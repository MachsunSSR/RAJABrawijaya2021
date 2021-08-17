import React, { useContext, useState, useEffect } from "react";
import FormPerizinan from "../components/perizinan/FormPerizinan";
import Informasi from "../components/penugasan/Informasi";
import { UserContext } from "../context/UserContext";

const Perizinan = () => {
    const [user, setUser] = useContext(UserContext);
    const [rangkaian, setRangkaian] = useState("");
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

    const listRangkaian = [
        { judul: "Gladi Bersih PKKMB", endpoint: "gladi" },
        { judul: "Upacara Pembukaan", endpoint: "upacara" },
        { judul: "PKKMB Day 1", endpoint: "pkkmb_satu" },
        { judul: "PKKMB Day 2", endpoint: "pkkmb_dua" },
    ];

    const getStatus = (rangkaian) => {
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
                        Perizinan anda{" "}
                        <span className="text-green-600">DITERIMA :) </span>
                    </h6>
                );
            } else if (status[index] === "ditolak") {
                return (
                    <h6 className="text-center">
                        Perizinan anda{" "}
                        <span className="text-red-600">DITOLAK :( </span>
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
                link="https://drive.google.com/drive/folders/1wgaNnm6u6r2HB3-AiDhjqLYSoNFdkBGF?usp=sharing"
            />
            <section
                id="Kode Presensi"
                className="flex flex-col justify-center text-center space-y-8"
            >
                <h1 className="font-semibold text-3xl dark:text-gray-200">
                    Pilih Rangkaian untuk perizinan
                </h1>
                <div
                    id="containerCard"
                    className="grid grid-cols-2 xl:grid-cols-4 sm:px-20 gap-y-6 justify-items-center"
                >
                    {listRangkaian.map((data) => {
                        return (
                            <>
                                <button
                                    className={`rounded-lg ${
                                        rangkaian === data.endpoint
                                            ? "bg-purple-600 text-white"
                                            : "hover:text-white bg-white dark:bg-gray-800 border-2 border-purple-600 text-black dark:text-gray-200"
                                    } shadow-md flex flex-col justify-center items-center w-36 h-36 sm:w-48 sm:h-48 cursor-pointer  font-semibold px-1 bg-transition duration-300 hover:bg-purple-600`}
                                    onClick={() => setRangkaian(data.endpoint)}
                                >
                                    {data.judul}
                                </button>
                            </>
                        );
                    })}
                </div>
                {getStatus(rangkaian)}
            </section>
        </>
    );
};

export default Perizinan;
