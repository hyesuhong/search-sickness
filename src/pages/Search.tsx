import * as S from '../styles/Page.styled';
import RecommendList from '../components/RecommendList';
import SearchForm from '../components/SearchForm';

const Search = () => {
	return (
		<>
			<S.Wrapper>
				<S.Title>
					국내 모든 임상시험 검색하고
					<br />
					온라인으로 참여하기
				</S.Title>
				<S.FormContainer>
					<SearchForm />
					<S.SuggestionContainer>
						<RecommendList />
					</S.SuggestionContainer>
				</S.FormContainer>
			</S.Wrapper>
		</>
	);
};

export default Search;
