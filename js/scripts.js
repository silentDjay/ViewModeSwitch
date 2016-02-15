var cameraButtonShift = document.querySelector("#cameraButton");
var bikeButtonShift = document.querySelector("#bikeButton");
var bellButtonShift = document.querySelector("#bellButton");
var calcButtonShift = document.querySelector("#calcButton");
var cubesButtonShift = document.querySelector("#cubesButton");
var fireExtButtonShift = document.querySelector("#fireExtButton");
var hourglassButtonShift = document.querySelector("#hourglassButton");
var keyButtonShift = document.querySelector("#keyButton");
var musicButtonShift = document.querySelector("#musicButton");
var planeButtonShift = document.querySelector("#planeButton");
var paperPlaneButtonShift = document.querySelector("#paperPlaneButton");
var umbrellaButtonShift = document.querySelector("#umbrellaButton");

cameraButtonShift.addEventListener("mouseover", function () {
  cameraButtonShift.style.backgroundColor = "#10689a";
});
cameraButtonShift.addEventListener("mouseout", function () {
  cameraButtonShift.style.backgroundColor = "#47a3da";
});

bikeButtonShift.addEventListener("mouseover", function () {
  bikeButtonShift.style.backgroundColor = "#10689a";
});
bikeButtonShift.addEventListener("mouseout", function () {
  bikeButtonShift.style.backgroundColor = "#47a3da";
});

bellButtonShift.addEventListener("mouseover", function () {
  bellButtonShift.style.backgroundColor = "#10689a";
});
bellButtonShift.addEventListener("mouseout", function () {
  bellButtonShift.style.backgroundColor = "#47a3da";
});

calcButtonShift.addEventListener("mouseover", function () {
  calcButtonShift.style.backgroundColor = "#10689a";
});
calcButtonShift.addEventListener("mouseout", function () {
  calcButtonShift.style.backgroundColor = "#47a3da";
});

cubesButtonShift.addEventListener("mouseover", function () {
  cubesButtonShift.style.backgroundColor = "#10689a";
});
cubesButtonShift.addEventListener("mouseout", function () {
  cubesButtonShift.style.backgroundColor = "#47a3da";
});

fireExtButtonShift.addEventListener("mouseover", function () {
  fireExtButtonShift.style.backgroundColor = "#10689a";
});
fireExtButtonShift.addEventListener("mouseout", function () {
  fireExtButtonShift.style.backgroundColor = "#47a3da";
});

hourglassButtonShift.addEventListener("mouseover", function () {
  hourglassButtonShift.style.backgroundColor = "#10689a";
});
hourglassButtonShift.addEventListener("mouseout", function () {
  hourglassButtonShift.style.backgroundColor = "#47a3da";
});

keyButtonShift.addEventListener("mouseover", function () {
  keyButtonShift.style.backgroundColor = "#10689a";
});
keyButtonShift.addEventListener("mouseout", function () {
  keyButtonShift.style.backgroundColor = "#47a3da";
});

musicButtonShift.addEventListener("mouseover", function () {
  musicButtonShift.style.backgroundColor = "#10689a";
});
musicButtonShift.addEventListener("mouseout", function () {
  musicButtonShift.style.backgroundColor = "#47a3da";
});

planeButtonShift.addEventListener("mouseover", function () {
  planeButtonShift.style.backgroundColor = "#10689a";
});
planeButtonShift.addEventListener("mouseout", function () {
  planeButtonShift.style.backgroundColor = "#47a3da";
});

paperPlaneButtonShift.addEventListener("mouseover", function () {
  paperPlaneButtonShift.style.backgroundColor = "#10689a";
});
paperPlaneButtonShift.addEventListener("mouseout", function () {
  paperPlaneButtonShift.style.backgroundColor = "#47a3da";
});

umbrellaButtonShift.addEventListener("mouseover", function () {
  umbrellaButtonShift.style.backgroundColor = "#10689a";
});
umbrellaButtonShift.addEventListener("mouseout", function () {
  umbrellaButtonShift.style.backgroundColor = "#47a3da";
});

var blockDisplay = document.querySelector("#blockDisplay");
var listDisplay = document.querySelector("#listDisplay");
var blockStyles = document.querySelector("#blockStyles");
var listStyles = document.querySelector("#listStyles");


blockDisplay.addEventListener("click", function () {
  listStyles.disabled = true;
  blockStyles.disabled = false;
});
listDisplay.addEventListener("click", function () {
  blockStyles.disabled = true;
  listStyles.disabled = false;
});
