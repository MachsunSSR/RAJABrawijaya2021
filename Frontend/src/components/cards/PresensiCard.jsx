import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@windmill/react-ui";
import swal from "sweetalert";

const PresensiCard = ({ judul, kode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function Hadir() {
        closeModal();
        swal(
            `Berhasil Melakukan Presensi ${judul}!`,
            "Silahkan logout dari RAJA Apps dan kembali ke zoom ",
            "success"
        );
    }

    function closeModal() {
        setIsModalOpen(false);
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
                    Anda akan melakukan presensi pada rangkaian :
                </ModalHeader>
                <ModalHeader className="text-5xl font-bold text-center">
                    {judul}
                </ModalHeader>
                <ModalBody className="py-5 text-center">
                    Tekan tombol hadir untuk melakukan presensi.
                </ModalBody>
                <ModalFooter>
                    <Button className="w-full sm:w-auto" onClick={Hadir}>
                        Hadir
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PresensiCard;
