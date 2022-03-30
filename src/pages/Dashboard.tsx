import { ReactElement, FC } from "react";
import { Typography } from "@mui/material";

// Dashboard = "/dash"----second route added.

const Dashboard: FC<any> = (): ReactElement => {
    return (
         <Typography variant="h1">Dashboard</Typography>
    );
};
export default Dashboard;