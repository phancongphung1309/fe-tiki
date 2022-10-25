import { React, useState } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeProductFromCart, resetProductOfCart } from "../store/actions/cart";
import HeaderComponent from '../components/Header';
import { Modal, Input, Space, message, Col, Row } from 'antd';
import axios from 'axios';
import md5 from 'md5';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const loginURL = `${process.env.REACT_APP_API}/login`

const formatCurrency = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const calculateTotal = (total, currentItem) =>
    parseFloat(total + currentItem.price * (currentItem.quantity || 1));

const CartDetail = (props) => {
    const userLocalStorage = JSON.parse(localStorage.getItem("userInfo"))
    const navigate = useNavigate();

    const products = props.products


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        <>
            <Row>
                <Col span={24}>
                    <div className="cartTitle">
                        <h4>Giỏ hàng</h4>
                    </div>
                    <div className="cartMain">
                        <div className="leftCartMain">
                            <div className="cartHeading">
                                <label htmlFor="">
                                    <span>Tất cả {products?.length > 0 ? `(${products.length}) sản phẩm` : ""} </span>
                                </label>
                                <span>Đơn giá</span>
                                <span>Số lượng</span>
                                <span>Thành tiền</span>
                            </div>
                            <div className="cartGroup">
                                <div className="cartIntended">
                                    <div className="cartNormalProduct">
                                        {products && products.length > 0 ?
                                            products.map((item, index) => {
                                                return (
                                                    <div className='row' key={item.id}>
                                                        <div div className='col-1'>
                                                            <div className="cartProductImage">
                                                                <Link to={`product-page/${item.id}`} className='productImg'>
                                                                    <img src={item.images[0]} alt={item.name} />
                                                                </Link>
                                                                <div className="cartProductContent">
                                                                    <Link to="" className='product__name'>
                                                                        {item.name}
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='col-2'>
                                                            <div className="product__real-prices">
                                                                {formatCurrency(item.price)}
                                                            </div>
                                                        </div>
                                                        <div className='col-3'>
                                                            <div className="product-qty">
                                                                <div className="cartQuantity">
                                                                    {item.quantity}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-4'>
                                                            <div className="product__final-prices">
                                                                {formatCurrency(item.price * item.quantity)}
                                                            </div>
                                                        </div>
                                                        <div className='col-5'>
                                                            <span className="product__delete" onClick={() => props.removeProduct(index)}>
                                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                            : <div style={{ textAlign: "center" }}>Không có sản phẩm</div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightCartMain">
                            <div className="cartAddress">
                                <div className="cardAddressHeader">
                                    <h3>Giao tới</h3>
                                </div>
                                <div className="customer_info">
                                    <p className='customer_info__name'>{userLocalStorage?.email}</p>
                                    <i />
                                    <p className='customer_info__phone'>{userLocalStorage?.phone}</p>
                                </div>
                                <div className="customer_address">
                                    {userLocalStorage?.address}
                                </div>
                            </div>
                            <div className="priceSummary">
                                <ul className="prices__items">
                                    <li className="prices__item">
                                        <div className="prices__text">Tạm tính</div>
                                        <div className="prices__value">{formatCurrency(products.reduce(calculateTotal, 0))}</div>
                                    </li>
                                    <li className="prices__item">
                                        <div className="prices__text">Giảm giá</div>
                                        <div className="prices__value">0đ</div>
                                    </li>
                                </ul>
                                <div className="prices__total">
                                    <span className="prices__text">Tổng tiền</span>
                                    <div className="prices__content">
                                        <div className="prices__value prices__value--empty">
                                            Vui lòng chọn sản phẩm
                                        </div>
                                        <span className="prices__value--noted">(Đã bao gồm VAT nếu có)</span>
                                    </div>
                                </div>
                            </div>
                            <button disabled={products?.length > 0 ? false : true} className='btnBuy' onClick={() => {
                                navigate('/order-success');
                                props.resetProduct()
                            }}>
                                Mua Hàng
                            </button>
                        </div>
                    </div>
                </Col>

            </Row>

        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: index => dispatch(removeProductFromCart(index)),
        resetProduct: () => dispatch(resetProductOfCart())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDetail);
