import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
   const [clicked, setClicked] = useState(false);
	const handleMenuIcon = () => {
		setClicked(!clicked);
	};

	return (
		<div className="bg-purpleMaghrib px-20 py-1 h-20 flex items-center xs:px-5 fixed left-0 right-0 z-1000">
			<div className="flex justify-between items-center w-full">
				<div className="">
					<img
						src={`${process.env.PUBLIC_URL}/assets/logo.png`}
						alt="logo"
                  className="w-full max-w-xsScreen"
					/>
					<h1></h1>
				</div>
				<div className="justify-around w-3/5 hidden lg:flex xl:flex">
					<Link to="/" className={`links  ${styles.linkAnimations}`}>
						Beranda
					</Link>
					<Link to={'/galeri'} className={`links  ${styles.linkAnimations}`}>
						Galeri
					</Link>
					<Link to={'/adhikara-info'} className={`links  ${styles.linkAnimations}`}>
						Adhikara Info
					</Link>
					<Link to={'/faq'} className={`links  ${styles.linkAnimations}`}>
						FAQ
					</Link>
					<Link to={'/raja-apps'} className={`links  ${styles.linkAnimations}`}>
						Raja Apps
					</Link>
				</div>
				<div className="lg:hidden xl:hidden">
					<div className={`${styles.menuIcon}`} onClick={handleMenuIcon}>
						<input
							type="checkbox"
							className={styles.menuIconCheckBox}
							checked={clicked ? 'yes' : ''}
							onChange={() => {}}
						/>
						<div>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
