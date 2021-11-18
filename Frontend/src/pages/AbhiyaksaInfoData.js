import InfoOspekFak from './info/InfoOspekFak';
import Atribut from './info/InformasiAtribut';
import InformasiGladi from './info/InformasiGladi';
import InfoHaloSelma from './info/InformasiHaloSelma';
import InformasiRangkaian from './info/InformasiRangkaian';
import Twibbon from './info/InformasiTwibbon';
import InfoVBG from './info/InfoVBG';
import LaporanKBGO from './info/LaporanKBGO';
import Panduan from './info/Panduan';
import PanduanGCR from './info/PanduanGCR';
import PanduanOH from './info/PanduanOH';
import PendataanEmail from './info/PendataanEmail';
import Penugasan from './info/Penugasan';

export const abhiyaksaInfo = [
	{
		slug: '/abhiyaksa-info/panduan-oh',
		title: 'Panduan Open House',
    desc: null,
		link: null,
		bg: 'bg-openhouse-bg',
		comp: () => {
			return <PanduanOH />;
		},
	},
	{
		slug: '/abhiyaksa-info/penugasan',
		title: 'Penugasan RAJA Brawijaya 2021',
    desc: null,
		link: null,
		bg: 'bg-penugasan-bg',
		comp: () => {
			return <Penugasan />;
		},
	},
	{
		slug: '/abhiyaksa-info/pendataan-email-ub-yang-terkendala',
		title: 'Pendataan Email UB yang Terkendala',
    desc: null,
		link: null,
		bg: 'bg-email-bg',
		comp: () => {
			return <PendataanEmail />;
		},
	},
	{
		slug: '/abhiyaksa-info/laporan-pelecehan-seksual',
		title: 'Laporan Pelecehan Seksual',
    desc: null,
		link: null,
		bg: 'bg-panduan-bg',
		comp: () => {
			return <LaporanKBGO />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-kesalahan-enroll',
		title: 'Informasi Kesalahan Enroll Classroom',
    desc: null,
		link: null,
		bg: 'bg-enroll-bg',
		comp: () => {
			return <PanduanGCR />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-vbg',
		title: 'Informasi Virtual Background',
    desc: null,
		link: null,
		bg: 'bg-vbg-bg',
		comp: () => {
			return <InfoVBG />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-rangkaian',
		title: 'Informasi Pelaksanaan Rangkaian',
    desc: null,
		link: null,
		bg: 'bg-rangkaian-bg',
		comp: () => {
			return <InformasiRangkaian />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-pkkmb-fakultas',
		title: 'Informasi PKKMB Fakultas',
    desc: null,
		link: null,
		bg: 'bg-ospekFak-bg',
		comp: () => {
			return <InfoOspekFak />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-pertanyaan',
		title: 'Informasi Pertanyaan PKKMB',
    desc: null,
		link: null,
		bg: 'bg-halo-bg',
		comp: () => {
			return <InfoHaloSelma />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-atribut',
		title: 'Informasi Atribut',
    desc: null,
		link: null,
		bg: 'bg-atribut-bg',
		comp: () => {
			return <Atribut />;
		},
	},
	{
		slug: '/abhiyaksa-info/info-twibbon',
		title: 'Informasi Twibbon',
    desc: null,
		link: null,
		bg: 'bg-twibbon-bg',
		comp: () => {
			return <Twibbon />;
		},
	},
	{
		slug: '/abhiyaksa-info/panduan-pkkmb',
		title: 'Panduan PKKMB 2021',
    desc: null,
		link: null,
		bg: 'bg-kbgo-bg',
		comp: () => {
			return <Panduan />;
		},
	},
	{
		slug: '/abhiyaksa-info/pengumuman-pelaksanaan-gladi',
		title: 'Pengumuman Pelaksanaan Gladi',
		desc: null,
		link: null,
		bg: 'bg-gladi-bg',
		comp: () => {
			return <InformasiGladi />;
		},
	},
	{
		slug: null,
		title: 'Jingle RAJA Brawijaya',
		link: 'https://www.youtube.com/embed/eiHfJXQSnkY',
		desc: null,
		bg: 'bg-jingle-bg',
		comp: null,
	},
	{
		slug: null,
		title: 'Rasanya Jadi Anak UB',
		link: 'https://www.youtube.com/embed/vDoq1VY25K0',
		desc: null,
		bg: 'bg-podcast-bg',
		comp: null,
	},
	{
		slug: null,
		title: 'Apa itu RAJA Brawijaya',
		link: null,
		desc: 'RAJA Brawijaya atau Rangkaian Acara Jelajah Almamater Universitas Brawijaya adalah serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya agar dapat mengetahui hal-hal yang terkait dengan kehidupan kampus. Rangkaian ini sendiri terdiri dari tiga rangkaian yaitu PKKMB, PBPK, dan OH.',
		bg: 'bg-apaitu-bg',
		comp: null,
	},
];
