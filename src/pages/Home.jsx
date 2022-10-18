import { useState } from 'react';


import HeaderComponent from '../components/Header';
import BodyComponent from '../components/Body';
import FooterComponent from '../components/Footer';
import BannerComponent from '../components/Banner';

// Ant Design
import { Modal, Input, Space, message } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import md5 from 'md5';


const loginURL = `${process.env.REACT_APP_API}/login`
const getProfileUser = `${process.env.REACT_APP_API}/user`;

const Home = () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showProfile = async () => {
    try {
      const res = await axios.get(getProfileUser, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserData(res?.data?.data[0]);
    } catch (error) {
      message.error(error.error.message, 2.0);
    }

    setOpenProfile(true);
  };

  const handleOk = async () => {
    // login

    try {
      const body = {
        email: userName,
        password: md5(password)
      }
      const res = await axios.post(loginURL, body)
      if (res?.data?.data?.id) {
        message.success("Đăng nhập thành công", 2.0)
        localStorage.setItem("userInfo", JSON.stringify(res?.data?.data))
        localStorage.setItem("token", JSON.stringify(res?.data?.token));
        setIsModalVisible(false);
      } else {
        message.error("Đăng nhập thất bại", 2.0)
      }
    } catch (error) {
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div style={{ background: 'rgb(245, 245, 250)' }}>

      {/* Phần Header */}
      <HeaderComponent isOpenProfile={showProfile} isOpen={showModal} />
      <BannerComponent></BannerComponent>
      {/* Phần Main */}
      <BodyComponent></BodyComponent>
      {/* Phần Footer */}
      <FooterComponent></FooterComponent>

      <Modal okText="Đăng nhập" cancelText="Hủy" title="Đăng nhập" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        <Input onChange={(event) => setUsername(event.target.value)} placeholder="Tài khoản" prefix={<UserOutlined />} />

        <div style={{ margin: "25px 0" }}></div>

        <Space style={{ width: "100%" }} direction="vertical">
          <Input.Password
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mật khẩu"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Space>

      </Modal>
      <Modal
        cancelText="Hủy"
        title="Thông tin tài khoản"
        visible={openProfile}
        onOk={() => setOpenProfile(false)}
        onCancel={() => setOpenProfile(false)}
      >
        <div>
          <span>Id: {userData ? userData?.id : ""}</span>
        </div>
        <div style={{ margin: "10px 0" }}></div>

        <div>
          <span>Tài khoản: {userData ? userData?.email : ""}</span>
        </div>

        <div style={{ margin: "10px 0" }}></div>


        <div>
          <span>Điện thoại: {userData ? userData?.phone : ""}</span>
        </div>

        <div style={{ margin: "10px 0" }}></div>

        <div>
          <span>Địa chỉ: {userData ? userData?.address : ""}</span>
        </div>

        <div style={{ margin: "10px 0" }}></div>
        <div>
          <span>
            Ngày tạo:
            {userData
              ? " " + new Date(userData?.created_at).toDateString()
              : ""}
          </span>
        </div>
      </Modal>

    </div>

  );
}

export default Home;
