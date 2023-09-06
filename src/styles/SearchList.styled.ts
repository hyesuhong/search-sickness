import {styled} from 'styled-components';

export const Container = styled.div`
	&:not(:last-child) {
		padding-bottom: 24px;
		margin-bottom: 24px;
		border-bottom: 1px solid ${props => props.theme.lightGrey};
	}
`;

export const Subtitle = styled.h6`
	color: ${props => props.theme.blueGrey};
	font-size: 13px;
	letter-spacing: -0.018em;
	line-height: 1.6;

	padding: 0 24px;
`;

export const emptyText = styled.p`
	color: ${props => props.theme.grey};
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: -0.018em;
	line-height: 1.6;
	margin-top: 16px;
`;
