import React from 'react';
import img from './img/img.jpg'; // Đảm bảo rằng đường dẫn đến ảnh là chính xác

const Banner = () => {
  return (
    <div>
      <img src={img} alt="Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Banner;
