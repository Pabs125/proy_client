import React, { useState } from "react";
// import React from "react";
import { Layout } from "antd";
// import { Button, Layout } from "antd";
import { MenuSider } from "../components/MenuComponent/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponent/MenuTop/MenuTop";
import { FooterPage } from "../components/FooterPage";
// import { Content, Footer, Header } from "antd/es/layout/layout";
// import { GithubOutlined } from "@ant-design/icons";
import "./LayoutGeneral.scss";

// export const LayoutGeneral = (props) => {
//     const { children } = props;
//     const [menuCollapsed, setMenuCollapsed] = useState(false);
//   return (
//     <Layout>
//       <MenuSider menuCollapsed = {menuCollapsed}/>
//       <Layout
//       className="layout-general"
//       style={{marginLeft: menuCollapsed? "80px": "200px"}}>
//       <Header className="layout-general__header">
//           <MenuTop
//             menuCollapsed = {menuCollapsed}
//             setMenuCollapsed = {setMenuCollapsed}
//           />
//         </Header>
//         <Content>{children}</Content>
//         <Footer>
//           <Button type="link" onClick={()=>console.log("Ir a git")}>
//             <GithubOutlined style={{fontSize: "20px"}}/>
//           </Button>
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export const LayoutGeneral = () => {
//   return (
//     <Layout>
//       <h1>Navbar</h1>
//       <h3>Content</h3>
//       <h2>Footer</h2>
//     </Layout>
//   );
// };

// export const LayoutGeneral = (props) => {
//   const { children } = props;
//   return (
//     <Layout>
//       <h1>Navbar</h1>
//       <h3>Content</h3>
//       <h2>Footer</h2>
//       { children }
//     </Layout>
//   );
// };

export const LayoutGeneral = (props) => {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  return (
    /* Texto que se va a mostrar */
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-general"
        style={{ marginLeft: menuCollapsed ? "70px" : "200px" }}
      >
        <Header className="layout-general-header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-general-content">{children}</Content>
        <Footer className="layout-general-footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};
