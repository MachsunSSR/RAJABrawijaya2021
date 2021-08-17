import React, { useState } from "react";
import { Button, Input, Textarea } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Essay = () => {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        console.log(data);
        swal(
            "Error, Belum bisa mengumpulkan tugas",
            `Sabar ya.. IT lagi ngerjain errornya, Silahkan kumpulkan nanti`,
            "error"
        );
    };
    return (
        <section className="py-8 flex flex-col space-y-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
            >
                <p className="pt-5 font-semibold text-lg">Masukkan Essay : </p>
                <Textarea
                    {...register("essay")}
                    type="text"
                    name="essay"
                    placeholder="Tulis essay disini... (minimal 500 kata)"
                    id="essay"
                    required
                    className=" h-64"
                />
                <p className="pt-5 font-semibold text-lg">Masukkan Sumber :</p>
                <Textarea
                    {...register("source")}
                    type="text"
                    name="source"
                    placeholder="Tulis sumber disini..."
                    id="source"
                    required
                    className=" h-24"
                />
                <p className="pt-5 font-semibold text-lg">
                    Masukkan link post instagram (Poster)
                </p>
                <Input
                    {...register("post")}
                    type="text"
                    name="post"
                    required
                    placeholder="https://www.instagram.com/p/k0d3iG/"
                    className="py-5"
                />
                <div></div>
                <div></div>
                <div></div>
                <Button type="submit" className="mt-5">
                    Send
                </Button>
            </form>
        </section>
    );
};

export default Essay;
