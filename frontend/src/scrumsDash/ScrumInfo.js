import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {purple, red, pink, deepPurple, deepOrange, orange, indigo, blue, lightBlue, cyan, teal, green, lightGreen, amber} from '@material-ui/core/colors';

import {FilterTags} from './FilterTags'
import ScrumInfoCard from './ScrumInfoCard'
import Addscrum from './Addscrum'

const colors = [purple, red, pink, deepPurple, deepOrange, orange, indigo, blue, lightBlue, cyan, teal, green, lightGreen, amber]

const useStyles = makeStyles((theme) => ({
	auto:{
		width:'95%',
		margin:'10px auto'

	}
}));

function ScrumInfo(props) {
	const {currentActive, tagData} = props
	const classes = useStyles();
	const [searchfield, setsearchfield] = useState('');
    const handleinput = (e) => {

        setsearchfield(e.target.value);

	};

	console.log(currentActive)

	if(!currentActive)
	{
			
		currentActive = [
		{
				_id: '1',
		date: '2 Dec, 2020',
		member_info:[
			{
				user_id:'Loading...',
				name:'Loading...',
				info:'Loading...',
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
		  }
		]
 
	}

	const filterdata = currentActive.member_Info.filter((meminfo) => {

	     meminfo.tags.map((tagitem) => {

			return tagitem.label.toLowerCase().includes(searchfield.toLocaleLowerCase());
		 });

	});

	return (
		<div>
			<FilterTags tagData={tagData} handleinput={handleinput} />

			<Addscrum />
			
			{filterdata.member_info.map((memberInfo, index)=>{
				memberInfo.color = colors[Math.floor(Math.random() * colors.length)][500]
				return <ScrumInfoCard memberInfo={memberInfo} key={memberInfo.user_id}/>
			})}
		</div>
	);
}

export default ScrumInfo;
