import React, { useEffect, useState } from "react";
import axios from 'axios'
import ProductItem from "./product-page/ProductItem";
import ReactLoading from 'react-loading';

const productURL = `${process.env.REACT_APP_API}/products`;

const Main = () => {
  const [products, setProducts] = useState({
    isLoading: true,
    data: []
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12
  })

  const getProducts = async () => {
    try {

      const res = await axios.get(`${productURL}?limit=${pagination.limit}&page=${pagination.page}`)
      setProducts({
        isLoading: false,
        data: products?.data?.concat(res?.data?.data)
      })
    } catch (error) {

    }
  }

  const handleLoadMore = (currentPage) => {
    setPagination({
      ...pagination,
      page: currentPage + 1
    })

  }

  useEffect(() => {
    getProducts()
  }, [pagination])



  return (
    <div>
      <main>
        <div className="container-main">
          <div className="main">
            <div className="header-main">
              <h2 className="title">Gợi ý hôm nay</h2>
              <div className="menu">
                {/* item */}
                <div className="menu-item active">
                  <img src="assets/img/user.webp" />
                  <div className="tab-text">Dành cho bạn</div>
                </div>
                <div className="menu-item">
                  <img src="assets/img/inprise.webp" />
                  <div className="tab-text">Mua 1 tặng 1</div>
                </div>
                <div className="menu-item">
                  <img src="assets/img/book-club.webp" />
                  <div className="tab-text">Giảm Đến 50%</div>
                </div>
                <div className="menu-item">
                  <img src="assets/img/ngon.webp" />
                  <div className="tab-text">Đi Chợ Siêu Sale</div>
                </div>
                <div className="menu-item">
                  <img src="assets/img/fire.webp" />
                  <div className="tab-text">Deal Siêu Hot</div>
                </div>
                <div className="menu-item">
                  <img src="assets/img/mui-ten.webp" />
                  <div className="tab-text">Rẻ vô đối</div>
                </div>
                <div className="menu-item">
                  <img src="assets/img/shop.webp" />
                  <div className="tab-text">Hàng mới</div>
                </div>
                {/* item */}
              </div>
            </div>
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
              <div className="loadMore">
                <button onClick={() => handleLoadMore(pagination.page)}>Xem thêm</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
