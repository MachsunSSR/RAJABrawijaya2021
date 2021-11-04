import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { passwordCluster } from "../../services/passwordCluster";

const Password = (cluster) => {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        console.log(data.kode);
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

                <Button type="submit" className="w-48">
                    Masuk
                </Button>
            </form>
        </div>
    );
};

export default Password;
