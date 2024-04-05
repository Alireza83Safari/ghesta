export default async function Layout(props: {
  hero: React.ReactNode;
  services: React.ReactNode;
}) {
  return (
    <>
      {props.hero}
      {props.services}
    </>
  );
}
