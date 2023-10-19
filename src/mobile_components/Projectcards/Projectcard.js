import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button  from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import './Projectcard.css'
import expense_img from './project_media/expense.png'
import quote_img from './project_media/quote.png'
import apple_img from './project_media/apple.png'
import gdsc_img from './project_media/gdsc.png'
export function Projectcard1() {

  return (
    <Box sx={{border:2,borderRadius:'20px',borderColor: 'primary.main',borderWidth:'3px',width:'291.5px'}}> 
        <Card sx={{ borderRadius:'18px',borderColor: 'primary.main',borderWidth:'2px',width:'291.5px',color:'white',backgroundColor:'black'}}>
        <Box sx={{ml:2,mt:-2}}><p className="Title">Exprense Tracker</p></Box>
        <CardMedia
            sx={{mb:2,mt:1}}
            component="img"
            height="180"
            image={expense_img}
            alt="Paella dish"
            borderRadius='0px'
        />
        <CardContent 
        sx={{color:'white',backgroundColor:'black'}}>
            <Typography variant="body2" >
            <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box sx={{mt:-1.8}}>    
            <Box  
            sx={{display:'flex',flexDirection:'row'}}>
                <Box sx={{mx:'auto',mt:1}}>
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="HTML" />
                    <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="CSS" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="React.js" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Redux" />
                </Box>
            </Box>
        </Box>
    </Box>
            </Typography>
        </CardContent>
        <Box sx={{display:'flex',flexDirection:'column',mb:2}}>
            <Box  
            sx={{display:'flex',flexDirection:'row'}}>
                <Box sx={{mx:'auto',mt:2}}>
                    <Button sx={{borderRadius:'16px'}} variant ="outlined">Know More</Button>
                </Box>
                <Box sx={{mx:'auto',mt:2    }}>
                    <Button sx={{borderRadius:'16px'}} variant="outlined">
                        <a href='https://the-expense-tracker.vercel.app/'>Show Live</a>
                    </Button>
                </Box>
            </Box>
        </Box>
        </Card>
    </Box>  );
    
}
export function Projectcard2() {

    return (
      <Box sx={{border:2,borderRadius:'20px',borderColor: 'primary.main',borderWidth:'3px',width:'291.5px'}}> 
          <Card sx={{ borderRadius:'18px',borderColor: 'primary.main',borderWidth:'2px',width:'291.5px',color:'white',backgroundColor:'black'}}>
          <Box sx={{ml:2,mt:-2}}><p className="Title">Quote Generator</p></Box>
          <CardMedia
            sx={{mb:2,mt:1}}
              component="img"
              height="180"
              image={quote_img}
              alt="Paella dish"
          />
          <CardContent 
          sx={{color:'white',backgroundColor:'black'}}>
              <Typography variant="body2" >
              <Box sx={{display:'flex',flexDirection:'column'}}>
          <Box sx={{mt:-1.8,ml:-5}}>    
              <Box  
              sx={{display:'flex',flexDirection:'row'}}>
                  <Box sx={{mx:'auto',mt:1}}>
                      <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="HTML" />
                      <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="CSS" />
                      <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="React.js" />
                  </Box>
              </Box>
          </Box>
      </Box>
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
  
  export function Projectcard3() {

    return (
      <Box sx={{border:2,borderRadius:'20px',borderColor: 'primary.main',borderWidth:'3px',width:'291.5px'}}> 
          <Card sx={{ borderRadius:'18px',borderColor: 'primary.main',borderWidth:'2px',width:'291.5px',color:'white',backgroundColor:'black'}}>
          <Box sx={{ml:2,mt:-2}}><p className="Title">Apple Clone</p></Box>
          <CardMedia
            sx={{mb:2,mt:1}}
            component="img"
              height="180"
              image={apple_img}
              alt="Paella dish"
          />
          <CardContent 
          sx={{color:'white',backgroundColor:'black'}}>
              <Typography variant="body2" >
              <Box sx={{display:'flex',flexDirection:'column'}}>
          <Box sx={{mt:-1.8}}>    
              <Box  
              sx={{display:'flex',flexDirection:'row'}}>
                  <Box sx={{mx:'auto',mt:1}}>
                      <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="HTML" />
                      <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="CSS" />
                      <Chip color='secondary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="BOOTSTRAP 5" />
                      
                  </Box>
              </Box>
          </Box>
      </Box>
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
  
  export function Projectcard4() {

    return (
      <Box sx={{border:2,borderRadius:'20px',borderColor: 'primary.main',borderWidth:'3px',width:'291.5px'}}> 
          <Card sx={{ borderRadius:'18px',borderColor: 'primary.main',borderWidth:'2px',width:'291.5px',color:'white',backgroundColor:'black'}}>
          <Box sx={{ml:2,mt:-2}}><p className="Title">GDSC site</p></Box>
          <CardMedia
            sx={{mb:2,mt:1}}
              component="img"
              height="180"
              image={gdsc_img}
              alt="Paella dish"
          />
          <CardContent 
          sx={{color:'white',backgroundColor:'black'}}>
              <Typography variant="body2" >
              <Box sx={{display:'flex',flexDirection:'column'}}>
          <Box sx={{mt:-1.8}}>    
              <Box  
              sx={{display:'flex',flexDirection:'row'}}>
                  <Box sx={{ml:'auto',mt:1}}>
                      <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="HTML" />
                      <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="CSS" />
                      <Chip color='secondary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="BOOTSTRAP 5" />
                 
                  </Box>
              </Box>
          </Box>
      </Box>
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
  
      

