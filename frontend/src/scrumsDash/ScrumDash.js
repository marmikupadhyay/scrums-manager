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

const tagDataDummy = [
    {name:"ML"}, {name:"React"}
]

let dummyData = [
	{
		_id: '1',
		date: '2 Dec, 2020',
		member_info:[
			{
				user_id:'id1',
				name:'Tenz1',
				info:'i am jett1 main and i am pro',
				time:"September 14, 2016 17:36",
				tags:[
					{
						tag_id:"tag1",
						label:"React"
					},
					{
						tag_id:"tag2",
						label:"ML"
					}
				]
			},
			{
				user_id:'id2',
				name:'Hiko1',
				info:'i am sova1 main and i am pro',
				time:"September 14, 2016 17:36",
				tags:[
					{
						tag_id:"tag1",
						label:"React"
					},
					{
						tag_id:"tag2",
						label:"ML"
					}
				]
			}
		]
	},
	{
		_id: '2',
		date: '15 Dec, 2020',
		member_info:[
			{
				user_id:'id1',
				name:'Tenz2',
				info:'i am jett2 main and i am pro',
				time:"September 14, 2016 17:36",
				tags:[
					{
						tag_id:"tag1",
						label:"React"
					},
					{
						tag_id:"tag2",
						label:"ML"
					}
				]
			},
			{
				user_id:'id2',
				name:'Hiko2',
				info:'i am sova2 main and i am pro',
				time:"September 14, 2016 17:36",
				tags:[
					{
						tag_id:"tag1",
						label:"React"
					},
					{
						tag_id:"tag2",
						label:"ML"
					}
				]
			}
		]
	},
	{
		_id: '3',
		date: '28 Dec, 2020',
		member_info:[
			{
				user_id:'id1',
				name:'Tenz3',
				info:'i am jett3 main and i am pro',
				time:"September 14, 2016 17:36",
				tags:[
					{
						tag_id:"tag1",
						label:"React"
					},
					{
						tag_id:"tag2",
						label:"ML"
					}
				]
			},
			{
				user_id:'id2',
				name:'Hiko3',
				info:'i am sova3 main and i am pro',
				time:"September 14, 2016 17:36",
				tags:[
					{
						tag_id:"tag1",
						label:"React"
					},
					{
						tag_id:"tag2",
						label:"ML"
					}
				]
			}
		]
	},
];

function ScrumDash() {
	const classes = useStyles();
	const [allScrums, setAllScrums] = useState(dummyData);
	const [tagData, setTagData] = useState(tagDataDummy);
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
					<ScrumInfo currentActive={currentActive} tagData={tagData}/>
				</Grid>
			</Grid>
		</div>
	);
}

export default ScrumDash;
