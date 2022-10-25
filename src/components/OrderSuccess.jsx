import { CheckCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { React, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
    }, [])

    return (
        <Row>
            <Col span={24}>
                <div className='orderSuccessPage'>

                    <div className='orderSuccessIcon'>
                        <CheckCircleOutlined />
                    </div>
                    <div className='orderSuccessContent'>
                        <h3>Cảm ơn bạn đã đặt hàng tại Tiki</h3>
                        <p>Đơn hàng của bạn đã được xử lý</p>
                        <button className='btn btn-go-to-shopping' onClick={() => navigate("/")}>Tiếp tục mua hàng</button>
                    </div>
                </div>

            </Col>
        </Row>


    )
}
