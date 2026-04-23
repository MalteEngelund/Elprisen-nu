
type SwitchProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;

  region?: string
  setRegion?: (value:string) => void
};

export function ToggleSwitch({ checked, onChange, label }: SwitchProps) {
  return (
    <label className="flex items-center cursor-pointer gap-2">
      {label && <span>{label}</span>}
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`block w-12 h-7 rounded-full transition-colors duration-300 ${
            checked ? "bg-black" : "bg-black"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-green-500 w-5 h-5 rounded-full transition-transform duration-300 ${
            checked ? "translate-x-5" : ""
          }`}
        ></div>
      </div>
    </label>
  );
}