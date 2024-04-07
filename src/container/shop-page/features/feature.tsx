import "./feature.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="features-title">
        <p>چرا؟</p>
        <h1 className="title">ویژگی های قسطا کارت</h1>
      </div>

      <div className="features-items-container">
        <div className="features-item">
          <div>
            <img src="/images/shop/c1.svg" alt="shop" />
            <h2 className="features-item-title">توسعه فروش</h2>
          </div>
          <p className="features-item-descition">
            با استفاده از خدمات قسطا میتونید، امکان فروش اقساطی رو در اختیار
            مشتر­هاتون قرار بدید و مشتری های بالقوه خودتون رو به مشتری بالفعل
            تبدیل کنید
          </p>
        </div>

        <div className="features-item">
          <div>
            <img src="/images/shop/c2.svg" alt="shop" />
            <h2 className="features-item-title">بدون نیاز به پیاده سازی فنی</h2>
          </div>

          <p className="features-item-descition">
            برای استفاده از خدمات قسطا، نیاز به هیچ پیاده سازی فنی و تعریف درگاه
            پرداخت جدید ندارید چون قسطاکارت عضو شتابه و از تمام درگاه پرداخت­های
            آنلاین امکان خرید داره.
          </p>
        </div>

        <div className="features-item">
          <div>
            <img src="/images/shop/c3.svg" alt="shop" />
            <h2 className="features-item-title">تسویه حساب آنی+هدیه نقدی</h2>
          </div>
          <p className="features-item-descition">
            قسطاکارت عضو شتابه و شما هیچ وقت درگیر تسویه حساب با قسطا نمیشید.
            بعد از خرید، همون لحظه پول به حساب شما واریز میشه. مشتری هم تا سقف
            200 هزار تومن هدیه نقدی دریافت میکنه.
          </p>
        </div>

        <div className="features-item">
          <div>
            <img src="/images/shop/c2.svg" alt="shop" />
            <h2 className="features-item-title">بدون کارمزد</h2>
          </div>
          <p className="features-item-descition">
            قسطا هیچ کارمزدی از فروشگاه­های طرف قراردادش کسر نمیکنه.
          </p>
        </div>

        <div className="features-item">
          <div>
            <img src="/images/shop/c2.svg" alt="shop" />
            <h2 className="features-item-title">تامین مالی نامحدود</h2>
          </div>
          <p className="features-item-descition">
            بدلیل همکاری که با بانک آینده داریم، هیچ وقت با محدودیت تامین مالی
            مواجه نمیشیم و فروشگاه­ها با خیال راحت میتونن هر تعداد مشتری رو به
            ما معرفی کنند.
          </p>
        </div>

        <div className="features-item">
          <div>
            <img src="/images/shop/c2.svg" alt="shop" />
            <h2 className="features-item-title">پوشش ریسک نکول</h2>
          </div>
          <p className="features-item-descition">
            با وام قسطا، مشتری از شما به صورت نقدی خرید میکنه و اقساط رو به قسطا
            بازپرداخت میکنه. پس فروشگاه ریسک بازپرداخت اقساط رو متحمل نمیشه.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
