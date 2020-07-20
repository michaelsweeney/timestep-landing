import React, { useState } from 'react';
import { createMuiTheme, Paper, Container, Card, Tabs, Tab, AppBar } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import Logo from './components/logo';
import About from './components/views/about';
import Screenshots from './components/views/screenshots';
import Installation from './components/views/installation';
import Contact from './components/views/contact';
import { colors } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: colors.indigo,
		secondary: colors.red,
	},
});

const useStyles = makeStyles({
	root: {
		height: '100%',
		padding: 20,
		background: 'linear-gradient(25deg, rgba(200,200,200,0.5) 10%, rgba(280,280,280,0.5) 90%)',
		boxSizing: 'border-box',
	},
	header: {
		marginBottom: 20,
	},
	body: {
		padding: 30,
		height: '100%',
	},
	text: {
		color: 'white',
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
			name: 'contact',
			content: <Contact />,
		},
	];

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Container>
					<div className={classes.header}>
						<Logo />
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
								<div style={{ display: activeTab === t.name ? 'inline-block' : 'none' }}>
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
