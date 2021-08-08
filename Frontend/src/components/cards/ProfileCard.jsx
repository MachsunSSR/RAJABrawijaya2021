import { Button } from "@windmill/react-ui";
import React from "react";

const ProfileCard = () => {
    return (
        <section className="p-5 shadow-lg rounded-lg space-y-10 dark:bg-gray-800">
            <h1 className="font-bold text-xl dark:text-gray-200">Data Diri</h1>

            <div
                id="identitas"
                className="lg:text-left grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
            >
                <span id="Nama">
                    <h2 className="dark:text-gray-400">NAMA</h2>
                    <h2 className="font-bold text-lg dark:text-gray-200">
                        Safir Rahmahuda Machsun
                    </h2>
                </span>
                <span id="fakultas">
                    <h2 className="dark:text-gray-400">FAKULTAS</h2>
                    <h2 className="font-bold text-lg dark:text-gray-200">
                        Fakultas Ilmu Komputer
                    </h2>
                </span>
                <span id="nim">
                    <h2 className="dark:text-gray-400">NIM</h2>
                    <h2 className="font-bold text-lg dark:text-gray-200">
                        195150207111029
                    </h2>
                </span>
                <span id="prodi">
                    <h2 className="dark:text-gray-400">PRODI</h2>
                    <h2 className="font-bold text-lg dark:text-gray-200">
                        Teknik Informatika
                    </h2>
                </span>
            </div>

            <div
                id="officialAccount"
                className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0"
            >
                <section id="OARabraw" className="space-y-4">
                    <h2 className="font-semibold text-center lg:text-left dark:text-gray-400">
                        Group Resmi Cluster
                    </h2>
                    <span className="flex justify-center lg:justify-start">
                        <Button className="w-56">
                            Group Telegram Cluster 16
                        </Button>
                    </span>
                </section>

                <section id="OA Rabraw" className="space-y-4 lg:ml-2">
                    <h2 className="font-semibold text-center lg:text-left dark:text-gray-400">
                        Official Account Fakultas/Prodi
                    </h2>
                    <span className="flex lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0 justify-center lg:justify-start">
                        <Button className="w-56">Instagram PK2MABA</Button>

                        <Button className="w-56">Instagram Ospek Prodi</Button>
                    </span>
                </section>
            </div>
        </section>
    );
};

export default ProfileCard;
