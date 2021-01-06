import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
	mainBody: {
		minHeight: '100vh',
		borderRight: '1px solid black',
		background: theme.palette.background.secondary,
	},
	title: {
		fontSize: '2em',
		margin: '0.25em 0.25em',
		padding: '0.5em',
		fontFamily: 'Lato',
		color: theme.palette.font.light,
		background: theme.palette.background.primary,
		boxShadow: theme.shadows[5],
		position: 'relative',
		'&::after': {
			content: "' '",
			position: 'absolute',
			width: '50%',
			height: '2px',
			bottom: '20%',
			left: '.25em',
			borderBottom: `3px solid ${theme.palette.accent.primary}`,
		},
	},
	listBox: {
		margin: '0 1em',
		padding: '0em',
		color: theme.palette.font.light,
	},
	listItem: {
		boxShadow: theme.shadows[3],
		background: 'rgb(0, 21, 36)',
		margin: '1em 0',
		transition: '0.5s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.05)',
		},
		borderLeft: `2px solid ${theme.palette.accent.primary}`,
	},
	listActive: {
		background: 'rgb(0, 21, 36)',
		boxShadow: theme.shadows[3],
		transition: '0.5s',
		cursor: 'pointer',
		padding: '15px 0',
		fontSize: '1.1em',
		margin: '1em 0',
		borderLeft: `7px solid ${theme.palette.accent.primary}`,
		transform: 'scale(1.05)',
	},
	icon: {
		color: theme.palette.font.light,
		fontSize: '2em',
	},
}));
function ScrumList(props) {
	const classes = useStyles();
	return (
		<Grid container item direction='column' className={classes.mainBody}>
			<Grid item className={classes.title}>
				History
			</Grid>
			<Grid item className={classes.listBox}>
				<List>
					{props.allScrums.map((scrum, index) => {
						return (
							<ListItem
								onClick={() => {
									props.selectScrum(scrum._id);
								}}
								className={
									scrum._id == props.currentActive._id
										? classes.listActive
										: classes.listItem
								}>
								<ListItemIcon>
									<ChevronRightIcon
										className={classes.icon}
									/>
								</ListItemIcon>
								<ListItemText primary={scrum.date} />
							</ListItem>
						);
					})}
				</List>
			</Grid>
		</Grid>
	);
}

export default ScrumList;
