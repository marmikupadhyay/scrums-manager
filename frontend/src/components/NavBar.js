import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { Button, AppBar, Grid, Hidden, Typography } from '@material-ui/core/';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
	navBar: {
		background: theme.palette.background.primary,
	},
	navBrand: {
		display: 'flex',
		alignItems: 'center',
		padding: '16px',
		fontSize: '1.7em',
		fontFamily: 'Roboto',
	},
	button: {
		justifySelf: 'flex-end',
		fontSize: '1.2em',
		padding: '1em',
		height: '100%',
	},
	link: {
		color: 'white',
		textDecoration: 'none',
		margin: '0',
		display: 'block',
	},
}));

function NavBar() {
	const classes = useStyles();

	return (
		<AppBar id='main-nav' style={{ position: 'relative' }}>
			<Grid className={classes.navBar} container justify='space-between'>
				<Grid item className={classes.navBrand}>
					<PlaylistAddCheckIcon
						style={{ fontSize: '1.5em', paddingRight: '10px' }}
					/>
					Scrums Manager
				</Grid>
				<Link to='/login' className={classes.link}>
					<Button color='inherit' className={classes.button}>
						<ExitToAppIcon style={{ paddingRight: '10px' }} />
						<Hidden smDown>Logout</Hidden>
					</Button>
				</Link>
			</Grid>
		</AppBar>
	);
}

export default NavBar;
