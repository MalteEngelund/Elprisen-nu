
interface OverviewListProps {
  time: string
  price: string
}


export  function OverviewList({ time, price }: OverviewListProps) {
  return (
    <ul className=" flex flex-row p-3 w-[80%] justify-between bg-black border-2 border-gray-700 rounded-xl">
      <li>{time}</li>
      <li>{price}</li>
    </ul>
  )
}