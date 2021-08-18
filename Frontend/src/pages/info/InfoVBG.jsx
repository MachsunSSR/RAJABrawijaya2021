import React from 'react';
import InfoTemplate from '../info/InfoTemplate'
const Vbg = () => {
	return (
		<InfoTemplate
			title={'Informasi Virtual Background PKKMABA'}
			props={'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'}
		>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-4xl">
				Halo Abhiyaksa 59!
			</h1>
			<p className="my-8 text-lg">
				Virtual background untuk Gladi Bersih dan PKKMABA dapat didownload di sini, penggunaan virtual background bersifat wajib dan jika ada kendala silahkan menghubungi pendamping cluster.
			</p>
			<h1 className="text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl my-8">
				Download Virtual Background PKKMABA
			</h1>
			<a
				href="https://drive.google.com/drive/folders/1XQp832oUxlXGLPy8jW3Km6zyN3SR3DCD?usp=sharing"
				target="_blank"
				rel="noreferrer"
				className="w-full bg-orange block  p-3 rounded-3 my-5"
			>
				<h2 className="text-md font-bold text-center text-white xs:text-sm sm:text-sm">
					Download Virtual Background
				</h2>
			</a>
         <p className="my-8 text-lg font-bold">
				Link zoom saat Gladi Bersih dan PKKMABA, akan diumumkan melalui google classroom
			</p>
		</InfoTemplate>
	);
};

export default Vbg;
