// document.querySelector(".Heading").innerHTML = "hello world";
let input_from_the_user = document.querySelector(".user_input_field");
document
  .querySelector(".user_input_button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    console.log(input_from_the_user.value);
    input_from_the_user.value = null;
  });
document.querySelector(".Location").innerHTML = "Delhi";
document.querySelector(".Temperature").innerHTML = "32";
let air_quality = 1;
let humidity = 2;
let wind = 3;
let presipitation = 4;
let visibility = 5;
document.querySelector(".air_quality").innerHTML = `AQI: ${air_quality}`;
document.querySelector(".humidity").innerHTML = `Humidity ${humidity}`;
document.querySelector(".wind").innerHTML = `Wind: ${wind}`;
document.querySelector(
  ".presipitation"
).innerHTML = `Presipitation: ${presipitation}`;
document.querySelector(".visibility").innerHTML = `Visibility ${visibility}`;
// Air;
// Humidity;
// wind;
// Presipitation;
// visibility;
