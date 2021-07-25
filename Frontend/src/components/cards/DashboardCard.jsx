import React from "react";

const DashboardCard = ({ judul }) => {
    return (
        <section className="shadow-lg rounded-lg flex justify-center items-center h-40 text-center">
            <h1>{judul}</h1>
        </section>
    );
};

export default DashboardCard;
