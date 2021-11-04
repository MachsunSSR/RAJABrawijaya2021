import React, { useState, useEffect, useContext } from "react";
import {
    Button,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Select,
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
    const [checkedItems, setCheckedItems] = useState({}); //plain object as state

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };

    useEffect(() => {
        if (user.agama !== null) {
            history.push("/apps/dashboard");
        }
    }, []);

    useEffect(() => {
        console.log("checkedItems: ", checkedItems);
    }, [checkedItems]);

    const onKirim = () => {
        console.log(dataKirim);
        const endpoint = "https://rajabrawijaya.ub.ac.id/api/maba/pendataan";
        closeModal();
        setLoading(true);
        // console.log(data);

        const token = JSON.parse(localStorage.getItem("token"));
        $.ajax({
            type: "POST",
            url: endpoint,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    `Bearer ${token.access_token}`
                );
            },
            data: {
                agama: dataKirim.agama,
                jenis_kelamin: dataKirim.jenis_kelamin,
                hobi: null,
                email: dataKirim.email,
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
        "Silahkan isi data dibawah ini",
        "Usahakan data yang kalian isi benar",
    ];

    const agama = [
        "Islam",
        "Kristen",
        "Hindu",
        "Buddha",
        "Katholik",
        "Kong Hu Cu",
    ];

    // const hobbies = [
    //     {
    //         name: "check-box-1",
    //         key: "checkBox1",
    //         label: "Check Box 1",
    //     },
    //     {
    //         name: "check-box-2",
    //         key: "checkBox2",
    //         label: "Check Box 2",
    //     },
    //     {
    //         name: "check-box-3",
    //         key: "checkBox3",
    //         label: "Check Box 3",
    //     },
    //     {
    //         name: "check-box-4",
    //         key: "checkBox4",
    //         label: "Check Box 4",
    //     },
    //     {
    //         name: "check-box-5",
    //         key: "checkBox5",
    //         label: "Check Box 5",
    //     },
    //     {
    //         name: "check-box-6",
    //         key: "checkBox6",
    //         label: "Check Box 6",
    //     },
    //     {
    //         name: "check-box-7",
    //         key: "checkBox7",
    //         label: "Check Box 7",
    //     },
    //     {
    //         name: "check-box-8",
    //         key: "checkBox8",
    //         label: "Check Box 8",
    //     },
    //     {
    //         name: "check-box-9",
    //         key: "checkBox9",
    //         label: "Check Box 9",
    //     },
    //     {
    //         name: "check-box-10",
    //         key: "checkBox10",
    //         label: "Check Box 10",
    //     },
    //     {
    //         name: "check-box-11",
    //         key: "checkBox11",
    //         label: "Check Box 11",
    //     },
    //     {
    //         name: "check-box-12",
    //         key: "checkBox12",
    //         label: "Check Box 12",
    //     },
    // ];

    return (
        <section className="py-8 flex flex-col space-y-8 xl:px-60 lg:px-40 px-10 min-h-screen bg-white dark:bg-gray-800">
            <h6 className="text-center">Pendataan Ulang Abhiyaksa 59</h6>
            <Informasi data={dataInformasi} />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
            >
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Agama :
                </p>
                <Select
                    {...register("agama")}
                    type="text"
                    name="agama"
                    className="py-4"
                    required
                    id="agama"
                >
                    {agama.map((e) => {
                        return <option key={e}>{e}</option>;
                    })}
                </Select>
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Jenis Kelamin :
                </p>
                <Select
                    {...register("jenis_kelamin")}
                    type="text"
                    name="jenis_kelamin"
                    className="py-4"
                    required
                    id="jenis_kelamin"
                >
                    {["Laki-Laki", "Perempuan"].map((e) => {
                        return <option key={e}>{e}</option>;
                    })}
                </Select>
                {/* <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Pilih Hobby :
                </p>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-y-4">
                    {hobbies.map((item) => (
                        <label
                            key={item.key}
                            className=" text-lg dark:text-gray-200"
                        >
                            <span className="mr-5">{item.name}</span>
                            <Input
                                type="checkbox"
                                className="w-6 h-6"
                                name={item.name}
                                checked={checkedItems[item.name]}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                </div> */}
                <p className="pt-5 font-semibold text-lg dark:text-gray-200">
                    Email UB :
                </p>
                <Input
                    {...register("email")}
                    type="text"
                    name="email"
                    id="emai"
                    required
                    className="py-5"
                    placeholder="usernameanda@student.ub.ac.id"
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
                        Agama : {dataKirim.agama}
                        <br />
                        Jenis Kelamin : {dataKirim.jenis_kelamin} <br />
                        Email : {dataKirim.email} <br />
                        Hobby : {dataKirim.hobby} <br /> <br />
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
