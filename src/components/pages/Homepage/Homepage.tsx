
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherDataByLocationName } from "../../../api/fetchWeatherDataByLocation";
import { useWeatherDataStore } from "../../../store/Store";
import HomepageTemplate from "../../template/HomepageTemplate/HomepageTemplate";
import { useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

const Homepage = () => {
  const { locationName, setState } =
    useWeatherDataStore();
  
    const searchTerm = useDebounce({searchQuery: locationName, delay: 500}) 
    const {data, isLoading,isError} = useQuery({
      queryKey: ['location',searchTerm],
      queryFn: ()=> fetchWeatherDataByLocationName(searchTerm),
    })


  useEffect(()=>{
    setState({
      location: data?.location,
      current: data?.current
    })
  },[data])

  if(isLoading){
    return <div>loading...</div>
  }
  return <>
   {
    isError && <div>Something is wrong with the location</div> 
  }
  <HomepageTemplate />
 
  </>;
};

export default Homepage;
