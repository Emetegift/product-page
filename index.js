let productImg = document.getElementById("productImg");

let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "images/1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "images/2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "images/3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[3].onclick = function () {
  productImg.src = "images/4.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
