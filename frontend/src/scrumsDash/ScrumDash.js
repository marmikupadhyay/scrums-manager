import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrumList from './ScrumList';
import ScrumInfo from './ScrumInfo';

import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	mainBody: {
		// marginTop: '10vh',
	},
}));

const dummyData = [
	{
		_id: '1',
		date: '2 Dec, 2020',
	},
	{
		_id: '2',
		date: '15 Dec, 2020',
	},
	{
		_id: '3',
		date: '28 Dec, 2020',
	},
	{
		_id: '4',
		date: '5 Jan, 2020',
	},
];

function ScrumDash() {
	const classes = useStyles();
	const [allScrums, setAllScrums] = useState(dummyData);
	const [currentActive, setCurrentActive] = useState(allScrums[0]);

	const selectScrum = (id) => {
		allScrums.forEach((scrum) => {
			if (id === scrum._id) setCurrentActive(scrum);
		});
	};

	return (
		<div className={classes.mainBody}>
			<Grid container>
				<Grid item xs={12} md={4} lg={3}>
					<ScrumList
						currentActive={currentActive}
						allScrums={allScrums}
						selectScrum={selectScrum}
					/>
				</Grid>
				<Grid item xs={12} md={8} lg={9}>
					<ScrumInfo />
				</Grid>
			</Grid>
		</div>
	);
}

export default ScrumDash;
