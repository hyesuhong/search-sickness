import {ReactNode, createContext, useCallback, useContext, useMemo} from 'react';
import Api from '../service/api';
import {sick} from '../types/sick';

type Obj = {[key: string]: string};

interface Props {
	api: Api;
	children?: ReactNode;
}

interface Value {
	getData?: (url: string, querys?: Obj) => Promise<sick[]>;
}

const ApiContext = createContext<Value>({});

const ApiProvider = ({api, children}: Props) => {
	const getData = useCallback(
		async (url: string, querys?: Obj) => {
			const queryStr = querys
				? Object.keys(querys)
						.map(query => `${query}=${querys[query]}`)
						.join('&')
				: '';
			const endpoint = querys ? `${url}?${queryStr}` : url;

			const response = await api.fetch(endpoint);
			return response;
		},
		[api]
	);

	const contextValue = useMemo(
		() => ({
			getData,
		}),
		[getData]
	);

	return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
	return useContext(ApiContext);
};

export default ApiProvider;
