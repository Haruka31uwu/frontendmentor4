<template>
  <div class="modal">
    <span class="modal-title">PAUSE</span>
    <div class="modal-option" @click="continueGame()">
      <span>CONTINUE GAME</span>
    </div>
    <div class="modal-option" @click="restartGame()"><span>RESTART</span></div>
    <div class="modal-option" @click="quitGame()"><span>QUIT GAME</span></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pause: false,
    };
  },
  methods: {
    continueGame() {
      this.$emit("continueGame");
    },
    restartGame() {
      this.$emit("restartGame");
    },
    quitGame() {
      this.$emit("quitGame");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
:root {
  --Purple: #7945ff;
  --White: #fff;
  --Black: #000;
}
.modal {
  position: absolute;
  translate: translate(-50%, -50%);
  width: 18%;
  min-width: 400px;
  height: 45%;
  border-radius: 40px;
  border: 3px solid var(--Black, #000);
  background: var(--Purple, #7945ff);
  box-shadow: 0px 10px 0px 0px #000;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
}
.modal-title {
  color: var(--White, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Heading (L) */
  font-family: Space Grotesk;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1em;
}
.modal-option {
  border-radius: 20px;
  border: 3px solid var(--Black, #000);
  background: var(--White, #fff);
  box-shadow: 0px 10px 0px 0px #000;
  width: 80%;

  height: 72px;
  color: var(--Black, #000);
  font-feature-settings: "clig" off, "liga" off;
  /* Heading (M) */
  font-family: Space Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.modal-option span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.modal-option:hover span {
  border-radius: 20px;
  border: 3px solid var(--Dark-Purple, #5c2dd5);
  background: var(--Red, #fd6687);
  box-shadow: 0px 10px 0px 0px #5c2dd5;
  color: var(--White, #fff);
  cursor: pointer;
}
</style>