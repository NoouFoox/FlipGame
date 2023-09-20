const bodyMain = document.querySelector("main");
console.log("测试");
const flipObj = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const upReader = () => {
  flipObj.forEach((xitem, ix) =>
    xitem.forEach((yitem, iy) => {
      const bodyChild = document.createElement("div");
      bodyChild.style.width = `${bodyMain.clientWidth / flipObj.length}px`;
      bodyChild.style.height = `${bodyMain.clientWidth / flipObj.length}px`;
      bodyChild.dataset.x = ix;
      bodyChild.dataset.y = iy;
      bodyMain.appendChild(bodyChild);
    })
  );
};
upReader();
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

bodyMain.addEventListener("click", (e) => {
  const dx = Number(e.target.dataset.x);
  const dy = Number(e.target.dataset.y);
  flipObjCp(dx, dy);
  flipObjCp(dx + 1, dy);
  flipObjCp(dx - 1, dy);
  flipObjCp(dx, dy + 1);
  flipObjCp(dx, dy - 1);
  // console.log(flipObj);
  reader();
});
const reader = () => {
  let iNum = 0;
  flipObj.forEach((xitem) =>
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
