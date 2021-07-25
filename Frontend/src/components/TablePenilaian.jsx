import React from "react";
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

const TablePenilaian = () => {
    const headerTable = ["NAMA TUGAS", "NILAI", "STATUS", "DEADLINE"];
    const listTugas = [
        { nama: "Presensi Rangkaian PKKMB", deadline: "31 Agustus 2021" },
        { nama: "Presensi Rangkaian PBPBK", deadline: "23 Agustus 2021" },
        { nama: "TTS RAJA Brawijaya", deadline: "20 September 2021" },
        { nama: "Video Pengenalan Tik Tok", deadline: "18 Agustus 2021" },
        { nama: "Twibbon Instagram", deadline: "18 Agustus 2021" },
    ];

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
                    {listTugas.map((dataTugas) => (
                        <TableRow className=" hover:bg-gray-200 transition-bg duration-300 cursor-pointer">
                            <TableCell>
                                <span className="text-sm">
                                    {dataTugas.nama}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">-</span>
                            </TableCell>
                            <TableCell>
                                <Badge type="success">success</Badge>
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
                    totalResults={5}
                    resultsPerPage={5}
                    onChange={() => {}}
                    label="Table navigation"
                />
            </TableFooter>
        </TableContainer>
    );
};

export default TablePenilaian;
