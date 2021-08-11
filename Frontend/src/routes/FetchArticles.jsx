// export const getArticles = async () => {
//     const data = await fetch("http://103.139.244.67/articles");
//     const res = await data.json();
//     return res;
// };

export const getArticles = async () => {
	return [
		{
			id: 1,
			title: 'Pengumuman Gladi Bersih',
			slug: 'pengumuman-gladi-bersih',
			content:
				'Mahasiswa Baru Universitas Brawijaya 2021 WAJIB untuk menghadiri gladi bersih PKKMB 2021 yang diadakan pada :\n&nbsp;\n\n\n\n\n&nbsp;\n\n##### Tanggal  : Senin, 16 Agustus 2021\n##### Waktu   : 12.00 - 17.00 WIB\n##### Tempat  : Daring menggunakan Zoom (Link akan diperbarui pada website ini)\n&nbsp;\n\n\n\nDengan ketentuan pakaian saat gladi sebagai berikut :\n&nbsp;\n\n\n• Pakaian bebas dan rapi menggunakan atasan batik\n&nbsp;\n\n• Laki Laki celana panjang bawahan gelap \n&nbsp;\n\n• Peremuan rok bawahan gelap dengan jilbab putih untuk yang berjilbab\n\n',
			subtitle: 'Informasi Gladi Bersih PKKMB Online 2021',
			image: { url: 'bg-gladi-bg' },
		},
	];
};
