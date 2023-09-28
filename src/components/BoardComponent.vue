<template>
  <div class="game-area">
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
      ref="player-turn-info"
      :player-info="getPlayerTurnInfo"
      class="player-turn-info"
      @turnEnded="changeTurn()"
    />
  </div>
</template>

<script>
import PlayerTimeInfo from "./PlayerTimeInfo.vue";
export default {
  components: {
    PlayerTimeInfo,
  },
  props: {
    numRows: {
      type: Number,
      default: 8,
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
    };
  },
  methods: {
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

      this.verifyWinner();
      this.changeTurn();
    },
    changeTurn() {
      if (this.playerT === this.players.count - 1) {
        this.playerT = 0;
      } else {
        this.playerT++;
      }
      this.$refs["player-turn-info"].startTimer();
    },
    addPieceToPlayer(row, col) {
      const player = this.getPlayerTurnInfo;
      player.pieces.push({
        row,
        col,
      });
    },
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
    verifyWinner() {
      // let winner = false;
      const player = this.getPlayerTurnInfo;
      const pieces = player.pieces;
      if (pieces.length >= 4) {
        for (let i = 0; i < this.numRows; i++) {
          let validHorizontal = this.verifyHorizontal(i);
          let validVertical;
          for (let j = 0; j < this.numCols; j++) {
            validVertical = this.verifyVertical(j);
            console.log(validVertical, "validVertical");
            // let validDiagonal = this.verifyDiagonal(i, j);
            // if (validDiagonal) {
            //   alert("Ganaste diagonal", player.name);
            // }
            if (validVertical) {
              alert("Ganaste vertical", player.name);
              return;
            }
          }
          if (validHorizontal) {
            alert("Ganaste horizontal", player.name);
            return;
          }
        }
      }
    },
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
    verifyDiagonal(row, col) {
      let count = 0;
      const player = this.getPlayerTurnInfo;
      const pieces = player.pieces;
      for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.col === col) {
          count++;
        }
      }
      if (count >= 4) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.player-turn-info {
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

.board-element {
  background: #5c2dd5;
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
}
</style>
