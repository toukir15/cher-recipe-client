import Header from "../../shared/Header/Header";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import banner1 from "../../../assets/banner/banner1.jpg";

export default function Home() {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="w-full h-full bg-black absolute top-0 left-0 opacity-50 "></div>
        <div className="z-10 relative">
          <Header />
          <Banner />
        </div>
      </div>
      <Chef />
    </div>
  );
}
