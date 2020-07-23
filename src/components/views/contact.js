import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {},
});

export default function Contact(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2>Contributing</h2>
			<p>Timestep is an open-source project, free to use and welcomes contributions!</p>
			<p>
				The primary development stack uses the following frameworks and platforms:
				<ul>
					<li>Electron JS</li>
					<li>D3.js</li>
					<li>React</li>
					<li>Material-UI</li>
					<li>Typescript / Javascript</li>
				</ul>
			</p>

			<p>
				If you're interested in contributing, check out the{' '}
				<a href="github.com/michaelsweeney/timestep" target="_blank">
					github
				</a>{' '}
				and/or <a href="mailto:timestepvis@gmail.com">send an email!</a>
			</p>
		</div>
	);
}
