import React from "react";
import Box from '@mui/material/Box'
import Projectcard from './Projectcard';
function Projectspanel() {
  return (
    <>
        <Box sx={{display:'flex',flexDirection:'column'}}>
   
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:-0.5}}>
                <Projectcard/>
            </Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:1}}>
            <Projectcard/>
            </Box>
        </Box>
        <Box  
        sx={{display:'flex',flexDirection:'row'}}>
            <Box sx={{mx:'auto',mt:1}}>
            <Projectcard/>
            </Box>
        </Box>
    </Box>
    </>    );
}
export default Projectspanel;
