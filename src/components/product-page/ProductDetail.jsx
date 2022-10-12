import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductItem from "../product-page/ProductItem";
import ReactLoading from 'react-loading';

import axios from 'axios';

const productURL = `${process.env.REACT_APP_API}/product`;
const productListURL = `${process.env.REACT_APP_API}/products`;

export default function ProductDetail() {

    const [products, setProducts] = useState({
        isLoading: true,
        data: []
    })

    const formatCurrency = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    const { id } = useParams();
    const [productState, setProductState] = useState("")
    const [productImages, setProductImages] = useState("")

    const getProductById = async (id) => {
        try {
            const res = await axios.get(`${productURL}/${id}`)
            setProductState(res?.data?.data[0])
        } catch (error) {

        }
    }


    const convertImages = (images) => {
        const tempImages = [];
        images.map((item) => {
            tempImages.push({
                original: item,
                thumbnail: item
            })
            return tempImages
        })
        setProductImages(tempImages)
    }

    const getProducts = async () => {
        try {

            const res = await axios.get(`${productListURL}?limit=6&page=1`)
            setProducts({
                isLoading: false,
                data: products?.data?.concat(res?.data?.data)
            })

        } catch (error) {

        }
    }

    useEffect(() => {
        if (productState.images) {
            convertImages(productState.images)
        }
    }, [productState.images])


    useEffect(() => {
        getProducts()
    }, [])


    useEffect(() => {
        if (id) {
            getProductById(id)
        }
    }, [id])


    return (
        <Row>
            <Col span={10}>
                <div className='leftSide'>
                    {productImages && productImages.length > 0 &&
                        <ImageGallery items={productImages} showFullscreenButton={false} showPlayButton={false} showNav={false} />
                    }
                </div>
            </Col>
            <Col span={14}>
                <div className='rightSide'>
                    <h1 className='title'>
                        {productState.name}
                    </h1>
                    <Row>
                        <Col span={15}>
                            <div className="body-info">
                                <div className="rating">
                                    <div className="star">
                                        <img src="../assets/img/start.svg" alt="start" />
                                        <img src="../assets/img/start.svg" alt="start" />
                                        <img src="../assets/img/start.svg" alt="start" />
                                        <img src="../assets/img/start.svg" alt="start" />
                                        <img src="../assets/img/start.svg" alt="start" />
                                    </div>
                                </div>
                                <div className="sell">
                                    <div className="hr" />
                                    <div className="quantity-sold">Đã bán 1000+</div>
                                </div>

                            </div>
                            <div className="product-price">
                                <div className="product-price__current-price">{formatCurrency(productState.price)}</div>
                            </div>
                            <div className="quantity">
                                <p>Số Lượng</p>
                                <div className="group-input">
                                    <button className="disable">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon" width="20" height="20" />
                                    </button>
                                    <input type="text" value="1" className="input" />
                                    <button>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon" width="20" height="20" />
                                    </button>
                                </div>
                            </div>
                            <div className="group-button">
                                <button className='btn btn-add-to-cart'>Chọn mua</button>
                            </div>
                        </Col>
                        <Col span={9}>
                            <div className="currentSeller">
                                <div className="sellerWidget">
                                    <div className="seller-info">
                                        <a className="overview">
                                            <picture className='webpimg-container'>
                                                <img src="https://vcdn.tikicdn.com/cache/w100/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png.webp" alt="" width={44} className="logo" />
                                            </picture>
                                            <div className="overview-right">
                                                <div className="seller-name">
                                                    <span>Tiki Trading</span>
                                                    <picture className='webpimg-container'>
                                                        <img src="https://salt.tikicdn.com/cache/w100/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png.webp" alt="" width={68} height={14} />
                                                    </picture>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="seller-detail">
                                        <div className="item review">
                                            <div className="title">
                                                <span>4.7 / 5</span>
                                                <img src="../assets/img/start.svg" alt="" />
                                            </div>
                                            <div className="sub-title">
                                                5tr+
                                            </div>
                                        </div>
                                        <div className="border-left" />

                                        <div className="item normal">
                                            <div className="title">
                                                <span>440k+</span>
                                            </div>
                                            <div className="sub-title">
                                                Theo dõi
                                            </div>
                                        </div>
                                    </div>
                                    <div className="seller-action">
                                        <a href="#" className='action'>
                                            <img src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" alt="" />
                                            <span>Xem Shop</span>
                                        </a>
                                        <div className='action follow'>
                                            <img src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" alt="" />
                                            <span>Theo Dõi</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="warrantyDetails">
                                    <div className="warranty-item">
                                        <span className="itemLeft">Thời gian bảo hành</span>
                                        <span className='itemRight'>12 Tháng</span>
                                    </div>
                                    <div className="warranty-item">
                                        <span className="itemLeft">Hình thức bảo hành</span>
                                        <span className='itemRight'>Điện tử</span>
                                    </div>
                                    <div className="warranty-item">
                                        <span className="itemLeft">Nơi bảo hành</span>
                                        <span className='itemRight'>Bảo hành chính hãng</span>
                                    </div>
                                    <div className="warranty-item">
                                        <span className="itemLeft">Hướng dẫn bảo hành</span>
                                        <span className='itemRight'><a href="https://hotro.tiki.vn/s/article/chinh-sach-bao-hanh-tai-tiki-nhu-the-nao">Xem chi tiết</a></span>
                                    </div>
                                </div>
                                <div className="customerBenefits">
                                    <div className="benefit-item">
                                        <img src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" alt="" width={32} height={32} />
                                        <span>
                                            Hoàn Tiền
                                            <br />
                                            <b>111%</b>
                                            <br />
                                            nếu hàng giả
                                        </span>
                                    </div>
                                    <div className="benefit-item">
                                        <img src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" alt="" width={32} height={32} />
                                        <span>
                                            Mở hộp
                                            <br />
                                            kiểm tra
                                            <br />
                                            nhận hàng
                                        </span>
                                    </div>
                                    <div className="benefit-item">
                                        <img src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" alt="" width={32} height={32} />
                                        <span>
                                            Đổi trả trong
                                            <br />
                                            <b>7 ngày</b>
                                            <br />
                                            nếu sp lỗi
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                </div>
            </Col>

            <Col span={24}>
                <div className="productSlide">
                    <h2 className="blockTitle">
                        Sản Phẩm Tương Tự
                    </h2>

                    <div className="home">
                        <div className="content">
                            {products?.data && products?.data.length > 0 ? products?.data?.map((item, index) => {
                                return (
                                    <ProductItem data={item} key={index} />
                                )
                            }) : products?.isLoading ?
                                <div className="loading">
                                    <ReactLoading
                                        type="spin"
                                        color="#00000091"
                                        width={30}
                                        height={30}
                                    />
                                </div> : <div>Không có dữ liệu</div>}
                        </div>
                    </div>
                </div>

            </Col>
            <Col span={24}>
                <div className="group">
                    <h2>Thông tin chi tiết</h2>
                    <div className="content">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Thương hiệu</td>
                                    <td>Neemvin</td>
                                </tr>
                                <tr>
                                    <td>Xuất xứ thương hiệu</td>
                                    <td>Việt Nam</td>
                                </tr>
                                <tr>
                                    <td>Kích thước</td>
                                    <td>
                                        <p>Hộp đựng chai 7cm x 7cm x 17cm</p>
                                        <p>&nbsp;</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="group">
                    <div>
                        <h2>Mô Tả Sản Phẩm</h2>
                    </div>
                    <div style={{ padding: "20px 0px" }}>{productState.description}</div>
                </div>
            </Col>
        </Row>
    )
}