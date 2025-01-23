const Temperature = document.querySelector(".Temperature_input");
const Location = document.querySelector(".Location_input");
const Humidity = document.querySelector("#Humidity_input");
const Visility = document.querySelector("#Visility_input");
const Precipitation = document.querySelector("#Precipitation_input");
const Wind_speed = document.querySelector("#Wind_speed_input");
const content_page = document.querySelector(".content_page");

// const input_box_2 = document.querySelector("#input_box_2");
let value_of_first_input;
let response;
async function first_page_click_handler() {
  if (input_box_1 == "") {
    console.log("the value is empty");
    return;
  }
  // await fetch(
  //   `https://api.tomorrow.io/v4/weather/realtime?location=${input_box_2.value}&apikey=Y0S2O1N9UqRKRTUjsDkS2AzvpMgvflnB`
  // )
  //   .then((res) => res.json())
  //   .then((res) => (response = res))
  //   .catch((err) => console.error(err));

  console.log(input_box_1.value);
  // content_page.scrollIntoView();

  // setTimeout(() => {
  //   document
  //     .querySelector(".landing_page")
  //     .style.setProperty("display", "none");
  // }, 1000);
  // console.log(first_input_box.current.value);
  // console.log(value_of_first_input);
  console.log(response);
  input_box_1.value = "";
}
async function content_page_click_handler() {
  await fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=${input_box_2.value}&apikey=Y0S2O1N9UqRKRTUjsDkS2AzvpMgvflnB`
  )
    .then((res) => res.json())
    .then((res) => (response = res))
    .catch((err) => console.error(err));
  input_box_2.value = "";
}
Temperature.innerText = response.data.values.temperature;
Location.innerText = response.location.name;
Humidity.innerText = response.data.values.humidity;
Visility = response.data.values.visibility;
Precipitation = response.data.values.precipitation;
Wind_speed = response.data.values.windSpeed;
