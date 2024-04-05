export default async function Layout(props: {
  hero: React.ReactNode;
  services: React.ReactNode;
  features: React.ReactNode;
  steps: React.ReactNode;
}) {
  return (
    <>
      {props.hero}
      {props.services}
      {props.features}
      {props.steps}
    </>
  );
}
