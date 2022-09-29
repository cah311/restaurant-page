import _ from "lodash";
import "../styles/style.css";
import "./index";
import contactLogo from "../styles/assets/contactus.png";

function contactPage() {
  const pageContent = document.getElementById("page-content");
  pageContent.setAttribute("class", "menu-page-content");

  // title logo
  const contactlogoContainer = document.createElement("div");
  contactlogoContainer.setAttribute("id", "menu-logo-container");
  const contactPageLogo = new Image();
  contactPageLogo.src = contactLogo;
  contactPageLogo.setAttribute("id", "menu-page-logo");

  // form
  const formContainer = document.createElement("div");
  formContainer.setAttribute("class", "text-container");
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  const formContent = document.createElement("div");
  formContent.setAttribute("id", "form-content");
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "user_email");
  emailLabel.innerHTML = "Email Address:";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email-input");
  emailInput.setAttribute("id", "user_email");
  emailInput.setAttribute("placeholder", "you@exampple.com");
  const textArea = document.createElement("textarea");
  textArea.setAttribute("rows", "20");
  textArea.setAttribute("cols", "60");
  textArea.innerHTML = "Place your inquiry here";
  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "Submit";

  pageContent.appendChild(contactlogoContainer);
  contactlogoContainer.appendChild(contactPageLogo);
  pageContent.appendChild(formContainer);
  formContainer.appendChild(form);
  form.appendChild(formContent);
  formContent.appendChild(emailLabel);
  formContent.appendChild(emailInput);
  formContent.appendChild(textArea);
  formContent.appendChild(submit);
}

export default contactPage;
