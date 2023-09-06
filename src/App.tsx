import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/Global.styled';
import {theme} from './styles/theme';
import Search from './pages/Search';

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
