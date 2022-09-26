import _ from "lodash";
import "./style.css";
import "./index";

function menuPage() {
  const pageContent = document.getElementById("page-content");
  const element = document.createElement("div");

  element.innerHTML = "menu tab";

  console.log("menu tab is working");

  pageContent.appendChild(element);
  return element;
}

export default menuPage;
