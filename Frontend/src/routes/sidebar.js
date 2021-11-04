/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: "/apps/dashboard", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "Dashboard", // name that appsear in Sidebar
    },
    {
        path: "/apps/penugasan",
        icon: "PenugasanIcon",
        name: "Penugasan",
    },
    {
        path: "/apps/penilaian",
        icon: "PenilaianIcon",
        name: "Penilaian",
    },
    // {
    //     path: "/apps/sayembara",
    //     icon: "SearchIcon",
    //     name: "Sayembara",
    // },
    // {
    //     path: "/apps/presensi",
    //     icon: "PresensiIcon",
    //     name: "Presensi",
    // },
    {
        path: "/apps/perizinan",
        icon: "CrisisCenterIcon",
        name: "Perizinan",
    },
    // {
    //     path: "/apps/minat-ukm",
    //     icon: "MinatUKMIcon",
    //     name: "Minat UKM",
    // },
];

export default routes;
