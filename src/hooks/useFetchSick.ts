import {useCallback, useEffect, useState} from 'react';
import {useApi} from '../context/ApiContext';
import {sick} from '../types/sick';
import {RESULT_MAX_LEN} from '../constants/config';
import {INCOMPLETED_KOREAN, STARTED_ALPHABET} from '../constants/regexp';

interface fetchResponse {
	data?: sick[];
	loading: boolean;
	error?: Error;
}

const useFetchSick = (keyword: string) => {
	const [result, setResult] = useState<fetchResponse>({loading: false});

	const {getData} = useApi();

	const fetch = useCallback(async () => {
		if (!getData || keyword === '') return setResult({loading: false});

		const trimmedKeyword = keyword.trim();

		const checkIncompletedKorean = trimmedKeyword.match(INCOMPLETED_KOREAN);
		if (checkIncompletedKorean) return;

		const url = 'sick';
		const query = {q: trimmedKeyword};

		setResult({loading: true});

		await getData(url, query)
			.then(res => {
				if (trimmedKeyword.length === 1 && trimmedKeyword.match(STARTED_ALPHABET)) {
					const regExp = new RegExp(trimmedKeyword, 'gi');
					const filteredList = res.filter((data: sick) => data.sickNm.match(regExp));

					setResult({loading: false, data: filteredList.slice(0, RESULT_MAX_LEN)});
					return;
				}
				setResult({loading: false, data: res.slice(0, RESULT_MAX_LEN)});
			})
			.catch(e => {
				console.error(e);
				setResult({loading: false, error: e});
			});
	}, [getData, keyword]);

	useEffect(() => {
		fetch();
	}, [fetch]);

	return result;
};

export default useFetchSick;
