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
				<li>Please enter your email address below to sign up for Timestep updates.</li>
				<li>
					Download the current build for{' '}
					<a
						id="mac-download-link"
						href="https://www.dropbox.com/s/0uz4d76489k5lu1/timestep-0.1.0-mac.zip?dl=1"
					>
						Mac
					</a>{' '}
					or{' '}
					<a
						id="pc-download-link"
						href="https://www.dropbox.com/sh/j6r4d5ed514ncjd/AABkxawRXus_3PsuFlYi13Opa?dl=1"
					>
						PC
					</a>
					.
				</li>
				<li>
					(Optional): Download the{' '}
					<a
						id="sample-sql-link"
						href="https://www.dropbox.com/sh/0f9kreh5on3p6jb/AACcoFnaRFtf483rPmRSovTEa?dl=1"
					>
						sample SQL file
					</a>
					.
				</li>
				<li>Unzip the file and place it in its own directory.</li>
				<li>Double-click "timestep" (timestep.exe on Windows)</li>
				<li>
					If experiencing issues running the program on Windows, select "More Info" at the "Windows Protected
					Your PC" at the pop-up and then select "Run Away."
				</li>
				<li>
					If experiencing issues running the program on Mac, check out{' '}
					<a
						href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac"
						target="_blank"
					>
						this link
					</a>{' '}
					to open packages from unidentified developers.
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
