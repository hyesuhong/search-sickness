import {useState} from 'react';
import * as S from '../styles/Page.styled';
import RecommendList from '../components/RecommendList';
import SearchForm from '../components/SearchForm';
import useDebounce from '../hooks/useDebounce';

const Search = () => {
	const [keyword, setKeyword] = useState('');

	const debouncedKeyword = useDebounce(keyword, 200);

	const changeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: {value},
		} = ev;
		setKeyword(value);
	};

	const searchSick = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		console.info('search', debouncedKeyword);
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
						input={{value: keyword, changeHandler: changeInput}}
						submitHandler={searchSick}
					/>
					<S.SuggestionContainer>
						<RecommendList />
					</S.SuggestionContainer>
				</S.FormContainer>
			</S.Wrapper>
		</>
	);
};

export default Search;
