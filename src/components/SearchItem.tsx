import {ReactNode, memo} from 'react';
import * as S from '../styles/SearchItem.styled';

interface Props {
	children: ReactNode;
}

const SearchItem = memo(({children, ...props}: Props) => {
	return (
		<>
			<S.ItemContainer {...props}>
				<p>{children}</p>
			</S.ItemContainer>
		</>
	);
});

export default SearchItem;
