import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
// const Dashboard = lazy(() => import("../pages/Dashboard"));
const Sayembara = lazy(() => import("../pages/Sayembara"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Penugasan = lazy(() => import("../pages/Penugasan"));
const Presensi = lazy(() => import("../pages/Presensi"));
const Penilaian = lazy(() => import("../pages/Penilaian"));
const Perizinan = lazy(() => import("../pages/Perizinan"));
const TugasTwibbon = lazy(() => import("../pages/TugasTwibbon"));
const TugasBiskuit = lazy(() => import("../pages/TugasBiskuit"));
const TugasDharma = lazy(() => import("../pages/TugasDharma"));
const TugasMinat = lazy(() => import("../pages/TugasMinat"));
const TugasGaung = lazy(() => import("../pages/TugasGaung"));
const TugasKenali = lazy(() => import("../pages/TugasKenali"));
const TugasTransformer = lazy(() => import("../pages/TugasTransformer"));
// const Forms = lazy(() => import('../pages/Forms'))
// const Cards = lazy(() => import('../pages/Cards'))
// const Charts = lazy(() => import('../pages/Charts'))
// const Buttons = lazy(() => import('../pages/Buttons'))
// const Modals = lazy(() => import('../pages/Modals'))
// const Tables = lazy(() => import('../pages/Tables'))
// const Page404 = lazy(() => import('../pages/404'))
// const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
    {
        path: "/dashboard", // the url
        component: Dashboard, // view rendered
    },
    {
        path: "/penugasan",
        component: Penugasan,
    },
    {
        path: "/penugasan/tugas-twibbon",
        component: TugasTwibbon,
    },
    {
        path: "/penugasan/kenali-brawijaya",
        component: TugasKenali,
    },
    {
        path: "/penugasan/dharma-warta-abhiyaksa",
        component: TugasDharma,
    },
    {
        path: "/penugasan/gaung-budaya-nusantara",
        component: TugasGaung,
    },
    {
        path: "/penugasan/kenali-minat",
        component: TugasMinat,
    },
    {
        path: "/penugasan/transformer",
        component: TugasTransformer,
    },
    {
        path: "/penugasan/biskuit",
        component: TugasBiskuit,
    },
    // {
    //     path: "/sayembara",
    //     component: Sayembara,
    // },
    // {
    //     path: "/presensi",
    //     component: Presensi,
    // },
    {
        path: "/penilaian",

        component: Penilaian,
    },
    {
        path: "/perizinan",
        component: Perizinan,
    },
];

export default routes;

const soals = [
    {
        soal: "UKM yang bergerak di bidang agrikultur dibawah ini, yaitu",
        soalGambar: null,
        jawaban: [
            { pilihan: "IAAS LC UB", isAnswer: true },
            { pilihan: "IASC LC UB", isAnswer: false },
            { pilihan: "IASV LC UB", isAnswer: false },
            { pilihan: "IAES LC UB", isAnswer: false },
        ],
    },
    {
        soal: "Berikut ini merupakan kegiatan yang dilakukan oleh UKM",
        soalGambar: "nama_file.png",
        jawaban: [
            { pilihan: "IAAS LC UB", isAnswer: true },
            { pilihan: "IASC LC UB", isAnswer: false },
            { pilihan: "IASV LC UB", isAnswer: false },
            { pilihan: "IAES LC UB", isAnswer: false },
        ],
    },
    {
        soal: "UKM yang bergerak di bidang agrikultur dibawah ini, yaitu",
        soalGambar: null,
        jawaban: [
            { pilihan: "a.png", isAnswer: true },
            { pilihan: "b.png", isAnswer: false },
            { pilihan: "c.png", isAnswer: false },
            { pilihan: "d.png", isAnswer: false },
        ],
    },
];
