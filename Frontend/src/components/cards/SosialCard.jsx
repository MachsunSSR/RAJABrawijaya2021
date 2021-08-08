import { Button } from "@windmill/react-ui";
import React from "react";

const SosialCard = () => {
    return (
        <section className="p-5 rounded-lg shadow-lg space-y-4 dark:bg-gray-800">
            <h1 className="font-bold text-xl text-center dark:text-gray-200">
                Ikuti Media Sosial RAJA Brawijaya
            </h1>
            <div className="grid grid-cols-3 justify-center items-center gap-4">
                <Button>Instagram</Button>
                <Button>Twitter</Button>
                <Button>Line</Button>
                <Button>Telegram</Button>
                <Button>TikTok</Button>
                <Button>Youtube</Button>
            </div>
        </section>
    );
};

export default SosialCard;
