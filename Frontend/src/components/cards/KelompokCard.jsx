import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@windmill/react-ui";
import React, { useState } from "react";

const KelompokCard = ({ listKelompok }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [num, setNum] = useState(0);

    function openModal(index) {
        setNum(index);
        setIsModalOpen(true);
        console.log(index);
    }

    function Hadir() {
        closeModal();
    }

    function closeModal() {
        setIsModalOpen(false);
    }
    return (
        <section className="p-5 rounded-lg shadow-lg space-y-4 bg-white dark:bg-gray-800">
            <h1 className="font-bold text-xl text-center lg:text-left dark:text-gray-200">
                Kelompok Kamu
            </h1>
            <div id="containerKelompok" className="space-y-4">
                {listKelompok.map((data, index) => {
                    return (
                        <div
                            onClick={() => openModal(index)}
                            className="w-full py-4 bg-purple-600 rounded-lg flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-3 lg:space-y-0 px-2 cursor-pointer lg:px-10 lg:pr-20 hover:bg-purple-700 transition-bg duration-200"
                        >
                            <div className="">
                                <p className="text-lg font-bold text-white lg:pr-20">
                                    {data.nama}
                                </p>
                                <p className="font-medium text-gray-200 text-center lg:text-left">
                                    {data.fakultas}
                                </p>
                            </div>

                            <div className="flex justify-center items-center w-7 space-x-4">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/2111/2111728.png"
                                    alt=""
                                />
                                <img
                                    src="https://image.flaticon.com/icons/png/512/2111/2111498.png"
                                    alt=""
                                />
                                <img
                                    src="https://image.flaticon.com/icons/png/512/2111/2111463.png"
                                    alt=""
                                />
                            </div>
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                <ModalHeader className="text-center">
                                    Informasi Kontak {listKelompok[num].nama} :
                                </ModalHeader>
                                <ModalHeader className="text-2xl font-bold flex flex-col text-center">
                                    <p>
                                        Whatsapp :{" "}
                                        {listKelompok[num].sosmed.split("%")[0]}
                                    </p>
                                    <p>
                                        Instagram :{" "}
                                        {listKelompok[num].sosmed.split("%")[1]}
                                    </p>
                                    <p>
                                        Line :{" "}
                                        {listKelompok[num].sosmed.split("%")[2]}
                                    </p>
                                </ModalHeader>
                                <ModalBody className="py-5 text-center">
                                    Silahkan hubungi teman anda untuk
                                    mengerjakan tugas kelompok.
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        className="w-full sm:w-auto"
                                        onClick={Hadir}
                                    >
                                        Tutup
                                    </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default KelompokCard;
