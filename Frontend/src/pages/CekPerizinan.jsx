import React, { useEffect, useRef, useState } from "react";
import {
    Table,
    Input,
    Button,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    Select,
    TableBody,
    TableFooter,
    Pagination,
} from "@windmill/react-ui";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const PenilaianManual = () => {
    const [status, setStatus] = useState("pending");
    const [locked, setLocked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const revealRefs = useRef([]);
    const checkBoxRefs = useRef([]);
    revealRefs.current = [];
    checkBoxRefs.current = [];
    const [dataPerizinan, setDataPerizinan] = useState([]);
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        if (data.kode == "sekresemangatngurusinabsennya") {
            setLocked(false);
        } else {
            swal(
                "KOK SALAH? HAYO MAU NGAPAIN!",
                `masukkan password yang benar`,
                "error"
            );
        }
    };

    const fetchData = async () => {
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/backend_keren/get_data_perizinan/oh",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await fetching.json();
        setDataPerizinan(data.data.mahasiswa);
        // console.log(data);
        // console.log(dataPerizinan.data);
    };

    const kirimData = async (nim, index) => {
        console.log(index);
        console.log(checkBoxRefs.current[index]);
        setIsLoading(true);
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/backend_keren/approval_perizinan",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nim,
                    rangkaian: "oh",
                    status: checkBoxRefs.current[index].checked
                        ? "diterima"
                        : "ditolak",
                }),
            }
        );
        const data = await fetching.json();
        console.log(data);
        if (data.status === "success") {
            swal(
                "Berhasil mengirimkan koreksi",
                `Kerja bagus, lanjutkeun`,
                "success"
            );
            revealRefs.current[index].className =
                revealRefs.current[index].className + " hidden";
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const headerTable = [
        "NO",
        "NIM",
        "ALASAN IZIN",
        "LINK DRIVE",
        "PERIZINAN DITERIMA",
        "KIRIM",
    ];

    const addToRefsRow = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const addToRefsCheckbox = (el) => {
        if (el && !checkBoxRefs.current.includes(el)) {
            checkBoxRefs.current.push(el);
        }
    };

    const changeStatus = (e) => {
        setStatus(e.target.value);
    };

    const listStatus = ["pending", "diterima", "ditolak"];

    return (
        <div className="dark:bg-gray-900 max-h-full min-h-screen pt-10 px-20">
            <h6 className="mb-10">Perizinan Open House</h6>
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center space-y-10 lg:space-y-0 lg:space-x-20 mb-10">
                <span className="flex items-center space-x-10">
                    <h1 className="dark:text-gray-200 text-gray-800 text-xl font-bold w-96">
                        Status Perizinan :
                    </h1>
                    <Select
                        className="text-lg"
                        onChange={(e) => changeStatus(e)}
                    >
                        {listStatus.map((dataStatus) => {
                            console.log(dataStatus);
                            return (
                                <option key={dataStatus}>{dataStatus}</option>
                            );
                        })}
                    </Select>
                </span>
            </div>

            {locked ? (
                <div
                    id="containerForm"
                    className="flex flex-col space-y-8 py-8"
                >
                    <h1 className="font-semibold text-3xl text-center dark:text-gray-200">
                        Masukkan Password
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
                            type="password"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="masukkan password"
                        />

                        <Button type="submit" className="w-48">
                            Masuk
                        </Button>
                    </form>
                </div>
            ) : (
                <TableContainer className="mb-10">
                    <Table>
                        <TableHeader className="px-10">
                            <TableRow className="bg-purple-600 text-white font-semibold">
                                {headerTable.map((dataHeader, index) => (
                                    <TableCell key={index}>
                                        {dataHeader}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataPerizinan.map((data, index) =>
                                data.status == status ? (
                                    <TableRow
                                        className=" hover:bg-gray-200 transition-bg duration-300 cursor-pointer"
                                        key={index}
                                        ref={addToRefsRow}
                                    >
                                        <TableCell>
                                            <span className="text-sm">
                                                {index + 1}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-base font-bold">
                                                {data.nim}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-base font-bold">
                                                {data.alasan}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <a
                                                href={data.link_lampiran}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button>Buka Drive</Button>
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            <Input
                                                ref={addToRefsCheckbox}
                                                id={index}
                                                onChange={() =>
                                                    addToRefsCheckbox
                                                }
                                                type="checkbox"
                                                className="w-7 h-7"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {isLoading ? (
                                                <button
                                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-yellow-400 border border-transparent active:bg-yellow-400 hover:bg-yellow-500 focus:ring focus:ring-yellow-200"
                                                    disabled
                                                >
                                                    Kirim
                                                </button>
                                            ) : (
                                                <button
                                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-yellow-400 border border-transparent active:bg-yellow-400 hover:bg-yellow-500 focus:ring focus:ring-yellow-200"
                                                    onClick={() =>
                                                        kirimData(
                                                            data.nim,
                                                            index
                                                        )
                                                    }
                                                >
                                                    Kirim
                                                </button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    <></>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default PenilaianManual;
