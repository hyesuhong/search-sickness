import {HTMLAttributes} from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'submit' | 'reset';
}

const Button = ({children, type, onClick, ...props}: Props) => {
	return (
		<>
			<button type={type}>{children}</button>
		</>
	);
};

export default Button;
