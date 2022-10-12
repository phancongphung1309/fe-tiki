import React from 'react'
import HeaderComponent from '../components/Header';

import MainView from '../components/product-page/MainView';
import Sidebar from '../components/product-page/Sidebar';
import FooterComponent from '../components/Footer';

const ProductPage = () => {
  return (
    <div style={{ background: 'rgb(245, 245, 250)' }}>
      <HeaderComponent></HeaderComponent>
      <div className="productPageBody" style={{ marginBottom: 20 }}>
        <Sidebar />
        <MainView />
      </div>
      {/* Phần Footer */}
      <FooterComponent />
    </div>
  )
}

export default ProductPage