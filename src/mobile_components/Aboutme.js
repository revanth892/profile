import React from "react";
import Typography  from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import './Aboutme.css'
import { Divider } from "@mui/material";
function Aboutme() {
  return (
    <>
        <Box sx={{display:'flex',flexDirection:'column',mt:-1.5}}>
            <Typography sx={{mb:0.6,ml:0,color:'white',fontFamily:'Franklin Gothic Medium',fontWeight: 700,fontSize: '23px',letterSpacing: '0.8px'}}>Personal Information</Typography>
            <Box sx={{mb:3.6,display:'flex',borderRadius:'12px',flexDirection:'column',mt:1,border:2,borderColor:'rgb(25, 118, 210)'}}>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Education</Typography>
                <Typography sx={{ml:'auto',mr:1,mt:0.3,fontSize:'14px'}}>B.Tech</Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Email</Typography>
                <Typography sx={{ml:'auto',mr:1,fontSize:'14px',mt:0.3}}>asrevanthnaidu@gmail.com</Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Phone</Typography>
                <Typography sx={{ml:'auto',mr:1,fontSize:'14px',mt:0.3}}>8790X8900X</Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>CGPA</Typography>
                <Typography sx={{ml:'auto',mr:1,fontSize:'14px',mt:0.3}}>8.8</Typography>
            </Box>
            </Box>
            


            <Typography sx={{mb:0.6,ml:0,color:'white',fontFamily:'Franklin Gothic Medium',fontWeight: 700,fontSize: '23px',letterSpacing: '0.8px'}}>Socials</Typography>
            <Box sx={{display:'flex',borderRadius:'12px',flexDirection:'column',mt:1}}>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Resume</Typography>
                <Typography sx={{ml:'auto',mr:1,mt:0.3,fontSize:'14px'}}><Link href="#"variant='body2'color="inherit">Download</Link></Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Github</Typography>
                <Typography sx={{ml:'auto',mr:1,mt:0.3,fontSize:'14px'}}><Link href="https://github.com/revanth892"variant='body2'color="inherit">View</Link></Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>LinkedIn</Typography>
                <Typography sx={{ml:'auto',mr:1,mt:0.3,fontSize:'14px'}}><Link href="https://www.linkedin.com/in/revanth-naidu-94bba7230/"variant='body2'color="inherit">View</Link></Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Leetcode</Typography>
                <Typography sx={{ml:'auto',mr:1,mt:0.3,fontSize:'14px'}}><Link href="https://leetcode.com/asrevanthnaidu/"variant='body2'color="inherit">View</Link></Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            <Box  
            sx={{display:'flex',flexDirection:'row',color:'white',mt:0.6,mb:0.6}}>
                <Typography sx={{mr:'auto',ml:1,fontSize:'17px',fontFamily:'Franklin Gothic Medium'}}>Twitter</Typography>
                <Typography sx={{ml:'auto',mr:1,mt:0.3,fontSize:'14px'}}><Link href="#"variant='body2'color="inherit">View</Link></Typography>
            </Box>
            <Divider sx={{borderBottomWidth:'2px',borderColor:'rgb(25, 118, 210)'}}></Divider>
            
            </Box>
        </Box>
        
    </>
    );
}

export default Aboutme;
