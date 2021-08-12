// import React, { useState } from "react";
import React from "react";
import PresensiCard from "../components/cards/PresensiCard";
// import { Button } from "@windmill/react-ui";
// import { useForm } from "react-hook-form";
// import swal from "sweetalert";

const Presensi = () => {
    // const { register, handleSubmit } = useForm();
    // const [name, setName] = useState("");

    // const onSubmit = (data) =>
    //     swal(
    //         "Berhasil Melakukan Presensi!",
    //         `Kode Presensi = ${data.kode}`,
    //         "success"
    //     );
    // const toInputUppercase = (e) => {
    //     e.target.value = ("" + e.target.value).toUpperCase();
    // };

    return (
        <>
            <h6>Presensi</h6>
            <section
                id="Kode Presensi"
                className="flex flex-col justify-center text-center space-y-8"
            >
                <h1 className="font-semibold text-3xl dark:text-gray-200">
                    Presensi RAJA Brawijaya
                </h1>
                <p className="text-gray-400">
                    presensi hanya dapat dilakukan pada jam yang telah
                    ditentukan oleh panitia
                </p>
                <div
                    id="containerCard"
                    className="flex flex-wrap gap-8 lg:space-x-16 justify-center items-center"
                >
                    <PresensiCard judul="PKKMB" kode="RAJAPKKMB2021" />
                    <PresensiCard judul="PBPK" kode="RAJAPBPK2021" />
                    <PresensiCard judul="Open House" kode="RAJAOH2021" />
                </div>
            </section>
        </>
    );
};

export default Presensi;
