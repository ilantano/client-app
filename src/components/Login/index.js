import React, { useState } from "react";
import { Form, Button, Input } from "antd";

const { Item } = Form;
export default function Login() {
  const [form] = Form.useForm();
  const [isView, setIsView] = useState(0);
  const handleClickForgotPassword = () => {
    setIsView(1);
  };

  const handleClickLogin = () => {
    setIsView(0);
  };

  const renderComponent = () => {
    if (isView === 0) {
      return (
        <Item>
          <Item name="username" label="Số điện thoại">
            <Input />
          </Item>
          <Item name="password" label="Mật khẩu">
            <Input />
          </Item>
          <p
            className="italic cursor-pointer text-blue-400 flex justify-end"
            onClick={handleClickForgotPassword}
          >
            Quên mật khẩu?
          </p>
          <Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Item>
        </Item>
      );
    }
    if (isView === 1) {
      return (
        <Item>
          <Item name="username" label="Số điện thoại">
            <Input />
          </Item>
          <p
            className="italic cursor-pointer text-blue-400 flex justify-end"
            onClick={handleClickLogin}
          >
            Quay lại đăng nhập?
          </p>
          <Item>
            <Button type="primary" htmlType="submit">
              Đặt lại mật khẩu
            </Button>
          </Item>
        </Item>
      );
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="border rounded-md p-5 w-full md:w-3/5 lg:w-2/5 xl:w-1/5">
        <Form form={form} layout="vertical">
          {renderComponent()}
        </Form>
      </div>
    </div>
  );
}
