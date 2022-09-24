import _ from "lodash";
import "./style.css";
import Logo from "./logo.png";

// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(["Hello", "webpack"], "");
//   element.classList.add("hello");

//   const myLogo = new Image();
//   myLogo.src = Logo;

//   element.appendChild(myLogo);

//   return element;
// }

//document.body.appendChild(component());

const content = document.getElementById("content");

function createPageTabs() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  const navBar = document.createElement("nav");
  navBar.setAttribute("id", "nav-bar");
  navBar.setAttribute("class", "table");
  const tabList = document.createElement("ul");
  tabList.setAttribute("id", "tab-list");
  const tab1 = document.createElement("li");
  tab1.setAttribute("class", "page-tab");
  const tab2 = document.createElement("li");
  tab2.setAttribute("class", "page-tab");
  const tab3 = document.createElement("li");
  tab3.setAttribute("class", "page-tab");
  // const button1 = document.createElement("button");
  // button1.setAttribute("class", "page-tab-button");
  // const button2 = document.createElement("button");
  // button2.setAttribute("class", "page-tab-button");
  // const button3 = document.createElement("button");
  // button3.setAttribute("class", "page-tab-button");

  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "page-content");

  content.append(header);
  header.append(navBar);
  navBar.append(tabList);
  tabList.append(tab1, tab2, tab3);
  // tab1.append(button1);
  // tab2.append(button2);
  // tab3.append(button3);

  content.append(pageContent);

  return {
    header,
    navBar,
    tabList,
    tab1,
    tab2,
    tab3,
    // button1,
    // button2,
    // button3,
    pageContent,
  };
}

content.appendChild(createPageTabs());

function createPageLayout() {}

content.append(createPageLayout());
