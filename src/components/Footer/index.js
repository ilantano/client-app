import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import iconFaceBook from "../../assets/images/facebook.svg";
import iconInstagram from "../..//assets/images/instagram.svg";
import iconTwitter from "../../assets/images/twitter.svg";
import iconYoutube from "../../assets/images/youtube.svg";
import Logo from "../../assets/images/logo.svg";
// import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className="">
        <div className="">
          <Row gutters={10} className="row">
            <Col span={6} className="col" data-aos="fade-right">
              <img src={Logo} alt="logo-footer" className="w-16" />
            </Col>
            <Col span={6} className="col footer__item" data-aos="fade-up">
              <p>Thông tin</p>
              <p>
                <Link to="#">Giới Thiệu</Link>
              </p>
              <p>
                <Link to="#">Khuyến mãi</Link>
              </p>
              <p>
                <Link to="#">Tuyển dụng</Link>
              </p>
              <p>
                <Link to="#">Tin tức</Link>
              </p>
            </Col>
            <Col span={6} className="col" data-aos="fade-up">
              <p>Hỗ Trợ</p>
              <p>
                <Link to="#">Điều Khoản sử dụng</Link>
              </p>
              <p>
                <Link to="#">Chính sách bảo mật</Link>
              </p>
              <p>
                <Link to="#">Chính sách giao hàng</Link>
              </p>
              <p>
                <Link to="#">Liên hệ</Link>
              </p>
            </Col>
            <Col span={6} data-aos="fade-left" className="flex items-center">
              <p className="mr-2">Theo dõi chúng tôi</p>
              <Link to="https://www.facebook.com/">
                <img src={iconFaceBook} alt="icon-fa" className="w-10" />
              </Link>
              <Link to="https://www.instagram.com/">
                <img src={iconInstagram} alt="icon-insta" className="w-10" />
              </Link>
              <Link to="https://twitter.com/">
                <img src={iconTwitter} alt="img-twitter" className="w-10" />
              </Link>
              <Link to="https://www.youtube.com/">
                <img src={iconYoutube} alt="img-youtube" className="w-10" />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div className="copyright text-right">
        <p>&#169; 2021 E-Commerce Website All Rights Reserved Site by HieuNT</p>
      </div>
    </div>
  );
};
export default Footer;
