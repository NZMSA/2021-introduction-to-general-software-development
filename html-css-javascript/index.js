console.log("Hello World");

const notLoaded = document.getElementById("btn");
console.log(notLoaded);

window.onload = () => {
  const btn = document.getElementById("btn");
  btn.innerHTML = "Red";
  btn.style = "color: red";
  console.log(btn);

  let blue = false;

  const handleClick = () => {
    console.log("I clicked my btn");
    if (blue) {
      btn.innerHTML = "Red";
      btn.style = "color: red";
      blue = false;
    } else {
      btn.innerHTML = "Blue";
      btn.style = "color: blue";
      blue = true;
    }
  };

  btn.onclick = handleClick;

  //btn.addEventListener("click", handleClick);
};
