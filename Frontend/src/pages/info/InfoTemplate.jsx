import React from 'react';
import Sections from '../../components/Sections';
import styles from '../Faq.module.css';
// import classnames from 'classnames';
const Info = ({ children, title }) => {
	return (
		<div>
			<Sections
				propsClass={
					'justify-center items-center bg-galeri-bg bg-cover bg-no-repeat relative bg-fixed'
				}
				propsClass2={
					'bg-whiteSoft w-full rounded-2 xs:p-5 sm:p-5 p-20 my-24 lg:mb-5 xl:mb-5 drop-shadow-xl'
				}
			>
				<div className="flex flex-col items-center space-y-10 ">
					<h1
						className={`batavia text-jumbotronmd text-purpleMaghrib text-center ${styles.faqHeadline}`}
					>
						{title}
					</h1>

					<div className="w-full space-y-3">{children}</div>
				</div>
			</Sections>
		</div>
	);
};

export default Info;
