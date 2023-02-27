import React from "react";

import Aux1 from "../../hoc/Aux1";


const Layout = (props) => (
  <Aux1>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux1>
);

export default Layout;
