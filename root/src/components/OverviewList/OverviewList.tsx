
interface OverviewListProps {
  time: string
  price: string
  key: string
}


export  function OverviewList({ time, price, key }: OverviewListProps) {
  return (
    <ul className=" flex flex-row p-3 w-[80%] justify-between bg-black rounded-xl" key={key}>
      <li>{time}</li>
      <li>{price}</li>
    </ul>
  )
}