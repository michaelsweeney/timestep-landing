import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailChimpEmbed from '../mailchimpembed';
const useStyles = makeStyles({
	root: { '& li': { padding: 5 } },
});

export default function Installation(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2>Install & Setup</h2>

			<ol>
				<li>Enter your email address below, and you will receive a link to download the install files.</li>
				<li>Download the current build from the above hyperlink for your operating system.</li>
				<li>(Optional): Download the SQL sample files via the same hyperlink.</li>
				<li>Unzip the directory and place it in its own folder.</li>
				<li>Double-click "timestep" (timestep.exe on Windows)</li>
				<li>
					If experiencing issues running the program on Windows, select "More Info" at the "Windows Protected
					Your PC" at the pop-up and then select "Run Away."
				</li>
				<li>
					If experiencing issues running the program on Mac, use this link to open packages from unidentified
					developers.
				</li>
				<li>
					Ensure that any desired EnergyPlus simulations have been run with the following command in the IDF
					file: "Output:SQLite, SimpleAndTabular"
				</li>
				<li>
					Click the "Load Files button", or drag a valid SQL file (or multiple SQL files) over the load files
					button.
				</li>
				<li>Start exploring results!</li>
			</ol>

			<MailChimpEmbed />
		</div>
	);
}
