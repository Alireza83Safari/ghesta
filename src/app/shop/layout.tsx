import Footer from "@/components/footer/footer";
import React from "react";
import Header from "@/components/header/header";

export default function layout(props: {
  banner: React.ReactNode;
  feature: React.ReactNode;
  ctaBanner: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {props.banner}
      {props.feature}
      {props.ctaBanner}
      <Footer />
    </>
  );
}
