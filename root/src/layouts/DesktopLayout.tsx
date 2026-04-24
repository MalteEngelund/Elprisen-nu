import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";

export function DesktopLayout() {

  

  return (
    <div className="pb-20">
      <Outlet />
      <Footer />
    </div>
  )
}