import React from 'react';
import Sections from '../Section/Sections';
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<Sections
			propsClass={
				'justify-center items-center min-h-info bg-purpleMaghrib relative '
			}
			propsClass2={'mt-25 lg:mb-5 xl:mb-5 w-full '}
		>
			<div>
				<div className=" flex items-center justify-center space-x-5">
					<a href="https://vt.tiktok.com/ZGJADvfod/" target="_blank" rel="noreferrer" className={`${styles.logoOnhover}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/icon/tiktok.png`}
							alt="tiktok"
							width="45px"
						/>
					</a>
					<a href="https://line.me/ti/p/~@raja_brawijaya" target="_blank" rel="noreferrer" className={`${styles.logoOnhover}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/icon/line.png`}
							alt="line"
							width="45px"
						/>
					</a>
					<a href="https://www.instagram.com/raja_brawijaya/" target="_blank" rel="noreferrer" className={`${styles.logoOnhover}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/icon/instagram.png`}
							alt="instagram"
							width="45px"
						/>
					</a>
					<a href="https://t.me/rajabrawijayaub" target="_blank" rel="noreferrer" className={`${styles.logoOnhover}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/icon/telegram.png`}
							alt="telegram"
							width="45px"
						/>
					</a>
					<a href="https://twitter.com/raja_brawijaya" target="_blank" rel="noreferrer" className={`${styles.logoOnhover}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/icon/twitter.png`}
							alt="twitter"
							width="45px"
						/>
					</a>
					<a href="https://www.youtube.com/channel/UCpNS1e8i6pgkxqxbdIPnUNQ" target="_blank" rel="noreferrer" className={`${styles.logoOnhover}`}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/icon/youtube.png`}
							alt="youtube"
							width="45px"
						/>
					</a>
				</div>
				<h1 className="text-center text-orange mt-20">
					Crisis Center RAJA Brawijaya
				</h1>
				<p className="text-white text-center mt-5">
					Gedung EM-DPM UB Lantai 1, Jln. Veteran 06C Malang 65145 <br />
					Telp : 0812-4949-1019<br />
					Email : rajabrawijaya2021@gmail.com
				</p>

				<p className="text-white text-center my-20">&copy; 2021, Tim IT RAJA Brawijaya 2021</p>
			</div>
		</Sections>
	);
};

export default Footer;
