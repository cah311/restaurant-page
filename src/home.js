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

  logoContainer.append(longLogo);
  pageContent.appendChild(logoContainer);
  pageContent.appendChild(descriptionContainer);
  descriptionContainer.appendChild(description);
  pageContent.appendChild(pictureContainer);
  pictureContainer.appendChild(picture);

  return { logoContainer, descriptionContainer };
}

export default homePage;
