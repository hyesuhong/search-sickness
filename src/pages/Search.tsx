import {useEffect, useState} from 'react';
import * as S from '../styles/Page.styled';
import RecommendList from '../components/RecommendList';
import SearchForm from '../components/SearchForm';
import useDebounce from '../hooks/useDebounce';
import useFetchSick from '../hooks/useFetchSick';
import useIndexChange from '../hooks/useIndexChange';

const Search = () => {
	const [keyword, setKeyword] = useState('');
	const debouncedKeyword = useDebounce(keyword, 200);
	const result = useFetchSick(debouncedKeyword);
	const {index, changeIndex} = useIndexChange(result && result.length);

	const changeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: {value},
		} = ev;
		setKeyword(value);
	};

	const keyDownInput = (ev: React.KeyboardEvent<HTMLInputElement>) => {
		const {key} = ev;

		if (key === 'ArrowDown' || key === 'ArrowUp') {
			ev.preventDefault();

			if (!result || result.length < 1) {
				return;
			}

			if (key === 'ArrowDown') {
				changeIndex({type: 'increase'});
			} else {
				changeIndex({type: 'decrease'});
			}
		}
	};

	const blurInput = (ev: React.FocusEvent<HTMLInputElement>) => {
		changeIndex({type: 'init'});
	};

	const searchSick = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		console.info('search', keyword);
	};

	useEffect(() => {
		if (!result || result.length < 1) {
			changeIndex({type: 'init'});
		}
	}, [result]);

	useEffect(() => {
		console.info(index);
	}, [index]);

	return (
		<>
			<S.Wrapper>
				<S.Title>
					국내 모든 임상시험 검색하고
					<br />
					온라인으로 참여하기
				</S.Title>
				<S.FormContainer>
					<SearchForm
						input={{
							value: keyword,
							changeHandler: changeInput,
							keyboardHandler: keyDownInput,
							blurHandler: blurInput,
						}}
						submitHandler={searchSick}
					/>
					<S.SuggestionContainer>
						<RecommendList list={result} keyword={debouncedKeyword} targetIndex={index} />
					</S.SuggestionContainer>
				</S.FormContainer>
			</S.Wrapper>
		</>
	);
};

export default Search;
