import React, { useState } from 'react';
import styles from '../DetailUkm/DetailUkm.module.css'
import styles2 from '../../pages/Faq/Faq.module.css';
import classnames from 'classnames';
import { Skeleton } from '@mui/material';

const QuestionAnswer = ({ question, answer, idx, from }) => {
	const [clicked, setClicked] = useState(false);
	const [idActive, setIdActive] = useState(0);
	const handleClick = (id) => {
		setClicked(!clicked);
		setIdActive(id);
	};
	return (
		<div>
			{question === '' ? (
				<Skeleton
					variant="rectangular"
					animation="wave"
					width={'100%'}
					height={50}
				/>
			) : (
				<div
					className={`${
						from === 'detailUkm' ? styles.a1 : styles2.a1
					} mt-2`}
					onClick={() => handleClick(idx)}
					key={idx}
				>
					<div
						className={`${
							from === 'detailUkm' ? styles.ask : styles2.ask
						} ${
							clicked && idActive === idx
								? from === 'detailUkm'
									? 'bg-yellowPucat text-black'
									: 'bg-purpleMaghrib text-white'
								: from === 'detailUkm'
								? 'bg-greenDetail text-purpleMaghrib'
								: 'bg-white text-purpleMaghrib'
						}`}
					>
						<h1>{question}</h1>
						<img
							src={`${process.env.PUBLIC_URL}/assets/faqicon.svg`}
							alt="icon"
							className={`${
								from === 'detailUkm' ? styles.faqIcon : styles2.faqIcon
							}`}
						/>
					</div>
					<div
						className={classnames(
							from === 'detailUkm' ? styles.ans : styles2.ans,
							clicked && idActive === idx
								? `${
										from === 'detailUkm' ? styles.show : styles2.show
								  } 'bg-white'`
								: ''
						)}
					>
						<p>{answer}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default QuestionAnswer;
