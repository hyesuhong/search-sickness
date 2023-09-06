import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/Global.styled';
import {theme} from './styles/theme';
import Search from './pages/Search';
import CacheStore from './store/cache';

const EXPIRE_TIME = 1000 * 60;
const cacheStorage = new CacheStore('test_1', EXPIRE_TIME);
console.info(cacheStorage);

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
