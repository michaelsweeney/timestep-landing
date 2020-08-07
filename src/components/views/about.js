import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {},
});

export default function About(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2>Interactive timeseries visualizations for EnergyPlus</h2>
			<p>
				EnergyPlus has rich support for hourly and sub-hourly reporting, but as a model becomes larger and more
				complex, the simulation output size can become unwieldy for many existing tools. This can result in
				prohibitively long load-times just to view your simulation results.
			</p>
			<p>
				Timestep attempts to solve this problem, offering a clean, user-friendly and near-instanteous querying
				interface, as well as modern data visualization capabilities. It accomplishes this by using the
				EnergyPlus SQLite Output reporting capability, and can load and visualize extremely large simulation
				output files in seconds, rather than minutes.
			</p>
			<div>Current Timestep features:</div>
			<ul>
				<li>Native support and install packages for MacOS and Windows.</li>
				<li>Heatmap, Multi-Line, Scatter Plot, Histogram, and Statistical Summary outputs</li>
				<li>CSV and clipboard export</li>
				<li>Support for multiple simulation files </li>
				<li>Auto-detection and parsing of BND files for more contextual IP units conversion.</li>
			</ul>
			<div>Planned Timestep features:</div>
			<ul>
				<li>Support for ESO files as well as SQLite Outputs</li>
				<li>Support for platform-agnostic CSV files</li>
				<li>Saved sessions and multiple views within a session</li>
				<li>Support for tabular data (similar to eplusout.html reports)</li>
				<li>Additional chart types like 2D hexbins, scatter matrices, and box/violin distribution plots</li>
			</ul>
		</div>
	);
}
