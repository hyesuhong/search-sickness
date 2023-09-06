import {useEffect, useState} from 'react';

type UseDebounce = <T>(value: T, delay: number) => T;

const useDebounce: UseDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
