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
					'bg-whiteSoft w-full rounded-2 xs:p-5 sm:p-5 p-20 mb-32 mt-40  drop-shadow-xl'
				}
			>
				<div className="flex flex-col items-center space-y-10 ">
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
