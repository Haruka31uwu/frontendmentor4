<template>
  <div class="game-area">
    <board-options class="board-options"/>
    <div class="main-component">
      <div class="main-board">
        <div
          class="board-row"
          v-for="(item, index) in numRows"
          :key="`row-${index}`"
        >
          <div
            class="board-element"
            v-for="(item2, index2) in numCols"
            :id="`item-${index}-${index2}`"
            :key="`item-${index}-${index2}`"
          ></div>
        </div>
      </div>
      <div class="background-board">
        <div
          class="board-row"
          v-for="(item, index) in numRows"
          :key="`row-${index}`"
        >
          <div
            class="board-element-background"
            v-for="(item2, index2) in numCols"
            :key="`item-${index}-${index2}`"
            :v-model="board[index][index2]"
            @click="putPiece(index, index2)"
          ></div>
        </div>
      </div>
    </div>
    <player-time-info
      v-if="winner == false"
      ref="player-turn-info"
      :player-info="getPlayerTurnInfo"
      class="player-turn-info"
      @turnEnded="changeTurn()"
    />
    <player-win
      v-if="winner != false"
      :player-info="winnerInfo"
      class="player-win"
    />
  </div>
</template>

<script>
import PlayerTimeInfo from "./PlayerTimeInfo.vue";
import PlayerWin from "./PlayerWin.vue";
import BoardOptions from "./BoardOptions.vue";
export default {
  components: {
    PlayerTimeInfo,
    PlayerWin,
    BoardOptions,
  },
  props: {
    numRows: {
      type: Number,
      default: 7,
    },
    numCols: {
      type: Number,
      default: 7,
    },
    elementSize: {
      type: Object,
      default: () => {
        return {
          width: 125,
          height: 125,
        };
      },
    },
    playerTurn: {
      type: Number,
      default: 0,
    },
    players: {
      type: Object,
    },
  },
  computed: {
    /**
     * Get the player turn info
     * @returns {Object} player turn info
     */
    getPlayerTurnInfo() {
      return this.players.playersInfo[this.playerT];
    },
  },
  mounted() {
    this.createBoard();
  },
  data() {
    return {
      board: Array.from(
        {
          length: this.numRows,
        },
        () => Array(this.numCols).fill(0)
      ),
      playerT: this.playerTurn,
      winner: false,
      winnerInfo: {},
    };
  },
  methods: {
    /**
     * Create the board
     * @returns {void}
     */
    createBoard() {
      const board = document.querySelector(".main-board");
      const backgroundBoard = document.querySelector(".background-board");
      board.style.minWidth = `${this.numCols * this.elementSize.width + 200}px`;
      backgroundBoard.style.minWidth = `${
        this.numCols * this.elementSize.width + 200
      }px`;
      const boardElements = document.querySelectorAll(".board-element");
      const boardElementsBackground = document.querySelectorAll(
        ".board-element-background"
      );
      boardElements.forEach((element) => {
        element.style.width = `${this.elementSize.width}px`;
        element.style.height = `${this.elementSize.height}px`;
      });
      boardElementsBackground.forEach((element) => {
        element.style.width = `${this.elementSize.width}px`;
        element.style.height = `${this.elementSize.height}px`;
      });
      const boardRows = document.querySelectorAll(".board-row");
      boardRows.forEach((element) => {
        element.style.width = `${
          this.numCols * this.elementSize.width + 200
        }px`;
      });
    },
    /**
     * Put a piece in the board
     * @param {number} row row
     * @param {number} col column
     * @returns {void}
     */
    putPiece(row, col) {
      let lastRow = this.numRows - 1;

      let columnBoard = this.board[lastRow][col];

      if (row >= 0)
        if (columnBoard === 0) {
          this.board[lastRow][col] = 1;
          this.animatePutPiece(lastRow, col);
          this.addPieceToPlayer(lastRow, col);
        } else {
          while (columnBoard !== 0) {
            lastRow--;
            columnBoard = this.board[lastRow][col];
            if (columnBoard === 0) {
              if (lastRow < row) {
                return;
              }
              this.board[lastRow][col] = 1;
              this.animatePutPiece(lastRow, col);
              this.addPieceToPlayer(lastRow, col);
              break;
            }
          }
        }

      const winner = this.verifyWinner();
      console.log(winner, "winner");
      if (winner != false) {
        this.winner = true;
        this.winnerInfo = winner;
        this.$refs["player-turn-info"].stopTimer();
        return;
      }
      this.changeTurn();
    },
    /**
     * Change the player turn
     * @returns {void}
     */
    changeTurn() {
      if (this.playerT === this.players.count - 1) {
        this.playerT = 0;
      } else {
        this.playerT++;
      }
      console.log(this.playerT, "playerT");
      this.$refs["player-turn-info"].startTimer();
    },
    /**
     * Add a piece to the player
     * @param {number} row row
     * @param {number} col column
     * @returns {void}
     */
    addPieceToPlayer(row, col) {
      const player = this.getPlayerTurnInfo;
      player.pieces.push({
        row,
        col,
      });
    },
    /**
     * Animate the piece
     * @param {number} row row
     * @param {number} col column
     * @returns {void}
     */
    animatePutPiece(row, col) {
      const containerPiece = document.getElementById(`item-${row}-${col}`);
      const ficha = document.createElement("div");
      ficha.style.position = "absolute";
      ficha.style.borderRadius = "50%";
      ficha.id = `piece-${row}-${col}`;
      ficha.style.background = this.getPlayerTurnInfo.color;
      ficha.style.width = `${this.elementSize.width}px`;
      ficha.style.height = `${this.elementSize.height}px`;
      ficha.style.zIndex = "0";
      const board = document.querySelector(".main-board");
      board.appendChild(ficha);
      const finalTop = -(this.numRows - 1) * this.elementSize.height;
      ficha.style.top = finalTop + "px";
      ficha.style.left = containerPiece.offsetLeft + "px";
      ficha.style.transition = "all 1s ease";
      setTimeout(() => {
        ficha.style.top = containerPiece.offsetTop + "px";
        ficha.style.left = containerPiece.offsetLeft + "px";
      }, 100);
    },
    /**
     * Verify if the player win
     */
    verifyWinner() {
      // let winner = false;
      const player = this.getPlayerTurnInfo;
      const pieces = player.pieces;
      if (pieces.length >= 4) {
        for (let i = 0; i < this.numRows; i++) {
          let validHorizontal = this.verifyHorizontal(i);
          let validVertical = false;
          let validDiagonal = false;
          for (let j = 0; j < this.numCols; j++) {
            validVertical = this.verifyVertical(j);
            validDiagonal = this.verifyDiagonal(i, j);
            // let validDiagonal = this.verifyDiagonal(i, j);
            // if (validDiagonal) {
            //   alert("Ganaste diagonal", player.name);
            // }
            if (validVertical) {
              return player;
            }
            if (validDiagonal) {
              return player;
            }
          }
          if (validHorizontal) {
            return player;
          }
        }
        return false;
      }
      return false;
    },
    /**
     * Verify if the player win in horizontal
     */
    verifyHorizontal(row) {
      const player = this.getPlayerTurnInfo;
      //create a new array with pieces with same row
      const piecesRow = player.pieces.filter((piece) => piece.row === row);
      piecesRow.sort((a, b) => a.col - b.col);
      if (piecesRow.length >= 4) {
        for (let i = 1; i < piecesRow.length; i++) {
          if (piecesRow[i].col != piecesRow[i - 1].col + 1) {
            return false;
          }
        }
        return true;
      }
      return false;
    },
    /**
     * Verify if the player win in vertical
     */
    verifyVertical(col) {
      const player = this.getPlayerTurnInfo;
      //create a new array with pieces with same col
      const piecesCol = player.pieces.filter((piece) => piece.col === col);
      piecesCol.sort((a, b) => a.row - b.row);
      console.log(piecesCol, piecesCol.length, col, "piecesCol");
      if (piecesCol.length >= 4) {
        for (let i = 1; i < piecesCol.length; i++) {
          if (piecesCol[i].row != piecesCol[i - 1].row + 1) {
            return false;
          }
        }
        return true;
      }
      return false;
    },
    /**
     * Verify if the player win in diagonal
     */
    verifyDiagonal(row, col) {
      const player = this.getPlayerTurnInfo;
      // Crea un nuevo array con piezas en la misma diagonal
      const piecesDiagonal = player.pieces.filter((piece) => {
        // Calcula la diferencia entre la fila y la columna de la pieza actual
        const rowDiff = piece.row - row;
        const colDiff = piece.col - col;
        // Verifica si la pieza está en la misma diagonal
        return Math.abs(rowDiff) === Math.abs(colDiff);
      });

      // Ordena las piezas por fila y columna
      piecesDiagonal.sort((a, b) => {
        if (a.row !== b.row) {
          return a.row - b.row;
        }
        return a.col - b.col;
      });

      if (piecesDiagonal.length >= 4) {
        for (let i = 1; i < piecesDiagonal.length; i++) {
          // Verifica si las piezas consecutivas están en diagonal
          const prevPiece = piecesDiagonal[i - 1];
          const currentPiece = piecesDiagonal[i];
          const rowDiff = currentPiece.row - prevPiece.row;
          const colDiff = currentPiece.col - prevPiece.col;

          if (Math.abs(rowDiff) !== 1 || Math.abs(colDiff) !== 1) {
            return false; // No hay cuatro piezas consecutivas en diagonal
          }
        }
        return true; // Se encontraron cuatro piezas consecutivas en diagonal
      }
      return false; // No hay suficientes piezas en la diagonal para ganar
    },
  },
};
</script>

<style scoped>
.player-turn-info {
  transform: translateY(-30%);
}
.player-win {
  transform: translateY(-30%);
}
.main-component {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.main-board {
  background: white;
  overflow: hidden !important;
  padding: 1em 1em 4em 1em;
  border-radius: 50px;
  border: 0.3em solid black;
  position: relative;
}
.board-options{
  width: 100%;
  margin:2em auto
}
.board-element {
  background: #7945FF;
  border-radius: 50%;
  margin: 5px;
  display: inline-block;
}

.background-board {
  padding: 1em 1em 4em 1em;
  position: absolute;

  z-index: 1;
  opacity: 1;
  background: transparent;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.board-row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
}

.board-element-background {
  clip-path: ellipse(80px 100px at 50% 10%);
  /* Esto crea un círculo recortado */
  background: radial-gradient(circle at 50% 55%, transparent 60%, black 60%);
  /* Fondo estilo luna */
  /* Esto recorta un arco en la parte superior */
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}
</style>
