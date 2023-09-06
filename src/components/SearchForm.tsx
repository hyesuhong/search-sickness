import * as S from '../styles/SearchForm.styled';

const SearchForm = () => {
	return (
		<S.Form>
			<S.Input type='text' placeholder='질환명을 입력해주세요.' required />
			<S.Button type='reset' />
			<S.Button type='submit' />
		</S.Form>
	);
};

export default SearchForm;
