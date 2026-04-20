
import { useState } from "react";
import { InputDate } from "../components/InputDate/InputDate";
import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch";
import type { Elpriser } from "../Types/PriceTypes";
import { OverviewList } from "../components/OverviewList/OverviewList";

export function HistorikPage() {
  const today = new Date();
  const yyyyMMdd = today.toISOString().split('T')[0];
  

  const [selectedDate, setSelectedDate] = useState(yyyyMMdd);
  const [year, month, day] = selectedDate.split('-');
  const apiUrl = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`;

  const { data, isLoading, error } = useFetch<Elpriser[]>(apiUrl);
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  console.log(data)

  return (
    <>
      <Title title="HISTORIK" />
      <div className="flex justify-center w-full">
        <form action="">
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-4">
        <p>Elpriserne d. {selectedDate}</p>
        {data?.map(price => (
          <OverviewList key={price.time_start} time={`${new Date(price.time_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} - ${new Date(price.time_end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`} price={`${price.DKK_per_kWh} KR`} />
            ))/*  ?? isLoading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <p>Vælg en dato for at se priserne</p> */}
      </div>
    </>
  );
}