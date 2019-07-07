var firstPlayer = true;
var boxList = [];

var corners = [0, 2, 6, 8];
var edges = [1, 3, 5, 7];

var playerOne = {};
var playerTwo = {};

var boxes = document.querySelectorAll(".box");

playerOne = new player("Gracz", "Player-One", "LawnGreen");
playerTwo = new player("Komputer", "Player-Two", "DarkTurquoise");

var round = 1;
var checkComb = 0;
var checkInsert = 0;

resetGame();

function winnerDetermined(name) {
  alert("Wygrał " + name + "!");
  endGame();
}

function endGame() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", boxListener);
  }
}

function resetGame() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove(playerOne.className);
    boxes[i].classList.remove(playerTwo.className);
    boxes[i].style.backgroundColor = "white";
    boxes[i].innerHTML = "";
    boxList.push(boxes[i].id);
  }
  firstPlayer = true;

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxListener);
  }
}

function markBoxUsed(id) {
  boxList.splice(boxList.indexOf(id), 1);
  if (boxList.length === 0) {
    alert("Remis!\nAby zagrać ponownie, kliknij 'Od nowa'");
    endGame();
  }
}

function boxListener() {
  if (
    !(
      this.classList.contains(playerOne.className) ||
      this.classList.contains(playerTwo.className)
    )
  ) {
    firstPlayer
      ? ((firstPlayer = !firstPlayer),
        (this.innerHTML = "X"),
        (this.style.backgroundColor = playerOne.classColor),
        this.classList.add(playerOne.className),
        playerOne.addBox(this.id),
        playerOne.checkWin(),
        markBoxUsed(this.id),
        round++,
        ComputerMove())
      : ((firstPlayer = !firstPlayer),
        (this.innerHTML = "O"),
        (this.style.backgroundColor = playerTwo.classColor),
        this.classList.add(playerTwo.className),
        playerTwo.addBox(this.id),
        playerTwo.checkWin(),
        markBoxUsed(this.id),
        round++);
  }
}

function combinations(arg) {
  checkComb = 0;

  if (
    boxes[0].innerHTML === arg &&
    boxes[1].innerHTML === arg &&
    boxes[2].innerHTML === ""
  )
    boxes[2].click();
  else if (
    boxes[0].innerHTML === arg &&
    boxes[2].innerHTML === arg &&
    boxes[1].innerHTML === ""
  )
    boxes[1].click();
  else if (
    boxes[1].innerHTML === arg &&
    boxes[2].innerHTML === arg &&
    boxes[0].innerHTML === ""
  )
    boxes[0].click();
  else if (
    boxes[3].innerHTML === arg &&
    boxes[4].innerHTML === arg &&
    boxes[5].innerHTML === ""
  )
    boxes[5].click();
  else if (
    boxes[3].innerHTML === arg &&
    boxes[5].innerHTML === arg &&
    boxes[4].innerHTML === ""
  )
    boxes[4].click();
  else if (
    boxes[5].innerHTML === arg &&
    boxes[4].innerHTML === arg &&
    boxes[3].innerHTML === ""
  )
    boxes[3].click();
  else if (
    boxes[6].innerHTML === arg &&
    boxes[7].innerHTML === arg &&
    boxes[8].innerHTML === ""
  )
    boxes[8].click();
  else if (
    boxes[6].innerHTML === arg &&
    boxes[8].innerHTML === arg &&
    boxes[7].innerHTML === ""
  )
    boxes[7].click();
  else if (
    boxes[8].innerHTML === arg &&
    boxes[7].innerHTML === arg &&
    boxes[6].innerHTML === ""
  )
    boxes[6].click();
  else if (
    boxes[0].innerHTML === arg &&
    boxes[3].innerHTML === arg &&
    boxes[6].innerHTML === ""
  )
    boxes[6].click();
  else if (
    boxes[0].innerHTML === arg &&
    boxes[6].innerHTML === arg &&
    boxes[3].innerHTML === ""
  )
    boxes[3].click();
  else if (
    boxes[3].innerHTML === arg &&
    boxes[6].innerHTML === arg &&
    boxes[0].innerHTML === ""
  )
    boxes[0].click();
  else if (
    boxes[1].innerHTML === arg &&
    boxes[4].innerHTML === arg &&
    boxes[7].innerHTML === ""
  )
    boxes[7].click();
  else if (
    boxes[1].innerHTML === arg &&
    boxes[7].innerHTML === arg &&
    boxes[4].innerHTML === ""
  )
    boxes[4].click();
  else if (
    boxes[4].innerHTML === arg &&
    boxes[7].innerHTML === arg &&
    boxes[1].innerHTML === ""
  )
    boxes[1].click();
  else if (
    boxes[2].innerHTML === arg &&
    boxes[5].innerHTML === arg &&
    boxes[8].innerHTML === ""
  )
    boxes[8].click();
  else if (
    boxes[2].innerHTML === arg &&
    boxes[8].innerHTML === arg &&
    boxes[5].innerHTML === ""
  )
    boxes[5].click();
  else if (
    boxes[5].innerHTML === arg &&
    boxes[8].innerHTML === arg &&
    boxes[2].innerHTML === ""
  )
    boxes[2].click();
  else if (
    boxes[0].innerHTML === arg &&
    boxes[4].innerHTML === arg &&
    boxes[8].innerHTML === ""
  )
    boxes[8].click();
  else if (
    boxes[0].innerHTML === arg &&
    boxes[8].innerHTML === arg &&
    boxes[4].innerHTML === ""
  )
    boxes[4].click();
  else if (
    boxes[4].innerHTML === arg &&
    boxes[8].innerHTML === arg &&
    boxes[0].innerHTML === ""
  )
    boxes[0].click();
  else if (
    boxes[2].innerHTML === arg &&
    boxes[4].innerHTML === arg &&
    boxes[6].innerHTML === ""
  )
    boxes[6].click();
  else if (
    boxes[2].innerHTML === arg &&
    boxes[6].innerHTML === arg &&
    boxes[4].innerHTML === ""
  )
    boxes[4].click();
  else if (
    boxes[4].innerHTML === arg &&
    boxes[6].innerHTML === arg &&
    boxes[2].innerHTML === ""
  )
    boxes[2].click();
  else checkComb = 1;
}

