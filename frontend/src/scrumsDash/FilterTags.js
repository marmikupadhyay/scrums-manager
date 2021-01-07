import React, {useEffect, useState} from 'react';
import {TextField, CircularProgress} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	auto:{
		width:'95%',
		margin:'10px auto'

	}
}));

export const FilterTags = (props) => {
    const { tagData } = props
    const classes = useStyles()

	return (
		<Autocomplete
			options={tagData}
			onChange={props.handleinput}
            className={classes.auto}
			getOptionSelected={(option, value) => option.name === value.name}
			getOptionLabel={(option) => option.name ?? ''}
			renderInput={(params) => {
				return (
					<TextField
						{...params}
						variant="outlined"
						label="Tags"
					/>
				);
			}}
		/>
	);
};