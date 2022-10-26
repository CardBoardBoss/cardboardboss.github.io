const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0;
    toggled = false;

const toggle = () => {
  toggled = !toggled;

  document.body.classList.toggle("toggled");
}


const handleOnClick = index => {
  toggle();
  anime({
    targets: ".tile",
    opacity: toggled ? 1 : 1,
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

const button = document.querySelector('#egh1');
const card = document.querySelector('#card');

const flipCard = () => {
  var num = event.currentTarget.id[3];
  if (card.classList.contains("toggled")){
    console.log("yup");
    card.className = '';
    card.classList.add("nextCard")
    console.log(card.classList);
  }
  else if (card.classList.contains("nextCard")) {
    console.log("pooor baby")
    card.classList.remove("nextCard");
    card.classList.add("nextCard2");
    card.classList.add("toggled");
  }
  else {
    const cardText = document.querySelector('#info' + '1')
    cardText.style.display = 'none'
    card.classList.remove("card");
    card.classList.add("animateCard");
    card.classList.add("toggled")
    card.style.borderWidth = '2px';
    console.log("help");
  }
}

document.querySelectorAll('.info-button').forEach((item) => {
  item.addEventListener('click', flipCard);
});
