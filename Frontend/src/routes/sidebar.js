/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: "/app/dashboard", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "Dashboard", // name that appear in Sidebar
    },
    {
        path: "/app/penugasan",
        icon: "PenugasanIcon",
        name: "Penugasan",
    },
    {
        path: "/app/penilaian",
        icon: "PenilaianIcon",
        name: "Penilaian",
    },
    {
        path: "/app/presensi",
        icon: "PresensiIcon",
        name: "Presensi",
    },
    {
        path: "/app/perizinan",
        icon: "CrisisCenterIcon",
        name: "Perizinan",
    },
    // {
    //     path: "/app/minat-ukm",
    //     icon: "MinatUKMIcon",
    //     name: "Minat UKM",
    // },
];

export default routes;
