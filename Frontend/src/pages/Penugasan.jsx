import React from "react";
import TimerCard from "../components/cards/TimerCard";

export default function Penugasan() {
    return (
        <>
            <h1 className="text-4xl font-bold py-10 lg:py-5 text-center lg:text-left">
                Penugasan
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-8">
                <TimerCard />
                <TimerCard />
                <TimerCard />
                <TimerCard />
                <TimerCard />
            </div>
        </>
    );
}
