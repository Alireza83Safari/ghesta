import Image from "next/image";
import "./header.scss";

const header = () => {
  return (
    <section className="auth-header">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      
      <div className="auth-menu">
        <img src="/images/auth/home.svg" alt="home" />
        <img src="/images/auth/question.svg" alt="question" />
      </div>
    </section>
  );
};

export default header;
