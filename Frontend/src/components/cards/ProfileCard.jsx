import { Button } from "@windmill/react-ui";
import React from "react";

const ProfileCard = () => {
    return (
        <section className="p-5 shadow-lg rounded-lg space-y-10">
            <h1 className="font-bold text-xl">Data Diri</h1>

            <div
                id="identitas"
                className=" flex flex-wrap lg:text-left lg:grid lg:grid-cols-2 gap-4 items-center"
            >
                <span id="Nama">
                    <h2>NAMA</h2>
                    <h2 className="font-bold text-lg">
                        Safir Rahmahuda Machsun
                    </h2>
                </span>
                <span id="fakultas">
                    <h2>FAKULTAS</h2>
                    <h2 className="font-bold text-lg">
                        Fakultas Ilmu Komputer
                    </h2>
                </span>
                <span id="nim">
                    <h2>NIM</h2>
                    <h2 className="font-bold text-lg">195150207111029</h2>
                </span>
                <span id="prodi">
                    <h2>PRODI</h2>
                    <h2 className="font-bold text-lg">Teknik Informatika</h2>
                </span>
            </div>

            <div
                id="officialAccount"
                className="flex justify-center items-center gap-4 lg:flex-nowrap flex-wrap text-center lg:text-left space-y-8 lg:space-y-0"
            >
                <section id="OARabraw" className="space-y-4">
                    <h2 className="font-semibold">
                        Official Account RAJA Brawijaya
                    </h2>
                    <Button className="w-56">Group Telegram Cluster 16</Button>
                    <Button className="w-56">OA Line RAJA Brawijaya</Button>
                </section>

                <section id="OA Rabraw" className="space-y-4">
                    <h2 className="font-semibold">
                        Official Account Fakultas/Prodi
                    </h2>

                    <Button className="w-56">Instagram PK2MABA</Button>

                    <Button className="w-56">Instagram Ospek Prodi</Button>
                </section>
            </div>
        </section>
    );
};

export default ProfileCard;
