import Content_Primary from "../../components/Content_primary";
import Content_Quaternary from "../../components/Content_quaternary";
import Content_Secondary from "../../components/Content_secondary";
import Content_Sixth from "../../components/Content_sixth";
import Content_Tertiary from "../../components/Content_tertiary";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Content_Primary />
      <Content_Secondary />
      <Content_Tertiary />
      <Content_Quaternary />
      <Content_Sixth />
    </div>
  );
}
