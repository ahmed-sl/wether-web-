const key = "e312e160817990562f2ed61dd30f28c9";
const requestCity = async (city) => {
  const baseURL = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${key}`;

  //make fetch call (promise call)
  const response = await fetch(baseURL + query);

  //promise data
  const data = await response.json();
  return data;
};
// jbhjb