import { React, useState, useEffect } from 'react'
import HeaderComponent from '../components/Header';
import ProductDetail from '../components/product-page/ProductDetail';
import FooterComponent from "../components/Footer"
import { Modal, Input, Space, message } from 'antd';
import axios from 'axios';
import md5 from 'md5';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const loginURL = `${process.env.REACT_APP_API}/login`

export default function ProductDetailPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userState, setUserState] = useState("")

    const showModal = () => {
        setIsModalVisible(true);
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
                handleUpdateUser()
            } else {
                message.error("Đăng nhập thất bại", 2.0)
            }
        } catch (error) {
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleUpdateUser = () => setUserState(JSON.parse(localStorage.getItem("userInfo")))


    useEffect(() => {
        setUserState(JSON.parse(localStorage.getItem("userInfo")))
    }, [])


    return (
        <div style={{ background: 'rgb(245, 245, 250)' }}>
            <HeaderComponent isOpen={showModal} />
            <div className="container" style={{ background: "#fff", marginBottom: 20 }}>
                <ProductDetail userState={userState} />
            </div>

            {/* Phần Footer */}
            <FooterComponent />

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
        </div>
    )
}