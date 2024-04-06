import Link from "next/link";
import Image from "next/image";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-social">
            <div className="footer-social-item">
              <Image
                src="/images/social/telegram.svg"
                width={30}
                height={30}
                alt="telegram"
              />
            </div>
            <div className="footer-social-item">
              <Image
                src="/images/social/instagram.svg"
                width={30}
                height={30}
                alt="instagram"
              />
            </div>
            <div className="footer-social-item">
              <Image
                src="/images/social/linkdin.svg"
                width={30}
                height={30}
                alt="linkdin"
              />
            </div>
            <div className="footer-social-item">
              <Image
                src="/images/social/bale.svg"
                width={30}
                height={30}
                alt="bale"
              />
            </div>
            <div className="footer-social-item">
              <Image
                src="/images/social/eita.svg"
                width={30}
                height={30}
                alt="eita"
              />
            </div>
            <div className="footer-social-item">
              <Image
                src="/images/social/rubika.svg"
                width={30}
                height={30}
                alt="rubika"
              />
            </div>
            <div className="footer-social-item">
              <Image
                src="/images/social/aparat.svg"
                width={30}
                height={30}
                alt="aparat"
              />
            </div>
          </div>
          <div className="footer-top">
            <div className="footer-links">
              <Link className="footer-link" href="/estefta">
                شرعی بودن قسطا
              </Link>
              <Link className="footer-link" href="/shop">
                همکاری با فروشگاه‌ها
              </Link>
              <Link className="footer-link" href="/organ">
                همکاری با سازمان‌ها
              </Link>
            </div>
            <div className="foooter-achievement">
              <Image
                src="/images/enamad.png"
                alt="enamad"
                width={118}
                height={128}
              />
              <Image
                src="/images/enamad.png"
                alt="enamad"
                width={118}
                height={128}
              />
              <Image
                src="/images/enamad.png"
                alt="enamad"
                width={118}
                height={128}
              />
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-item">
              <Image src="/images/map.svg" alt="map" width={50} height={50} />
              <span>
                تهران، خیابان آزادی، خیابان حبیب اله، ایستگاه نوآوری شریف ، قسطا
              </span>
            </div>
            <div className="footer-bottom-item">
              <Image
                src="/images/phone.svg"
                alt="phone"
                width={50}
                height={50}
              />
              <span>شماره تلفن : 021 - 47 38 6000</span>
            </div>
            <div className="footer-bottom-item">
              <Image src="/images/post.svg" alt="post" width={50} height={50} />
              <span>کد پستی: 1455714181</span>
            </div>
          </div>
        </div>

        <div className="footer-text">
          <h2>کلیه حقوق برای شرکت پیشگامان اعتبارآفرین شریف محفوظ است</h2>

          <p className="mt-20">
            <b>قسطا</b> اولین <span>لندتک</span> اعطای اعتبار برای خريد اقساطی
            کالا و خدمات است که از تیرماه 1397 شروع به فعالیت کرد و در مدت
            کوتاهی با اسقبال و رضایت کاربران مواجه شد. قسطا با توجه به مشکلات
            اقتصادی جامعه، شرایطی را برای اعطای <span>وام بدون ضامن</span> مهیا
            کرده است که نسبت به سایر سایت‌های این حوزه محدودیت‌های کمتری دارد.{" "}
            <span>وام فوری</span> قسطا در قالب يک كارت اعتباری عضو شتاب، بنام
            <b>قسطاكارت</b> در اختیار کاربران قرار می­گیرد و افراد میتوانند با
            این کارت از تمام فروشگاه‌های سراسر کشور حتي فروشگاه‌های اينترنتی،
            بصورت نقدی خرید کنند و بعدا اقساط را به قسطا بازپرداخت کنند. توجه
            کنید که برای دریافت این وام نیازی به ضامن یا چک کارمندی ندارید.
          </p>

          <p className="mt-20">
            <b>
              اکنون خرید قسطی از کلیه فروشگاه های اینترنتی و فیزیکی پیش روی
              شماست.
            </b>
            <span>
              خرید اقساطی لوازم خانگی ، خريد اقساطی گوشی ، خريد اقساطی ابزار ،
              لوازم یدکی اقساطی
            </span>
            و خرید هر كالایی كه فكرش رابكنيد مثل ،
            <span>
              لپ تاپ قسطی ، طلا قسطی ، يخچال اقساطی ، مبل اقساطی ، تلویزیون
              اقساطی
            </span>
            ، كولر گازی اقساطی و موتور سیكلت اقساطی با قسطاكارت امكان پذیر است.
            با قسطاكارت علاوه بر خرید اقساطی انواع كالا مي توانید هزینه خدمات
            مختلف هم قسطی پرداخت كنید. پرداخت هزینه، دندان پزشکی اقساطی، هزینه
            عمل بینی اقساط و حتی پرداخت هزینه تور اقساطی هم با قسطاكارت به سادگی
            انجام خواهد شد.
          </p>

          <p className="mt-20">
            علاوه بر اين، قسطا در حوزه افزایش فروش و رونق کسب و کارهای روستایی و
            شهری نيز موثر بوده و با اعطای امتیاز به صاحبان کسب و کارها و
            مشتریان، شرایطی را فراهم کرده است که مشتریان بتوانند بازپرداخت را به
            صورت اقساطی انجام دهند، و به این ترتیب قسطا گامی مفيد در رونق کسب و
            کارهای مختلف برداشته است.
          </p>

          <p>
            <b>“الان بخر، بعدا بپرداز!”</b> ، این شعار قسطاست. با وام بدون ضامن
            قسطا هرچه نیاز دارید، از انواع کالا و خدمات، از هر فروشگاه اینترنتی
            یا غیر اینترنتی دلخواهتان، الان بخرید اما بعدا بپردازید!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
