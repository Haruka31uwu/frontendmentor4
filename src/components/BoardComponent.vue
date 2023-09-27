<template>
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
          @click="putPiece(index, index2)"

        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  },
  mounted() {
    this.createBoard();
  },
  data() {
    return {};
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
      console.log(row, col);
    },
  },
};
</script>
<style scoped>
.main-component {
  position: relative;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-board {
  background: white;
  overflow: hidden !important;
  padding: 1em 1em 4em 1em;
  border-radius: 50px;
  border: 0.3em solid black;
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
  clip-path: ellipse(
    80px 100px at 50% 10%
  ); /* Esto crea un círculo recortado */
  background: radial-gradient(
    circle at 50% 55%,
    transparent 60%,
    black 60%
  ); /* Fondo estilo luna */ /* Esto recorta un arco en la parte superior */
  border-radius: 50%;
  margin: 5px;
}
</style>