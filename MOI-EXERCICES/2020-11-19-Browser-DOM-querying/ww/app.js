//Change the font of the body element.
document.querySelector("body").style.fontSize = "20px";

//Center the text of h1 on the page.
document.querySelector(".title").style.textAlign = "center";
//The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element.
let a = document.getElementsByClassName("category");
for (let i = 0; i < a.length; i++) {
  a[i].style.color = "blue";
  a[i].style.fontSize = "25px";
  a[i].style.textDecoration = "underline";
}

//Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created.

const _colorGenerator_ = () => {
  let value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let radom = Math.round(Math.random() * 15);
    color = color + value[radom];
  }
  return color;
};
let randomColor0 = _colorGenerator_();
let randomColor1 = _colorGenerator_();
let randomColor2 = _colorGenerator_();
//console.log(_colorGenerator_());
let foodCategory = document.getElementsByClassName("food-category");
console.log(foodCategory);
foodCategory[0].style.backgroundColor = randomColor0;
foodCategory[0].style.opacity = 0.6;
foodCategory[1].style.backgroundColor = randomColor1;
foodCategory[1].style.opacity = 0.6;
foodCategory[2].style.backgroundColor = randomColor2;
foodCategory[2].style.opacity = 0.6;
let myWidth = window.innerWidth;
let foodCategory1 = document.querySelectorAll(".food-category");
if (myWidth > 500) {
  foodCategory1.forEach((el) => {
    el.style.width = "25%";
  });
}

console.log(myWidth);

//Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
if (myWidth > 500) {
  let main = document.querySelectorAll("main");
  main.forEach((el) => {
    el.style.display = "flex";
    el.style.justifyContent = "space-around";
  });
}
if (myWidth < 500) {
  foodCategory1.forEach((el) => {
    el.style.width = "100%";
  });
}

//Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.
document.getElementById("warning").style.fontFamily = "sans-serif";
document.getElementById("warning").style.fontSize = "25px";
document.getElementById("warning").style.textAlign = "center";

//Select all _even_ `allergy-info` items. Give the even items a different background color.
let allergies = document.querySelectorAll(".allergies");
allergies.forEach((el) => {
  el.style.display = "flex";
  el.style.flexDirection = "column";
  el.style.padding = "10px 0";
  el.style.width = "30%";
  el.style.listStyle = "none";
});

let allergyInfo = document.querySelectorAll(".allergy-info");
for (let i = 0; i < allergyInfo.length; i++) {
  if (i % 2 !== 0) {
    allergyInfo[i].style.backgroundColor = "#2bbef0";
  }
}

//  Make the `allergy-warning` appear as a column in the center of the page.
document.querySelector(".allergies").style.marginLeft = "35%";

//footer
let footer = document.querySelectorAll("footer");
footer.forEach((el) => {
  el.style.display = "flex";
  el.style.justifyContent = "center";
});

let foodDesc = document.querySelectorAll(".food-desc");
foodDesc.forEach((el) => {
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.margin = " 0 10px";
  el.style.width = " 90px";
  el.style.height = " 90px";
  el.style.borderRadius = " 90px";
  el.style.border = "5px solid #d59b17";
});
