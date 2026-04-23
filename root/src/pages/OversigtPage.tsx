import { OverviewList } from "../components/OverviewList/OverviewList";
import { Title } from "../components/Title/Title";
import { useSettings } from "../context/SettingsContext";
import { useFetch } from "../hooks/useFetch";
import type { Elpriser } from "../Types/PriceTypes";

export function OversigtPage() {

  const { region } = useSettings()
  const elRegion = region === "ØST" ? "DK2" : "DK1"
  let currentYear = new Date().getFullYear()
  let currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')
  let currentDay = new Date().getDate().toString().padStart(2, '0')
  const url = `https://www.elprisenligenu.dk/api/v1/prices/${currentYear}/${currentMonth}-${currentDay}_${elRegion}.json`
  
  console.log(`url: ${url}`);
  const {
      data,
      isLoading,
      error,
    } = useFetch<Elpriser[]>(url); // dato skal være dynamisk og dk1 eller dk2 skal også

    if (isLoading) {
      return <h2>Loading data...</h2>;
    }
    if (error) {
      return <h2>Error: {error}</h2>;
    }
    console.log(data);


  return (
    <>
      <Title title="OVERSIGT" />

      <div className="flex flex-row justify-between w-full items-center px-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex w-38 h-38 justify-center items-center p-2 bg-black rounded-full border-2 border-gray-700">
            <div className="flex justify-center items-center text-center w-full h-full border-2 border-dashed border-green-500 rounded-full">
              <div><p>{data ? `${Math.min(...data.map(price => price.DKK_per_kWh)).toFixed(3)} KR` : ""}</p></div>
            </div>
          </div>
            <p>Laveste Pris</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex w-38 h-38 justify-center items-center p-2 bg-black rounded-full border-2 border-gray-700">
              <div className="flex justify-center items-center text-center w-full h-full border-2 border-dashed border-green-500 rounded-full bg-black">
                <div>{data ? `${Math.max(...data.map(price => price.DKK_per_kWh)).toFixed(3)} KR` : ""}</div>
              </div>
            </div>
              <p>Højeste Pris</p>
          </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 py-4">
        {data?.map(price => (
          <OverviewList key={price.time_start} time={`${new Date(price.time_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
           - ${new Date(price.time_end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`}
          price={`${price.DKK_per_kWh.toFixed(3)} KR`} />
        ))}
      </div>
    </>
  )
}