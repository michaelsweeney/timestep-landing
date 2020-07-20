import React from 'react';
import { Typography } from '@material-ui/core';

export default function Logo() {
	return (
		<div>
			<Typography color="primary" variant="h2">
				<Typography variant="span" color="primary">
					timest
				</Typography>
				<Typography variant="span" color="secondary">
					ep
				</Typography>
			</Typography>
			<Typography color="primary" variant="h4">
				data visualization platform for energyplus simulations
			</Typography>
		</div>
	);
}
