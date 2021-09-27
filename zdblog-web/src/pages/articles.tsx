import * as React from 'react';

import Grid from '@mui/material/Grid';

import { ArticleListItem } from "../components/article-list-item";

// markup
const ArticlesPage = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ArticleListItem title="hello card"></ArticleListItem>
                </Grid>
                <Grid item xs={8}>
                    <ArticleListItem title="helloo card"></ArticleListItem>
                </Grid>
            </Grid>
        </div>
    )
}

export default ArticlesPage;