<template>
  <div class="player-card">
    <div class="player-icon">
      <svg
        width="54"
        height="59"
        viewBox="0 0 54 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="player">
          <circle id="Oval Copy 21" cx="27" cy="27" r="27" fill="black" />
          <circle id="Oval Copy 40" cx="27" cy="32" r="27" fill="black" />
          <circle
            id="Oval Copy 11"
            cx="27"
            cy="27"
            r="24"
            :fill="playerInfo.color"
          />
          <g id="Group 8">
            <path
              id="Oval Copy 11_2"
              d="M45.25 25C45.25 32.4558 39.2058 38.5 31.75 38.5C24.2942 38.5 18.25 32.4558 18.25 25H21.25C21.25 30.799 25.951 35.5 31.75 35.5C37.549 35.5 42.25 30.799 42.25 25H45.25Z"
              fill="black"
            />
            <g id="Group 7">
              <path
                id="Path"
                d="M30.75 17V22.9844H27.75V17H30.75Z"
                fill="black"
              />
              <path
                id="Path Copy"
                d="M40.75 17V22.9844H37.75V17H40.75Z"
                fill="black"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div>
      <div class="player-name">{{playerInfo.name}}</div>
      <div class="player-score">{{ playerInfo.score }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    playerInfo: {
      type: Object,
      default: () => {
        return {
          name: "PLAYER 1",
          score: 0,
          color: "#FD6687",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
:root {
  --Black: #000000;
  --White: #ffffff;
}
.player-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;
  border-radius: 20px;
  border: 3px solid var(--Black, #000);
  background: var(--White, #fff);
  box-shadow: 0px 10px 0px 0px #000;
  width: 140px;
  height: 140px;
  padding: 1em 0;
  position: relative;
}.player-icon{
    position:absolute;
    top: -25px;
}
.player-name {
  color: var(--Black, #000);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Heading (S) */
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.player-score {
  color: var(--Black, #000);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Heading (L) */
  font-family: "Space Grotesk", sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>