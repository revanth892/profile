// import React from "react";
import Projectspanel from "./Projectspanel";
import Skillspanel from "./Skillspanel";
import Aboutme from "./Aboutme";
// export default function Tabs()
// {
//     return(
//     <>    
//         <Projectspanel/>
//     </>
//     )
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{mt:'10px'}} >
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider',display:"flex",flexDirection:'row'}}>
                <Box sx={{mx:'auto'}}>    
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{color:"white",fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} label="About Me" {...a11yProps(0)} />
                        <Tab sx={{color:"white",fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} label="Skills" {...a11yProps(1)} />
                        <Tab sx={{color:"white",fontSize: '15px',fontFamily:'Franklin Gothic Medium'}} label="Projects" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </Box>
            <CustomTabPanel value={value} index={2}>
                <Projectspanel/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Skillspanel/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={0}>
                <Aboutme />
            </CustomTabPanel>
        </Box>
    </Box>    
  );
}