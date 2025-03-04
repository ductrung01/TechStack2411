import React from 'react';
import './App.css'; // Nhập file CSS nếu cần

const Menu = () => {
  return (
    <>
      <header className="p-3 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* Logo */}
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>

            {/* Navigation Links */}
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 text-dark fw-bold">Trang chủ</a></li>
              <li><a href="#" className="nav-link px-2 text-dark fw-bold">Thực đơn</a></li>
              <li><a href="#" className="nav-link px-2 text-dark fw-bold">Về chúng tôi</a></li>
              <li><a href="#" className="nav-link px-2 text-dark fw-bold">Tin tức</a></li>
              <li><a href="#" className="nav-link px-2 text-dark fw-bold">Đặt tiệc ngay</a></li>
            </ul>

            {/* Search Form */}
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Tìm kiếm món ăn" aria-label="Search" />
            </form>

            {/* Login and Sign-up Buttons */}
            <div className="text-end">
              <button type="button" className="btn btn-outline-dark me-2">Tài khoản </button>
              <button type="button" className="btn btn-warning">Giỏ hàng</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
