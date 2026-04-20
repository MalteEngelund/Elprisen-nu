import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { SettingsCog } from "../components/SettingsCog/SettingsCog";

export function MainLayout() {

  return (
    <div className="pb-20">
      <NavBar />
      <SettingsCog />
      <Outlet />
      <Footer />
    </div>
  )
}