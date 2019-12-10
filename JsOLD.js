const elementSnake = document.getElementById("snakeToMove");
const elementMouse = document.getElementById("mouseToMove");
//console.log(elementSnake);

const step = 50;
let edgeX = [-step*8, step*8]; // -400 400
let edgeY = [-step*6, step*6]; // -300 300
let whereSnake = [edgeX[0], edgeY[0]];
let whereMouse = [0, 0];
let score = 0;

const keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}

elementMouse.style.marginTop = 0 + "px";
elementMouse.style.marginLeft = 0 + "px";
elementSnake.style.marginTop = whereSnake[1] + "px";
elementSnake.style.marginLeft = whereSnake[0] + "px";

function  MoveSnake(e){

  switch(e.keyCode){
      case keys.LEFT:
        if (whereSnake[0] !== edgeX[0]){
        whereSnake[0] -= step;
        elementSnake.style.marginLeft = whereSnake[0] + "px";
        break;
      }
      break;

      case keys.UP:
        if (whereSnake[1] !== edgeY[0]){
        whereSnake[1] -= step;
        elementSnake.style.marginTop = whereSnake[1] + "px";
        break;
      }
      break;

      case keys.RIGHT:
      if (whereSnake[0] != edgeX[1]){
        whereSnake[0] += step;
        elementSnake.style.marginLeft = whereSnake[0] + "px";
        break;
      }
      break;

      case keys.DOWN:
      if (whereSnake[1] != edgeY[1]){
        whereSnake[1] += step;
        elementSnake.style.marginTop = whereSnake[1] + "px";
        break;
      }
      break;
  }
  if (elementSnake.style.marginLeft === elementMouse.style.marginLeft
  && elementSnake.style.marginTop === elementMouse.style.marginTop){
    score += 1;
    elementSnake.innerHTML = score;
    //addSnakeDiv();
    //console.log(elementSnake);
    MoveMouse();
  }
}

function MoveMouse() {
  console.log('Оп Бля');
  /*if (whereMouse[1] != resolution[1] && whereMouse[0] != resolution[0] &&
  whereMouse[1] !== 0 && whereMouse[0] !== 0){*/
    whereMouse[0] = getRandomInt(-8 , 8)*step;
    elementMouse.style.marginLeft = whereMouse[0] + "px";
    whereMouse[1] = getRandomInt(-6, 6)*step;
    elementMouse.style.marginTop = whereMouse[1] + "px";
}

function getRandomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


function createSnakeBody() {
  console.log('+div');
  let wrapper = document.getElementById("wrap4All");
  wrapper.innerHtml += '<div class="element">Body</div>';
  document.body.append(wrapper);
}
createSnakeBody();

document.addEventListener("keydown", MoveSnake);
