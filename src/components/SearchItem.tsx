import {ReactNode} from 'react';
import * as S from '../styles/SearchItem.styled';

interface Props {
	children: ReactNode;
}

const SearchItem = ({children}: Props) => {
	return (
		<>
			<S.ItemContainer>
				<p>{children}</p>
			</S.ItemContainer>
		</>
	);
};

export default SearchItem;
