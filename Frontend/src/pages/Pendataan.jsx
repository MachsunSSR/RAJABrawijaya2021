import React, { useState, useEffect, useContext } from "react";
import {
    Button,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Informasi from "../components/penugasan/Informasi";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { UserContext } from "../context/UserContext";

const Pendataan = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataKirim, setDataKirim] = useState({});

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    useEffect(() => {
        // if (user.cluster !== 0) {
        //     history.push("/apps/dashboard");
        // }
    }, []);

    const onKirim = () => {
        closeModal();
        setLoading(true);
        // console.log(data);
        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url:
                user.kelompok === 0 || user.kelompok === null
                    ? "https://rajabrawijaya.ub.ac.id/api/maba/isi_form"
                    : "https://rajabrawijaya.ub.ac.id/api/maba/update",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                ig: dataKirim.ig,
                line: dataKirim.line,
                wa: dataKirim.wa,
                cluster: dataKirim.cluster,
            },
            success: function (res) {
                if (res.status === "success") {
                    swal(
                        "Berhasil melakukan pendataan",
                        `Tenang, informasi kamu kami jaga seperti anak kami sendiri`,
                        "success"
                    );
                    history.push("/apps");
                } else {
                    setLoading(false);
                    swal(
                        "Gagal melakukan pendataan",
                        `Tenang, sabar dan laporkan bug ini ke panitia Rabraw 2021`,
                        "error"
                    );
                }
                // successLogin();
            },
            statusCode: {
                401: () => {
                    swal(
                        "Gagal melakukan pendataan",
                        `Sesi anda sudah habis, login kembali`,
                        "error"
                    );
                    history.push("/apps/login");
                },
            },
            error: () => {
                swal(
                    "Gagal melakukan pendataan",
                    `Tenang, sabar dan laporkan bug ini ke panitia Rabraw 2021`,
                    "error"
                );
                setLoading(false);
            },
            complete: () => {
                setLoading(false);
            },
        });
    };

    const onSubmit = (data) => {
        setDataKirim(data);
    };
    const dataInformasi = [
        "Silahkan isi kontak dan cluster kamu",
        "Cluster bisa dilihat pada KTMS yang ada di siam.ub.ac.id",
        "Usahakan data yang kalian isi benar",
        "Kalian hanya bisa melakukan pendataan 1 kali dan tidak bisa merubah data yang telah kalian isi",
        "Kontak akan digunakan untuk berhubungan dengan kelompok untuk penugasan",
    ];
    return (
        <section className="py-8 flex flex-col space-y-8 xl:px-60 lg:px-40 px-10 bg-white dark:bg-gray-800">
            <h6 className="text-center">Pendataan Abhyaksa 59</h6>
            <Informasi data={dataInformasi} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
            >
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Cluster :
                </p>
                <Input
                    {...register("cluster")}
                    type="text"
                    name="cluster"
                    className="py-5"
                    required
                    placeholder="Tulis cluster anda"
                    id="cluster"
                />
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Username Instagram :
                </p>
                <Input
                    {...register("ig")}
                    type="text"
                    name="ig"
                    required
                    className="py-5"
                    placeholder="masukkan username ig (tanpa menggunakan @)"
                    id="ig"
                />
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    ID Line :
                </p>
                <Input
                    {...register("line")}
                    type="text"
                    name="line"
                    className="py-5"
                    placeholder="masukkan id line"
                    id="line"
                    required
                />
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Nomor WA Aktif :
                </p>
                <Input
                    {...register("wa")}
                    type="text"
                    name="wa"
                    required
                    className="py-5"
                    placeholder="081234567890"
                />
                <div></div>
                <div></div>
                <div></div>
                {loading ? (
                    <Button disabled={true} type="submit" className="mt-5">
                        Send
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        className="mt-5"
                        onClick={() => openModal()}
                    >
                        Send
                    </Button>
                )}
            </form>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader className="text-center">
                    Anda akan melakukan pendataan dengan data :
                </ModalHeader>
                <ModalHeader className="text-5xl font-bold text-center"></ModalHeader>
                <ModalBody className="py-5 text-center">
                    <span className="font-bold text-lg">
                        Cluster : {dataKirim.cluster}
                        <br />
                        Whatsapp : {dataKirim.wa} <br />
                        ID Line : {dataKirim.line} <br />
                        Instagram : {dataKirim.ig} <br /> <br />
                    </span>
                    Sudah yakin dengan data anda?
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="w-full sm:w-auto"
                        onClick={() => onKirim()}
                    >
                        Kirim
                    </Button>
                    <Button
                        className="w-full sm:w-auto"
                        onClick={() => closeModal()}
                    >
                        Batal
                    </Button>
                </ModalFooter>
            </Modal>
        </section>
    );
};

export default Pendataan;
