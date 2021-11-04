import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import $ from "jquery";
import { useHistory } from "react-router-dom";

const Link = ({ linkUrl }) => {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = (data) => {
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: linkUrl,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                url: data.kode,
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
    return (
        <div id="containerForm" className="flex flex-col space-y-8 py-8">
            <h1 className="font-semibold text-3xl text-left text-center dark:text-gray-200">
                Link Post Instagram
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-4 flex flex-col justify-center items-center"
            >
                <input
                    className="w-full lg:w-2/3 rounded-full px-7 py-6 text-lg font-semibold border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    {...register("kode")}
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="https://www.instagram.com/p/k0d3iG/"
                />
                <p className="text-gray-400 pb-4 text-center lg:text-left">
                    NB: Jangan menggunakan link post Instagram yang pernah
                    dikumpulkan
                </p>

                {loading ? (
                    <Button type="submit" className="w-48" disabled={true}>
                        Mengumpulkan Tugas...
                    </Button>
                ) : (
                    <Button type="submit" className="w-48">
                        Kumpulkan
                    </Button>
                )}
            </form>
        </div>
    );
};

export default Link;
