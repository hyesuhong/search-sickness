import {useEffect, useState} from 'react';
import {useApi} from '../context/ApiContext';
import {sick} from '../types/sick';
import {RESULT_MAX_LEN} from '../constants/config';

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

					setResult(filteredList.slice(0, RESULT_MAX_LEN));
					return;
				}
				setResult(res.slice(0, RESULT_MAX_LEN));
			})
			.catch(e => console.error(e));
	}, [getData, keyword]);

	return result;
};

export default useFetchSick;
