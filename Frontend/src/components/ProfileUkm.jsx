import React from 'react';
import { Skeleton } from '@mui/material';
const ProfileUkm = ({ data }) => {
	console.log(data.nama);
	return (
		<div>
			<div className="flex items-center space-x-3">
				{data.length !== 0 ? (
					<img
						src={`${process.env.PUBLIC_URL}/assets/ukm/logo/${data.logo}`}
						alt="tes"
						className="w-full max-w-ospekFakIcon"
					/>
				) : (
					<Skeleton
						variant="rectangular"
						animation="wave"
						width={100}
						height={80}
					/>
				)}
				<h1 className="text-redUkm font-bold text-2xl">
					{data.length !== 0 ? (
						data.nama
					) : (
						<Skeleton
							variant="rectangular"
							animation="wave"
							width={220}
							height={30}
						/>
					)}
				</h1>
			</div>
		</div>
	);
};

export default ProfileUkm;
