import React from "react";
import { Input, Button, Row, Col, Menu, Carousel } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const contentStyle = {
  height: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

export default function MenuBody() {
  return (
    <div className="container mx-auto mt-16 h-96">
      <div className="border rounded-md p-2">
        <Row gutter={12}>
          <Col span={24} lg={24}>
            <Carousel autoplay autoplaySpeed={2000} arrow>
              <div>
                <img
                  className="w-full rounded-md h-64"
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/rog-hs-1380-600-max.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full rounded-md h-64"
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/rog-hs-1380-600-max.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full rounded-md h-64"
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/rog-hs-1380-600-max.png"
                  alt=""
                />
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
}
