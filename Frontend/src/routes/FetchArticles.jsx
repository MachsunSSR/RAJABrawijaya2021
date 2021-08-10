// export const getArticles = async () => {
//     const data = await fetch("http://103.139.244.67/articles");
//     const res = await data.json();
//     return res;
// };

export const getArticles = async () => {
    return [
        {
            id: 1,
            title: "Pengumuman Gladi Bersih",
            slug: "pengumuman-gladi-bersih",
            content:
                "### Mahasiswa Baru Universitas Brawijaya 2020 **WAJIB** untuk menghadiri gladi bersih PKKMB 2021 yang diadakan pada :\n&nbsp;\n\n\n\n\n\n\n\n### Tanggal  : Senin, 16 Agustus 2021\n### Waktu   : 12.00 - 17.00 WIB\n### Tempat  : Daring menggunakan Zoom (Link akan diperbarui pada website ini)\n&nbsp;\n\n\n\nDengan ketentuan pakaian **PADA SAAT GLADI** sebagai berikut :\n&nbsp;\n\n\n• Pakaian Bebas dan Rapi. \n&nbsp;\n\n• Laki Laki celana panjang bawahan gelap \n&nbsp;\n\n• Peremuan Rok bawahan Gelap. Bagian atas Batik. \n\n",
            subtitle: "Informasi Gladi Bersih PKKMB Online 2021",
            image: { url: "/uploads/arvr_c33b3ce1fb.png" },
        },
    ];
};
