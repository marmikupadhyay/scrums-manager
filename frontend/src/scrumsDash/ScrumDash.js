import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrumList from './ScrumList';
import ScrumInfo from './ScrumInfo';

import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	mainBody: {
		// marginTop: '10vh',
	},
}));

function ScrumDash() {
	const classes = useStyles();
	return (
		<div className={classes.mainBody}>
			<Grid container>
				<Grid item xs={12} md={4} lg={3}>
					<ScrumList />
				</Grid>
				<Grid item xs={12} md={8} lg={9}>
					<ScrumInfo />
				</Grid>
			</Grid>
		</div>
	);
}

export default ScrumDash;
