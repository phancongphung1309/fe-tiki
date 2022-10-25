import React from 'react';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import OrderSuccess from '../components/OrderSuccess';

const OrderSuccessPage = () => {
    return (
        <div style={{ background: 'rgb(245, 245, 250)' }}>
            <HeaderComponent />
            <div className="orderSuccessPageBody" style={{ marginBottom: 20 }}>
                <OrderSuccess />
            </div>
            {/* Phần Footer */}
            <FooterComponent />
        </div>
    )
}

export default OrderSuccessPage