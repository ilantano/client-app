import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";
import FooterComponent from "./Footer";

export default function LayoutComponent({ children }) {
  const { Header, Footer, Content } = Layout;

  return (
    <div className="bg-white h-full ">
      {/* <Layout>
        <Header> */}
      <NavBar />
      {/* </Header>
        <Content> */}
      <div className="container mx-auto pt-12 px-32 z-0">{children}</div>
      {/* </Content>
        <Footer> */}
      {/* <FooterComponent /> */}
      {/* </Footer> */}
      {/* </Layout> */}
    </div>
  );
}
