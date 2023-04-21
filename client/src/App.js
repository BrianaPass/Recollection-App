import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import recollection from './images/recollection.png';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varaint="h1" align="center">Recollection</Typography>
                <img src={recollection} alt="recollection" height="300" />
            </AppBar>
        </Container>
    );
}
export default App;
