import React, { useState, useEffect } from "react";
import { Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { dataPilgan } from "../../services/Penugasan";

const Pilgan = () => {
    const { register, handleSubmit } = useForm();
    const [dataPilganAcak, setDataPilganAcak] = useState([]);

    const onSubmit = (data) => {
        console.log(data);
        swal(
            "Error, Belum bisa mengumpulkan tugas",
            `Sabar ya.. IT lagi ngerjain errornya, Silahkan kumpulkan nanti`,
            "error"
        );
    };

    function shuffle(array) {
        let currentIndex = array.length,
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

    useEffect(() => {
        setDataPilganAcak(shuffle(dataPilgan).slice(0, 15));
        console.log(dataPilgan);
        console.log(dataPilganAcak);
        for (let i = 0; i < dataPilganAcak.length; i++) {
            dataPilganAcak[i].jawaban = shuffle(dataPilganAcak[i].jawaban);
        }
    }, []);

    return (
        <section className="py-8 flex flex-col space-y-8">
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
                                            value={jawaban}
                                            required
                                        />
                                        <p>{jawaban}</p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                <Button type="submit" className="py-3 mt-7">
                    Kumpulkan
                </Button>
            </form>
        </section>
    );
};

export default Pilgan;
