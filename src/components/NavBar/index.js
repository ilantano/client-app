import React from "react";
import { Input, Button, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-purple-500 h-12 w-full flex items-center fixed z-10">
      <div className="flex container mx-auto w-full items-center">
        <Row gutter={16} className="w-full">
          <Col span={4}>
            <div>Logo</div>
          </Col>
          <Col span={0} md={8}>
            <Input.Search allowClear placeholder="Nhập từ khoá" />
          </Col>
          <Col span={4}>
            <Button type="primary" icon={<ShoppingCartOutlined />}>
              Giỏ hàng
            </Button>
          </Col>
          <Col span={8} md={6} className="flex items-center">
            <Link to="/login">Đăng nhập</Link>/
            <Link to="/register">Đăng ký</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
