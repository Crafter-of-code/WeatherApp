const Temperature = document.querySelectorAll(".Temperature_input");
const Set_Location = document.querySelectorAll(".Location_input");
const Humidity = document.querySelector("#Humidity_input");
const Visility = document.querySelector("#Visibility_input");
const Precipitation = document.querySelector("#Precipitation_input");
const Wind_speed = document.querySelector("#Wind_speed_input");
const content_page = document.querySelector(".content_page");
const input_box_1 = document.querySelector("#input_box_1");
const input_box_2 = document.querySelector("#input_box_2");
let response;
console.log(input_box_1);
async function first_page_click_handler() {
  if (input_box_1.value == "") {
    console.log("the value is empty");
    return;
  }
  await fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=${input_box_1.value}&apikey=Y0S2O1N9UqRKRTUjsDkS2AzvpMgvflnB`
  )
    .then((res) => res.json())
    .then((res) => (response = res))
    .catch((err) => console.error(err));

  console.log(input_box_1.value);
  document
    .querySelector("#content_page_response_display")
    .style.setProperty("display", "block");
  console.log(response);
  input_box_1.value = "";
  if (response) {
    content_page.scrollIntoView();
    setTimeout(() => {
      document
        .querySelector(".landing_page")
        .style.setProperty("display", "none");
    }, 1000);
    Temperature.forEach(
      (element, index) => (element.innerText = response.data.values.temperature)
    );
    Set_Location.forEach(
      (element) => (element.innerText = response.location.name)
    );
    Humidity.innerText = response.data.values.humidity;
    Visility.innerText = response.data.values.visibility;
    Precipitation.innerText = response.data.values.precipitationProbability;
    Wind_speed.innerText = response.data.values.windSpeed;
  } else {
    console.log("response is not okay");
  }
}
async function content_page_click_handler() {
  if (input_box_2.value == "") {
    console.log("the value is empty");
    return;
  }
  await fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=${input_box_2.value}&apikey=Y0S2O1N9UqRKRTUjsDkS2AzvpMgvflnB`
  )
    .then((res) => res.json())
    .then((res) => (response = res))
    .catch((err) => console.error(err));
  console.log(input_box_2.value);
  console.log(response);
  if (response) {
    content_page.scrollIntoView();
    setTimeout(() => {
      document
        .querySelector(".landing_page")
        .style.setProperty("display", "none");
    }, 1000);
    Temperature.forEach(
      (element, index) => (element.innerText = response.data.values.temperature)
    );
    Set_Location.forEach(
      (element) => (element.innerText = response.location.name)
    );
    Humidity.innerText = response.data.values.humidity;
    Visility.innerText = response.data.values.visibility;
    Precipitation.innerText = response.data.values.precipitationProbability;
    Wind_speed.innerText = response.data.values.windSpeed;
  } else {
    console.log("response is not okay");
  }
}
