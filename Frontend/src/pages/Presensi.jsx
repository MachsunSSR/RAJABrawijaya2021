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
                className="flex flex-col justify-center text-center gap-8"
            >
                <h1 className="font-semibold text-3xl">
                    Presensi RAJA Brawijaya
                </h1>
                <p className="text-gray-400">
                    presensi hanya dapat dilakukan pada jam yang telah
                    ditentukan oleh panitia
                </p>
                <div
                    id="containerCard"
                    className="flex flex-wrap gap-8 md:gap-16 justify-center items-center"
                >
                    <PresensiCard judul="PKKMB" kode="RAJAPKKMB2021" />
                    <PresensiCard judul="PBPK" kode="RAJAPBPK2021" />
                    <PresensiCard judul="Open House" kode="RAJAOH2021" />
                </div>
                {/* <div
                    id="containerForm"
                    className="flex flex-col justify-center items-center space-y-8 py-8"
                >
                    <h1 className="font-semibold text-4xl">
                        Masukkan Kode Presensi
                    </h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full space-y-4"
                    >
                        <input
                            className="w-full lg:w-2/3 rounded-2xl px-5 py-6 text-lg font-semibold"
                            {...register("kode")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onInput={toInputUppercase}
                            placeholder="Masukkan Kode Presensi..."
                        />
                        <p className="text-gray-400 pb-4">
                            NB: Hubungi admin apabila mengalami kendala presensi
                        </p>

                        <Button className="w-48" type="submit">
                            Submit
                        </Button>
                    </form>
                </div> */}
            </section>
        </>
    );
};

export default Presensi;
