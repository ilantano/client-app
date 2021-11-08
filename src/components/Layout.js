import React from "react";
import NavBar from "./NavBar";
import FooterComponent from "./Footer";

export default function LayoutComponent({ children }) {
  return (
    <div className="bg-white h-full ">
      {/* <Layout>
        <Header> */}
      <NavBar />
      {/* </Header>
        <Content> */}
      <div className="container px-8 md:mx-auto pt-12 md:px-32 z-0">
        {children}
      </div>
      {/* </Content>
        <Footer> */}
      <FooterComponent />
      {/* </Footer> */}
      {/* </Layout> */}
    </div>
  );
}
