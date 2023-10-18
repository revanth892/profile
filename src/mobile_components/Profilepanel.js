import React from "react";
import Box from '@mui/material/Box';
import Profile_img from '../media/profile.png'
import './Profilepanel.css'
export default function Profilepanel()
{
    return(
    <>
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:4}}>
                <img alt='an profile img' className='profile_img' width={94} src={Profile_img}/>
            </Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:1}}><div className="profile_name">Revanth Naidu</div></Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:0.7}}><div className="intro">Full-Stack Developer | ML Enthussiast</div></Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:0.7}}><div className="address">Hyderabad, IN</div></Box>
        </Box>
      
    </Box>
    </>
    )
}