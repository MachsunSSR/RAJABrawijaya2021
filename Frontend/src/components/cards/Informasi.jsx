import React from "react";

const Informasi = ({ data, link }) => {
    return (
        <section className="mt-5 flex justify-center items-center mb-5">
            <div className="bg-purple-600 rounded-md w-full px-10 text-white py-5">
                <h2 className="-ml-5 lg:ml-0 text-2xl font-bold text-left mb-2">
                    Informasi Penting
                </h2>
                <ol className="lg:ml-5 list-decimal text-lg">
                    {data.map((data, index) => {
                        return <li className="mt-2">{data}</li>;
                    })}
                    {link !== undefined ? (
                        <li className="mt-2">
                            Untuk detail perizinan lebih lanjut, silahkan menuju
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold ml-2 underline text-xl"
                            >
                                Pada link berikut
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                </ol>
            </div>
        </section>
    );
};

export default Informasi;
