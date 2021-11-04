import React, { useState, useContext } from "react";
import Image from "../assets/img/login.jpg";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Label, Input, Button } from "@windmill/react-ui";
import $ from "jquery";
import { AuthContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { checkLogin } from "../services/LoginCheck";

function Login() {
    const { register, handleSubmit } = useForm();
    const [nim, setNim] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();

    const { setLogin } = useContext(AuthContext);

    function getData() {
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "GET",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/dashboard",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {},
            success: function (res) {
                if (res.status === "success") {
                    if (
                        res.data.kelompok == null ||
                        res.data.kelompok == undefined
                    ) {
                        history.push("/apps/pendataan");
                    } else {
                        setUser({
                            ...user,
                            nim: res.data.nim,
                            nama: res.data.nama,
                            fakultas: res.data.fakultas,
                            jurusan: res.data.jurusan,
                            prodi: res.data.prodi,
                            jenjang: res.data.jenjang,
                            foto: res.data.foto,
                            cluster: res.data.cluster.match(/\d+/),
                            kelompok: res.data.kelompok,
                            sosmed: res.data.sosmed,
                            teman_sekelompok: res.data.teman_sekelompok,
                            perizinan: res.data.perizinan,
                            penilaian: res.data.penilaian,
                        });
                    }
                }
                // successLogin();
            },
            error: () => {
                swal(
                    "Kumpulin twibbon dulu!!",
                    `Developernya cape semalem ga tidur :(, cuma bug kecil. kumpulin link tugas twibbon kalian dulu biar bisa akses website seperti biasa.`,
                    "warning"
                );
            },
            complete: () => {
                setLoading(false);
            },
        });
    }

    const submitLogin = () => {
        setLoading(true);
        $.ajax({
            type: "POST",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/login",
            data: {
                nim,
                password,
            },
            beforeSend: function () {
                setLoading(true);
            },
            success: function (res) {
                // console.log(res);
                if (res.status === "success") {
                    if (
                        res.data.cluster == null ||
                        res.data.cluster == undefined
                    ) {
                        setLogin(res.data);
                        // console.log("masuk sini dong");
                        history.push("/apps/pendataan");
                    } else {
                        setLogin(res.data);
                        getData();
                        history.push("/apps/dashboard");
                    }
                } else {
                    setLoading(false);
                    onPasswordSalah();
                }
                // successLogin();
            },
            statusCode: {
                401: () => {
                    setLoading(false);
                    onPasswordSalah();
                },
            },
            error: () => {
                setLoading(false);
                onError();
            },
            complete: () => {
                setLoading(false);
            },
        });
        // setLoading(false);
    };

    const onSubmit = () => {
        setLoading(true);
        if (nim.length !== 15) {
            onNimKurang();
            setLoading(false);
        } else if (nim.substring(0, 2) !== "21") {
            onBukanMaba();
            setLoading(false);
        } else {
            submitLogin();
        }
    };

    const onBukanMaba = () =>
        swal(
            "Anda bukan maba 😠",
            "Ngapain login sayang?? mau jadi maba lagi?",
            "error"
        );

    const onNimKurang = () =>
        swal(
            "NIM anda tidak 15 digit",
            "Kok ga fokus? kamu lagi ada masalah? sini cerita..",
            "error"
        );

    const onPasswordSalah = () =>
        swal(
            "Password Anda Salah",
            "Sama password aja lupa, apalagi sama aku :(",
            "error"
        );

    const onError = () =>
        swal(
            "Eee.. Servernya bermasalah nih :(",
            "Bentarr lagi dibenerin.. mohon untuk mengsabar yaaa",
            "error"
        );

    const onBukanWaktunya = (cluster) => {
        swal(
            "Bukan waktu cluster anda!!",
            `cluster anda di RAJA Apps adalah ${cluster}. ikuti jadwal pendataan sesuai cluster Raja Apps untuk membenarkan pendataan`,
            "error"
        );
    };
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img
                            aria-hidden="true"
                            className="object-cover w-full h-full"
                            src={Image}
                            alt="Office"
                        />
                    </div>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                Login RAJA Apps
                            </h1>
                            <p className="mb-4  text-gray-700 dark:text-gray-200">
                                Gunakan NIM dan password SIAM untuk login
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Label>
                                    <span className="font-semibold">NIM</span>
                                    <Input
                                        className="mt-1 font-semibold"
                                        type="text"
                                        required
                                        placeholder="215150xxxxxx"
                                        {...register("nim", { required: true })}
                                        value={nim}
                                        onChange={(e) => setNim(e.target.value)}
                                    />
                                </Label>

                                <Label className="mt-4">
                                    <span className="font-semibold">
                                        Password
                                    </span>
                                    <Input
                                        className="mt-1"
                                        required
                                        type="password"
                                        placeholder="********"
                                        {...register("passwrod", {
                                            required: true,
                                        })}
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Label>
                                {loading ? (
                                    <Button
                                        className="mt-4"
                                        block
                                        type="submit"
                                        disabled={true}
                                    >
                                        Loading...
                                    </Button>
                                ) : (
                                    <Button
                                        className="mt-4"
                                        block
                                        type="submit"
                                        disabled={false}
                                    >
                                        Login
                                    </Button>
                                )}
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
