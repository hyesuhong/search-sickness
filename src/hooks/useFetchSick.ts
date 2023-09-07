import {useEffect, useState} from 'react';
import {useApi} from '../context/ApiContext';
import {sick} from '../types/sick';

const useFetchSick = (keyword: string) => {
	const [result, setResult] = useState<sick[]>();

	const {getData} = useApi();

	useEffect(() => {
		if (!getData || keyword === '') return;

		const checkIncompletedKorean = keyword.match(/[ㄱ-ㅎ]|[ㅏ-ㅣ]/gi);
		if (checkIncompletedKorean) return;

		const url = 'sick';
		const query = {q: keyword};

		getData(url, query)
			.then(res => {
				console.info(res);
				setResult(res);
			})
			.catch(e => console.error(e));
	}, [getData, keyword]);

	return result;
};

export default useFetchSick;
