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
import { passwordCluster } from "../services/passwordCluster";

const PenilaianTransformer = () => {
    const [cluster, setCluster] = useState(1);
    const [locked, setLocked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const revealRefs = useRef([]);
    const durasiRefs = useRef([]);
    const jargonRefs = useRef([]);
    const bumperRefs = useRef([]);
    const inframeRefs = useRef([]);
    const subtitleRefs = useRef([]);
    const bahasaeRefs = useRef([]);
    const saraRefs = useRef([]);

    durasiRefs.current = [];
    revealRefs.current = [];
    jargonRefs.current = [];
    bumperRefs.current = [];
    inframeRefs.current = [];
    subtitleRefs.current = [];
    bahasaeRefs.current = [];
    saraRefs.current = [];
    const [dataMaba, setDataMaba] = useState([
        {
            nim: "215090800111023",
            nama: "Amelia Keyza Yereskia",
            kelompok: "79",
            cluster: "51",
            url_transformer:
                "https://www.instagram.com/tv/CUH_2bYhJof/?utm_medium=copy_link",
            nilai_transformer: 55,
        },
        {
            nim: "215090200111031",
            nama: "YUSITA OCTINA BUDIYANTI",
            kelompok: "79",
            cluster: "16",
            url_transformer:
                "https://www.instagram.com/tv/CUHyhlSpuFQ/?utm_medium=copy_link",
            nilai_transformer: 55,
        },
        {
            nim: "215090207111046",
            nama: "Armanda Aulia Putri",
            kelompok: "79",
            cluster: "40",
            url_transformer:
                "https://www.instagram.com/tv/CUH--hmBmvK/?utm_source=ig_web_copy_link",
            nilai_transformer: 55,
        },
        {
            nim: "215100301111075",
            nama: "MEYLISA MAULIDIA MAHESWARI",
            kelompok: "79",
            cluster: "4",
            url_transformer:
                "https://www.instagram.com/tv/CUHc1R9J7eB/?utm_medium=copy_link",
            nilai_transformer: 55,
        },
    ]);
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        if (name == passwordCluster[cluster - 1]) {
            setLocked(false);
        } else {
            swal(
                "KOK SALAH? HAYO MAU NGAPAIN!",
                `masukkan password yang benar`,
                "error"
            );
        }
    };

    const fetchData = async (cluster) => {
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
                    jenis_penugasan: "transformer",
                    kloter: cluster,
                }),
            }
        );
        const data = await fetching.json();
        setDataMaba(data.data);
        // console.log(data);
        // console.log(dataMaba.data);
    };

    const kirimData = async (nim, index) => {
        setIsLoading(true);
        let nilai_tambah = 0;

        nilai_tambah += durasiRefs.current[index].checked ? 10 : 5;
        nilai_tambah += jargonRefs.current[index].checked ? 10 : 5;
        nilai_tambah += bumperRefs.current[index].checked ? 10 : 5;
        nilai_tambah += inframeRefs.current[index].checked ? 10 : 5;
        console.log(nilai_tambah);
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/koreksi/post_data",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nim,
                    jenis_penugasan: "transformer",
                    nilai_tambah,
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
    const kirimSara = async (nim, index) => {
        setIsLoading(true);
        let nilai_tambah = -100;
        console.log(nilai_tambah);
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/koreksi/post_data",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nim,
                    jenis_penugasan: "transformer",
                    nilai_tambah,
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
        fetchData(cluster);
    }, [cluster]);

    const changeCluster = (e) => {
        setLocked(true);
        setCluster(e.target.value);
    };
    const headerTable = [
        "NO",
        "NAMA",
        "KELOMPOK",
        "POST INSTAGRAM",
        "DURASI",
        "JARGON",
        "BUMPER",
        "INFRAME",
        "KIRIM",
        "SARA",
    ];

    const addToRefsRow = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const addToRefsDurasi = (el) => {
        if (el && !durasiRefs.current.includes(el)) {
            durasiRefs.current.push(el);
        }
    };

    const addToRefsJargon = (el) => {
        if (el && !jargonRefs.current.includes(el)) {
            jargonRefs.current.push(el);
        }
    };
    const addToRefsBumper = (el) => {
        if (el && !bumperRefs.current.includes(el)) {
            bumperRefs.current.push(el);
        }
    };
    const addToRefsInframe = (el) => {
        if (el && !inframeRefs.current.includes(el)) {
            inframeRefs.current.push(el);
        }
    };

    return (
        <div className="dark:bg-gray-900 max-h-full min-h-screen pt-10 px-20">
            <h6 className="mb-10">Tugas Transformer</h6>
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center space-y-10 lg:space-y-0 lg:space-x-20 mb-10">
                <span className="flex items-center space-x-10">
                    <h1 className="dark:text-gray-200 text-gray-800 text-xl font-bold w-32">
                        Cluster
                    </h1>
                    <Select
                        className="font-bold text-lg"
                        onChange={(e) => changeCluster(e)}
                    >
                        {[...Array(62)].map((e, i) => {
                            return <option key={i + 1}>{i + 1}</option>;
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
                        Masukkan Password Cluster
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
                            {dataMaba.map((data, index) => (
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
                                        <span className="text-base font-bold">
                                            {data.kelompok}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        {data.url_transformer == null ? (
                                            <p>Tidak ada tugas</p>
                                        ) : (
                                            <a
                                                href={data.url_transformer}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button>Buka Post</Button>
                                            </a>
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        <Input
                                            ref={addToRefsDurasi}
                                            type="checkbox"
                                            className="w-7 h-7"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            ref={addToRefsJargon}
                                            type="checkbox"
                                            className="w-7 h-7"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            ref={addToRefsBumper}
                                            type="checkbox"
                                            className="w-7 h-7"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            ref={addToRefsInframe}
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
                                                    kirimData(data.nim, index)
                                                }
                                            >
                                                Kirim
                                            </button>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {isLoading ? (
                                            <button
                                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-600 border border-transparent active:bg-red-600 hover:bg-red-500 focus:ring focus:ring-red-200"
                                                disabled
                                            >
                                                Laporkan
                                            </button>
                                        ) : (
                                            <button
                                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-600 border border-transparent active:bg-red-600 hover:bg-red-500 focus:ring focus:ring-red-200"
                                                onClick={() =>
                                                    kirimSara(data.nim, index)
                                                }
                                            >
                                                Laporkan
                                            </button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
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

export default PenilaianTransformer;
