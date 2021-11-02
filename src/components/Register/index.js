import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { useHistory } from "react-router";

const { Item } = Form;
export default function Register() {
  const [form] = Form.useForm();
  const history = useHistory();

  return (
    <div className="flex justify-center items-center ">
      <div className="border rounded-md p-5 w-full md:w-3/5 lg:w-2/5 xl:w-1/5">
        <Form form={form} layout="vertical">
          <Item name="username" label="Số điện thoại">
            <Input />
          </Item>
          <Item name="password" label="Mật khẩu">
            <Input />
          </Item>
          <Item name="password" label="Nhập lại mật khẩu">
            <Input />
          </Item>
          <p
            className="italic cursor-pointer text-blue-400 flex justify-end"
            onClick={() => history.push("/login")}
          >
            Bạn đã có tài khoản ?
          </p>
          <Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
}
