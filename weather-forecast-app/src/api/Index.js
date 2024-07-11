const baseURl="http://api.weatherapi.com/v1/current.json?key=336200a336db46b387150739241107"

export const getWeatherDataForCity=async (city)=>{
    const response= await fetch(`${baseURl}&q=${city}&aqi=yes` )
    return await response.json();
};

export const getWeatherDataForLocation=async (lat, lon)=>{
    const response= await fetch(`${baseURl}&q=${lat},${lon}&aqi=yes` )
    return await response.json();
}; 