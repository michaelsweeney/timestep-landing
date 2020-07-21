import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScreenshotCard from './screenshotcard';
const useStyles = makeStyles({
	root: { textAlign: 'center', display: 'inline-block', height: '100%' },
});

export default function Screenshots(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ScreenshotCard title="Heatmap" imagesource="./screenshots/heatmap.png" />
			<ScreenshotCard title="Histogram" imagesource="./screenshots/histogram.png" />
			<ScreenshotCard title="Multiple Simulations" imagesource="./screenshots/multiple_sim_files.png" />
			<ScreenshotCard title="Statistics" imagesource="./screenshots/statistics.png" />
			<ScreenshotCard title="Live Searchable Reports" imagesource="./screenshots/searchable_reports.png" />
		</div>
	);
}
