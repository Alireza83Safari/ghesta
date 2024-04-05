import Image from "next/image";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-item">
          <Image
            src="/images/Logo_Unlimite.svg"
            alt="sevices image"
            className="services-image"
            width={88}
            height={64}
          />
          <h2 className="services-text">
            بدون محدودیت <br />
            <span>در خرید</span>
          </h2>
        </div>
        <div className="services-item">
          <Image
            src="/images/Logo_Customize.svg"
            alt="sevices image"
            className="services-image"
            width={88}
            height={64}
          />
          <h2 className="services-text">
            دریافت وام حتی <br />
            <span> بدون دسته چک</span>
          </h2>
        </div>
        <div className="services-item">
          <Image
            src="/images/Logo_Earth.svg"
            alt="sevices image"
            className="services-image"
            width={88}
            height={64}
          />
          <h2 className="services-text">
            بدون نیاز به <br />
            <span> مراجعه حضوری</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
