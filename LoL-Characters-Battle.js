const enterZones1 = document.getElementsByClassName("enterZone1");
const enterZones2 = document.getElementsByClassName("enterZone2");
const characters1 = document.getElementsByClassName("character1");
const characters2 = document.getElementsByClassName("character2");
const battleBoard = document.getElementById("gameBoard");
const battleBtn = document.getElementById("nextTurn");
const firstPlayerCharacter = document.getElementsByClassName(
  "firstPlayerCharacter"
);
const secondPlayerCharacter = document.getElementsByClassName(
  "secondPlayerCharacter"
);
let characterPower;
let characterNumber;
let i;
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("dragged-id", ev.target.className);
  console.log(ev.target.id);
  characterNumber =
    Number(ev.target.id.slice(ev.target.id.length - 1, ev.target.id.length)) -
    1;
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("dragged-id");
  if (
    ev.target.className.slice(
      ev.target.className.length - 1,
      ev.target.className.length
    ) === "1"
  ) {
    ev.target.appendChild(
      document.getElementsByClassName(data)[characterNumber]
    );
    maintainImage1(characterNumber);
  } else {
    ev.target.appendChild(
      document.getElementsByClassName(data)[
        characterNumber + (characters2.length - 5)
      ]
    );
    maintainImage2(characterNumber);
  }
  ev.target.innerHTML =
    ev.target.innerHTML.slice(0, 16) +
    'false" ' +
    ev.target.innerHTML.slice(22);
}
const maintainImage1 = (num) => {
  const eachCharacter1 = (number) => {
    return (
      '<img draggable="true" id="firstPlayerCharacter' +
      (num + 1) +
      '" class="character1" '
    );
  };
  if (num === 0) {
    firstPlayerCharacter[num].innerHTML =
      eachCharacter1(num) + 'src = "aatrox.jpg">';
  } else if (num === 1) {
    firstPlayerCharacter[num].innerHTML =
      eachCharacter1(num) + 'src = "aurelion sol.jpg">';
  } else if (num === 2) {
    firstPlayerCharacter[num].innerHTML =
      eachCharacter1(num) + 'src = "aphelios.jpg">';
  } else if (num === 3) {
    firstPlayerCharacter[num].innerHTML =
      eachCharacter1(num) + 'src = "corki.jpg">';
  } else if (num === 4) {
    firstPlayerCharacter[num].innerHTML =
      eachCharacter1(num) + 'src = "akali.jpg">';
  }
};
const maintainImage2 = (num) => {
  const eachCharacter2 = (number) => {
    return (
      '<img draggable="true" id="secondPlayerCharacter' +
      (num + 1) +
      '" class="character2" '
    );
  };
  if (num === 0) {
    secondPlayerCharacter[num].innerHTML =
      eachCharacter2(num) + 'src = "aatrox.jpg">';
  } else if (num === 1) {
    secondPlayerCharacter[num].innerHTML =
      eachCharacter2(num) + 'src = "aurelion sol.jpg">';
  } else if (num === 2) {
    secondPlayerCharacter[num].innerHTML =
      eachCharacter2(num) + 'src = "aphelios.jpg">';
  } else if (num === 3) {
    secondPlayerCharacter[num].innerHTML =
      eachCharacter2(num) + 'src = "corki.jpg">';
  } else if (num === 4) {
    secondPlayerCharacter[num].innerHTML =
      eachCharacter2(num) + 'src = "akali.jpg">';
  }
};
const forward1 = () => {
  let j;
  for (i = 0; i < battleBoard.rows.length; i++) {
    for (j = 0; j < battleBoard.rows[0].cells.length - 1; j++) {
      if (battleBoard.rows[i].cells[8 - j].children.length === 0) {
      } else {
        if (
          battleBoard.rows[i].cells[8 - j].children[0].className ===
          "character2"
        ) {
        } else {
          if (battleBoard.rows[i].cells[8 - j].className === "enterZone2") {
          } else {
            battleBoard.rows[i].cells[9 - j].innerHTML =
              battleBoard.rows[i].cells[8 - j].innerHTML;
            battleBoard.rows[i].cells[8 - j].innerHTML = "";
          }
        }
      }
    }
  }
};
const forward2 = () => {
  let j;
  for (i = 0; i < battleBoard.rows.length; i++) {
    for (j = 0; j < battleBoard.rows[0].cells.length - 1; j++) {
      if (battleBoard.rows[i].cells[j + 1].children.length === 0) {
      } else {
        if (
          battleBoard.rows[i].cells[j + 1].children[0].className ===
          "character1"
        ) {
        } else {
          if (battleBoard.rows[i].cells[j + 1].className === "enterZone1") {
          } else {
            battleBoard.rows[i].cells[j].innerHTML =
              battleBoard.rows[i].cells[j + 1].innerHTML;
            battleBoard.rows[i].cells[j + 1].innerHTML = "";
          }
        }
      }
    }
  }
};
const forward = () => {
  forward1();
  forward2();
};
for (i = 0; i < enterZones1.length; i++) {
  enterZones1[i].addEventListener("dragover", () => {
    allowDrop(event);
  });
  enterZones2[i].addEventListener("dragover", () => {
    allowDrop(event);
  });
}
for (i = 0; i < enterZones1.length; i++) {
  enterZones1[i].addEventListener("drop", () => {
    drop(event);
  });
  enterZones2[i].addEventListener("drop", () => {
    drop(event);
  });
}
for (i = 0; i < characters1.length; i++) {
  characters1[i].addEventListener("dragstart", () => {
    drag(event);
  });
  characters2[i].addEventListener("dragstart", () => {
    drag(event);
  });
}
battleBtn.addEventListener("click", forward);
