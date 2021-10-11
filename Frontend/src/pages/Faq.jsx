import React, { useEffect, useState } from 'react';
import Sections from '../components/Sections';
import styles from './Faq.module.css';
import classnames from 'classnames';
import faqData from './faqData';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

const Faq = () => {
	const [clicked, setClicked] = useState(false);
   const [idActive, setIdActive] = useState(0);
   const [search, setSearch] = useState('');
   const [searched, setSearched] = useState([]);
   
	const handleClick = (id) => {
		setClicked(!clicked);
      setIdActive(id)
	};

   const handleChange = (e) =>{
      setSearch(e.target.value)
   }

   useEffect(() => {
      let newFaq = [];
      faqData.filter((obj)=>{
         return obj.pertanyaan.toLowerCase().indexOf(search.toLowerCase()) > -1 ? newFaq.push(obj) : console.log('gaada') 
      })
      setSearched(newFaq);
   },[search])

	return (
		<Sections
			propsClass={
				'justify-center items-center bg-galeri-bg  bg-repeat relative '
			}
			propsClass2={'bg-whiteSoft w-full rounded-2 xs:p-5 sm:p-5 p-20 mb-32 mt-40 drop-shadow-xl'}
		>
			<div className="flex flex-col items-center space-y-10 ">
				<h1
					className={`batavia text-jumbotronmd text-purpleMaghrib text-center ${styles.faqHeadline}`}
               data-aos="fade-up"
				>
					Pertanyaan dan Jawaban
				</h1>
				<div className="w-3/4 xs:w-full">
					<form >
						<input
							type="text"
							name="searchbar"
							id="searchbar"
							className={`w-full ${styles.searchBox}`}
                     placeholder={"Cari pertanyaan"}
                     onChange={(e)=>handleChange(e)}

						/>
					</form>
				</div>
				<div className="w-full space-y-3">
					{searched.length > 0 ? searched.map(({ id, pertanyaan, jawaban }) => {
						return (
							<div className={`${styles.a1}`} onClick={() => handleClick(id)} key={id}>
								<div
									className={`${styles.ask} ${
										clicked && idActive === id
											? 'bg-purpleMaghrib text-white'
											: 'bg-white text-purpleMaghrib'
									}`}
								>
									<h1>{pertanyaan}</h1>
									<img
										src={`${process.env.PUBLIC_URL}/assets/faqicon.svg`}
										alt="icon"
										className={`${styles.faqIcon}`}
									/>
								</div>
								<div
									className={classnames(
										styles.ans,
										clicked && idActive === id ? styles.show : '',
										
									)}
								>
									<p>
										{jawaban}
									</p>
								</div>
							</div>
						);
					}) : faqData.map(({ id, pertanyaan, jawaban }) => {
						return (
							<div className={`${styles.a1}`} onClick={() => handleClick(id)} key={id} className="border-2">
								<div
									className={`${styles.ask} ${
										clicked && idActive === id
											? 'bg-purpleMaghrib text-white'
											: 'bg-white text-purpleMaghrib'
									}`}
								>
									<h1>{pertanyaan}</h1>
									<img
										src={`${process.env.PUBLIC_URL}/assets/faqIcon.svg`}
										alt="icon"
										className={`${styles.faqIcon}`}
									/>
								</div>
								<div
									className={classnames(
										styles.ans,
										clicked && idActive === id ? styles.show : '',
										
									)}
								>
									<p>
										{jawaban}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Sections>
	);
};

export default Faq;
