import {styled} from 'styled-components';
import IcoSearch from '../assets/ico_search.svg';

export const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 8px 24px;
	font-size: 1rem;
	letter-spacing: -0.018em;
	line-height: 1.6;
	cursor: pointer;

	&::before {
		content: '';
		width: 16px;
		height: 16px;
		margin-right: 12px;

		background: ${props => props.theme.grey};
		mask: url(${IcoSearch}) no-repeat center center;
		mask-size: cover;
		-webkit-mask: url(${IcoSearch}) no-repeat center center;
		-webkit-mask-size: cover;
	}

	&[area-selected='true'] {
		background-color: ${props => props.theme.icyGrey};
	}

	p {
		white-space: nowrap;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	span {
		font-weight: 700;
	}
`;
