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
				EnergyPlus has very rich support for hourly and sub-hourly reporting, but as a model becomes larger and
				more complex, the simulation output size quickly becomes unwieldy for existing programs, most of which
				load the entire contents of the output into system memory. This results in prohibitively long
				load-times, especially considering the already-lengthy simulation time in comparison to other simulation
				engines.
			</p>
			<p>
				Timestep attempts to solve this problem, offering a clean, user-friendly and near-instanteous querying
				interface, as well as modern data visualization capabilities. It accomplishes this by using the
				EnergyPlus SQLite Output reporting capability, and can load and visualize extremely large simulation
				output files in seconds, rather than minutes.
			</p>
			<div>Current Timestep features:</div>
			<ul>
				<li>Native support for MacOS and Windows.</li>
				<li>Heatmap, Multi-Line, Scatter Plot, Histogram, and Statistical Summary outputs</li>
				<li>CSV and clipboard export</li>
				<li>
					Support for multiple files BND file cross-referencing (where available) for intelligent units
					parsing
				</li>
			</ul>
			<div>Planned Timestep features:</div>
			<ul>
				<li>Capability of reading ESO files as well as SQLite Outputs</li>
				<li>Saved sessions Support for tabular data (similar to eplusout.html reports)</li>
				<li>Additional chart types like 2D hexbins, scatter matrices, and box/violin distribution plots</li>
			</ul>
		</div>
	);
}
