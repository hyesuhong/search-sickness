import * as S from '../styles/SearchItem.styled';

interface Props {
	children: string;
}

const SearchItem = ({children}: Props) => {
	return (
		<>
			<S.ItemContainer dangerouslySetInnerHTML={{__html: children}}></S.ItemContainer>
		</>
	);
};

export default SearchItem;
