import React from 'react'

const Banner = () => {
  return (
    <div className="banner-container">

     {/* Phần Bên Trái */}
      <div className="banner-left">
        <img src="assets/img/banner.webp" alt="Main Banner" />
      </div>      

      {/* Phần Bên Phải */}
      <div className="banner-right">
        <img src="assets/img/sub-banner.webp" alt="Sub Banner"/>
      </div>

    </div>
  )
}

export default Banner