import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: '40px',
		// marginLeft: '20px',
		// marginRight: '20px',
		// backgroundColor: 'rgba(0,0,0,0.01)',
		// width: '75%',
		// paddingRight: '20%',
		// paddingLeft: '20%',
		// paddingBottom: '20px',
		boxSizing: 'border-box',
	},
	title: {
		// textDecoration: 'underline',
	},
});

export default function ScreenshotCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader className={classes.title} title={props.title} />

			<CardContent>
				<img width={props.imagewidth ? props.imagewidth : '100%'} src={props.imagesource} alt="" />
			</CardContent>
		</Card>
	);
}
