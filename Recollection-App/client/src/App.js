import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material-ui/core';
import {useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import recollection from './images/recollection.png';
//. import useStyles from './styles';
import useStyles from './styles';
import {ThemeProvider,styled } from '@mui/styles';
import { createTheme } from '@mui/material/styles';


const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    
    useEffect(() => {
    dispatch(getPosts());
    }, [dispatch]);
const MyComponent = styled('div')({
    backgroundColor: 'red',
  });
  
  const MyThemeComponent = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
  }));
const theme = createTheme();
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} varaint="h1" align="center">Recollection</Typography>
                <img className={classes.image} src={recollection} alt="recollection" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch spacing={3}">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}></Grid>
                        <Form />
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;
