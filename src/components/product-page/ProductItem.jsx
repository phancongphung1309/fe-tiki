import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  const data = props?.data

  const formatCurrency = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <div className="item">
      <Link to={`/product-page/${props?.data.id}`}>
        <span>
          <div>
            <div className="thumbnail">
              <div>
                <img src={data?.images[0]} alt="product" />
              </div>
              <img className="img-child" src="../assets/img/free.png" alt="free" />
            </div>
            <div className="info">
              <div className="name">
                <h3>
                  {data?.name}
                </h3>
              </div>
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
              <div className="discount">
                <div className="price-discount">{formatCurrency(data?.price)}</div>
                <div className="price-discount-tag">-30%</div>
              </div>
            </div>
          </div>
        </span>

      </Link>
    </div>
  )
}

export default ProductItem