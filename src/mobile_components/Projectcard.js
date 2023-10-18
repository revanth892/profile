import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button  from '@mui/material/Button';
import './Projectcard.css'

export default function Projectcard() {

  return (
    <Box sx={{border:2,borderRadius:'20px',borderColor: 'primary.main',borderWidth:'3px',width:'330px'}}> 
        <Card sx={{ borderRadius:'18px',borderColor: 'primary.main',borderWidth:'2px',width:'330px',color:'white',backgroundColor:'black'}}>
        <Box sx={{ml:2,mt:-2}}><p className="Title">Exprense Tracker</p></Box>
        <CardMedia
            component="img"
            height="180"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
        />
        <CardContent 
        sx={{color:'white',backgroundColor:'black'}}>
            <Typography variant="body2" >
            <p className='content'>    
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </p>
            </Typography>
        </CardContent>
        <Box sx={{display:'flex',flexDirection:'column',mb:2}}>
            <Box  
            sx={{display:'flex',flexDirection:'row'}}>
                <Box sx={{mx:'auto',mt:2}}>
                    <Button sx={{borderRadius:'16px'}} variant ="outlined">Know More</Button>
                </Box>
                <Box sx={{mx:'auto',mt:2    }}>
                    <Button sx={{borderRadius:'16px'}} variant="outlined">Show Live</Button>
                </Box>
            </Box>
        </Box>
        </Card>
    </Box>  );
    
}


