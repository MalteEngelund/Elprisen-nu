import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { HistorikPage } from "./HistorikPage";
import { LigeNuPage } from "./LigeNuPage";
import { OversigtPage } from "./OversigtPage";
import { SettingsPage } from "./SettingsPage";
import settingscog from '../assets/icons/cog_icon.svg'


export function DesktopPage() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-end p-4 w-full">
        <button onClick={() => setOpen(true)}><img src={settingscog} alt="Settings" /></button>
      </div>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <SettingsPage />
        </Modal>
          <div className="grid grid-cols-3 gap-4">
        <LigeNuPage />
        <OversigtPage />
        <HistorikPage />
      </div>
    </div>
  )
}