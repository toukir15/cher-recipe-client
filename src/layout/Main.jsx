import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import Chef from "../pages/Home/Chef/Chef";

export default function Main() {
  const navigation = useNavigation();
  return (
    <div>
      {/* <Header /> */}
      <div>{navigation.state === "loading" && "loading..."}</div>
      <Outlet />
      <Footer />
    </div>
  );
}
