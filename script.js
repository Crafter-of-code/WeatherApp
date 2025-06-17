const searcher = window.document.getElementById("Search_location");
const Temperature = document.getElementById("Temperature");
const Humidity = document.getElementById("Humidity");
const Precipitation = document.getElementById("Precipitation");
const Wind_Speed = document.getElementById("Wind_Speed");
Temperature.innerText = 0;
Humidity.innerText = 0;
Precipitation.innerText = 0;
Wind_Speed.innerText = 0;
searcher.addEventListener("change", async (event) => {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=${event.target.value}&apikey=Y0S2O1N9UqRKRTUjsDkS2AzvpMgvflnB`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    Temperature.innerText = data.data.values.temperature;
    Humidity.innerText = data.data.values.humidity;
    Precipitation.innerText = data.data.values.precipitationProbability;
    Wind_Speed.innerText = data.data.values.windSpeed;
  } catch (err) {
    console.error("Fetch error:", err);
  }
});
