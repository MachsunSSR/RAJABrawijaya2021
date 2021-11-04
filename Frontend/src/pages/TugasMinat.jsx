import { Button, Input } from "@windmill/react-ui";
import React, { useState, useEffect, useContext } from "react";
import Informasi from "../components/penugasan/Informasi";
import PilganMinat from "../components/penugasan/PilganMinat";
import { useTimer } from "react-timer-hook";
import { cekJadwalPilgan } from "../services/Penugasan";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import $ from "jquery";
import swal from "sweetalert";

const TugasMinat = () => {
    const [isMulai, setIsMulai] = useState(false);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1800);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const [checkedItems, setCheckedItems] = useState({});
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp: time,
        autoStart: false,
        onExpire: () => onTimesUp(),
    });

    useEffect(() => {
        if (user.penilaian.nilai_kenali_minat !== null) {
            swal(
                "Anda sudah mengerjakan tugasnya",
                `Eitss kamu udah ngerjain tugas ini. kesempatan kamu cuma sekali, gaada kesempatan kedua. makanya kalo ada kesempatan jangan disia siain :(`,
                "warning"
            );
            history.push("/apps/penugasan");
        }
        // console.log(cekJadwalPilgan(user.cluster));
    }, []);

    useEffect(() => {
        console.log("checkedItems: ", checkedItems);
    }, [checkedItems]);

    function startTimer() {
        start();
        console.log(seconds);
        setIsMulai(true);
    }

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    function onTimesUp() {
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/kenali_brawijaya",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                nilai: 40,
            },
            success: function (res) {
                if (res.status === "success") {
                    swal(
                        "WAKTU HABIS!!",
                        `Waktu kamu habis :( pekerjaan kamu sudah dinilai`,
                        "warning"
                    );
                    history.push("/apps");
                } else {
                    swal(
                        "Whoopsie.. Gagal mengumpulkan :(",
                        `Kirimkan keluhan dan cerita error mu di haloselma.ub.ac.id`,
                        "error"
                    );
                }
                // successLogin();
            },
            statusCode: {
                401: () => {
                    swal(
                        "Silahkan Login Kembali",
                        `Sesi kamu udah habis, jadi harus login lagi. maaf banget, setelah login error ini gaakan terulangi lagi`,
                        "warning"
                    );
                },
            },
            error: () => {
                swal(
                    "Ada yang salah dengan server nya",
                    `Kalau anda melihat ini segera laporkan ke panitia Rabraw`,
                    "error"
                );
            },
        });
    }

    const listInfo = [
        "Kerjakan “kenali minat brawijaya” secara individu",
        "Perhatikan pembagian cluster dan tanggal pengerjaannya",
        "Pengerjaan diberi waktu 30 menit ",
        "Akan ada 10 soal",
        "Informasi dapat dicari dari seputar website RAJA Brawijaya dan UKM UB 2021",
    ];

    const hobbies = [
        {
            name: "Olahraga",
            key: "Olahraga",
            label: "Olahraga",
        },
        {
            name: "Khusus",
            key: "Khusus",
            label: "Khusus",
        },
        {
            name: "Kesenian",
            key: "Kesenian",
            label: "Kesenian",
        },
        {
            name: "Penalaran",
            key: "Penalaran",
            label: "Penalaran",
        },
        {
            name: "Kesejahteraan",
            key: "Kesejahteraan",
            label: "Kesejahteraan",
        },
    ];

    return (
        <div>
            <h6 className="text-center mt-6">
                Pengerjaan Tugas Kenali Minat Brawijaya
            </h6>

            <Informasi
                data={listInfo}
                link="https://drive.google.com/drive/folders/1-JryaNArX_wxhXSVNQqywgI23StTn4OV?usp=sharing"
            />
            {isMulai ? (
                <>
                    <p className="text-2xl font-bold right-10 lg:right-20 top-32 absolute dark:text-gray-200">
                        <span>{minutes}</span>:<span>{seconds}</span>
                    </p>
                    <PilganMinat keminatans={checkedItems} />
                </>
            ) : (
                // <Button
                //     className="w-full px-8 lg:px-20"
                //     onClick={() => startTimer()}
                // >
                //     Kerjakan
                // </Button>
                <>
                    <form className="space-y-8">
                        <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                            Pilih Keminatan :
                        </p>
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-y-4">
                            {hobbies.map((item) => (
                                <label
                                    key={item.key}
                                    className=" text-lg dark:text-gray-200"
                                >
                                    <span className="mr-5">{item.name}</span>
                                    <Input
                                        type="checkbox"
                                        className="w-6 h-6"
                                        name={item.name}
                                        checked={checkedItems[item.name]}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                        <Button
                            className="w-full px-8 lg:px-20"
                            onClick={() => startTimer()}
                        >
                            Kerjakan
                        </Button>
                    </form>
                </>
            )}
            <div className="py-10"></div>
        </div>
    );
};

export default TugasMinat;
