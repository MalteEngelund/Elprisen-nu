type DropDownSelectProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

export function DropDownSelect({ value, onChange, label }: DropDownSelectProps) {
  return (
    <label className="flex justify-between items-center w-[80%]">
      {label && <span>{label}</span>}
      <select
        className="bg-black rounded-md focus:ring-2 focus:ring-green-500 p-3"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="ØST">ØST</option>
        <option value="VEST">VEST</option>
      </select>
    </label>
  );
}