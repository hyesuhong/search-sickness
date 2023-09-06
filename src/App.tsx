import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/Global.styled';
import {theme} from './styles/theme';
import Search from './pages/Search';
import CacheStore from './store/cache';
import Api from './service/api';

const EXPIRE_TIME = 1000 * 60;
const cacheStorage = new CacheStore('test_1', EXPIRE_TIME);
console.info(cacheStorage);

const BASE_URL = 'http://localhost:4000/';
const api = new Api(BASE_URL, cacheStorage);
api
	.fetch('sick?q=담')
	.then(res => {
		console.info(res);
	})
	.catch(console.error)
	.finally(() => console.info('fin'));

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Search />
			</ThemeProvider>
		</>
	);
};

export default App;
