import Cog from "../../assets/icons/cog_icon.svg"

export function SettingsCog() {


  return (
    <div className="flex justify-end w-full p-4">
      <img src={Cog} alt="Settings" className="cursor-pointer" />
    </div>
  )
}