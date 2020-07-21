import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {},
});

export default function Contact(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2>Contact Info & Contributing</h2>
			<p>
				Timestep is an open-source project, free to use and welcomes contributions! Email: timestepvis@gmail.com
			</p>
		</div>
	);
}
