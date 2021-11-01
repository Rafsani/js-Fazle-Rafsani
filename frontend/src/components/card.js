import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
  <div style={{padding: '2%'}}>
    <Card sx={{ maxWidth: 345 , alignItems: 'center', padding: '1%'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to wishlist </Button>
        
      </CardActions>
    </Card>
    </div>
  );
}