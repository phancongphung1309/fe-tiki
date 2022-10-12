import React from "react";

const mock_data = [
  {
    item: Item_One(),
  },
  {
    item: Item_Two(),
  },
  {
    item: Item_One(),
  },
  {
    item: Item_Two(),
  },
  {
    item: Item_One(),
  },
  {
    item: Item_Two(),
  },
  {
    item: Item_One(),
  },
  {
    item: Item_Two(),
  },
  {
    item: Item_One(),
  },
  {
    item: Item_Two(),
  },
  {
    item: Item_One(),
  },
  {
    item: Item_Two(),
  },
];

function Item() {
  return <>{mock_data.map((sanpham) => sanpham.item)}</>;
}
function Item_One() {
  return (
    <div className="item">
      <a href="#">
        <span>
          <div>
            <div className="thumbnail">
              <div>
                <img src="assets/img/truyen.jpg.webp" alt="product" />
              </div>
              <img className="img-child" src="assets/img/free.png" alt="free" />
            </div>
            <div className="info">
              <div className="name">
                <h3>Monster #8 - Tập 2</h3>
              </div>
              <div className="body-info">
                <div className="rating">
                  <div className="star">
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                  </div>
                </div>
                <div className="sell">
                  <div className="hr" />
                  <div className="quantity-sold">Đã bán 933</div>
                </div>
              </div>
              <div className="discount">58.000 ₫</div>
            </div>
          </div>
        </span>
      </a>
    </div>
  );
}
function Item_Two() {
  return (
    <div className="item">
      <a href="">
        <span>
          <div>
            <div className="thumbnail">
              <div>
                <img src="assets/img/sua-rua-mat.jpg.webp" alt="product" />
              </div>
              <img className="img-child" src="assets/img/free.png" alt="free" />
            </div>
            <div className="info">
              <div className="name">
                <h3>
                  Sữa rửa mặt se khít lỗ chân lông innisfree Super Volcanic Pore
                  Micellar Cleansing Foam 2X 150gr
                </h3>
              </div>
              <div className="body-info">
                <div className="rating">
                  <div className="star">
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                    <img src="assets/img/start.svg" alt="start" />
                  </div>
                </div>
                <div className="sell">
                  <div className="hr" />
                  <div className="quantity-sold">Đã bán 1000+</div>
                </div>
              </div>
              <div className="discount">
                <div className="price-discount">181.000 ₫</div>
                <div className="price-discount-tag">-30%</div>
              </div>
            </div>
          </div>
        </span>
      </a>
    </div>
  );
}

export default Item;
