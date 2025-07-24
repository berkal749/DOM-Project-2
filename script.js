document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");
  var btn = document.getElementById("change-color-btn");
  btn.addEventListener("click", function () {
    var box = document.getElementById("color-box");
    box.style.backgroundColor = getRandomColor();
  });
});
function getRandomColor() {
  var color = "#";
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  for (let i = 1; i <= 3; i++) {
    color += arr[Math.floor(Math.random() * 17)];
  }
  return color;
}
