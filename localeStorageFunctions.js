import { edit, deleteF, numberOpinion, add } from "./ownUserFunctions.js";
export function actualStateLocaleStorage() {
  let actualstate = localStorage.getItem("actualState");
  //actualstate = JSON.parse(actualstate);
  //console.log(actualstate);
  document.body.outerHTML = actualstate;
  deleteF();
  edit();
}
export function setActualStateLocaleStorage() {
  let actualstate = document.body.innerHTML;
  //actualstate = JSON.stringify(actualstate);
  localStorage.removeItem("actualState");
  localStorage.setItem("actualState", actualstate);
}
