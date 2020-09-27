import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const mailchimpmarkup = `
<div id="body-container">
<div id="mc_embed_signup">
	<form
		action="https://github.us10.list-manage.com/subscribe/post?u=0534707489291d33d533ec5a4&amp;id=168ac1c8a3"
		method="post"
		id="mc-embedded-subscribe-form"
		name="mc-embedded-subscribe-form"
		class="validate"
		target="_blank"
		novalidate
	>
		<div id="mc_embed_signup_scroll">
			<label for="mce-EMAIL">Sign up for the mailing list!</label>
			<input
				type="email"
				value=""
				name="EMAIL"
				class="email"
				id="mce-EMAIL"
				placeholder="email address"
				required
			/>
			<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
			<div style="position: absolute; left: -5000px;" aria-hidden="true">
				<input
					type="text"
					name="b_0534707489291d33d533ec5a4_168ac1c8a3"
					tabindex="-1"
					value=""
				/>
			</div>
			<div class="clear">
				<input
					type="submit"
					value="Subscribe"
					name="subscribe"
					id="mc-embedded-subscribe"
					class="button"
				/>
			</div>
		</div>
	</form>
</div>
</div>`;

const useStyles = makeStyles({
	root: {
		'& .button:hover': {
			backgroundColor: '#3f51b5 !important',
		},
	},
});

export default function MailchimpEmbed() {
	const classes = useStyles();
	const ref = useRef(null);

	useEffect(() => {
		const container = ref.current;

		container.innerHTML = mailchimpmarkup;
	});

	return <div className={classes.root} ref={ref} />;
}
