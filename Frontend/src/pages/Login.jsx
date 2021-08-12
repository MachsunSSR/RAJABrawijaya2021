import React, { useState, useContext } from "react";
import Image from "../assets/img/login.jpg";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Label, Input, Button } from "@windmill/react-ui";
import $ from "jquery";
import { AuthContext } from "../context/GlobalState";

function Login() {
    const { register, handleSubmit } = useForm();
    const [nim, setNim] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [state, dispatch] = useContext(AuthContext);

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
                if (res.success) {
                    console.log("hai");
                    dispatch({
                        type: "LOGIN",
                        payload: res.data,
                    });
                } else {
                    setLoading(false);
                    onPasswordSalah();
                }
                // successLogin();
            },
        });
        setLoading(false);
    };

    const onSubmit = () => {
        setLoading(true);
        if (nim.length !== 15) {
            onNimKurang();
        } else if (nim.substring(0, 2) !== "21") {
            onBukanMaba();
        } else {
            submitLogin();
        }
    };

    // const fetchLogin = () => {
    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer" + authState.token,
    //         },
    //     };
    // };

    // const successLogin = () => {
    //     $.ajax({
    //         type: "POST",
    //         url: "https://rajabrawijaya.ub.ac.id/api/maba/login",
    //         data: {
    //             nim,
    //             password,
    //         },
    //         success: function (response) {
    //             setauthState({
    //                 ...authState,
    //                 loggedIn: true,
    //                 nim: response.data.nim,
    //                 nama: response.data.nama,
    //                 fakultas: response.data.fakultas,
    //                 jurusan: response.data.jurusan,
    //                 prodi: response.data.prodi,
    //                 jenjang: response.data.jenjang,
    //                 foto: response.data.foto,
    //                 cluster: response.data.cluster,
    //                 kelompok: response.data.kelompok,
    //                 sosmed: response.data.sosmed,
    //                 teman_sekelompok: response.data.teman_sekelompok,
    //             });
    //             <Redirect to="app/" />;
    //         },
    //     });
    // };

    const onBukanMaba = () =>
        swal(
            "Anda bukan maba 😠",
            "demi terjaganya server jangan coba coba login yaa sayangg...",
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
            "Meskipun kamu cewe, kalo password kamu salah ya gbs login :)",
            "error"
        );
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

                                <Button
                                    className="mt-4"
                                    block
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Loading..." : "Login"}
                                </Button>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
