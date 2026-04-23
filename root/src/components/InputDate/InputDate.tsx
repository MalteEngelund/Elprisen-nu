
interface InputDateProps {
  placeholder?: string
  value?: string
}




export function InputDate({ placeholder, value }: InputDateProps) {

  return (
    <form className="bg-black">
      <input type="date" className="focus:outline-none" placeholder={placeholder} value={value} />
    </form>
  )
}