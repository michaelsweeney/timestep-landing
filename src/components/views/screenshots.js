import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card } from '@material-ui/core';
const useStyles = makeStyles({
	root: {
		textAlign: 'center',
		padding: '20px',
		margin: '20px',
	},
});

export default function Screenshots(props) {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<img width="75%" src="./screenshots/heatmap.png" alt="" />
				<span className="legend">Legend 1</span>
			</Card>
			<Card className={classes.root}>
				<img width="75%" src="./screenshots/histogram.png" alt="" />
				<span className="legend">Legend 2</span>
			</Card>
		</div>
	);
}
