import React, { useState, useContext } from "react";
import { Button, Input } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/GlobalState";

const FormPerizinan = ({ rangkaianAcara, disable }) => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const { setLogout } = useContext(AuthContext);

    function setData() {
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
                            cluster: res.data.cluster,
                            kelompok: res.data.kelompok,
                            sosmed: res.data.sosmed,
                            teman_sekelompok: res.data.teman_sekelompok,
                            perizinan: res.data.perizinan,
                        });
                    }
                }
                // successLogin();
            },
            error: () => {
                swal(
                    "Website Sedang Down",
                    `Aduahhh ada apa iniii... duahh. Coba logout terus login lagi deh`,
                    "error"
                );
            },
            complete: () => {
                setLoading(false);
            },
        });
    }

    const onSubmit = (data) => {
        setLoading(true);
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: "https://rajabrawijaya.ub.ac.id/api/maba/perizinan",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                rangkaian: rangkaianAcara,
                alasan: data.alasan,
                link: data.link,
            },
            success: function (res) {
                if (res.status === "success") {
                    setData();
                    swal(
                        "Berhasil melakukan perizinan",
                        `Perizinan kamu sudah terekam, silahkan tunggu perizinan untuk diproses`,
                        "success"
                    );
                    history.push("/apps/perizinan");
                } else {
                    setLoading(false);
                    swal(
                        "Duh kenapa nih?",
                        `Gagal mengirim perizinan, laporkan bug ini ke panitia Rabraw 2021`,
                        "error"
                    );
                }
                // successLogin();
            },
            error: () => {
                setLoading(false);
                swal(
                    "Duh kenapa nih?",
                    `Gagal mengirim perizinan, laporkan bug ini ke panitia Rabraw 2021`,
                    "error"
                );
            },
            statusCode: {
                401: () => {
                    setLogout();
                    history.push("/apps/login");
                },
            },
            complete: () => {
                setLoading(false);
            },
        });
    };

    const dataInformasi = [
        "Silahkan isi kontak dan cluster kamu",
        "Cluster bisa dilihat pada KTMS yang ada di siam.ub.ac.id",
        "Usahakan data yang kalian isi benar",
        "Kalian hanya bisa melakukan pendataan 1 kali dan tidak bisa merubah data yang telah kalian isi",
        "Kontak akan digunakan untuk berhubungan dengan kelompok untuk penugasan",
    ];

    return (
        <section className="py-8 flex flex-col space-y-8 xl:px-60 lg:px-40 px-10 bg-white dark:bg-gray-800 w-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 w-full"
            >
                <p className="pt-5 font-semibold text-lg dark:text-gray-200 text-left">
                    Alasan :
                </p>
                <Input
                    {...register("alasan")}
                    type="text"
                    name="alasan"
                    className="py-5 w-full"
                    required
                    placeholder="Tulis alasan perizinan anda"
                    id="alasan"
                />
                <p className="pt-5 font-semibold text-lg dark:text-gray-200 text-left">
                    Link Drive berisi surat pernyataan bermaterai dan surat
                    bukti :
                </p>
                <Input
                    {...register("link")}
                    type="text"
                    name="link"
                    className="py-5 w-full"
                    placeholder="https://drive.google.com/drive/u/0/folders/1Da6_94MzYfxoMbOjGrUCCUj-t7e80eol"
                    id="link"
                    required
                />
                <div></div>
                <div></div>
                <div></div>
                {loading ? (
                    <Button disabled={true} type="submit" className="mt-5">
                        Mengirim...
                    </Button>
                ) : (
                    <Button type="submit" className="mt-5" disabled={disable}>
                        Kirim Perizinan
                    </Button>
                )}
            </form>
        </section>
    );
};

export default FormPerizinan;
