import Image from "next/image";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-right">
          <div className="bg-image"></div>
          <Image
            src="/images/Right_Hand_Card.png"
            width={470}
            height={570}
            alt="hand"
            className="hero-right-image"
          />
          <Image
            src="/images/Right_Hand_Card2.png"
            width={470}
            height={570}
            alt="hand"
            className="hero-right-image-mobile"
          />
        </div>

        <div className="hero-left">
          <div className="hero-left__container">
            <div className="hero-text-container">
              <h1 className="hero-title">وام قسطا</h1>
              <small className="hero-subtitle">خرید اقساطی با قسطا کارت</small>
            </div>
            <p className="hero-description">
              وام قسطا در قالب یک کارت اعتباری عضو شتاب به نام قسطا کارت در
              اختیار شما قرار داده میشه. با این کارت میتونید از هر فروشگاه
              اینترنتی و غیر اینترنتی در سراسر کشور خرید کنید و هزینه‌اش رو
              بعداً بصورت اقساطی بپردازید.
            </p>

            <div className="hero-buttons-container">
              <div className="hero-button-1">
                <Image
                  width={73}
                  height={73}
                  alt="wallet"
                  src="/images/registerButton.svg"
                  className="btn-1-image"
                />
                <p>ثبت نام وام قسطا</p>
              </div>
              <div className="hero-button-2">محاسبه‌گر اقساط</div>
            </div>
          </div>

          <div className="intro">
            <div className="intro-img"></div>
            <div className="intro-text">
              <h2 className="intro-title">معرفی وام قسطا</h2>
              <h2 className="intro-subtitle">
                <span>ویدیو</span> معرفی{" "}
                <span className="hidden">ویژگی‌های</span> قسطا کارت.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
