
interface InputDateProps {
  placeholder?: string
  value?: string
}



export function InputDate({ placeholder, value }: InputDateProps) {

  return (
    <form>
      <input type="date" className="focus:outline-none" placeholder={placeholder} value={value} />
    </form>
  )
}