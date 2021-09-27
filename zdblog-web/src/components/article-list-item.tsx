import * as React from 'react';

import Card from '@mui/material/card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/paper';

export const ArticleListItem = (props) => {
    return (
        <Paper>
            <Card>
                <CardHeader>
                    {props.title}
                </CardHeader>
                <CardMedia component="img" height="194" image={props.image} />
            </Card>
        </Paper>);
}
