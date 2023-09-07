import {Reducer, useReducer} from 'react';

type reducerAction = {
	type: 'increase' | 'decrease' | 'init';
};

const useIndexChange = (max?: number) => {
	const indexReducer: Reducer<number, reducerAction> = (state, action) => {
		switch (action.type) {
			case 'init':
				return -1;
			case 'increase':
				return max && state > max - 2 ? state : state + 1;

			case 'decrease':
				return state < 0 ? state : state - 1;
		}
		throw Error(`Unknown action: ${action.type}`);
	};

	const [index, changeIndex] = useReducer(indexReducer, -1);
	return {index, changeIndex};
};

export default useIndexChange;
