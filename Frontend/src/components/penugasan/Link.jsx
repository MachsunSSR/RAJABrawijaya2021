import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Link = () => {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        swal(
            "Error, Belum bisa mengumpulkan tugas",
            "Sabar ya.. IT lagi ngerjain errornya, Silahkan kumpulkan nanti",
            "error"
        );
    };
    return (
        <div id="containerForm" className="flex flex-col space-y-8 py-8">
            <h1 className="font-semibold text-3xl text-left text-center">
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
                    onChange={(e) => setName(e.target.value)}
                    placeholder="https://www.instagram.com/p/k0d3iG/"
                />
                <p className="text-gray-400 pb-4">
                    NB: Jangan menggunakan link post Instagram yang pernah
                    dikumpulkan
                </p>

                <Button className="w-48" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Link;
