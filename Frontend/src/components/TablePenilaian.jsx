import React, { useContext, useEffect, useState } from "react";
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    Pagination,
    TableRow,
    TableCell,
    Avatar,
    Badge,
} from "@windmill/react-ui";
import { DataPenugasan } from "../services/Penugasan";
import { UserContext } from "../context/UserContext";

const TablePenilaian = () => {
    const headerTable = ["NAMA TUGAS", "NILAI", "STATUS", "DEADLINE"];
    const [user, setUser] = useContext(UserContext);
    const [dataPenugasan, setDataTugas] = useState(DataPenugasan);

    useEffect(() => {
        console.log("fetching penilaian...");
        for (const [index, [key, value]] of Object.entries(
            Object.entries(user.penilaian)
        )) {
            dataPenugasan[index].nilai = value;
        }

        // setDataTugas(dataPenugasan);
    }, [user]);

    return (
        <TableContainer>
            <Table>
                <TableHeader className="px-10">
                    <TableRow className="bg-purple-600 text-white font-semibold">
                        {headerTable.map((dataHeader, index) => (
                            <TableCell key={index}>{dataHeader}</TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataPenugasan.map((dataTugas, index) => (
                        <TableRow
                            className=" hover:bg-gray-200 transition-bg duration-300 cursor-pointer"
                            key={dataTugas.judul}
                        >
                            <TableCell>
                                <span className="text-sm">
                                    {dataTugas.judul}
                                </span>
                            </TableCell>
                            <TableCell>
                                {dataTugas.judul == "Kenali Brawijaya" ||
                                dataTugas.judul == "Kenali Minat Abhiyaksa" ? (
                                    <span className="text-sm">
                                        {dataTugas.nilai == null
                                            ? "-"
                                            : dataTugas.nilai}
                                    </span>
                                ) : (
                                    <span className="text-sm">-</span>
                                )}
                            </TableCell>
                            <TableCell>
                                {dataTugas.nilai == null ? (
                                    <Badge type="danger">
                                        Belum Dikerjakan
                                    </Badge>
                                ) : dataTugas.judul == "Kenali Brawijaya" ? (
                                    <Badge>Dinilai</Badge>
                                ) : (
                                    <Badge type="success">Sedang dinilai</Badge>
                                )}
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">
                                    {dataTugas.deadline}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooter>
                <Pagination
                    totalResults={10}
                    resultsPerPage={10}
                    onChange={() => {}}
                    label="Table navigation"
                />
            </TableFooter>
        </TableContainer>
    );
};

export default TablePenilaian;
