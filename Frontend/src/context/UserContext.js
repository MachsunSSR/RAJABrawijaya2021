import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        nim: "205150600111023",
        nama: "Edwin Samodra Pratama",
        fakultas: "Fakultas Ilmu Komputer",
        jurusan: "Pendidikan Teknologi Informasi",
        prodi: "Pendidikan Teknologi Informasi",
        jenjang: "Sarjana S1",
        foto: "https://wmsbf.org/wp-content/uploads/2019/04/default-profile.png",
        cluster: "10",
        kelompok: "1",
        sosmed: "089658425689%dummy%dummy",
        teman_sekelompok: [
            {
                nama: "RAHMATUL FAIZZA",
                fakultas: "Fakultas Ilmu Komputer",
                sosmed: "asdsd%asdsd%asdsd",
            },
            {
                nama: "Safir Rahmahuda Machsun",
                fakultas: "Fakultas Ilmu Komputer",
                sosmed: "089658425689%dummy%dummy",
            },
            {
                nama: "CHINTIYA FEBRIANTI",
                fakultas: "Fakultas Teknologi Pertanian",
                sosmed: "085536319757%%",
            },
            {
                nama: "Achmad Galih Wicaksana Putra",
                fakultas: "Fakultas Ilmu Komputer",
                sosmed: "s%%",
            },
            {
                nama: "0",
                fakultas: "",
                sosmed: "021389312839%%",
            },
            {
                nama: "ANDI MUHAMMAD FARDAN ADHE AFAZA",
                fakultas: "Fakultas Ekonomi dan Bisnis",
                sosmed: "029272882%%",
            },
        ],
        perizinan: [
            {
                nim: "205150600111023",
                rangkaian: "gladi",
                alasan: "sakit",
                link_lampiran: "https://rajabrawijaya.ub.ac.id",
                status: "ditolak",
            },
            {
                nim: "205150600111023",
                rangkaian: "upacara",
                alasan: "sakit",
                link_lampiran: "https://rajabrawijaya.ub.ac.id",
                status: "pending",
            },
        ],
        // nim: null,
        // nama: null,
        // fakultas: null,
        // jurusan: null,
        // prodi: null,
        // jenjang: null,
        // cluster: 0,
        // kelompok: 0,
        // sosmed: null,
        // teman_sekelompok: [],
        // perizinan: [],
    });

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};
