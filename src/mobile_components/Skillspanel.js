
// function Skillspanel() {
//   return (<></>);
// }

// export default Skillspanel;

import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { Divider, Typography} from '@mui/material';
export default function Skillspanel() {
  return (
    // <Box display='flex' flexDirection="row" sx={{width:340}}>
    //     <Box sx={{mx:'auto'}}>
    //         <Chip sx={{mr:1.4,mb:1}} label="primary" color="primary" />
    //         <Chip sx={{mr:1.4,mb:1}} label="malli" color="success" />
    //         <Chip sx={{mr:1.4,mb:1}} label="primary" color="primary" />
    //         <Chip sx={{mr:1.4,mb:1}} label="success" color="success" />
    //         <Chip sx={{mr:1.4,mb:1}} label="primary" color="primary" variant="outlined" />
    //         <Chip sx={{mr:1.4,mb:1}} label="success" color="success" variant="outlined" />
    //         <Chip sx={{mr:1.4,mb:1}} label="success" color="success" />
    //         <Chip sx={{mr:1.4,mb:1,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" icon={<CodeIcon />} label="HTML" /> 
    //     </Box>
    // </Box>
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box sx={{mt:-1.8}}>    
            <Typography sx={{mb:1,color:'white',fontFamily:'Franklin Gothic Medium',fontWeight: 700,fontSize: '23px',letterSpacing: '0.8px'}}>Coding</Typography>
            <Divider sx={{mb:1.3}}color="white"/>
            <Box  
            sx={{display:'flex',flexDirection:'row'}}>
                <Box sx={{mx:'auto',mt:1}}>
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="HTML" />
                    <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="CSS" />
                    <Chip color='secondary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="BOOTSTRAP 5" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="React.js" />
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Express.js" />
                    <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Node.js" />
                    <Chip color='success' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="MongoDB" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="C language" />
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="C++" />
                    <Chip color='error'sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Java" />
                    <Chip color='success' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Python" />
                    <Chip color='secondary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="DSA" />
                    <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="MUI" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Redux" />
                </Box>
            </Box>
        </Box>
        <Box>
            <Typography sx={{mb:1,color:'white',fontFamily:'Franklin Gothic Medium',fontWeight: 700,fontSize: '23px',letterSpacing: '0.8px'}}>Growth</Typography>
            <Divider sx={{mb:1.3}}color="white"/>
            <Box  
            sx={{display:'flex',flexDirection:'row'}}>
                <Box sx={{mx:'auto',mt:1}}>
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Leadership" />
                    <Chip color='warning' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="People Skills" />
                    <Chip color='secondary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Problem Solving" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Communication Skills" />
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Collaboration talent" />
                    <Chip color='success' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Adaptability" />
                    <Chip color='primary' sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Attention To Detail" />
                    <Chip sx={{mr:1,mb:1.8,color:'whitesmoke',fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Work ethic" />
                    <Chip color='error'sx={{mr:1,mb:1.8,fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} variant="outlined" label="Fast Learner" />
                </Box>
            </Box>
        </Box>
    </Box>
  );
}