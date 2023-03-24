import React from "react";
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fetchData  from '../../utils/apis'

export default function Cards2() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
          const responseData = await fetchData();
          setData(responseData);
        };
        fetchDataAsync();
      }, []);
      if (!data) {
        return <div>Loading...</div>;
      }

      console.log(data[0]);



    return (

    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height:300 }}
        // image={"https://via.placeholder.com/600x400"}
        // image={"http://www.tropicopia.com/house-plant/thumbnails/5556.jpg"}
        image={data[0].Img}

        title="green iguana"
        />
    <CardContent>
    <Typography color='primary' variant='h5' gutterBottom ="" component="div">
          Hey, my name is... 
        </Typography>
        <Typography color='primary' variant='h3' gutterBottom ="" component="div">
          {data[0]["Common name"][0]}
        </Typography>
        <Typography variant="h5" color="text.secondary">
        Why you will love me... 
        </Typography>
        <Typography variant="body1" color='primary' sx={{ m: 2}}>
          Strong Robutness, and never have to water me.

        </Typography>
        </CardContent>
        <CardActions>
    {/* <Button sx={{ m: 2}} color='primary' variant='contained' size="small">Low light</Button>
    <Button sx={{ m: 2}} color='warning' variant='contained' size="small">Direct sunlight</Button> */}
    </CardActions>
    </Card>

    );
}