import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

export default function Main() {
  const navigation = useNavigation();
  return (
    <div className="">
      <div>{navigation.state === "loading" && "loading..."}</div>
      <Outlet />
      <Footer />
    </div>
  );
}
