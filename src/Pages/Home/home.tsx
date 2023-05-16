import Content_Primary from "../../components/Content_primary";
import Content_Secondary from "../../components/Content_secondary";
import Content_Tertiary from "../../components/Content_tertiary";
import Content_Quaternary from "../../components/Content_quaternary";
import Content_Fifth from "../../components/Content_Fifth";
import Content_Sixth from "../../components/Content_sixth";
import Content_Seventh from "../../components/Content_seventh";
import Content_Octave from "../../components/Content_octave";
import Content_Ninth from "../../components/Content_ninth";
import Content_Tenth from "../../components/Content_tenth";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Content_important1 from "../../components/Content_important1";
import FormsProposta from "../../components/FormsProposta/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <Content_Primary />
      <Content_important1 />
      <Content_Secondary />
      {/* <Content_Tertiary /> */}
      <Content_Quaternary />
      <Content_Fifth />
      {/* <Content_Sixth /> */}
      {/* <Content_Seventh /> */}
      {/* <Content_Octave /> */}
      <Content_Ninth />
      {/* <Content_Tenth /> */}
      <FormsProposta />
      <Footer />
    </div>
  );
}
