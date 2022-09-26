import _ from "lodash";
import "./style.css";
import "./index";

function contactPage() {
  const pageContent = document.getElementById("page-content");
  const element = document.createElement("div");
  console.log("contact page is working");

  element.innerHTML = "contact page";
  element.classList.add("hello");

  pageContent.appendChild(element);
  return element;
}

export default contactPage;
