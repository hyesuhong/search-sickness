import {styled} from 'styled-components';
import IcoSearch from '../assets/ico_search.svg';
import IcoCancel from '../assets/ico_cancel.svg';

export const Form = styled.form`
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
	}

	&:has(input:valid) {
		&::before {
			display: none;
		}
	}

	&:has(input:valid:focus) {
		button[type='reset'] {
			display: block;
		}
	}
`;

export const Input = styled.input`
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
`;

export const Button = styled.button`
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
`;
