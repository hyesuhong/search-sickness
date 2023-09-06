import InputField from '../components/InputField';
import Button from '../components/Button';
import {styled} from 'styled-components';
import IcoSearch from '../assets/ico_search.svg';
import IcoCancel from '../assets/ico_cancel.svg';
import RecommendList from '../components/RecommendList';
import RecentList from '../components/RecentList';

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
					<Form>
						<InputField type='text' placeholder='질환명을 입력해주세요.' required />
						<Button type='reset' />
						<Button type='submit' />
					</Form>
					<SuggestionContainer>
						<RecentList />
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

const Form = styled.form`
	position: relative;
	display: flex;
	align-items: center;

	width: 100%;
	height: 100%;
	border-radius: 80px;
	padding: 0 8px 0 24px;

	background: ${props => props.theme.white.hex};
	border: 2px solid transparent;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 24px;
		transform: translateY(-50%);
		width: 16px;
		height: 16px;
		background: ${props => props.theme.grey};
		mask: url(${IcoSearch}) no-repeat center center;
		mask-size: cover;
		-webkit-mask: url(${IcoSearch}) no-repeat center center;
		-webkit-mask-size: cover;
	}

	&:has(input:focus) {
		border-color: ${props => props.theme.blue};

		&::before {
			display: none;
		}

		button[type='reset'] {
			display: block;
		}
	}

	&:has(input:valid) {
		&::before {
			display: none;
		}
	}

	input {
		flex: 1;
		font-size: 1.125rem;
		padding-left: 28px;
		border: none;
		outline: none;
		appearance: none;
		caret-color: ${props => props.theme.blue};

		&::placeholder {
			color: ${props => props.theme.grey};
		}

		&:focus,
		&:valid {
			padding-left: 0;

			&::placeholder {
				color: transparent;
			}
		}
	}

	button {
		border: none;

		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			background: ${props => props.theme.white.hex};
		}

		&[type='reset'] {
			display: none;
			background: ${props => props.theme.grey};
			width: 20px;
			height: 20px;
			border-radius: 100%;

			&::before {
				mask: url(${IcoCancel}) no-repeat center center;
				-webkit-mask: url(${IcoCancel}) no-repeat center center;
				mask-size: 70%;
				-webkit-mask-size: 70%;
			}
		}

		&[type='submit'] {
			background: ${props => props.theme.blue};
			width: 48px;
			height: 48px;
			border-radius: 100%;
			margin-left: 10px;

			&::before {
				mask: url(${IcoSearch}) no-repeat center center;
				-webkit-mask: url(${IcoSearch}) no-repeat center center;
				mask-size: 55%;
				-webkit-mask-size: 55%;
			}
		}
	}
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
