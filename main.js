// 1.要素の取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
// console.log(empties);


// 2. ドラッグのトリガーの準備
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


// 3. ドラッグ関数の追加
function dragStart () {
  console.log("start");
  fill.className += " hold";
  setTimeout( () => {
    fill.className = "invisible";
  }, 0);
}

function dragEnd () {
  console.log("END");
  fill.className = "fill";
}


// 4. 一つ一つのempty要素を取得
for(const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragOver (e) {
  e.preventDefault();
  console.log("over");
  // fill.className = "fill";
}

function dragEnter () {
  console.log("enter");
  this.className += " hovered";
  // fill.className = "fill";
}
function dragLeave () {
  console.log("Leave");
  // fill.className = "fill";
  this.className = " empty"
}

function dragDrop () {
  console.log("drop");
  // fill.className = "fill";
  this.className = "empty";
  this.appendChild(fill);
}
