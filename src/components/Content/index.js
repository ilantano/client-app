import React from "react";
import { Card, Row, Col, Rate } from "antd";
import Apple from "../../assets/images/AppleAuthorizedReseller.svg";

export default function Content() {
  return (
    <div className="pt-4">
      <div>
        dasdas
        <Row>
          <Col span={6}>
            <img src={Apple} alt="" className="w-20 h-16" />
          </Col>
        </Row>
      </div>
      <div>
        <img
          src="https://cdn.cellphones.com.vn/media/wysiwyg/ip-13-Special_Banner_1200x75_Desktop.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="pt-4">
        <Row gutter={10} className="h-full">
          <Col span={6}>
            <div className="border border-white p-8 h-full rounded-md shadow-sm hover:shadow-md">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className="pb-4 w-full"
                alt=""
              />
              <p className="font-bold">SamSung S1111</p>
              <p className="text-red-500">21.0000.000</p>
              <Rate disabled defaultValue={2} className="text-xs" />
            </div>
          </Col>
          <Col span={6}>
            <div className="border border-white p-8 h-full rounded-md shadow-sm hover:shadow-md">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className="pb-4 w-full"
                alt=""
              />
              <p>SamSung S1111</p>
              <p>21.0000.000</p>
              <Rate disabled defaultValue={2} className="text-xs" />
            </div>
          </Col>
          <Col span={6}>
            <div className="border border-white p-8 h-full rounded-md shadow-sm hover:shadow-md">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className="pb-4 w-full"
                alt=""
              />
              <p>SamSung S1111</p>
              <p>21.0000.000</p>
              <Rate disabled defaultValue={2} className="text-xs" />
            </div>
          </Col>
          <Col span={6}>
            <div className="border border-white p-8 h-full rounded-md shadow-sm hover:shadow-md">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className="pb-4 w-full"
                alt=""
              />
              <p>SamSung S1111</p>
              <p>21.0000.000</p>
              <Rate disabled defaultValue={2} className="text-xs" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
