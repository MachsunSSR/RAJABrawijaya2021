import React, { useContext, useEffect, useState } from "react";
import { Button, Input, Textarea } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { UserContext } from "../../context/UserContext";
import $ from "jquery";
import { useHistory } from "react-router-dom";

const Essay = () => {
    const { register, handleSubmit } = useForm();
    const [tema, setTema] = useState("");
    const [user, setUser] = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = (data) => {
        setLoading(true);
        // console.log(data);
        const score = cekJawaban(data.essay, data.source);
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/penugasan/dharma_warta",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                essay: "",
                sumber: "",
                url: data.post,
                nilai_essay_sumber: score,
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
                        `Silahkan coba untuk logout dan login kembali`,
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

    const cekJawaban = (essay, source) => {
        let score = 50;
        let ketemu2 = false;
        let ketemu = false;
        const keywords = [
            "covid 19",
            "corona",
            "pandemi",
            "himbauan",
            "informasi",
            "data",
            "kebijakan",
            "virus",
            "covid-19",
            "covid",
            "peraturan",
            "masyarakat",
            "solusi",
        ];
        const sourceKeys = [
            "DOI",
            "edu",
            "jurnal",
            "journal",
            "e-journal",
            "e-jurnal",
            "ejurnal",
            "ejournal",
        ];
        const wordCount = essay.match(/(\w+)/g).length;
        // console.log(wordCount);
        if (wordCount >= 500 && wordCount <= 1000) {
            score += 20;
        }

        for (const letter of keywords) {
            if (essay.search(letter) >= 0) {
                ketemu = true;
                break;
            }
        }

        score += ketemu ? -0 : -25;

        ketemu = false;

        for (const letter of sourceKeys) {
            if (source.search(letter) >= 0) {
                if (!ketemu2 && !ketemu) {
                    if (countOccurences(source, letter) > 1) {
                        ketemu = true;
                        ketemu2 = true;
                        break;
                    }
                    ketemu = true;
                } else {
                    ketemu2 = true;
                    break;
                }
            }
        }
        score += ketemu ? 8 : 0;
        score += ketemu2 ? 7 : 0;

        return score;
    };

    const acakTema = () => {
        if (
            user.cluster == null ||
            user.kelompok == null ||
            user.cluster == undefined ||
            user.kelompok == undefined ||
            user.cluster == 0 ||
            user.kelompok == 0
        ) {
            setTema("");
            return;
        }
        const angka =
            Math.abs(user.cluster - user.kelompok) == 0
                ? 4
                : Math.abs(user.cluster - user.kelompok);
        if (angka % 9 == 0) {
            setTema("Kebijakan PSBB selama pandemi COVID-19");
        } else if (angka % 8 == 0) {
            setTema("Kebijakan PPKM selama pandemi COVID-19 ");
        } else if (angka % 7 == 0) {
            setTema("Kebijakan lockdown selama pandemi COVID-19");
        } else if (angka % 6 == 0) {
            setTema("Imbauan Protokol Kesehatan");
        } else if (angka % 5 == 0) {
            setTema("Imbauan Cara Pencegahan COVID-19 dengan metode 5M ");
        } else if (angka % 4 == 0) {
            setTema("Imbauan untuk melakukan Vaksinasi ");
        } else if (angka % 3 == 0) {
            setTema("Informasi tentang penggunaan masker berlapis");
        } else if (angka % 2 == 0) {
            setTema("Informasi tentang penggunaan hand sanitizer/desinfektan");
        } else if (angka % 1 == 0) {
            setTema("Informasi tentang pentingnya menjaga jarak");
        } else {
            setTema("");
        }
    };

    function countOccurences(string, word) {
        return string.split(word).length - 1;
    }

    useEffect(() => {
        acakTema();
    }, [user]);

    return (
        <section className="py-8 flex flex-col space-y-8">
            <h6>Tema anda : {tema}</h6>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
            >
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Masukkan Essay :{" "}
                </p>
                <Textarea
                    {...register("essay")}
                    type="text"
                    name="essay"
                    placeholder="Tulis essay disini... (minimal 500 kata)"
                    id="essay"
                    required
                    className=" h-64"
                />
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Masukkan Sumber :
                </p>
                <Textarea
                    {...register("source")}
                    type="text"
                    name="source"
                    placeholder="Tulis sumber disini..."
                    id="source"
                    required
                    className=" h-24"
                />
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
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
                {loading ? (
                    <Button type="submit" className="mt-5" disabled={true}>
                        Mengumpulkan Tugas...
                    </Button>
                ) : (
                    <Button type="submit" className="mt-5">
                        Kumpulkan
                    </Button>
                )}
            </form>
        </section>
    );
};

export default Essay;
