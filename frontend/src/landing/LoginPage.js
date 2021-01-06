import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	backDrop: {
		height: '100vh',
		width: '100%',
		background: theme.palette.background.primary,
		background:
			'url(https://images.pexels.com/photos/3117550/pexels-photo-3117550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
	},
	siteHeadingBox: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		marginTop: '1em',
	},
	siteHeading: {
		fontSize: '4em',
		padding: '1em',
		color: theme.palette.font.light,
		fontFamily: 'Lato',
		filter: 'drop-shadow(0px 0px 20px #fff)',
	},
	wrapper: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)',
		boxShadow: theme.shadows[8],
		padding: '2em',
		paddingBottom: '1em',
	},
	authBox: {},
	title: {
		fontSize: '2em',
		position: 'relative',
		fontFamily: 'Lato',
		paddingBottom: '0.25em',
		marginBottom: '.5em',
		color: theme.palette.font.light,
		'&::after': {
			content: "' '",
			position: 'absolute',
			width: '50%',
			height: '2px',
			bottom: '0',
			left: '.25em',
			borderBottom: `3px solid ${theme.palette.accent.primary}`,
		},
	},
	inputs: {
		margin: '1em 0em',
		width: '100%',
	},
	button: {
		width: '100%',
		fontSize: '1.2em',
		background: `${theme.palette.accent.primary}BF`,
		transition: '0.5s',
		'&:hover': {
			transform: 'scale(1.05)',
			background: theme.palette.accent.primary,
		},
	},
	extra: {
		fontFamily: 'Lato',
		fontSize: '1.2em',
		color: theme.palette.font.light,
		marginTop: '10px',
		padding: '10px 0',
	},
	link: {
		color: theme.palette.accent.primary,
		fontWeight: 'bold',
		textDecoration: 'none',
		transition: '0.5s',
		marginTop: '10px',
		display: 'block',
	},
}));
function LoginPage() {
	const classes = useStyles();
	return (
		<Grid container className={classes.backDrop}>
			<div className={classes.siteHeadingBox}>
				<div className={classes.siteHeading}>Scrums Archive</div>
			</div>
			<Grid
				container
				item
				xs={10}
				md={6}
				lg={3}
				className={classes.wrapper}>
				<Grid className={classes.authBox} direction='column'>
					<Grid item>
						<div className={classes.title}>Login</div>
					</Grid>
					<Grid item>
						<form action=''>
							<TextField
								id='username'
								label='Username'
								variant='outlined'
								className={classes.inputs}
							/>
							<TextField
								id='password'
								label='Password'
								variant='outlined'
								className={classes.inputs}
							/>
							<Button
								variant='contained'
								className={classes.button}>
								Get In
							</Button>
						</form>
					</Grid>
					<Grid item>
						<div className={classes.extra}>
							Don't Have An Account Yet?
							<br />
							<Link to='/register' className={classes.link}>
								<span>Register Here</span>
							</Link>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LoginPage;
