import { NavLink } from "react-router";
import logo from '../../assets/icons/elpris-logo.svg'

export function NavBar() {

 // tailwind custom colors virker ikke pt.
  return (
    <nav className="bg-black text-white justify-between flex flex-row items-center p-4">
      <img src={logo} alt="Elpris Logo" />
      <ul className="flex flex-row gap-4">
        <li>
          <NavLink to='/oversigt' className={({ isActive }) => "p-2 hover:text-green-300 " + (isActive ? "text-[#55EC20]" : "" )}> Oversigt </NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => "p-2 hover:text-green-300 " + (isActive ? "text-[#55EC20]" : "" )}> Lige Nu </NavLink>
        </li>
        <li>
          <NavLink to='/historik' className={({ isActive }) => "p-2 hover:text-green-300 " + (isActive ? "text-[#55EC20]" : "" )}> Historik </NavLink>
        </li>
      </ul>
    </nav>
  )
}