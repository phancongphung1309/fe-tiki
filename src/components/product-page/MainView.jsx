import { React, useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const productURL = `${process.env.REACT_APP_API}/products`;

const MainView = () => {

  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState({
    isLoading: true,
    data: []
  })

  const getProducts = async () => {
    try {

      const res = await axios.get(`${productURL}?filter={"category":"${searchParams.get("category")}","location":"${searchParams.get("location")}"}`)
      setProducts({
        isLoading: false,
        data: res?.data?.data
      })
    } catch (error) {

    }
  }

  useEffect(() => {
    getProducts()
  }, [searchParams.get("location"), searchParams.get("category")])


  return (

    <div className='mainViewContainer'>
      {/* Summary */}
      <div className='mainViewSummary'>

        <div className='summaryTitle'>
          <h1>  Điện Thoại - Máy Tính Bảng</h1>
        </div>

        <div className='summaryBanner'>
          <img src="assets/img/banner.webp" />
          <img src="assets/img/banner.webp" />
          <img src="assets/img/banner.webp" />
        </div>

        <div className='summaryActionBar'>

          <div className="summarySortBar">
            <a className="sortItem">Phổ biến</a>
            <a className="sortItem">Bán chạy</a>
            <a className="sortItem">Hàng Mới</a>
            <a className="sortItem">Giá thấp</a>
            <a className="sortItem">Giá cao</a>
          </div>
          <div className="summaryFilterBar">
            <span>
              <img src='https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png' />
            </span>
            <span>
              <img src='https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png' />
            </span>
          </div>

        </div>

      </div>

      {/* Product List */}
      <div className='mainViewProductList home'>
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
            </div> : <div style={{ textAlign: "center", width: "100%", margin: "20px 0px" }}>Không có dữ liệu</div>}
        </div>
      </div>

    </div>

  )
}

export default MainView