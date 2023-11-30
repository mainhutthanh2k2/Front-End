import React from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import style from "./style_header.scss";
const Styles = classNames.bind(style);
function Header() {
  const get_localStorage = JSON.parse(localStorage.getItem("searchs")); // lay du lieu tu localStorage ra
  const [search, set_count] = React.useState("");
  const [searchs, set_counts] = React.useState(get_localStorage);
  const handlesubmit = () => {
    set_counts((e) => {
      const new_search = [...e, search];
      const string = JSON.stringify(new_search);
      localStorage.setItem("searchs", string); // them vao localStorage de luu ket qua tim kiem
      return new_search;
    });
    set_count("");
  };
  return (
    <header className={Styles("header_web_fpt")}>
      <div className={Styles("header_web_fpt_one")}>
        <div className={Styles("flex_header")}>
          <div className={Styles("logo_fpt")}></div>
          <span className={Styles("span_shop")}>
            Shop<span className={Styles("span_comvn")}>.com.vn</span>
          </span>
          <Tippy
            visible={search.length > 0}
            interactive
            render={(attrs) => (
              <div className={Styles("result_search")} tapIndex="-1" {...attrs}>
                <div className={Styles("result")}>
                  <span className={Styles("span_result")}>
                    Kết quả tìm kiếm
                  </span>
                </div>
                <ul className={Styles("ul_search")}>
                  {searchs.map((result, index) => (
                    <li key={index}> {result}</li>
                  ))}
                </ul>
              </div>
            )}
          >
            <form action className={Styles("form_search")}>
              <input
                className={Styles("search")}
                type={Text}
                placeholder="Nhập tên điện thoại, máy tính phụ kiện... cần tìm"
                autoComplete="off"
                // required
                value={search}
                onChange={(e) => set_count(e.target.value)}
              />

              <button className={Styles("button")} onClick={handlesubmit}>
                <i class="fas fa-search"></i>
              </button>
            </form>
          </Tippy>
          <ul className={Styles("ul_header")}>
            <li className={Styles("infor")}>
              <a href="">
                <i class="fas fa-file-alt icon  "></i>

                <p>Thông tin hay</p>
              </a>
              <div className={Styles("box_infor")}>
                <ul className={Styles("ul_boxinfor")}>
                  <li>
                    <a href=""> Tin mới</a>
                  </li>
                  <li>
                    <a href=""> Khuyến mãi</a>
                  </li>
                  <li>
                    <a href=""> Điện máy - Gia Dụng</a>
                  </li>
                  <li>
                    <a href=""> Thủ Thuật</a>
                  </li>
                  <li>
                    <a href=""> For Gamers</a>
                  </li>
                  <li>
                    <a href="">Video hot</a>
                  </li>
                  <li>
                    <a href="">Đánh giá - Tư vấn</a>
                  </li>
                  <li>
                    <a href="">App - Game</a>
                  </li>
                  <li>
                    <a href="">Sự Kiện</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">
                <i class="fas fa-file-invoice-dollar icon"></i>

                <p>Thanh toán & tiện ích</p>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fas fa-user-circle icon"></i>
                <p> Tài khoản của tôi</p>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fas fa-cart-arrow-down icon"></i>
                <p>Giỏ hàng</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
