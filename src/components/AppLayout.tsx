import React  from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// AppLayout housing Nav,props and foot. Exported to App.tsx.

export interface AppProps {}

const AppLayout: React.FunctionComponent<AppProps> = ({children}) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;