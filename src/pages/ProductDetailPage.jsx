import React from 'react'
import HeaderComponent from '../components/Header';
import ProductDetail from '../components/product-page/ProductDetail';
import FooterComponent from "../components/Footer"

export default function ProductDetailPage() {
    return (
        <div style={{ background: 'rgb(245, 245, 250)' }}>
            <HeaderComponent />
            <div className="container" style={{ background: "#fff", marginBottom: 20 }}>
                <ProductDetail />
            </div>

            {/* Phần Footer */}
            <FooterComponent />
        </div>
    )
}