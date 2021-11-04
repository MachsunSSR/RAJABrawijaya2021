import React, { useEffect, useRef, useState } from "react";
import {
    Table,
    Input,
    Button,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    Select,
    TableBody,
    TableFooter,
    Pagination,
} from "@windmill/react-ui";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { passwordCluster } from "../services/passwordCluster";

const PenilaianBiskuit = () => {
    const [cluster, setCluster] = useState(1);
    const [locked, setLocked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const revealRefs = useRef([]);
    const durasiRefs = useRef([]);
    const bumperRefs = useRef([]);
    const subtitleRefs = useRef([]);
    const jargonRefs = useRef([]);
    const latarBelakangRefs = useRef([]);
    const tujuanRefs = useRef([]);
    const penjelasanProdukRefs = useRef([]);
    const logoRabrawRefs = useRef([]);
    const logoUbRefs = useRef([]);
    const posterRefs = useRef([]);
    const perkenalanRefs = useRef([]);
    const penjelasanRefs = useRef([]);
    const penutupRefs = useRef([]);
    const saraRefs = useRef([]);
    durasiRefs.current = [];
    revealRefs.current = [];
    jargonRefs.current = [];
    bumperRefs.current = [];
    subtitleRefs.current = [];
    latarBelakangRefs.current = [];
    tujuanRefs.current = [];
    penjelasanProdukRefs.current = [];
    logoRabrawRefs.current = [];
    logoUbRefs.current = [];
    posterRefs.current = [];
    perkenalanRefs.current = [];
    penjelasanRefs.current = [];
    penutupRefs.current = [];
    saraRefs.current = [];
    const [dataMaba, setDataMaba] = useState([
        {
            nim: "215040107113028",
            nama: "lailatul mafiroh",
            kelompok: "94",
            cluster: "58",
            url_biskuit_poster:
                "https://www.instagram.com/p/CSy9T6Ihgtx/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/p/CSy2yH5hSaY/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215080100111042",
            nama: "VIONA ATIKAH ABRANI",
            kelompok: "95",
            cluster: "10",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJwyhcBVGg/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKBtQPMP6B/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215110101111046",
            nama: "Shafa Nazira",
            kelompok: "95",
            cluster: "38",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJxUUgAA8w/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJ8q-xoR9k/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215080207111055",
            nama: "Nadia Saputri",
            kelompok: "95",
            cluster: "38",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUKSQthPcv8/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKHAlWDuBa/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215040201111232",
            nama: "FITA RATNA GISKA PRISILIA",
            kelompok: "95",
            cluster: "54",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJuP9cvv0H/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJ7U0ig62j/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215110107111013",
            nama: "Ramadhanya Myrell Herinta",
            kelompok: "95",
            cluster: "18",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJxiWqpLJk/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJ__pJJtBZ/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215120307111011",
            nama: "NADYA NURINA FORTUNA",
            kelompok: "95",
            cluster: "24",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJ2nizJ5SG/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJ8Nxkpf1F/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215020107111034",
            nama: "NATALIA BELLA PURNAMASARI",
            kelompok: "95",
            cluster: "61",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJtXejhD8ni90UzdCxleb5XOrKycR5u1ZTtsE0/",
            url_biskuit_igtv:
                "https://www.instagram.com/p/CUK8TcMhANaXrUav7_YfqlqUg7iE5dVruZd1200/",
            nilai_biskuit: 56,
        },
        {
            nim: "215020107111001",
            nama: "ANNISYA DWI HAPSARI",
            kelompok: "95",
            cluster: "58",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJwOYRpwG_/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKjMYKpPOD/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215061100111012",
            nama: "MUHAMMAD ALTHAF RAFIF",
            kelompok: "95",
            cluster: "16",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJ8mW4JhFM/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKhXrKp77o/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215070107111005",
            nama: "MUKHAMMAD NURVI FARHAN ILHAMI",
            kelompok: "95",
            cluster: "62",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJ0A40lSt_/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKBl7-FX4N/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215100507111012",
            nama: "Thomas Aditya Aryaputra",
            kelompok: "96",
            cluster: "5",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCrzWaP3xm/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKDIfll1GJ/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215090201111034",
            nama: "FITRI AMALIA HASANAH",
            kelompok: "96",
            cluster: "57",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCZWm2Fp-P/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJqckMB-Xe/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215110300111018",
            nama: "GHAZALA SABRIEN MAULIDYA",
            kelompok: "96",
            cluster: "14",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCaz9jhAnw/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUL05o5Jab_/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215080207111003",
            nama: "LIANA FAIZAH AULIA",
            kelompok: "96",
            cluster: "64",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUDAOwCJAvY/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJpa5gJ64v/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215100100111041",
            nama: "NADHIF KEMAL ZAHYA",
            kelompok: "96",
            cluster: "43",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUDKxKABdPS/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJlHG9BGqZ/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215130100111048",
            nama: "YOGI ADITYA NAINGGOLAN",
            kelompok: "96",
            cluster: "43",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUDNtGYJekK/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKpqB9J7Uo/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215030101111012",
            nama: "ALIF KUSUMA WARDANI",
            kelompok: "96",
            cluster: "30",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCaGz8BwLY/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJoWBth1Qw/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215090801111018",
            nama: "KEZIA PUAN PIRENANINGDIA",
            kelompok: "96",
            cluster: "12",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUDAFfQp7QA/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJnrE-JU0a/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215090407111045",
            nama: "Joseph Marvel Subiyanto Junior",
            kelompok: "96",
            cluster: "19",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUFJ7KZpbTn/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKivVIjdwS/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215120200111030",
            nama: "OCTAVIANUS JASON MULYONO PUTRA",
            kelompok: "96",
            cluster: "18",
            url_biskuit_poster: "https://www.instagram.com/p/CUJF2yeB9ck/",
            url_biskuit_igtv: "https://www.instagram.com/p/CUJqHDlh_dH/",
            nilai_biskuit: 56,
        },
        {
            nim: "215061100111013",
            nama: "ALIFAH SYFA YUNITA",
            kelompok: "97",
            cluster: "48",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT6PSt8l81w/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT6TsvXFzv6/?utm_medium=copy_link",
            nilai_biskuit: 60,
        },
        {
            nim: "215091001111028",
            nama: "RANGGA PUTRA DEWANGGA",
            kelompok: "97",
            cluster: "44",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUGJc8xBw7e/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUGJpTshuKX/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215120501111022",
            nama: "REYNA HENIN",
            kelompok: "97",
            cluster: "21",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT6O387BBQm/?utm_medium=copy_link",
            url_biskuit_igtv: null,
            nilai_biskuit: 56,
        },
        {
            nim: "215090501111033",
            nama: "MOCHAMAD IRFAN ALFARISI",
            kelompok: "97",
            cluster: "64",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCmeoUJV1W/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUCoeV_pMFw/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215040200111126",
            nama: "RAIHAN ARFAQ LAKSAMANA",
            kelompok: "97",
            cluster: "16",
            url_biskuit_poster: null,
            url_biskuit_igtv: null,
            nilai_biskuit: null,
        },
        {
            nim: "215130100111011",
            nama: "ANINDYA AVELLANEDA PRAMESWARI",
            kelompok: "97",
            cluster: "17",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT__E1kJAPr/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKf9oDJPCp/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215060601111031",
            nama: "Rista Yunita Sari",
            kelompok: "97",
            cluster: "54",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUBylt_lGfG/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUCXN2vl8eD/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215060100111036",
            nama: "ALI HUSIN",
            kelompok: "97",
            cluster: "26",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUK3UlfhlIs/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUK3dEGBt90/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215020300111011",
            nama: "SHERLLY SASKIA PUTRI LUMBAN RAJA",
            kelompok: "97",
            cluster: "53",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT6NNuzJaIN/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT6QA0-Jcuq/?utm_medium=copy_link",
            nilai_biskuit: 60,
        },
        {
            nim: "213140507111028",
            nama: "ADELIA FITRIASARI",
            kelompok: "98",
            cluster: "31",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT0mOc5PLKr/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUCeqaRpNgS/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215040201111056",
            nama: "AYUNDA MARETA PRADIKA ADJI",
            kelompok: "98",
            cluster: "1",
            url_biskuit_poster:
                "https://www.instagram.com/p/CTzSsRApu4a/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUFZiefJnJ6/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215040200111205",
            nama: "ANGGI RIA MEISAROH",
            kelompok: "98",
            cluster: "48",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUKJ1aVBqT6/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKKgWmB5Y3/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215090200111021",
            nama: "FRISKE PRISILIA",
            kelompok: "98",
            cluster: "33",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUKlu2CB5ss/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT_vYaVpLwu/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215050100111123",
            nama: "DIMAS AGENG MAULID",
            kelompok: "98",
            cluster: "43",
            url_biskuit_poster:
                "https://www.instagram.com/p/CTww0cqB6bw/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUCs9TvhmAC/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "213140707111056",
            nama: "SARAH AULIA FEBRIAND",
            kelompok: "98",
            cluster: "9",
            url_biskuit_poster:
                "https://www.instagram.com/p/CTySvnpB_Pn/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUNOhPABjJk/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "213141514111249",
            nama: "ARESTHA PUTRI NURIZKY",
            kelompok: "98",
            cluster: "64",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT_v3DBJ9QS/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT_vYaVpLwu/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215010101111090",
            nama: "Raisa Zahira",
            kelompok: "98",
            cluster: "58",
            url_biskuit_poster:
                "https://www.instagram.com/p/CTwr6d1vY5N/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUAlMbOJzm9/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215080307111036",
            nama: "Salsi Nabila Tsyabita Imtiyas",
            kelompok: "98",
            cluster: "20",
            url_biskuit_poster:
                "https://www.instagram.com/p/CTzhRQLPDyz/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUC2ISMj5BV/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215090200111037",
            nama: "Silvana Br Karo",
            kelompok: "99",
            cluster: "9",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUF3tAZPWIS/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUHlZbjAhJq/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215110501111043",
            nama: "JASMINE MOUZA SABRINANDYA PUTRI",
            kelompok: "99",
            cluster: "34",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUEUIfzF5Xi/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUIImoLgB7n/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215050100111013",
            nama: "MAISUN SITTA",
            kelompok: "99",
            cluster: "59",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUERoS2Bbmn/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUHgymjBG3t/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215110300111023",
            nama: "Khansa Firzana Ufairah",
            kelompok: "99",
            cluster: "07",
            url_biskuit_poster: "https://www.instagram.com/p/CUEVusDv6lu/",
            url_biskuit_igtv: "https://www.instagram.com/tv/CUHjQrNgupQ/",
            nilai_biskuit: 56,
        },
        {
            nim: "215050100111129",
            nama: "DIAH CAHYA KEMALA",
            kelompok: "99",
            cluster: "22",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUFYlvMvoGH/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUHsC6UDf1y/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215080500111028",
            nama: "SAFIUL DWI FERDIANSYAH",
            kelompok: "99",
            cluster: "36",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUGiXuvBNCt/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUHt4KJJrzi/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "213141514111171",
            nama: "DWI SRIRAHAYU",
            kelompok: "99",
            cluster: "50",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUFEQ7fB1GL/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKMS_ChoE2/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215040307111008",
            nama: "Syifa Azzahra",
            kelompok: "100",
            cluster: "55",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUJ2c5Ghb2P/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKtPi4Bn_M/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215090301111027",
            nama: "Josephine Abigael",
            kelompok: "100",
            cluster: "58",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCM4iwP0wY/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKulJzluVe/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215061100111048",
            nama: "FARHAN HARTADI WIBOWO",
            kelompok: "100",
            cluster: "45",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCao3hpaQC/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKs31mg0Rp/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215060201111035",
            nama: "Juan Andira Ergatha",
            kelompok: "100",
            cluster: "53",
            url_biskuit_poster: "https://www.instagram.com/p/CUCMRPEhvfS/",
            url_biskuit_igtv: "https://www.instagram.com/p/CUKwmtuhM32/",
            nilai_biskuit: 56,
        },
        {
            nim: "215060501111047",
            nama: "FARRAH EMELIA YANTES",
            kelompok: "100",
            cluster: "3",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUEIOoMBKvr/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKsw-Mp-s6/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215110500111054",
            nama: "ELYISA KURNIATI",
            kelompok: "100",
            cluster: "50",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCKE1LlmSu/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKuHZOlo_e/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215061100111020",
            nama: "NAUFAL SYAMMARI",
            kelompok: "100",
            cluster: "58",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCaDHcJCW8/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKtvDhpgT8/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215040101111020",
            nama: "Amanda Rosalina",
            kelompok: "100",
            cluster: "07",
            url_biskuit_poster:
                "https://www.instagram.com/p/CUCNJYDvFYt/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKvczhjnZJ/?utm_source=ig_web_copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215100107111047",
            nama: "Meisya Wira Dwi Wahyudi",
            kelompok: "100",
            cluster: "39",
            url_biskuit_poster: "https://www.instagram.com/p/CUCUINphRi4/",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKvgMDBB-5/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215020201111034",
            nama: "AISYAH FEBTRINA QUROTA AINI",
            kelompok: "101",
            cluster: "16",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT17YjkPLzb/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT2R0SYF5W0/?utm_source=ig_web_copy_link",
            nilai_biskuit: 60,
        },
        {
            nim: "215150200111027",
            nama: "Kesid Dewa Wicaksana",
            kelompok: "101",
            cluster: "30",
            url_biskuit_poster: "https://www.instagram.com/p/CT17hLpBo4q/",
            url_biskuit_igtv: "https://www.instagram.com/p/CT2QHSml5Hg/",
            nilai_biskuit: 60,
        },
        {
            nim: "213141514111217",
            nama: "Nurindra Sekar Kinasih",
            kelompok: "101",
            cluster: "61",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT2NWfNvSZd/?utm_source=ig_web_copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT3agCHD_Vi/?utm_source=ig_web_copy_link",
            nilai_biskuit: 60,
        },
        {
            nim: "215080501111041",
            nama: "SAVIATUZ ZAHRO",
            kelompok: "101",
            cluster: "45",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT4bY3qvQvf/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUKCjTYlUaT/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
        {
            nim: "215080401111048",
            nama: "NADHIF AULIA SHAHNA",
            kelompok: "101",
            cluster: "14",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT1632XJjXs/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CT2AYFvppnb/?utm_medium=copy_link",
            nilai_biskuit: 60,
        },
        {
            nim: "215110300111015",
            nama: "NOVAYA CAVATINA",
            kelompok: "101",
            cluster: "38",
            url_biskuit_poster:
                "https://www.instagram.com/p/CT18HtwP-EG/?utm_medium=copy_link",
            url_biskuit_igtv:
                "https://www.instagram.com/tv/CUJYYVvATP7/?utm_medium=copy_link",
            nilai_biskuit: 56,
        },
    ]);
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        if (name == passwordCluster[cluster - 1]) {
            setLocked(false);
        } else {
            swal(
                "KOK SALAH? HAYO MAU NGAPAIN!",
                `masukkan password yang benar`,
                "error"
            );
        }
    };

    const fetchData = async (cluster) => {
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/koreksi/lihat_data",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status_koreksi: "0",
                    jenis_penugasan: "biskuit",
                    kloter: cluster,
                }),
            }
        );
        const data = await fetching.json();
        setDataMaba(data.data);
        // console.log(data);
        // console.log(dataMaba.data);
    };

    const kirimData = async (nim, index) => {
        setIsLoading(true);
        let nilai_tambah = 0;

        nilai_tambah += durasiRefs.current[index].checked ? 10 : 5;
        nilai_tambah += subtitleRefs.current[index].checked ? 10 : 5;
        nilai_tambah += bumperRefs.current[index].checked ? 10 : 5;
        nilai_tambah += latarBelakangRefs.current[index].checked ? 1 : 0;
        nilai_tambah += tujuanRefs.current[index].checked ? 1 : 0;
        nilai_tambah += penjelasanProdukRefs.current[index].checked ? 1 : 0;
        nilai_tambah += logoRabrawRefs.current[index].checked ? 1 : 0;
        nilai_tambah += logoUbRefs.current[index].checked ? 1 : 0;
        nilai_tambah += posterRefs.current[index].checked ? 1 : 0;
        nilai_tambah += perkenalanRefs.current[index].checked ? 1 : 0;
        nilai_tambah += penjelasanRefs.current[index].checked ? 1 : 0;
        nilai_tambah += penutupRefs.current[index].checked ? 1 : 0;
        nilai_tambah += jargonRefs.current[index].checked ? 1 : 0;

        console.log(nilai_tambah);
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/koreksi/post_data",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nim,
                    jenis_penugasan: "biskuit",
                    nilai_tambah,
                }),
            }
        );

        const data = await fetching.json();
        console.log(data);
        if (data.status === "success") {
            swal(
                "Berhasil mengirimkan koreksi",
                `Kerja bagus, lanjutkeun`,
                "success"
            );
            revealRefs.current[index].className =
                revealRefs.current[index].className + " hidden";
        }
        setIsLoading(false);
    };
    const kirimSara = async (nim, index) => {
        setIsLoading(true);
        let nilai_tambah = -100;
        console.log(nilai_tambah);
        const fetching = await fetch(
            "https://rajabrawijaya.ub.ac.id/api/maba/koreksi/post_data",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nim,
                    jenis_penugasan: "biskuit",
                    nilai_tambah,
                }),
            }
        );

        const data = await fetching.json();
        console.log(data);
        if (data.status === "success") {
            swal(
                "Berhasil mengirimkan koreksi",
                `Kerja bagus, lanjutkeun`,
                "success"
            );
            revealRefs.current[index].className =
                revealRefs.current[index].className + " hidden";
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(cluster);
    }, [cluster]);

    const changeCluster = (e) => {
        setLocked(true);
        setCluster(e.target.value);
    };
    const headerTable = [
        "NO",
        "NAMA",
        "KELOMPOK",
        "POST POSTER",
        "POST IGTV",
        "Latar Belakang",
        "Tujuan",
        "Penjelasan",
        "Logo Rabraw",
        "Logo UB",
        "Template",
        "",
        "Durasi",
        "Bumper",
        "Subtitle",
        "Perkenalan",
        "Penjelasan",
        "Penutup",
        "Jargon",
        "KIRIM",
        "SARA",
    ];

    const changePage = (page) => {
        const first = (page - 1) * 15 + 1;
        const last = page * 15;
    };

    const addToRefsRow = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const addToRefsDurasi = (el) => {
        if (el && !durasiRefs.current.includes(el)) {
            durasiRefs.current.push(el);
        }
    };

    const addToRefsBumper = (el) => {
        if (el && !bumperRefs.current.includes(el)) {
            bumperRefs.current.push(el);
        }
    };

    const addToRefsSubtitle = (el) => {
        if (el && !subtitleRefs.current.includes(el)) {
            subtitleRefs.current.push(el);
        }
    };

    const addToRefsJargon = (el) => {
        if (el && !jargonRefs.current.includes(el)) {
            jargonRefs.current.push(el);
        }
    };
    const addToRefsLatarBelakang = (el) => {
        if (el && !latarBelakangRefs.current.includes(el)) {
            latarBelakangRefs.current.push(el);
        }
    };
    const addToRefsTujuan = (el) => {
        if (el && !tujuanRefs.current.includes(el)) {
            tujuanRefs.current.push(el);
        }
    };
    const addToRefsPenjelasanProduk = (el) => {
        if (el && !penjelasanProdukRefs.current.includes(el)) {
            penjelasanProdukRefs.current.push(el);
        }
    };
    const addToRefsLogoRabraw = (el) => {
        if (el && !logoRabrawRefs.current.includes(el)) {
            logoRabrawRefs.current.push(el);
        }
    };
    const addToRefsLogoUB = (el) => {
        if (el && !logoUbRefs.current.includes(el)) {
            logoUbRefs.current.push(el);
        }
    };
    const addToRefsPoster = (el) => {
        if (el && !posterRefs.current.includes(el)) {
            posterRefs.current.push(el);
        }
    };
    const addToRefsPerkenalan = (el) => {
        if (el && !perkenalanRefs.current.includes(el)) {
            perkenalanRefs.current.push(el);
        }
    };
    const addToRefsPenjelasan = (el) => {
        if (el && !penjelasanRefs.current.includes(el)) {
            penjelasanRefs.current.push(el);
        }
    };
    const addToRefsPenutup = (el) => {
        if (el && !penutupRefs.current.includes(el)) {
            penutupRefs.current.push(el);
        }
    };
    const refArr = [
        addToRefsLatarBelakang,
        addToRefsTujuan,
        addToRefsPenjelasanProduk,
        addToRefsLogoRabraw,
        addToRefsLogoUB,
        addToRefsPoster,
        "X",
        addToRefsDurasi,
        addToRefsBumper,
        addToRefsSubtitle,
        addToRefsPerkenalan,
        addToRefsPenjelasan,
        addToRefsPenutup,
        addToRefsJargon,
    ];

    return (
        <div className="dark:bg-gray-900 max-h-full min-h-screen pt-10 px-20">
            <h6 className="mb-10">Tugas Biskuit</h6>
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center space-y-10 lg:space-y-0 lg:space-x-20 mb-10">
                <span className="flex items-center space-x-10">
                    <h1 className="dark:text-gray-200 text-gray-800 text-xl font-bold w-32">
                        Cluster
                    </h1>
                    <Select
                        className="font-bold text-lg"
                        onChange={(e) => changeCluster(e)}
                    >
                        {[...Array(62)].map((e, i) => {
                            return <option key={i + 1}>{i + 1}</option>;
                        })}
                    </Select>
                </span>
            </div>

            {locked ? (
                <div
                    id="containerForm"
                    className="flex flex-col space-y-8 py-8"
                >
                    <h1 className="font-semibold text-3xl text-center dark:text-gray-200">
                        Masukkan Password Cluster
                    </h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full space-y-4 flex flex-col justify-center items-center"
                    >
                        <input
                            className="w-full lg:w-2/3 rounded-full px-7 py-6 text-lg font-semibold border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            {...register("kode")}
                            value={name}
                            required
                            type="password"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="masukkan password"
                        />

                        <Button type="submit" className="w-48">
                            Masuk
                        </Button>
                    </form>
                </div>
            ) : (
                <TableContainer className="mb-10">
                    <Table>
                        <TableHeader className="px-10">
                            <TableRow className="bg-purple-600 text-white font-semibold">
                                {headerTable.map((dataHeader, index) => (
                                    <TableCell key={index}>
                                        {dataHeader}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataMaba.map((data, index) => (
                                <TableRow
                                    className=" hover:bg-gray-200 transition-bg duration-300 cursor-pointer"
                                    key={index}
                                    ref={addToRefsRow}
                                >
                                    <TableCell>
                                        <span className="text-sm">
                                            {index + 1}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-base font-bold">
                                            {data.nama}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-base font-bold">
                                            {data.kelompok}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        {data.url_biskuit_poster == null ? (
                                            <p>Tidak Mengumpulkan</p>
                                        ) : (
                                            <a
                                                href={data.url_biskuit_poster}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button>Buka Poster</Button>
                                            </a>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {data.url_biskuit_igtv == null ? (
                                            <p>Tidak Mengumpulkan</p>
                                        ) : (
                                            <a
                                                href={data.url_biskuit_igtv}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button>Buka IGTV</Button>
                                            </a>
                                        )}
                                    </TableCell>
                                    {refArr.map((ref) => {
                                        return ref == "X" ? (
                                            <TableCell>
                                                <p>|</p>
                                            </TableCell>
                                        ) : (
                                            <TableCell>
                                                <Input
                                                    ref={ref}
                                                    type="checkbox"
                                                    className=" w-7 h-7"
                                                />
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell>
                                        {isLoading ? (
                                            <button
                                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-yellow-400 border border-transparent active:bg-yellow-400 hover:bg-yellow-500 focus:ring focus:ring-yellow-200"
                                                disabled
                                            >
                                                Kirim
                                            </button>
                                        ) : (
                                            <button
                                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-yellow-400 border border-transparent active:bg-yellow-400 hover:bg-yellow-500 focus:ring focus:ring-yellow-200"
                                                onClick={() =>
                                                    kirimData(data.nim, index)
                                                }
                                            >
                                                Kirim
                                            </button>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {isLoading ? (
                                            <button
                                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-600 border border-transparent active:bg-red-600 hover:bg-red-500 focus:ring focus:ring-red-200"
                                                disabled
                                            >
                                                Laporkan
                                            </button>
                                        ) : (
                                            <button
                                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-600 border border-transparent active:bg-red-600 hover:bg-red-500 focus:ring focus:ring-red-200"
                                                onClick={() =>
                                                    kirimSara(data.nim, index)
                                                }
                                            >
                                                Laporkan
                                            </button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TableFooter>
                        {/* <Pagination
                            totalResults={dataMaba.length}
                            resultsPerPage={30}
                            onChange={(e) => {
                                changePage(e);
                            }}
                            label="Table navigation"
                        /> */}
                    </TableFooter>
                </TableContainer>
            )}
        </div>
    );
};

export default PenilaianBiskuit;
