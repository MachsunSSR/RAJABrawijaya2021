import { Avatar, Button } from "@windmill/react-ui";
import React from "react";

const SosialCard = () => {
    const dataMedsos = [
        {
            link: "https://www.instagram.com/raja_brawijaya/",
            judul: "Instagram",
            gambar: "https://image.flaticon.com/icons/png/512/1384/1384063.png",
        },
        {
            link: "https://twitter.com/raja_brawijaya",
            judul: "Twitter",
            gambar: "https://image.flaticon.com/icons/png/512/145/145812.png",
        },
        {
            link: "http://t.me/rajabrawijaya",
            judul: "Telegram",
            gambar: "https://image.flaticon.com/icons/png/512/2111/2111646.png",
        },
        {
            link: "https://www.tiktok.com/@rajabrawijayaub",
            judul: "TikTok",
            gambar: "https://image.flaticon.com/icons/png/512/3046/3046121.png",
        },
        {
            link: "https://www.youtube.com/channel/UCpNS1e8i6pgkxqxbdIPnUNQ",
            judul: "Youtube",
            gambar: "https://image.flaticon.com/icons/png/512/1384/1384060.png",
        },
        {
            link: "https://page.line.me/ppr6936r",
            judul: "Line",
            gambar: "https://image.flaticon.com/icons/png/512/124/124027.png",
        },
    ];
    return (
        <section className="p-5 rounded-lg shadow-lg space-y-4 bg-white dark:bg-gray-800">
            <h1 className="font-bold text-xl text-center dark:text-gray-200">
                Ikuti Media Sosial RAJA Brawijaya
            </h1>
            <div className="grid grid-cols-3 justify-center items-center gap-4">
                {dataMedsos.map((data) => {
                    return (
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noreferrer"
                            className=""
                        >
                            <Button className="w-full inline-block items-center justify-center lg:justify-between space-x-2">
                                {" "}
                                <span className="font-semibold text-base">
                                    {data.judul}
                                </span>{" "}
                                <span className="w-8 lg:block hidden">
                                    <Avatar
                                        className="bg-white"
                                        src={data.gambar}
                                        alt=""
                                    />
                                </span>
                            </Button>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default SosialCard;
