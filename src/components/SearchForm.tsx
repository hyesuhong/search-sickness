import * as S from '../styles/SearchForm.styled';

interface Props {
	input: {
		value: string;
		changeHandler: (ev: React.ChangeEvent<HTMLInputElement>) => void;
	};
	submitHandler: (ev: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({input, submitHandler}: Props) => {
	return (
		<S.Form onSubmit={submitHandler}>
			<S.Input
				type='text'
				placeholder='질환명을 입력해주세요.'
				required
				value={input.value}
				onChange={input.changeHandler}
			/>
			<S.Button type='reset' />
			<S.Button type='submit' />
		</S.Form>
	);
};

export default SearchForm;
