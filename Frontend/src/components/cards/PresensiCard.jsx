import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Transition,
    Alert,
} from "@windmill/react-ui";
import swal from "sweetalert";

const PresensiCard = ({ judul, kode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    function openModal() {
        setIsModalOpen(true);
    }
    function closeModal() {
        navigator.clipboard
            .writeText(kode)
            .then(() => {
                // console.log("Text copied to clipboard");
                setIsModalOpen(false);
                swal(
                    "Berhasil Menyalin Kode!",
                    "Silahkan masukkan kode presensi pada kolom input kode",
                    "success"
                );
            })
            .catch((err) => {
                window.clipboardData.setData(kode);
                setIsModalOpen(false);
                // console.error("Could not copy text: ", err);
            });
    }

    return (
        <>
            <section
                className="rounded-lg shadow-md bg-gray-500 flex flex-col justify-center items-center w-48 h-48 cursor-pointer"
                onClick={openModal}
            >
                <h1 className="text-center">{judul}</h1>
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader className="text-center">
                    Kode Presensi Anda :
                </ModalHeader>
                <ModalHeader className="text-3xl font-bold text-center">
                    {kode}
                </ModalHeader>
                <ModalBody className="py-5 text-center">
                    Silahkan copy kode ini dan masukkan kedalam kolom kode
                    presensi yang berada di bawah halaman
                </ModalBody>
                <ModalFooter>
                    <Button className="w-full sm:w-auto" onClick={closeModal}>
                        Salin Kode
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PresensiCard;
