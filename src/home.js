import _ from "lodash";
import "../styles/style.css";
import "./index";
import Logo from "../styles/logo.png";

function homePage() {
  const pageContent = document.getElementById("page-content");
  const element = document.createElement("div");
  console.log(pageContent);

  //   element.innerHTML = _.join(["Hello", "webpack"], "");
  //   element.classList.add("hello");

  console.log("home tab is working");

  const myLogo = new Image();
  myLogo.src = Logo;

  element.append(myLogo);

  pageContent.appendChild(element);
  return element;
}

export default homePage;
