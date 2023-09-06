import {styled} from 'styled-components';
import RecommendList from '../components/RecommendList';
import SearchForm from '../components/SearchForm';

const Search = () => {
	return (
		<>
			<Wrapper>
				<Title>
					국내 모든 임상시험 검색하고
					<br />
					온라인으로 참여하기
				</Title>
				<SearchFormContainer>
					<SearchForm />
					<SuggestionContainer>
						<RecommendList />
					</SuggestionContainer>
				</SearchFormContainer>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: ${props => props.theme.skyBlue};
	padding: 80px 0 160px;
`;

const Title = styled.h2`
	font-size: 2.125rem;
	font-weight: 700;
	letter-spacing: -0.018em;
	line-height: 1.6;
	text-align: center;
	margin-bottom: 40px;
`;

const SearchFormContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 490px;
	height: 75px;
`;

const SuggestionContainer = styled.div`
	position: absolute;
	top: calc(100% + 8px);
	left: 0;
	width: 100%;
	padding: 24px 0 16px;
	background: ${props => props.theme.white.hex};
	border-radius: 20px;
	box-shadow: ${props => props.theme.shadow} 0px 2px 10px;
`;

export default Search;
