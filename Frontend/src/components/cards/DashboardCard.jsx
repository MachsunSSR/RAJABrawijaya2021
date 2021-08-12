import React from "react";

const DashboardCard = ({ judul }) => {
    return (
        <section className="shadow-lg rounded-lg flex flex-col justify-center items-center h-40 text-center bg-white dark:bg-gray-800 w-1/2 mt-4 lg:mt-0">
            <h1 className="dark:text-gray-400 mb-6 lg:px-10">{judul}</h1>
            <h1 className="dark:text-gray-200 text-3xl font-bold">6</h1>
        </section>
    );
};

export default DashboardCard;
