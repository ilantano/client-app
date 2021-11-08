import React from "react";
import { Button, Carousel, Row, Col, Select, Divider, Rate } from "antd";
import { DATA } from "../constants";

const { Option } = Select;

export default function index() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div>
      <div className="py-2">
        <span className="font-bold text-lg">
          iPhone 13 Pro Max 256GB I Chính hãng VN/A
        </span>
      </div>
      <div className="mt-0 mb-2">
        <Divider />
      </div>
      <Row gutter={16}>
        <Col span={24} lg={24} xl={8}>
          <div className="">
            <Carousel afterChange={onChange} className="border rounded-lg p-2">
              <div>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4_1.jpg"
                  alt=""
                  className="m-0"
                />
              </div>
              <div>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/i/p/iphone_13-_pro-1_2_1.jpg"
                  alt=""
                  className="m-0"
                />
              </div>
              <div>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/i/p/iphone_13-_pro-1_2_1.jpg"
                  alt=""
                  className="m-0"
                />
              </div>
            </Carousel>
          </div>
        </Col>
        <Col span={24} lg={12} xl={8} className="pt-4 xl:pt-0">
          <div>
            <p className="text-red-500 border border-red-400 p-1 bg-red-100 rounded-md w-20">
              Tra gop 0%
            </p>
          </div>
          <p className="text-red-500 font-semibold text-lg">310000000</p>
          <div>
            <Row gutter={10}>
              <Col span={8} md={12} lg={8}>
                <div className="text-center border rounded-md hover:border-red-400 cursor-pointer mb-2">
                  <p className="mb-1 ">128GB</p>
                  <p className="mb-0">310000000</p>
                </div>
              </Col>
              <Col span={8} md={12} lg={8}>
                <div className="text-center border rounded-md hover:border-red-400 cursor-pointer mb-2">
                  <p className="mb-1">256GB</p>
                  <p className="mb-0">320000000</p>
                </div>
              </Col>
              <Col span={8} md={12} lg={8}>
                <div className="text-center border rounded-md hover:border-red-400 cursor-pointer mb-2">
                  <p className="mb-1 ">512GB</p>
                  <p className="mb-0">330000000</p>
                </div>
              </Col>
            </Row>
          </div>
          <p className="pt-4">Chon mau sac</p>
          <Select className="w-48">
            <Option>Gold</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
          </Select>
          <div className="p-1 bg-red-500 rounded-md text-white text-center mt-4">
            <p className="mb-0 uppercase">Mua Ngay</p>
            <span>(Giao hàng tận nơi - Giá tốt - An toàn)</span>
          </div>
          <div className="mt-4">
            <div className="p-2 bg-gray-300 rounded-t-md w-full mb-0 uppercase text-md font-semibold">
              Uu dai them
            </div>
            <div className="flex flex-col rounded-b-md border-t-0 border-r border-b border-l pt-2 pl-8">
              <span className="mb-2">
                Giảm 500.000đ khi thanh toán hoặc trả góp từ 5 triệu trở lên
                bằng thẻ tín dụng FE Credit
              </span>
              <span className="mb-2">
                Giảm 500.000đ khi thanh toán hoặc trả góp từ 5 triệu trở lên
                bằng thẻ tín dụng FE Credit
              </span>
              <span className="mb-2">
                Giảm 500.000đ khi thanh toán hoặc trả góp từ 5 triệu trở lên
                bằng thẻ tín dụng FE Credit
              </span>
            </div>
          </div>
        </Col>
        <Col span={24} lg={12} xl={8} className="pt-4 xl:pt-0">
          <Row gutter={16}>
            <Col span={12}>
              <Select defaultValue="Ha Noi" className="w-full">
                <Option>Ha Noi</Option>
                <Option>Ho Chi Minh</Option>
              </Select>
            </Col>
            <Col span={12}>
              <Select className="w-full">
                <Option>Tay Ho</Option>
                <Option>Cau Giay</Option>
              </Select>
            </Col>
          </Row>
          <p className="my-2">Có 2 cửa hàng có sẵn sản phẩm</p>
          <div className="w-full rounded-md p-2 border">
            <p className="truncate mb-1">
              02471010128 124 - 126 - 128 Lạc Long Quân, Tay Ho
            </p>
            <p className="truncate mb-1">
              02471010128 124 - 126 - 128 Nguyen Khanh Toan, P.Quan Hoa, Cau
              Giay
            </p>
          </div>
          <div className="w-full rounded-md p-2 mt-4 border">
            <p className="text-lg font-semibold mb-1">Thông tin máy</p>
            <p>Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất</p>
            <p className="mb-1">
              Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Việt
              Nam. 1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất.
            </p>
          </div>
        </Col>
      </Row>
      <div className="mt-2 mb-2">
        <Divider />
      </div>
      <p className="text-lg font-medium">Sản phẩm tương tự</p>
      <Row gutter={16}>
        {DATA.map((item) => (
          <Col span={24} sm={12} lg={6} key={item.id} className="pb-2">
            <div className="border border-white p-8 h-full rounded-md shadow-md hover:shadow-md">
              <img src={item?.src} className="pb-4 w-full" alt="" />
              <p>SamSung S1111</p>
              <p>21.0000.000</p>
              <Rate disabled defaultValue={2} className="text-xs" />
            </div>
          </Col>
        ))}
      </Row>
      <Row gutter={16} className="mt-4">
        <Col span={24} lg={12} xl={8}>
          <div className="rounded-md border p-2">
            <div className="rounded-md border bg-gray-300 p-2">
              <p className="text-red-500 text-center text-lg font-medium">
                ĐẶC ĐIỂM NỔI BẬT
              </p>
              <ul className="list-disc ml-10">
                <li>
                  Hiệu năng vượt trội - Chip Apple A15 Bionic mạnh mẽ, hỗ trợ
                  mạng 5G tốc độ cao
                </li>
                <li>
                  Không gian hiển thị sống động - Màn hình 6.7" Super Retina XDR
                  độ sáng cao, sắc nét
                </li>
                <li>
                  Trải nghiệm điện ảnh đỉnh cao - Cụm 3 camera 12MP, hỗ trợ ổn
                  định hình ảnh quang học
                </li>
              </ul>
            </div>
            <p className="pt-2 mb-2">
              iPhone 13 Pro Max 256GB được đánh giá là một trong những dòng
              iPhone có khả năng chụp ảnh siêu ấn tượng cùng với camera góc siêu
              rộng mang đến khả năng chụp ảnh thiếu sáng một cách đặc biệt.
              Không những thế, mà dòng iPhone này còn được đánh giá là có dung
              lượng bộ nhớ tốt, đáp ứng được đầy đủ các công việc hằng ngày Xem
              thêm thông tin iPhone 13 Pro Max 512GB thiết kế đẳng cấp, mang lại
              trải nghiệm vượt trội cho người dùng
            </p>
          </div>
        </Col>
        <Col span={24} lg={12} xl={8} className="pt-4 lg:pt-0">
          <div className="rounded-md border p-2">
            <p className="text-lg font-medium">Thông số kỹ thuật</p>
            <Row gutter={16}>
              <Col span={6}>
                <p>Kích thước màn hình</p>
              </Col>
              <Col span={18}>
                <p>6.7 inches</p>
              </Col>
              <Col span={6}>
                <p>Công nghệ màn hình</p>
              </Col>
              <Col span={18}>
                <p>OLED</p>
              </Col>
              <Col span={6}>
                <p>Camera sau</p>
              </Col>
              <Col span={18}>
                <p>
                  Camera góc rộng: 12MP, ƒ/1.5 Camera góc siêu rộng: 12MP, ƒ/1.8
                  Camera tele : 12MP, /2.8
                </p>
              </Col>
              <Col span={6}>
                <p>Camera trước </p>
              </Col>
              <Col span={18}>
                <p>12MP, ƒ/2.2</p>
              </Col>
              <Col span={6}>
                <p>Chipset</p>
              </Col>
              <Col span={18}>
                <p>Apple A15</p>
              </Col>
              <Col span={6}>
                <p>Dung lượng RAM</p>
              </Col>
              <Col span={18}>
                <p>6 GB</p>
              </Col>
              <Col span={6}>
                <p>Bộ nhớ trong</p>
              </Col>
              <Col span={18}>
                <p>256 GB</p>
              </Col>
              <Col span={6}>
                <p>Pin</p>
              </Col>
              <Col span={18}>
                <p>4,325mAh</p>
              </Col>
              <Col span={6}>
                <p>Thẻ SIM</p>
              </Col>
              <Col span={18}>
                <p>2 SIM (nano‑SIM và eSIM)</p>
              </Col>
              <Col span={6}>
                <p>Hệ điều hành</p>
              </Col>
              <Col span={18}>
                <p>iOS15</p>
              </Col>
              <Col span={6}>
                <p>Độ phân giải màn hình</p>
              </Col>
              <Col span={18}>
                <p>2778 x 1284 pixel</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
