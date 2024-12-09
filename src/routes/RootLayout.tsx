import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/MainHeader";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
