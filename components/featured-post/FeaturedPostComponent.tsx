import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';



interface FeaturedPostProps {
    post: {
        id: string;
        label: string;
        description: string;
        ruta: string;
    };
}

export default function FeaturedPost(props: FeaturedPostProps) {
    const { post } = props
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={post.ruta}>
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.id}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.label}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" >
                            Mas información
                        </Typography>
                    </CardContent>
                    {/* <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.image}
                        alt={post.imageLabel}
                    /> */}
                </Card>
            </CardActionArea>
        </Grid>
    );
}