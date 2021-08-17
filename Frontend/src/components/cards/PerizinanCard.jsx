import React from "react";

const PerizinanCard = ({ judul, kode }) => {
    return (
        <>
            <section className="rounded-lg shadow-md bg-gray-500 flex flex-col justify-center items-center w-48 h-48 cursor-pointer">
                <h1 className="text-center">{judul}</h1>
            </section>
        </>
    );
};

export default PerizinanCard;
