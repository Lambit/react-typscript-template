import { ReactElement, FC } from "react";
import { Typography } from "@mui/material";
import { APP_NAME } from "../util/constants";

// Home = "/"-----displayed at index.

const Home: FC<any> = (): ReactElement => {
    return (
        <Typography variant="h2">{APP_NAME}</Typography>
    );
};
export default Home;