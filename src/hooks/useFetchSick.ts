import {useEffect, useState} from 'react';
import {useApi} from '../context/ApiContext';
import {sick} from '../types/sick';

const useFetchSick = (keyword: string) => {
	const [result, setResult] = useState<sick[]>();

	const {getData} = useApi();

	useEffect(() => {
		if (!getData || keyword === '') return setResult([]);

		const checkIncompletedKorean = keyword.match(/[ㄱ-ㅎ]|[ㅏ-ㅣ]/gi);
		if (checkIncompletedKorean) return;

		const url = 'sick';
		const query = {q: keyword};

		getData(url, query)
			.then(res => {
				if (keyword.length === 1 && keyword.match(/^[a-z]/i)) {
					const regExp = new RegExp(keyword, 'gi');
					const filteredList = res.filter((data: sick) => data.sickNm.match(regExp));

					setResult(filteredList.slice(0, 7));
					return;
				}
				setResult(res.slice(0, 7));
			})
			.catch(e => console.error(e));
	}, [getData, keyword]);

	return result;
};

export default useFetchSick;
