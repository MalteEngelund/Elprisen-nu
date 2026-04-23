import { NavLink } from "react-router"
import Cog from "../../assets/icons/cog_icon.svg"

export function SettingsCog() {


  return (
    <div className="flex justify-end w-full p-4">
      <NavLink to="/settings">
        <img src={Cog} alt="Settings" className="cursor-pointer" />
      </NavLink>
    </div>
  )
}