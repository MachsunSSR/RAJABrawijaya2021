import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import InfoTemplate from './InfoTemplate';
import { useParams } from 'react-router-dom';
// import useFetchArticles from '../../routes/useFetchArticles';
import { useArticles } from '../../routes/Context';
import { getArticles } from '../../routes/FetchArticles';

const FetchInfo = () => {
	const { slug } = useParams();
	const [articleActive, setArticleActive] = useState(null);
	// const [articlesFetch, setArticleFet] = useState(null);
	const { articles, setArticles } = useArticles();

	useEffect(() => {
		if (articles.length <= 0) {
			async function get() {
				const res = await getArticles();
				setArticles(res);
			}
			get();
		}
		articles.forEach((article) => {
			if (article.slug === slug) {
				setArticleActive(article);
				return article;
			}
		});
	}, [articleActive, slug, articles, setArticles]);

	// console.log(id);
	// const articles = useArticles();
	// const {
	// 	data: articles,
	// 	isPending,
	// 	isFailed,
	// } = useFetchArticles(`http://103.139.244.67/articles/${id}`);
	return (
		<>
			{/* {isFailed && <div>{isFailed}</div>}
			{isPending && <div>Loading...</div>} */}

			{articleActive !== null ? (
				<InfoTemplate
					title={`${articleActive.subtitle}`}
					props={
						'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'
					}
				>
					<div className="my-8 ml-5 text-lg">
						<h1 className="my-8 text-black xs:text-xl sm:text-xl ex:text-3xl exl:text-3xl">
							{articleActive.title}
						</h1>
						<ReactMarkdown skipHtml={true}>
							{articleActive.content}
						</ReactMarkdown>
					</div>
				</InfoTemplate>
			) : (
				<InfoTemplate
					title={`Loading data...`}
					props={
						'bg-whiteSoft xs:p-5 sm:p-5 p-20 mt-40 drop-shadow-xl mb-32'
					}
				>
					<div>loading</div>
				</InfoTemplate>
			)}
		</>
	);
};

export default FetchInfo;
