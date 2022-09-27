import _ from "lodash";
import "../styles/style.css";
import "./index";
import Logo from "../styles/assets/logo2.png";
import pie from "../styles/assets/applePie.png";

function homePage() {
  const pageContent = document.getElementById("page-content");

  const logoContainer = document.createElement("div");
  logoContainer.setAttribute("id", "home-logo-container");

  const longLogo = new Image();
  longLogo.src = Logo;
  longLogo.setAttribute("class", "long-logo");

  const descriptionContainer = document.createElement("div");
  descriptionContainer.setAttribute("class", "text-container");

  const description = document.createElement("p");
  description.setAttribute("class", "text");
  description.innerHTML =
    "Welcome to P's Pantry. Home of Preston's famous apple pie. Stop by for freshly baked goods, and delicious treats!";

  const pictureContainer = document.createElement("div");
  pictureContainer.setAttribute("class", "image-container");
  const picture = new Image();
  picture.src = pie;
  picture.setAttribute("id", "home-picture");

  const hoursContainer = document.createElement("div");
  hoursContainer.setAttribute("class", "text-container");
  const hours = document.createElement("ul");
  hours.setAttribute("id", "hours-list");
  hours.innerHTML = "Hours";

  const monday = document.createElement("li");
  monday.setAttribute("class", "day-times");
  monday.innerHTML = "Monday: 6:00am - 6:00pm";
  const tuesday = document.createElement("li");
  tuesday.setAttribute("class", "day-times");
  tuesday.innerHTML = "Tuesday: 6:00am - 6:00pm";
  const wednesday = document.createElement("li");
  wednesday.setAttribute("class", "day-times");
  wednesday.innerHTML = "Wednesday: 6:00am - 6:00pm";
  const thursday = document.createElement("li");
  thursday.setAttribute("class", "day-times");
  thursday.innerHTML = "Thursday: 6:00am - 6:00pm";
  const friday = document.createElement("li");
  friday.setAttribute("class", "day-times");
  friday.innerHTML = "Friday: 6:00am - 6:00pm";
  const saturday = document.createElement("li");
  saturday.setAttribute("class", "day-times");
  saturday.innerHTML = "Saturday: 8:00am - 5:00pm";
  const sunday = document.createElement("li");
  sunday.setAttribute("class", "day-times");
  sunday.innerHTML = "Sunday: 8:00am - 4:00pm";

  const locationContainer = document.createElement("div");
  locationContainer.setAttribute("class", "text-container");
  const locationTitle = document.createElement("h3");
  locationTitle.setAttribute("class", "text");
  locationTitle.innerHTML = "Location";
  const location = document.createElement("p");
  location.setAttribute("class", "text");
  location.innerHTML = "123 Ellie Lane, Carlsville CA";

  logoContainer.append(longLogo);
  pageContent.appendChild(logoContainer);
  pageContent.appendChild(descriptionContainer);
  descriptionContainer.appendChild(description);
  pageContent.appendChild(pictureContainer);
  pictureContainer.appendChild(picture);
  pageContent.appendChild(hoursContainer);
  hoursContainer.appendChild(hours);
  hours.appendChild(monday);
  hours.appendChild(tuesday);
  hours.appendChild(wednesday);
  hours.appendChild(thursday);
  hours.appendChild(friday);
  hours.appendChild(saturday);
  hours.appendChild(sunday);
  pageContent.appendChild(locationContainer);
  locationContainer.appendChild(locationTitle);
  locationContainer.appendChild(location);

  return { logoContainer, descriptionContainer };
}

export default homePage;
