type DropDownSelectProps<T extends string> = {  // T fikser typescript fejlen fra onChange, hvor den ikke kunne gætte typen på value
  value: T;
  onChange: (value: T) => void;
  label?: string;
};

export function DropDownSelect<T extends string>({ value, onChange, label }: DropDownSelectProps<T>) {
  return (
    <label className="flex justify-between items-center w-[80%]">
      {label && <span>{label}</span>}
      <select
        className="bg-black rounded-md focus:ring-2 focus:ring-green-500 p-3"
        value={value}
        onChange={e => onChange(e.target.value as T)}
      >
        <option value="ØST">ØST</option>
        <option value="VEST">VEST</option>
      </select>
    </label>
  );
}