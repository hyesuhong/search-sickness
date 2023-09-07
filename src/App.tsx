import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/Global.styled';
import {theme} from './styles/theme';
import Search from './pages/Search';
import CacheStore from './store/cache';
import Api from './service/api';
import ApiProvider from './context/ApiContext';
import {BASE_URL, EXPIRE_TIME, STORAGE_NAME} from './constants/config';

const cacheStorage = new CacheStore(STORAGE_NAME, EXPIRE_TIME);
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
