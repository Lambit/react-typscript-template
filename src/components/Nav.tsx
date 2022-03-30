import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/AppRoutes";

import { Box, Link, Container, IconButton, Menu,
        MenuItem,Toolbar,Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


/* 

Responsive nav using mui/material.

*/ 

export interface NavProps {}

const Nav: React.FunctionComponent<NavProps> = () => {
    const [navFluent, setNavResp] = React.useState(null);
  
    const handleResp = (event: any) => {
      setNavResp(event.currentTarget);
    };
  
    const handleNavSm = () => {
      setNavResp(null);
    };

    return(
        <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "secondary.main",
          border: '1px solid black'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, 
                       display: { 
                           xs: "flex", 
                           md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleResp}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={navFluent}
                anchorOrigin={{ vertical: "bottom",
                                horizontal: "left",
                }}

                keepMounted
                transformOrigin={{ vertical: "top",
                                   horizontal: "left",
                }}

                open={Boolean(navFluent)}
                onClose={handleNavSm}
                sx={{
                  display: { xs: "block", 
                             md: "none" },
                }}
               >
                {routes.map((page) => (
                  <Link
                    key={page.key}
                    component={NavLink}
                    to={page.path}
                    color="black"
                    underline="none"
                    variant="button"
                   >
                    <MenuItem onClick={handleNavSm}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}

              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, 
                    display: 
                        { xs: "flex", 
                          md: "none" 
              } }}
            >
              LAMBIT
            </Typography>
            <Box sx={{ flexGrow: 1, 
                display: 
                    { xs: "none", 
                      md: "flex" 
            } }}>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "1rem",
                  
                  
                }}
              >
                {routes.map((page) => (
                  <Link
                    key={page.key}
                    component={NavLink}
                    to={page.path}
                    color="black"
                    underline="none"
                    variant="button"
                    sx={{ fontSize: "large", marginLeft: "2rem" }}
                  >
                    {page.title}
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    );
};
export default Nav;