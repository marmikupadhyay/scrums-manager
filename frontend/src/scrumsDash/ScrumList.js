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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
	mainBody: {
		minHeight: '100vh',
		borderRight: '1px solid black',
		background: theme.palette.background.secondary,
	},
	month:{
		borderBottom: `3px solid ${theme.palette.accent.primary}`,
	},
	title: {
		fontSize: '1.75em',
		display:'flex',
		justifyContent:'space-between',
		margin: '0.25em 0.25em',
		padding: '0.5em',
		fontFamily: 'Lato',
		color: theme.palette.font.light,
		background: theme.palette.background.primary,
		boxShadow: theme.shadows[5],
		position: 'relative',
	},
	listBox: {
		margin: '0 0.75em',
		padding: '0em',
		color: theme.palette.font.light,
	},
	listItem: {
		maxWidth:'95%',
		boxShadow: theme.shadows[3],
		background: 'rgb(0, 21, 36)',
		margin: '0.75em auto',
		transition: '0.5s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.05)',
		},
		borderLeft: `2px solid ${theme.palette.accent.primary}`,
	},
	listActive: {
		maxWidth:'95%',
		background: 'rgb(0, 21, 36)',
		boxShadow: theme.shadows[3],
		transition: '0.5s',
		cursor: 'pointer',
		padding: '15px 0',
		fontSize: '1.0.75em',
		margin: '0.75em auto',
		borderLeft: `7px solid ${theme.palette.accent.primary}`,
		transform: 'scale(1.05)',
	},
	icon: {
		color: theme.palette.font.light,
		fontSize: '2em',
	},
}));
function ScrumList(props) {
	const {allScrums} = props
	const classes = useStyles();
	return (
		<Grid container item direction='column' className={classes.mainBody}>
			<Grid item className={classes.title}>
				<ChevronLeftIcon/> <span className={classes.month}>December 2020</span> <ChevronRightIcon/>
			</Grid>
			<Grid item className={classes.listBox}>
				<List>
					{allScrums.map((scrum, index) => {
						return (
							<ListItem
								key={scrum._id}
								onClick={() => {
									props.selectScrum(scrum._id);
								}}
								className={
									scrum._id === props.currentActive._id
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
