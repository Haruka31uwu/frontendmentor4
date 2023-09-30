<template>
  <div id="app">
    <div class="players-left" v-if="showMenuModal==false" >
      <player-card  
      class="player" 
      v-for="(item,index) in (players.playersInfo.length/2)" 
      :key="`player-${index}`"
      :player-info="players.playersInfo[(index)]"
      
      />
    </div>

    <board-component 
    v-if="showMenuModal==false"
    ref="board" 
    :player-turn="playerTurn" 
    :players="players" 
    @pauseGame="showPauseModal=true"
    :key="boardKey"/>
    <div class="players-right"    
     v-if="showMenuModal==false"
    >
      <player-card  
      class="player" 
      v-for="(item,index) in (players.playersInfo.length/2)" 
      :key="`player-${index}`"
      :player-info="players.playersInfo[(index+1)]"
      />
    </div>
    <pause-game-modal v-if="showPauseModal" 
    @continueGame="continueGame()" 
    @restartGame="restartGame()" 
    @quitGame="quitGame()"/>
    <menu-component v-if="showMenuModal" @init="(a)=>init(2)"/>
  </div>
</template>

<script>
import BoardComponent from './components/BoardComponent.vue';
import PlayerCard from './components/PlayerCard.vue';
import PauseGameModal from './components/PauseGameModal.vue';
import MenuComponent from './components/MenuComponent.vue';
export default {
  name: 'App',
  components: {
    BoardComponent,
    PlayerCard,
    PauseGameModal,
    MenuComponent
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
      },
      showPauseModal: false,
      showMenuModal: true,
      boardKey:0
    }
  },
  methods:{
    init(number){
      console.log(number);
      if(number==2){
        this.count=2,
        this.playersInfo=[
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
        this.showMenuModal=false;
        return;
      }
      this.count=4,
        this.playersInfo=[
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
          {
            name: "PLAYER 3",
            score: 0,
            color: "#FD6687",
            hisTurn: true,
            pieces:[
              
            ]
          },
          {
            name: "PLAYER 4",
            score: 0,
            color: "#52BE80",
            hisTurn: false,
            pieces:[
              
              ]
          },
         
        ]
        this.showMenuModal=false;

      
    },
    continueGame(){
      this.showPauseModal = false;
      this.$refs["board"].continueGame();
    },
    restartGame(){
      this.showPauseModal = false;
      this.boardKey++;
    },
    quitGame(){
      this.showPauseModal = false;
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
  background: #7945FF ;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden !important;
  position: relative;
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
