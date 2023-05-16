import Logo1 from "../../assets/brands/7.png";
import Logo2 from "../../assets/brands/3.png";
import Logo3 from "../../assets/brands/15.png";
import Logo4 from "../../assets/brands/1.png";

import Logo5 from "../../assets/brands/19.png";
import Logo6 from "../../assets/brands/17.png";
import Logo7 from "../../assets/brands/16.png";

import "./style.css";

export default function LogoCarrousel() {
  const brand_logos = [
    {
      logo: Logo1,
    },
    {
      logo: Logo2,
    },
    {
      logo: Logo3,
    },
    {
      logo: Logo4,
    },
    {
      logo: Logo5,
    },
    {
      logo: Logo6,
    },
    {
      logo: Logo7,
    },
    {
      logo: Logo1,
    },
    {
      logo: Logo2,
    },
    {
      logo: Logo3,
    },
    {
      logo: Logo4,
    },
    {
      logo: Logo5,
    },
    {
      logo: Logo6,
    },
    {
      logo: Logo7,
    },
  ];

  return (
    <div className="logos">
      <div className="logos-slide flex">
        {brand_logos.map((item, index) => (
          <img key={index} alt="logo brand" src={item.logo} />
        ))}

      </div>
    </div>
  );
}
