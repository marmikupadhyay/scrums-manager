import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Avatar, Typography, Chip, Collapse } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        margin:'0.5em'
    },
    ul: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5, 0),
        margin: 0,
    },
    chip: {
        margin:'0 0.25em',
    },
    content:{
        padding:'0 16px 16px !important'
    },
    readmore:{
        cursor:'pointer',
        color:blue[900],
        '&:hover':{
            opacity:'0.75'
        }
    }
}));

function ScrumInfoCard(props) {
    const {memberInfo} = props
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" style={{backgroundColor:memberInfo.color}} alt={memberInfo.name} src="/broken-image.jpg"/>
                }
                title={memberInfo.name}
                subheader={memberInfo.time}
            />
            <CardContent className={classes.content}>
                <ul className={classes.ul}>
                    {memberInfo.tags.map((tag, index)=>{                
                        return (
                        <li key={`user${memberInfo.user_id}tag${tag.tag_id}`}>
                            <Chip
                            label={tag.label}
                            className={classes.chip}
                            />
                        </li>
                        );
                    })}
                </ul>
                <Typography variant="body2" color="textSecondary" component="p">
                    { !expanded ? (
                        <>
                        {memberInfo.info}
                        {memberInfo.info.split("").length > 10 ? <span className={classes.readmore} onClick={handleExpandClick}> Read More</span> : null}
                        </>
                    ): null}
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.content}>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.) <span className={classes.readmore} onClick={handleExpandClick}> Read Less</span>
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default ScrumInfoCard;
