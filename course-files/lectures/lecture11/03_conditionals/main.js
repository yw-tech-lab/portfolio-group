// See CodePen: https://codepen.io/vanwars/pen/KYjNQm?editors=0010

// event handler:
const fontSizer = ev => {
    const contentElement = document.querySelector(".content");
    const buttonElement = ev.target;

    if (buttonElement.innerHTML === "bigger") {
         contentElement.style.fontSize = "3em";
         buttonElement.innerHTML = "smaller";
    } else {
         contentElement.style.fontSize = "1em";
         buttonElement.innerHTML = "bigger";
    }
    document.querySelector("body").style.background = ev.target.innerHTML;
};

// event listener attach to all of the buttons:
// document.querySelector("#font_sizer").onclick = fontSizer;


