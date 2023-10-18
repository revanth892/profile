import Mobileroot from "./mobile_components/Mobileroot";
import Box from '@mui/material/Box'
import './App.css'
function App() {
  return (
    <Box sx={{ display: { xs: 'block', sm: 'block', md:'none' } }}>
     <Mobileroot/>
    </Box>
  );
}

export default App;
