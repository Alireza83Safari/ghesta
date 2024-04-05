import Link from "next/link";
import "./Steps.scss";

const Steps = () => {
  return (
    <section className="steps">
      <div className="steps-description">
        <div>
          <h3>چگونه؟</h3>
          <h2 className="title">مراحل دریافت قسطاکارت</h2>
          <p>
            وام قسطا از طریق بانک آینده تأمین می‌شود. اگر می‌خواهید با روند
            دریافت وام قسطا به‌طور کامل آشنا شوید، یک راهنمای کامل برای شما
            آماده کرده‌ایم.
          </p>

          <div>
            <div className="btn">
              <Link href="/help" className="btn-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  className="ms-2"
                  viewBox="0 0 28 28"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M9.233 5.35a2.333 2.333 0 11-3.3 3.3 2.333 2.333 0 013.3-3.3z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    stroke="#3D3D3D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M9.233 5.35a2.333 2.333 0 11-3.3 3.3 2.333 2.333 0 013.3-3.3M14.273 21h-4.208C8.372 21 7 19.433 7 17.501v-.003c0-1.932 1.372-3.5 3.065-3.5h7.869c1.693 0 3.065-1.566 3.065-3.498v0C21 8.565 19.626 6.998 17.932 7l-4.807.006"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="#3D3D3D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M19.062 23.548l3.37-1.994a.644.644 0 000-1.108l-3.37-1.994a.65.65 0 00-.98.559v3.978a.65.65 0 00.98.56z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                روند تسهیلات
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="steps-image-container">
        <img src="/images/Steps.svg" className="steps-image" />
      </div>
    </section>
  );
};

export default Steps;
