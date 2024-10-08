/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

document.addEventListener("DOMContentLoaded", () => {
  let image = document.getElementById("image");
  let content = document.getElementById("content");
  let btnCreate = document.getElementById("btnCreate");

  btnCreate.onclick = () => {
    if (content.value === "") return;
    let linkQR = "https://api.qrserver.com/v1/create-qr-code/";
    image.src =
      linkQR + "?size=500x500&data=" + encodeURIComponent(content.value);
  };
});
