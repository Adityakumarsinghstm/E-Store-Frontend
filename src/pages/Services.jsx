import Base from "../components/Base";
import Feature from "./Features";


function Services() {
  return (
    <Base
      title="Services we provide"
      description="In this page we will discuss about the services that we provide."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <Feature></Feature>
    </Base>
  );
}

export default Services;
