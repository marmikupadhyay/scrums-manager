import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ScrumDash from './scrumsDash/ScrumDash';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const theme = createMuiTheme({
	palette: {
		accent: {
			primary: '#48E5C2	',
			secondary: '#64F58D',
		},
		background: {
			primary: '#001524',
			secondary: '#2F3137',
			tertiary: '#D1D5DE',
		},
		font: {
			light: '#FCFAF9',
		},
	},
});
export class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route path='/scrums' exact>
							<NavBar />
							<ScrumDash />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
