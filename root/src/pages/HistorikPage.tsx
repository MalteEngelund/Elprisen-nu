
import { useState } from "react";
import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch";
import type { Elpriser } from "../Types/PriceTypes";
import { OverviewList } from "../components/OverviewList/OverviewList";
import { useSettings } from "../context/SettingsContext";

export function HistorikPage() {
  const today = new Date();
  const yyyyMMdd = today.toISOString().split('T')[0];
  
  const { region, momsOn } = useSettings()
  const elRegion = region === "ØST" ? "DK2" : "DK1"

  const [selectedDate, setSelectedDate] = useState(yyyyMMdd);
  const [year, month, day] = selectedDate.split('-');
  const apiUrl = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${elRegion}.json`;
  console.log(apiUrl)
  let { data, /* isLoading, error */ } = useFetch<Elpriser[]>(apiUrl);
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  if (!momsOn) {
    data = data?.map(price => ({
      ...price,
      DKK_per_kWh: parseFloat((price.DKK_per_kWh / 1.25).toFixed(3)) // 25%
    }))
  }

  console.log(data)

  return (
    <div>
      <Title title="HISTORIK" />
      <div className="flex justify-center w-full">
        <form action="" className="bg-black p-2 rounded border-2 border-gray-700">
          <input type="date" value={selectedDate} onChange={handleDateChange} className=" text-white focus:outline-none " />
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-4">
        <p>Elpriserne d. {selectedDate}</p>
        {data?.map(price => (
          <OverviewList time={`${new Date(price.time_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} 
          - ${new Date(price.time_end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`} 
          price={`${price.DKK_per_kWh.toFixed(3)} KR`} />
            ))/*  ?? isLoading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <p>Vælg en dato for at se priserne</p> */}
      </div>
    </div>
  );
}