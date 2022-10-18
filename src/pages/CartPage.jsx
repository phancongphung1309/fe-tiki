import React from 'react';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import CartDetail from '../components/CartDetail';

const CartPage = () => {
    return (
        <div style={{ background: 'rgb(245, 245, 250)' }}>
            <HeaderComponent />
            <div className="productPageBody" style={{ marginBottom: 20 }}>
                <CartDetail />
            </div>
            {/* Phần Footer */}
            <FooterComponent />
        </div>
    )
}

export default CartPage