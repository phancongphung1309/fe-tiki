import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const locationData = [
  {
    name: "Hồ Chí Minh"
  },
  {
    name: "Hà Nội"
  },
  {
    name: "Ninh Bình"
  },
  {
    name: "Đà Nẵng"
  },
  {
    name: "Đồng Nai"
  }
]
const Sidebar = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [locationState, setLocationState] = useState();

  const handleSortLocation = (location) => setLocationState(location)

  useEffect(() => {
    if (locationState) {
      navigate({
        pathname: '/product-page',
        search: `?category=${searchParams.get("category")}&location=${locationState}`,
      });
    }
  }, [locationState])

  return (
    <div className="sidebarContainer">
      {/* Danh mục sản phẩm */}
      <div className="block">
        <h4>DANH MỤC SẢN PHẨM</h4>
        <div className='sidebarCategories'>
          <Link to="#">Thiết Bị Âm Thanh và Phụ Kiên</Link>
          <Link to="#">Thiết Bị Chơi Game và Phụ Kiện</Link>
          <Link to="#">Thiết Bị Đeo Thông Minh và Phụ Kiện</Link>
          <Link to="#">Thiết Bị Thông Minh và Linh Kiện Điện</Link>
          <Link to="#">Phụ Kiện Điện Thoại và Máy Tính Bản</Link>
          <Link to="#">Phụ Kiện Máy Tinh và Laptop</Link>
        </div>
      </div>
      {/* Nơi bán */}
      <div className="block" style={{ borderTop: '1px solid rgb(247, 247, 247)' }}>
        <h4>Nơi bán</h4>
        <div className='sidebarLocation'>
          {locationData && locationData.length > 0 && locationData.map((item) => {
            return (
              <label key={item.name}>
                <input type="checkbox" onChange={() => handleSortLocation(item.name)} />
                <div>{item.name}</div>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar