import { createContext, useContext, useState } from "react"


type RegionType = "ØST" | "VEST"

type SettingsContextTypes = {
  momsOn: boolean
  setMomsOn: (value: boolean) => void
  region: RegionType
  setRegion: (value: RegionType) => void
}

const settingsContext = createContext<SettingsContextTypes | undefined>(undefined);


interface SettingsProviderProps {
  children: React.ReactNode
}

export const SettingsProvider = ({ children }: SettingsProviderProps ) => {
  const [momsOn, setMomsOn] = useState(true)
  const [region, setRegion] = useState<RegionType>("ØST")

  return (
    <settingsContext.Provider value={{ momsOn, setMomsOn, region, setRegion }}>
      {children}
    </settingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(settingsContext)
  if (context === undefined) {
    throw new Error("error in settingsContext")
  }
  return context

}