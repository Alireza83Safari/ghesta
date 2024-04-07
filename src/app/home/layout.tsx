import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default async function Layout(props: {
  hero: React.ReactNode;
  services: React.ReactNode;
  features: React.ReactNode;
  steps: React.ReactNode;
  cta: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {props.hero}
      {props.services}
      {props.features}
      {props.steps}
      {props.cta}
      <Footer />
    </>
  );
}
