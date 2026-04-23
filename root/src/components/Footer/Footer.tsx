import { useSettings } from "../../context/SettingsContext"

export function Footer() {

  const { region, momsOn } = useSettings()


  return (
    <footer className="fixed bottom-0 w-full bg-black p-4">
      <p>
        Priserne er <span className="text-green-500">{momsOn ? "inkl. moms" : "ekskl. moms"}</span> og afgifter. <br />
        Du vises lige nu priserne for <span className="text-green-500"> {region === "ØST" ? "Øst" : "Vest"} Danmark.</span>
      </p>
    </footer>
  )
}