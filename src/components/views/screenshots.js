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
			<ScreenshotCard title="Heatmaps with Variable Color Domain" imagesource="./screenshots/heatmap.png" />
			<ScreenshotCard title="Scatter Plots with Color Dimensions" imagesource="./screenshots/scatter.png" />

			<ScreenshotCard
				title="Interactive Line Plots with Multiple Axes"
				imagesource="./screenshots/multiline.png"
			/>
			<ScreenshotCard title="Histograms with Bin Settings" imagesource="./screenshots/histogram.png" />
			<ScreenshotCard title="Statistical Summaries" imagesource="./screenshots/statistics.png" />
			<ScreenshotCard title="Live-Searchable Reports" imagesource="./screenshots/live_search.png" />
			<ScreenshotCard
				title="Support for Multiple Simulations (Line Plot)"
				imagesource="./screenshots/multiline_multiple_sims.png"
			/>
			<ScreenshotCard
				title="Support for Multiple Simulations (Scatter)"
				imagesource="./screenshots/scatter_multiple_sims.png"
			/>
		</div>
	);
}
