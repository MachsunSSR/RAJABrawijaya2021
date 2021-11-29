import React from 'react';
import InfoTemplate from './InfoTemplate';
const Panduan = () => {
	// const [cluster, setCluster] = useState([]);
	let cluster = [];
	let count = 1;
	let temp = [];
	for (let i = 1; i <= 64; i++) {
		if (count === 1 || count === 4) {
			if (i < 10) {
				temp.push(`0${i}`);
			} else {
				temp.push(i);
			}
		}
		count++;
		if (count > 4) {
			cluster.push(temp);
			temp = [];
			count = 1;
		}
	}

	return (
		<InfoTemplate
			title={'Panduan Pelaksanaan PKKMB RAJA Brawijaya 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Halo Abhiyaksa 59!
			</h1>
			<p className="my-8 text-lg">
				Berikut adalah pedoman PKKMB 2021 Online yang digunakan untuk
				mempermudah kalian saat pelaksanaan acara nanti. Harap dibaca dengan
				baik ya.
			</p>

			{/* aturan pkkmb */}
			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				ATURAN PELAKSANAAN PKKMB
			</h1>
			<ol className="list-decimal my-8 ml-5 text-lg">
				<li>
					Mahasiswa baru wajib masuk zoom maksimal (10 menit) sebelum acara
					dimulai (Link zoom akan dibagikan sesaat sebelum acara dimulai di
					google classroom masing-masing).{' '}
				</li>
				<li>
					Mahasiswa baru wajib menyalakan kamera dan mematikan microphone
					saat acara berlangsung.
				</li>
				<li>
					Mahasiswa baru wajib mengenakan atribut sesuai dengan ketentuan
					yang telah ditentukan.
				</li>
				<li>
					Mahasiswa baru wajib menampilkan diri setengah badan serta
					memakai atribut sesuai dengan ketentuan.
				</li>
				<li>
					Mahasiswa baru wajib menyesuaikan kondisi saat ada intruksi untuk
					berdiri, posisi badan harus full badan di dalam kamera.
				</li>
				<li>
					Mahasiswa baru wajib menjaga etika serta bahasa saat acara
					berlangsung.
				</li>
				<li>
					Mahasiswa baru wajib memperhatikan seluruh rangkaian materi.
				</li>
				<li>
					Mahasiswa baru wajib update informasi google classroom secara
					berkala dan melakukan turn in setelah upload
				</li>
				<li>
					Mahasiswa baru segera meninggalkan zoom setelah ada instruksi.
				</li>
			</ol>

			{/* instruksi pkkmb */}
			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				INSTRUKSI PELAKSANAAN PKKMB
			</h1>
			<ol className="list-decimal my-8 ml-5 text-lg">
				<li>
					Bagi mahasiswa baru segera masuk di zoom sebelum pukul 06.00 WIB.
				</li>
				<li>
					Bagi mahasiswa baru diwajibkan untuk menyalakan kamera dan tidak
					mengaktifkan microphone.
				</li>
				<li>
					Bagi mahasiswa baru tetap dijaga etika dan penggunaan bahasanya,
					serta menggunakan atribut sesuai dengan aturan yang telah
					ditentukan.
				</li>
				<li>
					Bagi mahasiswa baru diwajibkan berada di depan kamera selama
					acara berlangsung dan tetap memperhatikan materi.
				</li>
				<li>
					Bagi mahasiswa baru diwajibkan memeriksa secara berkala google
					classroom, dan turn in penugasan.
				</li>
				<li>
					Bagi mahasiswa baru segera meninggalkan zoom setelah ada
					instruksi.
				</li>
				<li>
					Bagi mahasiswa baru diwajibkan melakukan izin kepada panitia saat
					ingin melakukan hal lain di luar rangkaian acara.
				</li>
			</ol>

			{/* panduan zoom */}

			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				PEDOMAN PENGGUNAAN (ZOOM MEETING) BAGI MAHASISWA BARU PKKMB
			</h1>
			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				KETENTUAN:
			</h1>

			<ol className="list-decimal my-8 ml-5 text-lg">
				<li>Memiliki aplikasi Zoom yang sudah terinstal di PC/ Laptop.</li>
				<li>PC/ Laptop terkoneksi dengan jaringan Internet.</li>
			</ol>

			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				PANDUAN:
			</h1>

			<ol className="list-decimal my-8 ml-5 text-lg space-y-3">
				<li>
					Peserta wajib mengganti display name ZOOM dengan format
					RxCy-NIM-Nama Lengkap, dengan ketentuan variabel <b>x</b> sebagai
					nomor Room pada ZOOM dan variabel<b> y</b> sebagai nomor Cluster.
					<br />
					Contoh: <br />
					<b>R1C3-214536261761-Mikel Arteta</b>
				</li>
				<li>
					Langkah Kedua setelah anda berada di Ruang Zoom meeting
					pertamakali akan muncul Pop Up <b>“join with computer audio” </b>
					kemudian klik kota kecil di samping tulisan{' '}
					<b>
						“automatically join audio by computer when joining a meeting”.
					</b>
				</li>
				<li>
					Untuk menampilkan dan mematikan video anda klik ikon “start
					video” untuk menyalakan, dan ikon “stop video” untuk mematikan
					video anda.{' '}
					<b>
						Pastikan video diri anda terlihat seluruh badan dengan
						menampilkan wajah dan memakai id card.
					</b>
				</li>
				<li>
					<b>Mute </b>
					Mikrofon di ruang Zoom Meeting, pada tampilan ruang Zoom Meeting
					klik Ikon “Mikrofon” di pojok kiri bawah untuk mematikan suara
					mikrofon.
				</li>
				<li>
					Untuk menyampaikan Instruksi/keluhan kepada host/operator, klik
					ikon <b>"Chat"</b> di bawah toolbar ruang Zoom meeting, kemudian
					ubah “to/penerima” dari “everyone” ke “nama(host)”.{' '}
					<b>Sampaikan instruksi/keluhan dengan jelas dan sopan.</b>
				</li>
				<li>
					Cara meninggalkan ruangan Zoom meeting. Klik ikon <b>“Leave” </b>
					yang ada di bagian toolbar kanan bawah kemudian klik{' '}
					<b>“leave meeting”.</b>
				</li>
			</ol>

			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				PEMBAGIAN ZOOM PERCLUSTER:
			</h1>
			<ol type="1" className="list-decimal my-8 ml-5 text-lg">
				{cluster.map((cluster, index) => {
					return (
						<li>
							Cluster {cluster[0]} - {cluster[1]}, zoom (room {index + 1}
							)
						</li>
					);
				})}
			</ol>
			<p className="my-8 text-lg font-bold">
				Link zoom akan dibagikan di google classroom masing-masing cluster
			</p>
		</InfoTemplate>
	);
};

export default Panduan;
