// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft() {
    //curent postion 
    //parse integre
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

//keydown =>type
//The event object contains a lot of information
// about the event that took place. This information 
//includes details like which key was pressed, any modifier keys that were held down (Shift, Ctrl, Alt, etc.),
// the target element that received the event, and more.
//type of event is key bah n3rf wina key ldhito key ,code 
  document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowLeft") {
      moveDodgerLeft();

    }
    else{

        moveDodgerRight();
    }
  });