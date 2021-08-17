import React from "react";

const DashboardCard = ({ judul, total }) => {
    return (
        <section className="shadow-lg rounded-lg flex flex-col justify-center items-center h-40 text-center bg-white dark:bg-gray-800 w-1/2 mt-4 lg:mt-0 w-full">
            <h1 className="dark:text-gray-400 mb-6 px-10 font-semibold text-lg">
                {judul}
            </h1>
            <h1 className="dark:text-gray-200 text-5xl font-bold -mt-2">
                {total}
            </h1>
        </section>
    );
};

export default DashboardCard;
