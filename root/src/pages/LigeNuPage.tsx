import { Title } from "../components/Title/Title";
import { useSettings } from "../context/SettingsContext";
import { useFetch } from "../hooks/useFetch";
import type { Elpriser } from "../Types/PriceTypes";

export function LigeNuPage() {

  const { region, momsOn } = useSettings()
  const elRegion = region === "ØST" ? "DK2" : "DK1"
  let currentYear = new Date().getFullYear()
  let currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')
  let currentDay = new Date().getDate().toString().padStart(2, '0')
  const url = `https://www.elprisenligenu.dk/api/v1/prices/${currentYear}/${currentMonth}-${currentDay}_${elRegion}.json`
    
    console.log(`url: ${url}`);

  let {
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

  
  let currentTime = new Date()
  let currentHour = currentTime.getHours()
  let currentPrice = data?.find(price => {
    let priceHour = new Date(price.time_start).getHours()
    return priceHour === currentHour
  })
  
  if (!momsOn) {
     data = data?.map(price => ({
      ...price,
      DKK_per_kWh: parseFloat((price.DKK_per_kWh / 1.25).toFixed(2)) // 25%
    }))
  }
  
  return (
    <div>
      <Title title="ELPRISEN LIGE NU" />
      <section className="flex flex-col justify-center items-center text-center gap-4 text-green-500">
        <div className="flex flex-col justify-center items-center bg-black border-4 border-gray-700 rounded-full p-2">
          <div className="flex w-80 h-80 justify-center items-center text-center border-2 rounded-full border-dashed border-green-700  p-2">
            <div className="flex w-full h-full border-2 border-dashed border-green-600 rounded-full justify-center items-center p-2">
              <div className="flex flex-col w-full h-full border-2 border-dashed border-green-400 rounded-full justify-center items-center p-2">
                <p className="text-2xl font-bold">{currentPrice?.DKK_per_kWh.toFixed(3)} KR</p>
                <p className="text-xl font-semibold">PR. KW/W</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg">
          {currentPrice ? new Date(currentPrice.time_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) : ""}
           - 
          {currentPrice ? new Date(currentPrice.time_end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) : ""}
        </p>
      </section>
    </div>
  )
}