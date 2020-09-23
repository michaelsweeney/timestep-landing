import React, { useState } from 'react';
import { createMuiTheme, Paper, Container, Tabs, Tab, AppBar } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import Logo from './components/logo';
import About from './components/views/about';
import Screenshots from './components/views/screenshots';
import Installation from './components/views/installation';
import Contact from './components/views/contact';

const theme = createMuiTheme({
	palette: {
		// primary: {},
		// primary: colors.indigo,
		// secondary: colors.red,
	},
});

const useStyles = makeStyles({
	root: {
		padding: 20,
		height: '100vh',
		boxSizing: 'border-box',
	},

	top: {
		marginBottom: 15,
		minHeight: '175px',
		boxSizing: 'border-box',
	},
	body: {
		padding: 30,
		height: '100%',
	},
	header: {
		marginBottom: 15,
	},

	text: {
		color: 'white',
	},
	view: {
		boxSizing: 'border-box',
	},
});

const App = () => {
	const classes = useStyles();
	const [activeTab, setActiveTab] = useState('about');

	const tabobj = [
		{
			name: 'about',
			content: <About />,
		},
		{
			name: 'installing',
			content: <Installation />,
		},
		{
			name: 'screenshots',
			content: <Screenshots />,
		},
		{
			name: 'contributing',
			content: <Contact />,
		},
	];

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Container>
					<div className={classes.top}>
						<div className={classes.header}>
							<Logo className={classes.logo} />
						</div>
						<AppBar position="static">
							<Tabs value={activeTab} variant="fullWidth">
								{tabobj.map(t => {
									return (
										<Tab
											variant="outlined"
											className={classes.text}
											label={t.name}
											onClick={() => setActiveTab(t.name)}
											value={t.name}
										/>
									);
								})}
							</Tabs>
						</AppBar>
					</div>
					<Paper className={classes.body}>
						{tabobj.map(t => {
							return (
								<div
									className={classes.view}
									style={{ display: activeTab === t.name ? 'inline-block' : 'none' }}
								>
									{t.content}
								</div>
							);
						})}
					</Paper>
				</Container>
			</div>
		</ThemeProvider>
	);
};

export default App;
