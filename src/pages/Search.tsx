import {useState} from 'react';
import * as S from '../styles/Page.styled';
import RecommendList from '../components/RecommendList';
import SearchForm from '../components/SearchForm';
import useDebounce from '../hooks/useDebounce';
import useFetchSick from '../hooks/useFetchSick';
import useIndexChange from '../hooks/useIndexChange';
import {DEBOUNCE_DELAY_TIME} from '../constants/config';

const Search = () => {
	const [keyword, setKeyword] = useState('');
	const debouncedKeyword = useDebounce(keyword, DEBOUNCE_DELAY_TIME);
	const {data} = useFetchSick(debouncedKeyword);
	const {index, changeIndex} = useIndexChange(data && data.length);

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

			if (!data || data.length < 1 || ev.nativeEvent.isComposing) {
				return;
			}

			if (key === 'ArrowDown') {
				changeIndex({type: 'increase'});
			} else {
				changeIndex({type: 'decrease'});
			}
		}
	};

	const blurInput = () => {
		changeIndex({type: 'init'});
	};

	const searchSick = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (data && index > -1) {
			alert(`search by recommendation: ${data[index].sickNm}`);
		} else {
			alert(`search by input: ${keyword}`);
		}
	};

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
						<RecommendList list={data} keyword={debouncedKeyword} targetIndex={index} />
					</S.SuggestionContainer>
				</S.FormContainer>
			</S.Wrapper>
		</>
	);
};

export default Search;
