import {ReactNode, memo} from 'react';
import * as S from '../styles/SearchItem.styled';
import {StyleSheetManager} from 'styled-components';

interface Props {
	children: ReactNode;
	selected?: boolean;
}

const SearchItem = memo(({children, selected = false}: Props) => {
	return (
		<>
			<StyleSheetManager>
				<S.ItemContainer $selected={selected}>
					<span>{children}</span>
				</S.ItemContainer>
			</StyleSheetManager>
		</>
	);
});

export default SearchItem;
