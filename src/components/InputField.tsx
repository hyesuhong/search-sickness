import {AllHTMLAttributes} from 'react';

const InputField = ({...props}: AllHTMLAttributes<HTMLInputElement>) => {
	return (
		<>
			<input {...props} />
		</>
	);
};

export default InputField;
