import {useEffect, useState} from 'react';

type useDebounce = (value: string, delay: number) => string;

const useDebounce: useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timer);
	}, [value]);

	return debouncedValue;
};

export default useDebounce;