function dangerCorners() {
  checkInsert = 0;

  if (
    boxes[1].innerHTML === "X" &&
    boxes[3].innerHTML === "X" &&
    boxes[0].innerHTML === ""
  )
    boxes[0].click();
  else if (
    boxes[1].innerHTML === "X" &&
    boxes[5].innerHTML === "X" &&
    boxes[2].innerHTML === ""
  )
    boxes[2].click();
  else if (
    boxes[7].innerHTML === "X" &&
    boxes[5].innerHTML === "X" &&
    boxes[8].innerHTML === ""
  )
    boxes[8].click();
  else if (
    boxes[3].innerHTML === "X" &&
    boxes[7].innerHTML === "X" &&
    boxes[6].innerHTML === ""
  )
    boxes[6].click();
  else checkInsert = 1;
}

function insertEdge() {
  if (boxes[1].innerHTML === "") boxes[1].click();
  else if (boxes[3].innerHTML === "") boxes[3].click();
  else if (boxes[5].innerHTML === "") boxes[5].click();
  else if (boxes[7].innerHTML === "") boxes[7].click();
}

function diag() {
  checkInsert = 0;

  if (
    boxes[4].innerHTML === "X" &&
    boxes[0].innerHTML === "X" &&
    boxes[8].innerHTML === "O"
  )
    boxes[2].click();
  else if (
    boxes[4].innerHTML === "X" &&
    boxes[2].innerHTML === "X" &&
    boxes[6].innerHTML === "O"
  )
    boxes[0].click();
  else if (
    boxes[4].innerHTML === "X" &&
    boxes[6].innerHTML === "X" &&
    boxes[2].innerHTML === "O"
  )
    boxes[0].click();
  else if (
    boxes[4].innerHTML === "X" &&
    boxes[8].innerHTML === "X" &&
    boxes[0].innerHTML === "O"
  )
    boxes[2].click();
  else checkInsert = 1;
}

function ComputerMove() {
  if (round === 2) {
    if (boxes[4].innerHTML != "") {
      boxes[corners[Math.floor(Math.random() * 4)]].click();
    } else {
      boxes[4].click();
    }
  } else if (round === 4) {
    combinations("O");
    if (checkComb === 1) {
      combinations("X");
      if (checkComb === 1) {
        dangerCorners();
        if (checkInsert === 1) {
          diag();
          if (checkInsert === 1) {
            insertEdge();
          }
        }
      }
    }
  } else {
    combinations("O");
    if (checkComb === 1) {
      combinations("X");
      if (checkComb === 1) {
        dangerCorners();
        if (checkInsert === 1) {
          insertEdge();
        }
      }
    }
  }
}

function player(playerName, playerClass, classColor) {
  this.name = playerName;
  this.className = playerClass;
  this.classColor = classColor;
  this.row1 = [];
  this.row2 = [];
  this.row3 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];

  this.addBox = function(boxNumber) {
    var rowNum = "row" + boxNumber[0];
    this[rowNum].push(boxNumber);
    this[rowNum].sort();

    var colNum = "col" + boxNumber[1];
    this[colNum].push(boxNumber);
    this[colNum].sort();
  };

  this.checkWin = function() {
    for (var rowNum = 1; rowNum <= 3; rowNum++) {
      if (this["row" + rowNum].length === 3) {
        winnerDetermined(this.name);
      }
    }

    for (var colNum = 1; colNum <= 3; colNum++) {
      if (this["col" + colNum].length === 3) {
        winnerDetermined(this.name);
      }
    }

    if (this.row2.includes("22")) {
      if (
        (this.row1.includes("11") && this.row3.includes("33")) ||
        (this.row1.includes("13") && this.row3.includes("31"))
      ) {
        winnerDetermined(this.name);
      }
    }
  };
}
