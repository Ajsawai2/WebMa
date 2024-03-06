let navLinks = document.querySelectorAll("div header nav a");

let but1 = document.querySelector("#butA");
let but2 = document.querySelector("#butB");
let but3 = document.querySelector("#butC");
let but4 = document.querySelector("#butD");
let his2 = document.querySelector(".history");
let user = document.querySelector(".user");
user.addEventListener("click", () => {
  navLinks[1].style.color = "#0ef";
  navLinks[0].style.color = "#fff";
});

his2.addEventListener("click", () => {
  navLinks[2].style.color = "#0ef";
  navLinks[0].style.color = "#fff";
});

but1.addEventListener("click", () => {
  navLinks[0].style.color = "#0ef";
  navLinks[1].style.color = "#fff";
  navLinks[2].style.color = "#fff";
  navLinks[3].style.color = "#fff";
});

but2.addEventListener("click", () => {
  navLinks[0].style.color = "#fff";
  navLinks[1].style.color = "#0ef";
  navLinks[2].style.color = "#fff";
  navLinks[3].style.color = "#fff";
});

but4.addEventListener("click", () => {
  navLinks[0].style.color = "#fff";
  navLinks[1].style.color = "#fff";
  navLinks[2].style.color = "#0ef";
  //  navLinks[3].style.color="#0ef";
});

let bs = () => {
  setInterval(() => {
    document.querySelector("body").style.backgroundImage = "";

    let bx = Math.floor(Math.random() * 100000000);
    return bx;
  }, 0.1);
};

let signup = document.querySelector(".fod");

setTimeout(() => {
  signup.style.display = "flex";
}, 8000);

let close = document.querySelector("#bud");
close.addEventListener("click", () => {
  setTimeout(() => {
    signup.style.display = "none";
  }, 0.8);
});
