import Link from "next/link";
import "./ctaBanner.scss";

const CtaBanner = () => {
  return (
    <section className="cta">
      <div className="cta-image">
        <img src="/images/shop/physicShop.svg" alt="physicShop image" />
      </div>

      <div className="cta-content">
        <h2>شروع همکاری با قسطا</h2>
        <p>
          همین الان با ثبت رایگان و سریع فروشگاه خود در شبکه گسترده فروشگاه‌های
          همکاری قسطا، علاوه بر افزایش چشمگیر میزان فروش، از امکاناتی مثل تسویه
          آنی، تامین مالی نامحدود، هدیه نقدی به مشتریان و ... لذت ببرید.
        </p>

        <div className="btn">
          <Link href="/" className="btn-link">
            <img src="/images/shop/physic.svg" alt="physic" />
            <span>ثبت فروشگاه در قسطا</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
