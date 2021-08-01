import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import classNames from 'classnames';

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const [offset, setOffset] = useState(0);
	const handleMenuIcon = () => {
		setClicked(!clicked);
	};

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	return (
		<div
			className={`${
				offset > 0 ? 'bg-purpleMaghrib' : 'bg-transparent'
			} px-15 py-1 h-20 flex items-center xs:px-3 sm:px-3 fixed left-0 right-0 z-1000 transition-all delay-200 ease-in-out justify-center`}
		>
			<div className="flex justify-between items-center w-full max-w-containerMax">
				<div className={classNames(clicked ? styles.logoWhenClicked : '')}>
					<Link to="/">
						<img
							src={`${process.env.PUBLIC_URL}/assets/logo.png`}
							alt="logo"
							className="w-full max-w-xsScreen"
						/>
					</Link>
				</div>
				<div
					className={classNames(
						'justify-around w-3/5 hidden lg:flex xl:flex items-center',
						clicked ? `${styles.open}` : ''
					)}
				>
					{clicked ? (
						<div className="">
							<Link
								to="/"
								className={`links  ${styles.linkAnimations}`}
								onClick={handleMenuIcon}
							>
								Beranda
							</Link>
							<Link
								to={'/galeri'}
								className={`links  ${styles.linkAnimations}`}
								onClick={handleMenuIcon}
							>
								Galeri
							</Link>
							<Link
								to={'/abhiyaksa-info'}
								className={`links  ${styles.linkAnimations}`}
								onClick={handleMenuIcon}
							>
								Abhiyaksa Info
							</Link>
							<Link
								to={'/faq'}
								className={`links  ${styles.linkAnimations}`}
								onClick={handleMenuIcon}
							>
								FAQ
							</Link>
							<Link
								to={'/raja-apps'}
								className={`links  ${styles.linkAnimationsApps}`}
								onClick={handleMenuIcon}
							>
								Raja Apps
							</Link>
							{clicked ? (
								<p className="text-white">
									&copy; 2021, Tim IT RAJA Brawijaya 2021.
								</p>
							) : (
								''
							)}
						</div>
					) : (
						<>
							<Link to="/" className={`links  ${styles.linkAnimations}`}>
								Beranda
							</Link>
							<Link
								to={'/galeri'}
								className={`links  ${styles.linkAnimations}`}
							>
								Galeri
							</Link>
							<Link
								to={'/abhiyaksa-info'}
								className={`links  ${styles.linkAnimations}`}
							>
								Abhiyaksa Info
							</Link>
							<Link
								to={'/faq'}
								className={`links  ${styles.linkAnimations}`}
							>
								FAQ
							</Link>
							<Link
								to={'/raja-apps'}
								className={`links  ${
									offset > 0 ? styles.linkAnimationsApps : 'text-white'
								}`}
							>
								Raja Apps
							</Link>
						</>
					)}
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
