import { ReactElement, FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

// Simple Footer

const Footer: FC<any> = (): ReactElement => {
  return (
    <Box
    sx={{
      width: "100%",
      height: "auto",
      backgroundColor: "secondary.main",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }}
  >
    <Container maxWidth="lg">
      <Grid display="flex" justifyContent='space-between'>
        <Grid item xs={14}>
          <Typography color="black" >
            Footer 
          </Typography>
        </Grid>
          <Typography color="black" >
            &copy; 2022 
          </Typography>
        <Grid item xs={12}>
          <Typography color="black" >
            Layout
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
};

export default Footer;