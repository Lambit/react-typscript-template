import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from './routes/AppRoutes';

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppLayout from "./components/AppLayout";
import { theme } from './theme/theme'
import './styles/global.scss';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <CssBaseline />
          <Box 
            sx={{
              height:"100vh",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              backgroundColor:"primary.light",
              color: "seconday.primary"
            }} 
          >
              <Routes>
                {appRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
          </Box>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;