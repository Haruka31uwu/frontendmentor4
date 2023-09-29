<template>
  <div class="player-win-container">
    <div class="player-win">
      <span class="player-win-title">{{ playerInfo.name }}</span>
      <span class="player-win-text">WINS</span>
      <div>

      </div>
    </div>
    <svg
    width="291"
    height="176"
    viewBox="0 0 291 176"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_5_5207)">
      <rect x="3" y="3" width="285" height="160" rx="20" fill="white" />
      <rect
        x="1.5"
        y="1.5"
        width="288"
        height="163"
        rx="21.5"
        stroke="black"
        stroke-width="3"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5_5207"
        x="0"
        y="0"
        width="291"
        height="176"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5_5207"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5_5207"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  </div>
  
</template>

<script>
export default {
  props: {
    playerInfo: {
      type: Object,
      default: () => {
        return {
          name: "Player 1",
          score: 0,
        };
      },
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
.player-win-container{
  display: flex!important;
  flex-direction: column!important;
  align-items: center!important;
  justify-content: center!important;
  position: relative !important;
}
.player-win {
    position: absolute;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
}
.player-win-title {
  color: black;
  font-size: 16px;
  font-family: Space Grotesk;
  font-weight: 700;
  word-wrap: break-word;
}
.player-win-text {
  color: black;
  font-size: 56px;
  font-family: Space Grotesk;
  font-weight: 700;
  word-wrap: break-word;
}
</style>