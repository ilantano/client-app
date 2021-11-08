import React from "react";
import { Input, Button, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      className="h-12 w-full flex items-center fixed z-10"
      style={{ backgroundColor: "#D70018" }}
    >
      <div className="flex container mx-auto w-full items-center">
        <Row gutter={16} className="w-full">
          <Col span={4}>
            <div>Logo</div>
          </Col>
          <Col span={8}>
            <Input.Search allowClear placeholder="Nhập từ khoá" />
          </Col>
          <Col span={4}>
            <div className="flex items-center h-full">
              <ShoppingCartOutlined
                className="text-2xl self-center cursor-pointer"
                style={{ color: "white" }}
              />
            </div>
          </Col>
          <Col span={8} md={6} className="flex items-center">
            <div className="flex items-center h-full">
              <Link to="/login">
                <span className="text-white cursor-pointer">Đăng nhập</span>
              </Link>
              <span className="text-white">/</span>
              <Link to="/register">
                <span className="text-white cursor-pointer">Đăng ký</span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
