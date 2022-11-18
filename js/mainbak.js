const bodyMain = document.querySelector("main");
// 数组生成
newArr = (n) => {
  let resultArr = [];
  const zd = new Array(n).fill(0);
  zd.forEach((item, i, arr) => resultArr.push(arr));
  console.log(resultArr);
  return resultArr;
};
let flipObj = newArr(3);
const reader = (obj) => {
  let iNum = 0;
  obj.forEach((xitem) =>
    xitem.forEach((yitem) => {
      if (yitem === 1) {
        bodyMain.querySelectorAll("div")[iNum].style.background = "#eeffcc";
      } else {
        bodyMain.querySelectorAll("div")[iNum].style.background = "#fff";
      }
      iNum++;
    })
  );
};

const newGame = (n) => {
  let flipObj = [];
  const zd = new Array(n).fill(0);
  zd.forEach((item, i, arr) => flipObj.push(arr));
  bodyMain.removeEventListener("click", clicEvent);
  upReader(flipObj);
};
// FIXME:有bug
// TODO:
const clicEvent = (e) => {
  const dx = Number(e.target.dataset.x);
  const dy = Number(e.target.dataset.y);
  flipObjCp(dx, dy);
  flipObjCp(dx + 1, dy);
  flipObjCp(dx - 1, dy);
  flipObjCp(dx, dy + 1);
  flipObjCp(dx, dy - 1);
  reader(newArr(3));
};
const upReader = (obj) => {
  bodyMain.innerHTML = "";
  obj.forEach((xitem, ix) =>
    xitem.forEach((yitem, iy) => {
      const bodyChild = document.createElement("div");
      bodyChild.style.width = `${bodyMain.clientWidth / obj.length}px`;
      bodyChild.style.height = `${bodyMain.clientWidth / obj.length}px`;
      bodyChild.dataset.x = ix;
      bodyChild.dataset.y = iy;
      bodyMain.appendChild(bodyChild);
    })
  );
  bodyMain.addEventListener("click", clicEvent);
};
upReader(flipObj);
const negate = (d) => (d === 0 ? 1 : 0);
const flipObjCp = (x, y) => {
  let t = 0;
  try {
    t = flipObj[x][y];
  } catch (err) {
    t = "no";
  }
  if (typeof t === "number") {
    flipObj[x][y] = negate(flipObj[x][y]);
  }
};
