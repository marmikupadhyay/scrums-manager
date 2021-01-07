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
	const [searchLabel, setSearchLabel] = useState('React');
    const handleinput = (e) => {

        setSearchLabel(e.target.value);

	};

	let filterdata = {...currentActive}
	filterdata.member_info = []
	currentActive.member_info.forEach(ele=>{
		if(searchLabel) {
			let includes = false
			ele.tags.forEach(tag => {
				if(tag.label === searchLabel) includes = true
			})
			if(includes) filterdata.member_info.push(ele)
		} else {
			filterdata.member_info.push(ele)
		}
	})

	console.log(filterdata)

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
