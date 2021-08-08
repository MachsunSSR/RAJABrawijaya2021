import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/img/login.jpg";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Label, Input, Button } from "@windmill/react-ui";
import { login } from "../services/API";

function Login() {
    const { register, handleSubmit } = useForm();
    const [nim, setNim] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = () => {
        if (nim.length !== 15) {
            onNimKurang();
        } else if (nim.substring(0, 2) !== "21") {
            onBukanMaba();
        } else {
            login(nim, password);
        }
    };

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
                                    tag={Link}
                                    to="/app"
                                >
                                    Log in
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
