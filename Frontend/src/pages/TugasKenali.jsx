import { Button } from "@windmill/react-ui";
import React, { useState, useEffect, useContext } from "react";
import Informasi from "../components/penugasan/Informasi";
import Pilgan from "../components/penugasan/Pilgan";
import { useTimer } from "react-timer-hook";
import { cekJadwalPilgan } from "../services/Penugasan";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import $ from "jquery";
import swal from "sweetalert";

const TugasKenali = () => {
    const [isMulai, setIsMulai] = useState(false);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 2700);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
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
        // if (!cekJadwalPilgan(user.cluster)) {
        //     history.push("/apps");
        // }
    }, []);

    function startTimer() {
        start();
        console.log(seconds);
        setIsMulai(true);
    }

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
        "Kerjakan “kenali brawijaya” secara individu",
        "Perhatikan pembagian cluster dan tanggal pengerjaannya ",
        "Pengerjaan diberi waktu 45 menit ",
        "Akan ada 15 soal yang berbeda-beda, jadi jangan sampai kerjasama ya! ",
        "Informasi dapat dicari dari seputar website UB, instagram Raja brawijaya dan EM UB, serta dari buku panduan PKM 2021",
    ];

    return (
        <div>
            <h6 className="text-center mt-6">
                Pengerjaan Tugas Kenali Brawijaya
            </h6>

            <Informasi
                data={listInfo}
                link="https://drive.google.com/file/d/1FcGB93a25P8FsEF3ov6af_dlFbrbmPyN/view?usp=sharing"
            />
            {isMulai ? (
                <>
                    <p className="text-2xl font-bold right-10 lg:right-20 lg:top-32 absolute dark:text-gray-200">
                        <span>{minutes}</span>:<span>{seconds}</span>
                    </p>
                    <Pilgan />
                </>
            ) : (
                <Button
                    className="w-full px-8 lg:px-20"
                    onClick={() => startTimer()}
                    disabled={true}
                >
                    Kerjakan
                </Button>
                //     <Button
                //     className="w-full px-8 lg:px-20"
                //     onClick={() => startTimer()}
                //     disabled={cekJadwalPilgan(user.cluster)}
                // >
                //     Kerjakan
                // </Button>
            )}
        </div>
    );
};

export default TugasKenali;
