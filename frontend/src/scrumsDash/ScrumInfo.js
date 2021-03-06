import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	purple,
	red,
	pink,
	deepPurple,
	deepOrange,
	orange,
	indigo,
	blue,
	lightBlue,
	cyan,
	teal,
	green,
	lightGreen,
	amber,
} from '@material-ui/core/colors';

import { FilterTags } from './FilterTags';
import ScrumInfoCard from './ScrumInfoCard';

const colors = [
	purple,
	red,
	pink,
	deepPurple,
	deepOrange,
	orange,
	indigo,
	blue,
	lightBlue,
	cyan,
	teal,
	green,
	lightGreen,
	amber,
];

const useStyles = makeStyles((theme) => ({
	auto: {
		width: '95%',
		margin: '10px auto',
	},
}));

function ScrumInfo(props) {
	const { currentActive, tagData } = props;
	console.log('Scrum info rendered', currentActive);
	const classes = useStyles();
	return (
		<div>
			<FilterTags tagData={tagData} />
			{currentActive.scrumData !== undefined
				? currentActive.scrumData.map((memberInfo, index) => {
						memberInfo.color =
							colors[
								Math.floor(Math.random() * colors.length)
							][500];
						return (
							<ScrumInfoCard
								memberInfo={memberInfo}
								key={`scrum${memberInfo._id}`}
							/>
						);
				  })
				: null}
		</div>
	);
}

export default ScrumInfo;
