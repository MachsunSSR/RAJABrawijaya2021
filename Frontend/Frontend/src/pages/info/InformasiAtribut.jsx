import React from "react";
import InfoTemplate from "../info/InfoTemplate";
const Atribut = () => {
    return (
        <>
            <InfoTemplate
                title={"Atribut PKKMB RAJA Brawijaya 2021"}
                props={
                    "bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32"
                }
            >
                <h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
                    Atribut yang benar
                </h1>
                <h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
                    A. Laki-laki
                </h1>
                <div className="w-full xs:flex-col sm:flex-col flex items-center bg-white justify-center space-x-5 p-5 rounded-2 my-8">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/cowo1.png`}
                        alt="cowo"
                        className="w-full box-border max-w-xs ex:max-w-md exl:max-w-xl"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/cowo2.png`}
                        alt="cowo"
                        className="w-full box-border max-w-xs ex:max-w-md exl:max-w-xl"
                    />
                </div>
                <ol type="1" className="list-decimal my-8 ml-5">
                    <li>
                        Rambut tidak boleh dicat, harus dipotong pendek dan
                        rapi, tidak melebihi leher, telinga, maupun alis.
                    </li>
                    <li>
                        Memakai kemeja putih lengan panjang, berkerah, berbahan
                        kain (bukan kaos maupun jeans), rapi, tidak ketat dan
                        tidak transparan.
                    </li>
                    <li>
                        Memakai celana panjang berwarna hitam berbahan kain,
                        tidak ketat, tidak bermotif dan tidak transparan.
                    </li>
                    <li>Memakai dasi berwarna hitam.</li>
                    <li>Memakai ikat pinggang berwarna hitam polos.</li>
                    <li>Memakai sepatu pantofel berwarna hitam.</li>
                    <li>
                        Memakai kaos kaki berwarna putih polos dan tidak
                        transparan.
                    </li>
                    <li>
                        Memakai name tag berukuran (10,5 cm x 15 cm) beserta
                        tali name tag yang berwarna biru selama kegiatan PKKMB
                        berlangsung. Name tag dapat diunduh{" "}
                        <a
                            href="https://drive.google.com/file/d/1qexABrIXwP-ecZAGLaoXcLjpMunlZnGn/view?usp=sharing
                     "
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            di sini.
                        </a>
                    </li>
                    <li>
                        Tidak diperkenankan mengenakan perhiasan apapun seperti:
                        gelang, anting, kalung, cincin, jam tangan dan
                        lain-lain.
                    </li>
                </ol>
                <h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
                    B. Perempuan
                </h1>
                <div className="w-full flex items-center xs:flex-col sm:flex-col bg-white justify-center space-x-5 p-5 rounded-2 my-8">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/cewe1.png`}
                        alt="cewe"
                        className="w-full box-border max-w-xs  ex:max-w-md exl:max-w-xl"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/cewe2.png`}
                        alt="cewe"
                        className="w-full box-border max-w-xs ex:max-w-md exl:max-w-xl"
                    />
                </div>
                <div className="w-full flex items-center xs:flex-col sm:flex-col bg-white justify-center space-x-5 p-5 rounded-2 my-8">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/hijab1.png`}
                        alt="hijab"
                        className="w-full box-border max-w-xs ex:max-w-md exl:max-w-xl"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/hijab2.png`}
                        alt="hijab"
                        className="w-full box-border max-w-xs ex:max-w-md exl:max-w-xl"
                    />
                </div>
                <ol type="1" className="list-decimal my-8 ml-5">
                    <li>
                        Tidak berjilbab: Rambut rapi, tidak boleh dicat, harus
                        dikuncir satu model ekor kuda, kuncir berwarna hitam dan
                        diperbolehkan mengenakan jepit rambut hanya berwarna
                        hitam.
                    </li>
                    <li>
                        Berjilbab: Jilbab berwarna putih segiempat simetris,
                        tidak transparan, tidak bermotif, tidak berenda tanpa
                        aksesoris tambahan kecuali jarum pentul/peniti,
                        diperbolehkan memakai inner hijab/ciput dan menutup
                        dada.
                    </li>
                    <li>
                        Memakai kemeja lengan panjang berwarna putih polos
                        berkerah berbahan kain (bukan berbahan kaos maupun
                        jeans), rapi, tidak ketat, tidak bermotif dan tidak
                        transparan.
                    </li>
                    <li>
                        Memakai rok panjang wiru/rampel berwarna hitam polos
                        berbahan kain (bukan berbahan kaos maupun chiffon),
                        rapi, tidak ketat, tidak transparan, tidak bermotif, dan
                        tanpa belahan.
                    </li>
                    <li>Memakai dasi berwarna hitam.</li>
                    <li>Memakai ikat pinggang berwarna hitam polos.</li>
                    <li>Memakai sepatu pantofel berwarna hitam polos.</li>
                    <li>
                        ‎Memakai kaos kaki berwarna putih polos dan tidak
                        transparan.
                    </li>
                    <li>
                        Memakai name tag berukuran (10.5 x 15 cm) beserta
                        tali name tag yang berwarna biru selama kegiatan PKKMB
                        berlangsung. Name tag dapat diunduh{" "}
                        <a
                            href="https://drive.google.com/file/d/1qexABrIXwP-ecZAGLaoXcLjpMunlZnGn/view?usp=sharing
                     "
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            di sini.
                        </a>
                    </li>
                    <li>
                        Tidak diperkenankan mengenakan perhiasan apapun seperti:
                        gelang, anting, kalung, cincin, jam tangan dan
                        lain-lain.
                    </li>
                </ol>
                <h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
                    Atribut yang salah
                </h1>
                <div className="w-full flex items-center box-border xs:flex-col sm:flex-col bg-white justify-center space-x-5 p-5 rounded-2 my-8">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/cowosalah.png`}
                        alt="hijab"
                        className="w-full  max-w-imgSalah exl:max-w-xs"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/cewesalah.png`}
                        alt="hijab"
                        className="w-full max-w-imgSalah exl:max-w-xs"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/hijabsalah.png`}
                        alt="hijab"
                        className="w-full max-w-imgSalah exl:max-w-xs"
                    />
                </div>
                <a
                    href="https://drive.google.com/file/d/1qexABrIXwP-ecZAGLaoXcLjpMunlZnGn/view?usp=sharing
               "
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-orange block  p-3 rounded-3"
                >
                    <h2 className="text-md font-bold text-center text-white xs:text-sm sm:text-sm">
                        Download Nametag
                    </h2>
                </a>
            </InfoTemplate>
        </>
    );
};

export default Atribut;
