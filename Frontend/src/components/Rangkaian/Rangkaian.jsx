import React from 'react';
import RangkaianCard from '../RangkaianCard/RangkaianCard';
import styles from './Rangkaian.module.css';
import Sections from '../Section/Sections';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

const Rangkaian = () => {
	return (
		<Sections
			propsClass={'justify-center items-center relative'}
			propsClass2={'w-full'}
		>
			<div className="flex justify-between">
				<img
					src={`${process.env.PUBLIC_URL}/assets/visual2.svg`}
					alt=""
					className={`${styles.visual1}`}
				/>
				<div></div>
				<div className={`${styles.line} bg-pinkThrid`}></div>
			</div>
			<div className="relative py-30 xs:py-10 ">
				<div className={`${styles.rangkaianTextHeading}`}>
					<h1
						className={`batavia text-jumbotronmd xs:text-5xl sm:text-jumbotronsm md:text-jumbotronmd text-pinkThrid ${styles.rangkaianHeadline}`}
						data-aos="fade-up"
					>
						Rangkaian Acara
					</h1>
				</div>
				<div className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 lg:flex-row xl:flex-row lg:space-y-0 xl:space-y-0 space-x-6 lg:space-x-3 md:space-x-3 xs:space-x-0 sm:space-x-0 ex:flex-row exl:flex-row ex:space-y-0 exl:space-y-0">
					<RangkaianCard
						nama={'pkkmb'}
						img={'bg-pk2-bg'}
						desc={
							'Pengenalan Kehidupan Kampus Mahasiswa Baru Universitas Brawijaya (PKKMB) adalah kegiatan penyambutan mahasiswa baru sebagai bentuk kegiatan yang bertujuan untuk membuat rasa kebanggan dan penanaman nilai kepada mahasiswa baru akan almamater kita bersama, Universitas Brawijaya.'
						}
					/>
					<RangkaianCard
						nama={'pbpk'}
						img={'bg-pbpk-bg'}
						desc={
							'Pembinaan Budi Pekerti dan Kepemimpinan (PBPK) merupakan rangkaian acara yang bertujuan untuk melakukan pembinaan karakter keagamaan, melatih jiwa kepemimpinan dan mengajarkan kita untuk dapat membela Negara Kesatuan Republik Indonesia (NKRI) dan mahasiswa baru Universitas Brawijaya.'
						}
					/>
					<RangkaianCard
						nama={'oh'}
						img={'bg-oh-bg'}
						desc={
							'Open House Lembaga Kedaulatan Mahasiswa (OH) merupakan penutup dari serangkaian acara RAJA Brawijaya. Di sana, kamu bisa memilih Unit Kegiatan Mahasiswa (UKM) dan LKM di Universitas Brawijaya sesuai minat dan bakal di bidang akademik maupun non-akademik.'
						}
					/>
				</div>
			</div>
		</Sections>
	);
};

export default Rangkaian;
