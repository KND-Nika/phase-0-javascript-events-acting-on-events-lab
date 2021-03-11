// Your code here
//Moves dodger to the left
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// MOVES DODGER TO THE RIGHT
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


// save a reference to item we want to move as a variable (DONE IN LINE 3)

// to change style property of item (made into a variable) ->
    // variableName.style._________ | backgroundColor, height, width, bottom, etc.
/* event listener in palce and event it's listening for is triggered; JS obj. (this contains info. about...
... the event) is passed as an arguement to callback function */