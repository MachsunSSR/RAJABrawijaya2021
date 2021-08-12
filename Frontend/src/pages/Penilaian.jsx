import React from "react";
import TablePenilaian from "../components/TablePenilaian";

const Penilaian = () => {
    return (
        <>
            <h6 className="pb-10 dark:text-gray-100">Penilaian</h6>
            <p className="mb-10 lg:ml-5 text-gray-600 italic lg:w-2/3 font-bold">
                *Page ini sedang dalam pengerjaan, informasi yang anda lihat
                mungkin tidak aktual. Apabila anda sudah mengerjakan tugas
                tetapi status disini masih "belum dikerjakan", anda tidak perlu
                khawatir karena tugas anda sudah berhasil dikumpulkan
            </p>
            <TablePenilaian />
        </>
    );
};

export default Penilaian;
