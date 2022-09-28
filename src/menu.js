import _ from "lodash";
import "../styles/style.css";
import "./index";
import menuLogo from "../styles/assets/menu.png";
import applePie from "../styles/assets/applePie.png";
import muffins from "../styles/assets/muffins.png";
import bananaBread from "../styles/assets/bBread.png";

function menuPage() {
  const pageContent = document.getElementById("page-content");
  pageContent.setAttribute("class", "menu-page-content");

  // title logo
  const menulogoContainer = document.createElement("div");
  menulogoContainer.setAttribute("id", "menu-logo-container");
  const menuPageLogo = new Image();
  menuPageLogo.src = menuLogo;
  menuPageLogo.setAttribute("id", "menu-page-logo");

  // apple pie menu item
  const applePieContainer = document.createElement("div");
  applePieContainer.setAttribute("class", "menu-item-container");
  const applePieTitle = document.createElement("h3");
  applePieTitle.setAttribute("class", "menu-item-title text");
  applePieTitle.innerHTML = "Preston's Famous Apple Pie";
  const applePieImg = new Image();
  applePieImg.src = applePie;
  applePieImg.setAttribute("class", "menu-item-img");
  const applePieDescription = document.createElement("p");
  applePieDescription.setAttribute("class", "menu-item-description text");
  applePieDescription.innerHTML = "Apple pie description";
  const applePiePrice = document.createElement("h4");
  applePiePrice.setAttribute("class", "menu-item-price");
  applePiePrice.setAttribute("class", "text");
  applePiePrice.innerHTML = "$100";

  //muffins menu item
  const muffinContainer = document.createElement("div");
  muffinContainer.setAttribute("class", "menu-item-container");
  const muffinTitle = document.createElement("h3");
  muffinTitle.setAttribute("class", "menu-item-title text");
  muffinTitle.innerHTML = "P's Awesome Apple Cinnamon Muffins";
  const muffinImg = new Image();
  muffinImg.src = muffins;
  muffinImg.setAttribute("class", "menu-item-img");
  const muffinDescription = document.createElement("p");
  muffinDescription.setAttribute("class", "menu-item-description text");
  muffinDescription.innerHTML = "Muffin description";
  const muffinPrice = document.createElement("h4");
  muffinPrice.setAttribute("class", "menu-item-price");
  muffinPrice.setAttribute("class", "text");
  muffinPrice.innerHTML = "$100";

  //banana bread menu item
  const bBreadContainer = document.createElement("div");
  bBreadContainer.setAttribute("class", "menu-item-container");
  const bBreadTitle = document.createElement("h3");
  bBreadTitle.setAttribute("class", "menu-item-title text");
  bBreadTitle.innerHTML = "Presto's Bangin' Banana Bread";
  const bBreadImg = new Image();
  bBreadImg.src = bananaBread;
  bBreadImg.setAttribute("class", "menu-item-img");
  const bBreadDescription = document.createElement("p");
  bBreadDescription.setAttribute("class", "menu-item-description text");
  bBreadDescription.innerHTML = "Banana Bread description";
  const bBreadPrice = document.createElement("h4");
  bBreadPrice.setAttribute("class", "menu-item-price");
  bBreadPrice.setAttribute("class", "text");
  bBreadPrice.innerHTML = "$100";

  menulogoContainer.appendChild(menuPageLogo);
  pageContent.appendChild(menulogoContainer);

  applePieContainer.appendChild(applePieTitle);
  applePieContainer.appendChild(applePieImg);
  applePieContainer.appendChild(applePieDescription);
  applePieContainer.appendChild(applePiePrice);
  pageContent.appendChild(applePieContainer);

  muffinContainer.appendChild(muffinTitle);
  muffinContainer.appendChild(muffinImg);
  muffinContainer.appendChild(muffinDescription);
  muffinContainer.appendChild(muffinPrice);
  pageContent.appendChild(muffinContainer);

  bBreadContainer.appendChild(bBreadTitle);
  bBreadContainer.appendChild(bBreadImg);
  bBreadContainer.appendChild(bBreadDescription);
  bBreadContainer.appendChild(bBreadPrice);
  pageContent.appendChild(bBreadContainer);

  //return menulogoContainer;
}

export default menuPage;
