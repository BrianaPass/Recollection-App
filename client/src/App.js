import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import recollection from './images/recollection.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

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
