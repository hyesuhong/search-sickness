import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/Global.styled';
import {theme} from './styles/theme';
import Search from './pages/Search';
import CacheStore from './store/cache';
import Api from './service/api';
import ApiProvider from './context/ApiContext';

const EXPIRE_TIME = 1000 * 60;
const cacheStorage = new CacheStore('test_1', EXPIRE_TIME);

const BASE_URL = 'http://localhost:4000/';
const api = new Api(BASE_URL, cacheStorage);

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ApiProvider api={api}>
					<Search />
				</ApiProvider>
			</ThemeProvider>
		</>
	);
};

export default App;
