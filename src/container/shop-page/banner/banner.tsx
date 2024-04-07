"use client";

import Link from "next/link";
import Image from "next/image";
import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-image-container">
        <Image
          src="/images/shop/man.png"
          alt="man image"
          className="banner-image"
          width={500}
          height={500}
        />
      </div>
      <div className="banner-content">
        <div className="banner-content-header">
          <p className="banner-content-subtitle">چند برابر ولی بی‌ دردسر</p>
          <h1 className="banner-content-title">لذت فروش اقساطی؛ با قسطا</h1>
        </div>
        <p className="banner-content-decription">
          وام قسطا در قالب یک کارت اعتباری عضو شتاب (قسطاکارت) در اختیار شما
          قرار میگیره. شما با این کارت میتونید از هر فروشگاه حضوری یا آنلاین
          خرید کنید اما اگر تخفیف رو دوست دارید میتونید از فروشگاه‌های طرف
          قراردادِ قسطا خرید کنید و تا مبلغ <span> 200 هزار تومن</span> هدیه
          نقدی دریافت کنید. در حال حاضر، قسطا با بیش از 2000
          <span> فروشگاه</span> حضوری و چندین فروشگاه آنلاین همکاری میکنه که هر
          روز به تعدادشون اضافه میشه.
        </p>
        <div className="btn">
          <Link href="/" className="btn-link">
            <span>فروشگاه خود را ثبت کنید!</span>
          </Link>
        </div>
      </div>

      <div className="border-b"></div>
    </section>
  );
};

export default Banner;
