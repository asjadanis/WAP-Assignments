window.onload = () => {
  const TOTAL_TILES = 15;
  const COLS = 4;
  const TILE_SIZE = 90;
  let solvable = true;
  let emptyX = 0;
  let emptyY = 0;

  document.getElementById("shufflebutton").onclick = onShuffle;

  const createPuzzlePieces = () => {
    let x = 0;
    let y = 0;
    let count = 0;
    const tiles = $("#puzzlearea div");
    for (let i = 0; i < TOTAL_TILES; i++) {
      const tile = tiles[i];
      if (count === COLS) {
        x = 0;
        y += TILE_SIZE;
        count = 0;
      }
      tile.className = "puzzlepiece";
      tile.value = false;
      tile.style.left = x + "px";
      tile.style.top = y + "px";
      tile.style.backgroundPosition = -x + "px " + -y + "px";
      tile.onmouseover = movablePiece;
      tile.onmouseup = makeMovable;
      tile.onmouseout = naturalBorder;
      count++;
      x += TILE_SIZE;
    }
    emptyX = x;
    emptyY = y;
  };

  function movablePiece() {
    if (testX(this) || testY(this)) {
      highlightPiece(this);
    }
  }

  function makeMovable() {
    movePiece(this);
  }

  function naturalBorder() {
    this.style.border = "5px solid black";
    this.style.color = "black";
    this.style.cursor = "default";
    this.value = false;
  }

  function highlightPiece(thisPiece) {
    thisPiece.style.border = "5px solid red";
    thisPiece.style.color = "red";
    thisPiece.style.cursor = "pointer";
    thisPiece.value = true;
  }

  function testX(thisPiece) {
    if (parseInt(thisPiece.style.left) == emptyX) {
      if (
        parseInt(thisPiece.style.top) == emptyY - TILE_SIZE ||
        parseInt(thisPiece.style.top) == emptyY + TILE_SIZE
      ) {
        return true;
      }
    }
  }

  function testY(thisPiece) {
    if (parseInt(thisPiece.style.top) == emptyY) {
      if (
        parseInt(thisPiece.style.left) == emptyX - TILE_SIZE ||
        parseInt(thisPiece.style.left) == emptyX + TILE_SIZE
      ) {
        return true;
      }
    }
  }

  function movePiece(thisPiece) {
    if (thisPiece.value === true) {
      var tempX = parseInt(thisPiece.style.left);
      var tempY = parseInt(thisPiece.style.top);
      thisPiece.style.left = emptyX + "px";
      thisPiece.style.top = emptyY + "px";
      thisPiece.value = false;
      emptyX = tempX;
      emptyY = tempY;
      if (solvable === true) {
        checkSolved();
      }
    }
  }

  function onShuffle(e) {
    solvable = false;
    const tiles = $("#puzzlearea div");
    for (let i = 0; i < 1000; i++) {
      const neighbors = [];
      for (let j = 0; j < tiles.length; j++) {
        if (testX(tiles[j]) || testY(tiles[j])) {
          neighbors.push(tiles[j]);
        }
      }
      const sP = Math.floor(Math.random() * neighbors.length);
      neighbors[sP].value = true;
      movePiece(neighbors[sP]);
      neighbors[sP].value = false;
    }
  }

  createPuzzlePieces();
};
