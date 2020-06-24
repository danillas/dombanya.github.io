const CANVAS = document.getElementById("game");
const CTX = CANVAS.getContext("2d");

//Подключение картинки для фона
const GROUND = new Image();
GROUND.src = "assets/ground.png";

const FOOD = new Image();
FOOD.src = "assets/food.png";

let box = 32; //ширина и высота одной клетки

let score = 0; //Счет

let dir;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box, //17 - количество ячеек по вертикали
  y: Math.floor(Math.random() * 15 + 3) * box,
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

//Обработка нажатия клавиш
document.addEventListener("keydown", direction);

function direction(event) {
  //Стрелка влево
  if (event.keyCode == 37 && dir != "right") {
    dir = "left";
  } else if (event.keyCode == 38 && dir != "down") {
    dir = "up";
  } else if (event.keyCode == 39 && dir != "left") {
    dir = "right";
  } else if (event.keyCode == 40 && dir != "up") {
    dir = "down";
  }
}

function eatTail(head, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (head.x == arr[i].x && head.y == arr[i].y) {
      clearInterval(game);
      alert("Game Over!");
    }
  }
}

//Отрисовка поля, еды, змейки
function drawGame() {
  CTX.drawImage(GROUND, 0, 0);

  CTX.drawImage(FOOD, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    CTX.fillStyle = i == 0 ? "red" : "green";
    CTX.fillRect(snake[i].x, snake[i].y, box, box);
  }

  CTX.fillStyle = "white";
  CTX.font = "50px Arial";
  CTX.fillText(score, box * 2.5, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
  } else {
    snake.pop();
  }

  if (
    snakeX < box ||
    snakeX > box * 17 ||
    snakeY < box * 3 ||
    snakeY > box * 17
  ) {
    clearInterval(game);
    alert("Game Over!");
  }

  if (dir == "left") snakeX -= box;
  if (dir == "right") snakeX += box;
  if (dir == "up") snakeY -= box;
  if (dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  eatTail(newHead, snake);
  snake.unshift(newHead);
}

let game = setInterval(drawGame, 150); //Вызываем drawGame() каждые 100мс
