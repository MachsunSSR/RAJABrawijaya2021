import React from 'react';
import styles from '../DetailUkm/DetailUkm.module.css';
import { Skeleton } from '@mui/material';
const KegiatanUkm = ({ data }) => {
	return (
		<div>
			{Object.getOwnPropertyNames(data).length === 0 ? (
				<Skeleton
					key={data}
					variant="rectangular"
					animation="wave"
					width={'100%'}
					height={300}
				/>
			) : (
				<div className={`${styles.cardKegiatan} text-center p-5`}>
					<h1 className="text-white font-bold text-xl mb-2">
						{data.nama_kegiatan}
					</h1>
					<p className="text-lg text-white mt-5">{data.deskripsi}</p>
				</div>
			)}
		</div>
	);
};

export default KegiatanUkm;
