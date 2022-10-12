import React from "react";
import { Link } from "react-router-dom";
import CategoryBar from '../components/CategoryBar';

// mock data danh mục sản phẩm
const categories = [
  { url: "/trai-cay", title: "trái cây" },
  { url: "/thit-trung", title: "thịt trứng" },
  { url: "/rau-cu-qua", title: "rau củ quả" },
  { url: "/sua-bo-pho-mai", title: "sữa, bơ, phô mai" },
  { url: "/hai-san", title: "hải sản" },
  { url: "/gao-mi-an-lien", title: "gạo, mì ăn liền" },
  { url: "/do-uong-bia-ruou", title: "đồ uống, bia rượu" },
  { url: "/banh-keo", title: "bánh kẹo" },
]

const Header = ({ isOpen, isOpenProfile }) => {

  const userLocalStorage = JSON.parse(localStorage.getItem("userInfo"))

  return (
    <div>
      <header style={{ backgroundColor: "rgb(26, 148, 255)" }}>
        {/* Header - Phần trên */}
        <div className="container">
          <div className="header">
            {/* Phần Logo */}
            <div className="logo">
              <a href="/">
                <img
                  src="../img/tiki-logo.png"
                  alt="Tiki Logo"
                  width={60}
                  height={40}
                />
              </a>
            </div>
            {/* Phần tìm kiếm */}
            <div className="search">
              <div className="searchForm">
                <input
                  type="text"
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn"
                />
                <button>
                  <img
                    src="../img/search.png"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                  Tìm Kiếm
                </button>
              </div>
            </div>
            {/* Phần tài khoản và giỏ hàng */}
            <div className="cart">
              {/* Phần tài khoản */}
              <div className="profile">
                <img
                  src="../img/profile.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  onClick={userLocalStorage ? isOpenProfile : ""}
                />
                <div className="register">
                  <span onClick={isOpen}>{userLocalStorage?.email ? 'Tài khoản' : "Đăng Nhập/ Đăng Ký"}</span>
                  <span>{userLocalStorage?.email ? userLocalStorage?.email : "Tài khoản"}</span>
                </div>
              </div>
              {/* Phần giỏ hàng */}
              <div className="cartItem">
                <div className="cartWrapper">
                  <img src="../img/cart.png" alt="Cart" width={32} height={32} />
                  <span className="cartNumber">0</span>
                </div>
                <span>Giỏ Hàng </span>
              </div>
            </div>
          </div>
        </div>
        {/* Header - Phần dưới */}
        <div className="container">
          {/* Phần freeship logo */}
          <div className="quickMenu">
            <div className="freeshipLogo">
              <a href="#">
                <img
                  src="../img/free-ship-logo.png"
                  alt="Free Ship"
                  width={83}
                  height={12}
                />
              </a>
            </div>
            {/* Phần danh mục */}
            <div className="quickMenuContent">
              {
                categories.map(category => (
                  <Link to={category.url}>{category.title}</Link>
                ))
              }
            </div>
            {/* Phần bán hàng */}
            <div className="store">
              <div>
                <a href="#">
                  <img src="../img/shop.svg" alt="Shop" width={12} height={12} />
                  <span>Bán hàng cùng Tiki</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CategoryBar />
    </div>
  );
};

export default Header;
