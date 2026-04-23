// måske brug context eller smid den i App/mainLayout




import { Title } from "../components/Title/Title";
import { ToggleSwitch } from "../components/ToggleSwitch/ToggleSwitch";
import { DropDownSelect } from "../components/DropDown/DropDown";
import { useSettings } from "../context/SettingsContext";
import { useState } from "react";


export function SettingsPage() {
  const { momsOn, setMomsOn, region, setRegion } = useSettings();
  const [lowestPriceOn, setLowestPriceOn] = useState(false);

  return (
    <>
      <Title title="INDSTILLINGER" />
      <section className="flex flex-col justify-center items-center gap-8 py-4">
        <div className="flex justify-between items-center w-[80%]">
          <p>Pris inkl. moms</p>
          <ToggleSwitch checked={momsOn} onChange={() => setMomsOn(!momsOn)} />
        </div>
        <div className="flex justify-between items-center w-[80%]">
          <p>Laveste Pris</p>
          <ToggleSwitch checked={lowestPriceOn} onChange={() => setLowestPriceOn(!lowestPriceOn)} />
        </div>
        <DropDownSelect value={region} onChange={setRegion} label="Region" />
      </section>
    </>
  );
}