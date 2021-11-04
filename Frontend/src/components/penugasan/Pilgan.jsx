import React, { useState, useEffect } from "react";
import { Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { pilgan } from "../../services/Penugasan";
import $ from "jquery";
import { useHistory } from "react-router-dom";

const Pilgan = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [dataJawaban, setDataJawaban] = useState(pilgan);
    const [dataPilganAcak, setDataPilganAcak] = useState([]);

    function shuffleJawaban(arr) {
        for (let i = 0; i < arr.length; i++) {
            const answer = arr[i].jawaban.splice(0, 1);
            arr[i].jawaban = getRandom(arr[i].jawaban, 3);
            arr[i].jawaban.push(answer[0]);
            arr[i].jawaban = shuffle(arr[i].jawaban);
        }
        return arr;
    }

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError(
                "getRandom: more elements taken than available"
            );
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    useEffect(() => {
        console.log(pilgan);
        setDataPilganAcak([...shuffleJawaban(dataJawaban)]);
    }, []);

    const history = useHistory();

    const onSubmit = (data) => {
        setLoading(true);
        let score = 55;
        // console.log(data);
        for (const answers in data) {
            if (data[answers] == "true") {
                score += 3;
            }
        }

        console.log(score);

        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/penugasan/kenali_brawijaya",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                nilai: score,
            },
            success: function (res) {
                if (res.status === "success") {
                    swal(
                        "Berhasil mengumpulkan tugas",
                        `Selamat anda sudah menaklukan salah satu tantangan hidup`,
                        "success"
                    );
                    history.push("/apps");
                    window.location.reload();
                } else {
                    setLoading(false);
                    swal(
                        "Whoopsie.. Gagal mengumpulkan :(",
                        `Kirimkan keluhan dan cerita error mu di haloselma.ub.ac.id`,
                        "error"
                    );
                }
                // successLogin();
            },

            complete: () => {
                setLoading(false);
            },
            statusCode: {
                401: () => {
                    swal(
                        "Whoopsie.. Gagal mengumpulkan :(",
                        `Seharusnya anda sudah logout, tapi kok ga logout sihh.. coba logout dulu dan login kembali untuk mengerjakan tugas`,
                        "error"
                    );
                },
            },
            error: () => {
                swal(
                    "Ada yang salah dengan server nya",
                    `Kalau anda melihat ini segera laporkan ke panitia Rabraw`,
                    "error"
                );
                setLoading(false);
            },
        });
    };

    function shuffle(array) {
        var currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    return (
        <section className="py-8 flex flex-col space-y-8 dark:text-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                {dataPilganAcak.map((data, index) => {
                    return (
                        <div className="flex flex-col space-y-3 mt-8">
                            <p>
                                {index + 1}. {data.soal}
                            </p>
                            {data.jawaban.map((jawaban) => {
                                return (
                                    <div className="flex space-x-3 items-center">
                                        <input
                                            {...register(`soal${index}`)}
                                            type="radio"
                                            value={jawaban.isAnswer}
                                            required
                                        />
                                        <p>{jawaban.pilihan}</p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                {loading ? (
                    <Button
                        type="submit"
                        className="py-3 mt-7 text-lg font-semibold"
                        disabled={true}
                    >
                        Mengumpulkan Tugas...
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        className="py-3 mt-7 text-lg font-semibold"
                    >
                        Kumpulkan
                    </Button>
                )}
            </form>
        </section>
    );
};

export default Pilgan;
