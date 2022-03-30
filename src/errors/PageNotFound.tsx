import { FC ,ReactElement } from 'react'
import { Box } from "@mui/material";


export const NotFound: FC<any> = (): ReactElement => (
    <Box sx={{
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "1rem",
        color: 'primary.main',
      }}>
    <h1>Page Not Found</h1>
    </Box>

)