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
} from "@windmill/react-ui";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const PenilaianManual = () => {
    const [cluster, setCluster] = useState(1);
    const [locked, setLocked] = useState(true);
    const revealRefs = useRef([]);
    const checkBoxRefs = useRef([]);
    revealRefs.current = [];
    checkBoxRefs.current = [];
    const [dataMaba, setDataMaba] = useState([]);
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        if (data.kode == "dariabhyaksauntukabhyaksa") {
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
            "https://rajabrawijaya.ub.ac.id/api/maba/koreksi/lihat_data",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status_koreksi: "0",
                    jenis_penugasan: "sayembara",
                }),
            }
        );
        const data = await fetching.json();
        setDataMaba(data.data);
        // console.log(data);
        // console.log(dataMaba.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const headerTable = ["NO", "NAMA", "POST SAYEMBARA"];

    const addToRefsRow = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <div className="dark:bg-gray-900 max-h-full min-h-screen pt-10 px-20">
            <h6 className="mb-10">Data Sayambara</h6>

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
                            {dataMaba.map((data, index) =>
                                data.url_sayembara != null ? (
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
                                                {data.nama}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <a
                                                href={data.url_sayembara}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button>Buka Post</Button>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    <></>
                                )
                            )}
                        </TableBody>
                    </Table>
                    <TableFooter>
                        {/* <Pagination
                    totalResults={dataMaba.length}
                    resultsPerPage={50}
                    onChange={() => {}}
                    label="Table navigation"
                /> */}
                    </TableFooter>
                </TableContainer>
            )}
        </div>
    );
};

export default PenilaianManual;
