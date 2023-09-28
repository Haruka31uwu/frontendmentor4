<template>
  <div id="app">
    <div class="players-left" >
      <player-card  
      class="player" 
      v-for="(item,index) in (players.playersInfo.length/2)" 
      :key="`player-${index}`"
      :player-info="players.playersInfo[(index)]"
      />
    </div>

    <board-component :player-turn="playerTurn" :players="players"/>
    <div class="players-right">
      <player-card  
      class="player" 
      v-for="(item,index) in (players.playersInfo.length/2)" 
      :key="`player-${index}`"
      :player-info="players.playersInfo[(index+1)]"
      />
    </div>

  </div>
</template>

<script>
import BoardComponent from './components/BoardComponent.vue';
import PlayerCard from './components/PlayerCard.vue';
export default {
  name: 'App',
  components: {
    BoardComponent,
    PlayerCard
  },
  data(){
    return{
      playerTurn: 0,
      players:{
        count:2,
        playersInfo:[
          {
            name: "PLAYER 1",
            score: 0,
            color: "#FD6687",
            hisTurn: true,
            pieces:[
              
            ]
          },
          {
            name: "PLAYER 2",
            score: 0,
            color: "#52BE80",
            hisTurn: false,
            pieces:[
              
              ]
          },
         
        ]
      }
    }
  },
  methods:{
    init(){
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  min-height: 100vh;
  width:100vw;
  background: #5C2DD5 ;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden !important;
}.players-left{
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

}
.players-right  {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

}
</style>
