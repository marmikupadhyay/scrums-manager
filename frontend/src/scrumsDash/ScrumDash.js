import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrumList from './ScrumList';
import ScrumInfo from './ScrumInfo';
import Axios from 'axios';

import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	mainBody: {
		// marginTop: '10vh',
	},
}));

const tagDataDummy = [{ name: 'ML' }, { name: 'React' }];

function ScrumDash() {
	const classes = useStyles();
	const [allScrums, setAllScrums] = useState([]);
	const [tagData, setTagData] = useState(tagDataDummy);
	const [currentActive, setCurrentActive] = useState({});

	const selectScrum = (id) => {
		allScrums.forEach((scrum) => {
			if (id === scrum._id) setCurrentActive(scrum);
		});
	};

	useEffect(() => {
		Axios.get('http://localhost:8000/api/scrum/allScrums')
			.then((res) => {
				res.data.data.forEach((scrum) => {
					let d = new Date(scrum.date);
					scrum.date = d.toDateString();
				});
				setAllScrums(res.data.data);
				setCurrentActive(res.data.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
					<ScrumInfo
						currentActive={currentActive}
						tagData={tagData}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default ScrumDash;
