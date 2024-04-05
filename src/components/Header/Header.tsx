"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <header className="header">
      <div className="header-container">
        <Image
          src="/images/logo.svg"
          width={186}
          height={64}
          alt="logo"
          className="header-logo"
        />

        <div className="left-menu">
          {showMenu && (
            <ul className="header-menu">
              <li className="header-menu__item menu-hidden">
                <Link href="/" className="header-menu__link">
                  <span>سوالات متداول</span>
                </Link>
              </li>

              <li className="header-menu__item">
                <Link href="/" className="header-menu__link">
                  <span>همکاری با قسطا</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 1792 1792"
                    color="black"
                  >
                    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10L407 759q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
                  </svg>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/shop" className="submenu-link">
                      فروشگاه ها
                    </Link>
                  </li>
                  <li>
                    <Link href="/organ" className="submenu-link">
                      سازمان ها
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}

          <div className="btn">
            <Link href="/auth" className="btn-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="ms-2 user-svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M14.885 3.28A4.083 4.083 0 119.11 9.055a4.083 4.083 0 015.775-5.775z"
                  clipRule="evenodd"
                ></path>
                <path
                  stroke="#fff"
                  strokeWidth="1.75"
                  d="M14.885 3.28A4.083 4.083 0 119.11 9.055a4.083 4.083 0 015.775-5.775"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  stroke="#fff"
                  strokeWidth="1.75"
                  d="M2.664 19.584v1.166c0 .644.523 1.167 1.167 1.167h16.333c.644 0 1.167-.523 1.167-1.167v-1.166c0-3.53-4.61-5.824-9.334-5.824-4.722 0-9.333 2.293-9.333 5.824z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <span>ورود/ثبت نام</span>
            </Link>
          </div>

          <span className="menu-icon">
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="none"
                className="close"
                viewBox="0 0 32 33"
                onClick={() => setShowMenu(false)}
              >
                <path
                  stroke="#3D3D3D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22.67 23.669l-13.2-13.2M22.67 10.47L9.472 23.668"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                className="open"
                viewBox="0 0 48 48"
                onClick={() => setShowMenu(true)}
              >
                <path
                  stroke="#3D3D3D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 16h24M30.667 24H12M12 32h13.333"
                ></path>
              </svg>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
