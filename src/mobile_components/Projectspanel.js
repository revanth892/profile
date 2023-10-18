import React from "react";
import Box from '@mui/material/Box'
import {Projectcard1,Projectcard2,Projectcard3,Projectcard4} from './Projectcards/Projectcard';
function Projectspanel() {
  return (
    <>
        <Box sx={{display:'flex',flexDirection:'column'}}>
   
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:-0.5}}>
                <Projectcard1/>
            </Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:1}}>
            <Projectcard2/>
            </Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:1}}>
            <Projectcard3/>
            </Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:1}}>
            <Projectcard4/>
            </Box>
        </Box>
    </Box>
    </>    );
}
export default Projectspanel;
