"use client";
import { useState } from "react";
import Image from "next/image";
import "./form.scss";

const auth = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const registerHandler = () => {
    ////
  };
  return (
    <section className="auth">
      <div className="auth-container">
        <div className="auth-image-container">
          <Image
            src="/images/auth/auth.png"
            width={800}
            height={800}
            alt="auth image"
            className="auth-image"
          />

          <Image
            src="/images/auth/auth-mobile.png"
            width={277}
            height={161}
            alt="auth image"
            className="auth-image-mobile"
          />
        </div>

        <form action="" className="auth-form">
          <div className="form-item">
            <label htmlFor="" className="form-item-label">
              <img
                src="/images/auth/label-icon.svg"
                alt="label icon"
                className="label-icon"
              />
              شماره تلفن همراه
            </label>
            <input
              type="text"
              placeholder="شماره همراه"
              className="form-item-input"
              onChange={handleInputChange}
              value={registerInfo.username}
              name="username"
            />
            <img
              src="/images/auth/phone.svg"
              alt="phone"
              className="phone-icon"
            />
          </div>
          <div className="form-item">
            <label htmlFor="" className="form-item-label">
              <img
                src="/images/auth/label-icon.svg"
                alt="label icon"
                className="label-icon"
              />
              کد امنیتی کپچا
            </label>
            <input
              type="text"
              placeholder="کد امنیتی بالا را وارد کنید"
              className="form-item-input"
              onChange={handleInputChange}
              value={registerInfo.password}
              name="password"
            />
          </div>

          <div className="btn m-auto" onClick={registerHandler}>
            <div className="btn-link">
              <img src="/images/auth/login-btn.svg" />
              <span>تایید و ادامه</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default auth;
