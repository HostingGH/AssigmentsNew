"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const enterMail = document.getElementById("enter-mail");
const error = document.getElementById("error");
document.querySelector(".bonus").addEventListener("click", function () {
  if (!regex.test(enterMail.value)) {
    // alert("Email không hợp lệ. Vui lòng nhập lại!");
    document.querySelector(".none").classList.remove("hidden");
    document.querySelector(".bonus-1").classList.add("hidden");
    error.innerHTML = "Email không hợp lệ. Vui lòng nhập lại!";
    error.style.color = "#DC143C";
  } else {
    document.querySelector(".self-info").classList.remove("hidden");

    document.querySelector(".bonus-2").classList.add("hidden");
  }
});
// SO THICH
document.querySelector(".like").classList.remove("d-flex");
document.querySelector(".like").classList.add("hidden");
// hover

function mOver(parent) {
  const viewParent = parent.querySelector(".view-parent");
  viewParent.classList.remove("hidden");
}
function mOut(parent) {
  const viewParent = parent.querySelector(".view-parent");
  viewParent.classList.add("hidden");
}

const viewMore = document.querySelectorAll(".view-more");
const moreInfo = document.querySelectorAll(".more-info");
console.log(moreInfo);
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    if (moreInfo[i].classList.contains("hidden")) {
      moreInfo[i].classList.remove("hidden");
      if (viewMore[i].classList.value.includes("view-more")) {
        viewMore[i].classList.remove("view-more");
        viewMore[i].classList.add("view-less");
        viewMore[i].innerHTML = "View Less";
        document.querySelector(".like").classList.add("d-flex");
      }
    } else {
      moreInfo[i].classList.add("hidden");
      viewMore[i].classList.add("view-more");
      viewMore[i].classList.remove("view-less");
      viewMore[i].innerHTML = "View More";
      document.querySelector(".like").classList.remove("d-flex");
    }
  });
}
