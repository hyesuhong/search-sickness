import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,body {
		min-height: 100vh;
		font-family: 'Spoqa Han Sans Neo',-apple-system,'BlinkMacSystemFont','Apple SD Gothic Neo','Inter','Segoe UI',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul li, ol li {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
