import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';



const Post = ({ props, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.selectedFile} title={props.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{props.creator}</Typography>
                <Typography variant="body2">{moment(props.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{props.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{props.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {props.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

Post.propTypes = {
    selectedFile: PropTypes.string,
    title: PropTypes.string,
    creator: PropTypes.string,
    createdAt:  PropTypes.string,
    tags:  PropTypes.array,
    message:  PropTypes.string,
    likeCount:  PropTypes.number,
};

export default Post;