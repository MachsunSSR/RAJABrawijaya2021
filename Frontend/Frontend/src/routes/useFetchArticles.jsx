import { useEffect, useState } from 'react';

const useFetchArticles = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [isFailed, setIsFailed] = useState(false);


	useEffect(() => {
		const abortCont = new AbortController();
		fetch(url, { signal: abortCont.signal })
			.then((res) => {
				if (!res.ok) {
					throw Error('Could not fetch the endpoints');
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					setIsFailed(err.message);
					setIsPending(false);
				}
			});
		return () => abortCont.abort();
	}, [url]); // akan di eksekusi setiap url yang dikirimkan berbeda

	// mereturn sebua objek yaitu data, isPending, isFailed,
	return { data, isPending, isFailed };
};

export default useFetchArticles;