const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0;
    toggled = false;

const colors = [
  "rgb(229, 57, 53)",
  "rgb(253, 216, 53)",
  "rgb(76, 175, 80)"
];

const toggle = () => {
  toggled = !toggled;

  document.body.classList.toggle("toggled");
}


const handleOnClick = index => {
  toggle();
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
    //modulus operator looks for color in that array equal to click
  })
}


const createTile = index => {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  tile.style.opacity = toggled ? 0 : 1;

  tile.onclick = e => handleOnClick(index);
  return tile
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  })
}

const createGrid = () => {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 50),
  rows = Math.floor(document.body.clientHeight / 50);
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
}

createGrid();
window.onresize = () => createGrid();
