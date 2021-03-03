import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import News from '../News/News';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Maincontainer = () => {
    const classes = useStyles();
    const [articles, setArticels] = useState([])
    useEffect(() => {
        const url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=596f4119d9e046c3856e9bc4fd9fb1e5')
        axios(url)
            .then(data => setArticels(data.data.articles))
    }, [])
    return (
        <> <CssBaseline />
            <Container maxWidth="lg">
                <h1>Top Breaking News: {articles.length}</h1>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            articles.map(article => <Grid item xs='4' ><News article={article}></News> </Grid>)
                        }
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default Maincontainer;