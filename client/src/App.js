import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import {useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import recollection from './images/recollection.png';
import useStyles from './styles';
import {ThemeProvider,styled } from '@mui/styles';
import { createTheme } from '@mui/material/styles';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}
export default App;
