import React from 'react'

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <footer>
        <div className="ThongTin">
          <div className="item HoTro">
            <h4>Hỗ trợ khách hàng</h4>
            <ul className="DanhSach">
              <li>
                Hotline: <b>1900-6035</b>
                <br />
                (1000 đ/phút, 8-21h kể cả T7, CN)
              </li>
              <li>Các câu hỏi thường gặp</li>
              <li>Gửi yêu cầu hỗ trợ</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức vận chuyển</li>
              <li>Chính sách đổi trả</li>
              <li>Hướng dẫn trả góp</li>
              <li>Chính sách hàng nhập khẩu</li>
              <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
              <li>Báo lỗi bảo mật: security@tiki.vn</li>
            </ul>
          </div>
          {/* Về Tiki*/}
          <div className="item VeTiki">
            {/* Hỗ trợ */}
            <div className="item HoTro">
              <h4>Về Tiki</h4>
              <ul className="DanhSach">
                <li>
                  Hotline: <b>1900-6035</b>
                  <br />
                  (1000 đ/phút, 8-21h kể cả T7, CN)
                </li>
                <li>Các câu hỏi thường gặp</li>
                <li>Gửi yêu cầu hỗ trợ</li>
                <li>Hướng dẫn đặt hàng</li>
                <li>Phương thức vận chuyển</li>
                <li>Chính sách đổi trả</li>
                <li>Hướng dẫn trả góp</li>
                <li>Chính sách hàng nhập khẩu</li>
                <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
                <li>Báo lỗi bảo mật: security@tiki.vn</li>
              </ul>
            </div>
          </div>
          {/* Hợp tác*/}
          <div className="item HopTac">
            <h4>Hợp tác và liên kết</h4>
            <ul className="DanhSach">
              <li>Quy chế hoạt động Sàn GDTMĐT</li>
              <li>Bán hàng cùng Tiki</li>
            </ul>
            <h4 className="sub-title">Chứng nhận bởi</h4>
            <div className="chungNhan">
              <img width={32} src="../img/bo-cong-thuong-2.png" />
              <img width={83} src="../img/bo-cong-thuong.svg" />
            </div>
          </div>
          {/* Thanh toán*/}
          <div className="item ThanhToan">
            <h4>Phương thức thanh toán</h4>
            <div className="PhuongThuc">
              <img src="../img/thanhtoan.png" />
            </div>
            <h4 className="sub-title">Dịch vụ giao hàng</h4>
            <div className="GiaoHang">
              <img src="../img/tikinow.png" />
            </div>
          </div>
          {/* Kết nối */}
          <div className="item KetNoi">
            <h4>Kết nối với chúng tôi</h4>
            <div className="MangXaHoi">
              <img width="32px" src="../img/fb.png" />
              <img width="32px" src="../img/youtube.png" />
              <img width="32px" src="../img/zalo.png" />
            </div>
            <h4 className="sub-title">Tải ứng dụng trên điện thoại</h4>
            <div className="MangXaHoi">
              <img width="80px" src="../img/qrcode.png" />
              <div className="TaiVe">
                <img src="../img/appstore.png" />
                <img src="../img/playstore.png" />
              </div>
            </div>
          </div>
        </div>
        <hr className="VachNgan" />
        <div className="DiaChi">
          <p>
            Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường
            12, quận 10, Thành phố Hồ Chí Minh
          </p>
          <p>
            Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và
            nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
          </p>
          <p>
            Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu
            tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ
            23 ngày 14/02/2022
          </p>
          <p>© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
        </div>
        {/* Thông tin */}
      </footer>
    </div>
  )
}

export default Footer