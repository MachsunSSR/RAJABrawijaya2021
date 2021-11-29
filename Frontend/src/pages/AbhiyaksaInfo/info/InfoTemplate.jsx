import React from 'react';
import Sections from '../../../components/Section/Sections';
import styles from '../../Faq/Faq.module.css';
// import classnames from 'classnames';
const Info = ({ children, title, props }) => {

	return (
		<div>
			<Sections
				propsClass={
					'justify-center items-center bg-galeri-bg bg-repeat relative'
				}
				propsClass2={`w-full rounded-2 ${props}`}
			>
				<div className="flex flex-col items-center space-y-10">
					<h1
						className={`batavia text-jumbotronmd text-purpleMaghrib text-center ${styles.faqHeadline} ex:text-6xl exl:text-6xl`}
					>
						{title}
					</h1>

					<div className="w-full space-y-3">
						<p className="ex:text-lg exl:text-xl">{children}</p>
					</div>
				</div>
			</Sections>
		</div>
	);
};

export default Info;
