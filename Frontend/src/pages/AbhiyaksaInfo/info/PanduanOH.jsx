import React from 'react';
import InfoTemplate from './InfoTemplate';
const PanduanOH = () => {
	// const [cluster, setCluster] = useState([]);
	let cluster = [];
	let count = 1;
	let temp = [];
	for (let i = 1; i <= 64; i++) {
		if (count === 1 || count === 11) {
			if (i < 10) {
				temp.push(`0${i}`);
			} else {
				temp.push(i);
			}
		}
		count++;
		if (count > 11) {
			cluster.push(temp);
			temp = [];
			count = 1;
		}
	}

	return (
		<InfoTemplate
			title={'Panduan Pelaksanaan Open House RAJA Brawijaya 2021'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				Halo Abhiyaksa 59!
			</h1>
			<p className="my-8 text-lg">
				Berikut adalah pedoman Open House RAJA Brawijaya 2021 Online yang
				digunakan untuk mempermudah kalian saat pelaksanaan acara nanti.
				Harap dibaca dengan baik ya.
			</p>

			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				JADWAL OPEN HOUSE
			</h1>
			<p className="my-8 text-lg">
				<ul>
					<li>Tanggal : Sabtu, 9 Oktober 2021</li>
					<li>Waktu : 08.00 WIB -Selesai</li>
					<li>
						Tempat : Daring menggunakan Zoom (Link akan dikirimkan melalui
						google classroom masing masing cluster)
					</li>
				</ul>
			</p>

			{/* aturan pkkmb */}
			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				ATURAN PELAKSANAAN OPEN HOUSE
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
					yang telah ditentukan 
					<a href="https://rajabrawijaya.ub.ac.id/#/abhiyaksa-info/info-atribut"> di sini</a>
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
				INSTRUKSI PELAKSANAAN OPEN HOUSE
			</h1>
			<ol className="list-decimal my-8 ml-5 text-lg">
				<li>
					Bagi mahasiswa baru segera masuk di zoom sebelum pukul 08.00 WIB.
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
				<li>
					Apabila tidak dapat mengikuti rangkaian acara mahasiswa baru
					WAJIB untuk melakukan perizinan
					<a href="https://rajabrawijaya.ub.ac.id/apps/perizinan">
						{' '}
						di sini
					</a>{' '}
					dengan ketentuan perizinan yang telah ditentukan
				</li>
			</ol>

			{/* panduan zoom */}

			<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				PEDOMAN PENGGUNAAN (ZOOM MEETING) BAGI MAHASISWA BARU OPEN HOUSE
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
					Cy-NIM-Nama Lengkap, dengan ketentuan variabel<b> y</b> sebagai nomor Cluster.
					<br />
					Contoh: <br />
					<b>C3-214536261761-Mikel Arteta</b>
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
				<li>Cluster 01 - 11, zoom (room 1)</li>
				<li>Cluster 12 - 23, zoom (room 2)</li>
				<li>Cluster 24 - 34, zoom (room 3)</li>
				<li>Cluster 35 - 44, zoom (room 4)</li>
				<li>Cluster 45 - 54, zoom (room 5)</li>
				<li>Cluster 55 - 64, zoom (room 6)</li>
			</ol>
			
      <h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
				DOWNLOAD BACKGROUND ZOOM
			</h1>
      <a
				href="https://drive.google.com/file/d/1VETHIDDpkGe68N4FnvJlewpDLTLcEvla/view"
				target="_blank"
				rel="noreferrer"
				className="w-full bg-orange block  p-3 rounded-3"
			>
				<h2 className="text-md font-bold text-center text-white xs:text-sm sm:text-sm">
					Download Virtual Background
				</h2>
			</a>
      <p className="my-8 text-lg font-bold">
				Apabila tidak dapat bergabung kedalam zoom, mahasiswa baru
				diharapkan tetap mengikuti rangkaian Open House melalui live
				streaming youtube pada channel youtube RAJA Brawijaya
			</p>
		</InfoTemplate>
	);
};

export default PanduanOH;
