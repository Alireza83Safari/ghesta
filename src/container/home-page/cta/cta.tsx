import Link from "next/link";
import "./cta.scss";

const Cta = () => {
  return (
    <section className="cta">
      <div className="cta-image">
        <img src="/images/cta_man.svg" alt="cta_man" />
      </div>
      <div className="cta-text">
        <h2 className="cta-title">همین حالا سفارشتون رو ثبت کنید</h2>
        <p className="cta-description">
          در هر مرحله از سفارش، با تماس با پشتیبانی قسطا، سوال یا مشکل خودتون رو
          بپرسید و از راهنمایی همکاران ما استفاده کنید
        </p>
        <div className="cta-buttons">
          <div className="register-loan-btn">
            <div className="btn">
              <Link href="/" className="btn-link">
                دریافت وام قسطا
                <span></span>
              </Link>
            </div>
          </div>
          <div className="calculate-loan-btn">
            <div className="btn">
              <Link href="/" className="btn-link">
                سوالات متداول
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
