(function(){"use strict";var t={2769:function(t,e,r){var a=r(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[0!=t.showMenuModal||0!=t.showGameRulesModal||t.isMobile?t._e():e("div",{staticClass:"players-left"},t._l(t.players.playersInfo.length/2,(function(r,a){return e("player-card",{key:`player-${a}`,staticClass:"player",attrs:{"player-info":t.players.playersInfo[a]}})})),1),t.isMobile?e("div",{staticClass:"players"},[0==t.showMenuModal&&0==t.showGameRulesModal?e("div",{staticClass:"players-left"},t._l(t.players.playersInfo.length/2,(function(r,a){return e("player-card",{key:`player-${a}`,staticClass:"player",attrs:{"player-info":t.players.playersInfo[a]}})})),1):t._e(),0==t.showMenuModal&&0==t.showGameRulesModal?e("div",{staticClass:"players-right"},t._l(t.players.playersInfo.length/2,(function(r,a){return e("player-card",{key:`player-${a}`,staticClass:"player",attrs:{"player-info":t.players.playersInfo[2==t.players.playersInfo.length?a+1:a+2]}})})),1):t._e()]):t._e(),0==t.showMenuModal&&0==t.showGameRulesModal?e("board-component",{key:t.boardKey,ref:"board",attrs:{"player-turn":t.playerTurn,players:t.players},on:{pauseGame:function(e){t.showPauseModal=!0},restartGame:function(e){return t.restartGame()},quitGame:function(e){return t.quitGame()},tryAgain:function(e){return t.tryAgain()},winner:e=>t.changeScore(e)}}):t._e(),0!=t.showMenuModal||0!=t.showGameRulesModal||t.isMobile?t._e():e("div",{staticClass:"players-right"},t._l(t.players.playersInfo.length/2,(function(r,a){return e("player-card",{key:`player-${a}`,staticClass:"player",attrs:{"player-info":t.players.playersInfo[2==t.players.playersInfo.length?a+1:a+2]}})})),1),t.showPauseModal&&0==t.showMenuModal?e("pause-game-modal",{on:{continueGame:function(e){return t.continueGame()},restartGame:function(e){return t.restartGame()},quitGame:function(e){return t.quitGame()}}}):t._e(),t.showMenuModal?e("menu-component",{on:{init:e=>t.init(e),showGameRulesModal:function(e){return t.openGameRulesModal()}}}):t._e(),1==t.showGameRulesModal?e("game-rules-modal",{on:{returntoMenu:function(e){return t.closeGameRulesModal()}}}):t._e()],1)},s=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"-area"},[e("board-options",{staticClass:"board-options",on:{pauseGame:()=>t.pauseGame(),restartGame:()=>t.restartGame(),quitGame:function(e){return t.quitGame()}}}),e("div",{staticClass:"main-component"},[e("div",{staticClass:"main-board"},t._l(t.numRows,(function(r,a){return e("div",{key:`row-${a}`,staticClass:"board-row"},t._l(t.numCols,(function(t,r){return e("div",{key:`item-${a}-${r}`,staticClass:"board-element",attrs:{id:`item-${a}-${r}`}})})),0)})),0),e("div",{staticClass:"background-board"},t._l(t.numRows,(function(r,a){return e("div",{key:`row-${a}`,staticClass:"board-row"},t._l(t.numCols,(function(r,i){return e("div",{key:`item-${a}-${i}`,staticClass:"board-element-background",attrs:{"v-model":t.board[a][i]},on:{click:function(e){return t.putPiece(a,i)}}})})),0)})),0)]),0==t.winner?e("player-time-info",{ref:"player-turn-info",staticClass:"player-turn-info",attrs:{"player-info":t.getPlayerTurnInfo},on:{turnEnded:function(e){return t.changeTurn()}}}):t._e(),0!=t.winner?e("player-win",{staticClass:"player-win",attrs:{"player-info":t.winnerInfo},on:{tryAgain:function(e){return t.tryAgain()}}}):t._e()],1)},o=[],n=(r(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"player-info-container"},[e("div",{staticClass:"player-info"},[e("span",{staticClass:"info-title"},[t._v(t._s(t.playerInfo.name)+"'S TURN")]),e("span",{staticClass:"info-time"},[t._v(t._s(t.initialTime)+"s")])]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"197",height:"165",viewBox:"0 0 197 165",fill:"none"}},[e("g",{attrs:{filter:"url(#filter0_d_5_5705)"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 55.2795C3 47.2326 7.82258 39.9694 15.2389 36.8468L90.2793 5.25082C95.2186 3.17114 100.786 3.16075 105.733 5.22198L181.692 36.8718C189.145 39.9772 194 47.2593 194 55.3333V132C194 143.046 185.046 152 174 152H23C11.9543 152 3 143.046 3 132V55.2795Z",fill:t.playerInfo.color}}),e("path",{attrs:{d:"M14.6568 35.4643C6.68427 38.8212 1.5 46.6291 1.5 55.2795V132C1.5 143.874 11.1259 153.5 23 153.5H174C185.874 153.5 195.5 143.874 195.5 132V55.3333C195.5 46.6538 190.281 38.8255 182.269 35.4872L106.31 3.83737C100.992 1.62154 95.0069 1.63271 89.6972 3.86836L14.6568 35.4643Z",stroke:"black","stroke-width":"3"}})]),e("defs",[e("filter",{attrs:{id:"filter0_d_5_5705",x:"0",y:"0.683517",width:"197",height:"164.316",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"10"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5705"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5705",result:"shape"}})],1)])])])}),c=[],d={props:{playerInfo:{type:Object,default:()=>({name:"PLAYER 1",score:0,color:"#FD6687"})}},data(){return{initialTime:5,timer:null,pauseTimer:5}},mounted(){this.startTimer(!1)},methods:{startTimer(t){try{t&&(console.log("playerTurn",t),this.initialTime=5),this.timer&&clearInterval(this.timer),this.timer=setInterval((()=>{this.initialTime--,this.pauseTimer=this.initialTime,0===this.initialTime&&(this.pauseTimer=5,this.initialTime=5,this.$emit("turnEnded"),clearInterval(this.timer),this.startTimer(!1))}),1e3)}catch(e){console.log(e)}},stopTimer(){clearInterval(this.timer)},resetTimer(){this.stopTimer(),this.startTimer(!1)},continueTimer(){this.startTimer(!1)}}},u=d,f=r(1001),p=(0,f.Z)(u,n,c,!1,null,"55303683",null),h=p.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"player-win-container"},[e("div",{staticClass:"player-win"},[e("span",{staticClass:"player-win-title"},[t._v(t._s(t.playerInfo.name))]),e("span",{staticClass:"player-win-text"},[t._v("WINS")]),e("div",{staticClass:"player-play-again",on:{click:function(e){return t.tryAgain()}}},[t._v(" Play Again ")])]),e("svg",{attrs:{width:"291",height:"176",viewBox:"0 0 291 176",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{filter:"url(#filter0_d_5_5207)"}},[e("rect",{attrs:{x:"3",y:"3",width:"285",height:"160",rx:"20",fill:"white"}}),e("rect",{attrs:{x:"1.5",y:"1.5",width:"288",height:"163",rx:"21.5",stroke:"black","stroke-width":"3"}})]),e("defs",[e("filter",{attrs:{id:"filter0_d_5_5207",x:"0",y:"0",width:"291",height:"176",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"10"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5207"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5207",result:"shape"}})],1)])])])},y=[],_={props:{playerInfo:{type:Object,default:()=>({name:"Player 1",score:0})}},methods:{tryAgain(){this.$emit("tryAgain")}}},g=_,v=(0,f.Z)(g,m,y,!1,null,"31b6a740",null),w=v.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"board-options"},[e("div",{staticClass:"option-button",on:{click:function(e){return t.pauseGame()}}},[t._v("MENU")]),e("svg",{attrs:{width:"58",height:"61",viewBox:"0 0 58 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.quitGame()}}},[e("g",{attrs:{id:"Group 12"}},[e("g",{attrs:{id:"Oval Copy 11",filter:"url(#filter0_d_5_5567)"}},[e("circle",{attrs:{cx:"13",cy:"13",r:"10",fill:"#FD6687"}}),e("circle",{attrs:{cx:"13",cy:"13",r:"11.5",stroke:"black","stroke-width":"3"}})]),e("g",{attrs:{id:"Oval Copy 25",filter:"url(#filter1_d_5_5567)"}},[e("circle",{attrs:{cx:"45",cy:"45",r:"10",fill:"#FD6687"}}),e("circle",{attrs:{cx:"45",cy:"45",r:"11.5",stroke:"black","stroke-width":"3"}})]),e("g",{attrs:{id:"Oval Copy 23",filter:"url(#filter2_d_5_5567)"}},[e("circle",{attrs:{cx:"45",cy:"13",r:"10",fill:"#FFCE67"}}),e("circle",{attrs:{cx:"45",cy:"13",r:"11.5",stroke:"black","stroke-width":"3"}})]),e("g",{attrs:{id:"Oval Copy 24",filter:"url(#filter3_d_5_5567)"}},[e("circle",{attrs:{cx:"13",cy:"45",r:"10",fill:"#FFCE67"}}),e("circle",{attrs:{cx:"13",cy:"45",r:"11.5",stroke:"black","stroke-width":"3"}})])]),e("defs",[e("filter",{attrs:{id:"filter0_d_5_5567",x:"0",y:"0",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1),e("filter",{attrs:{id:"filter1_d_5_5567",x:"32",y:"32",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1),e("filter",{attrs:{id:"filter2_d_5_5567",x:"32",y:"0",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1),e("filter",{attrs:{id:"filter3_d_5_5567",x:"0",y:"32",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1)])]),e("div",{staticClass:"option-button",on:{click:function(e){return t.restartGame()}}},[t._v("RESTART")])])},x=[],M={methods:{pauseGame(){this.$emit("pauseGame")},restartGame(){this.$emit("restartGame")},quitGame(){this.$emit("quitGame")}}},k=M,b=(0,f.Z)(k,C,x,!1,null,"5781c307",null),G=b.exports,S={components:{PlayerTimeInfo:h,PlayerWin:w,BoardOptions:G},props:{numRows:{type:Number,default:7},numCols:{type:Number,default:7},elementSize:{type:Object,default:()=>({width:125,height:125})},playerTurn:{type:Number,default:0},players:{type:Object}},computed:{getPlayerTurnInfo(){return this.players.playersInfo[this.playerT]}},mounted(){window.addEventListener("resize",(()=>{this.createBoard()})),this.createBoard()},data(){return{board:Array.from({length:this.numRows},(()=>Array(this.numCols).fill(0))),playerT:this.playerTurn,winner:!1,winnerInfo:{}}},methods:{getWindowSizeWidth(){return window.innerWidth},createBoard(){let t=this.elementSize.width,e=this.elementSize.height;this.getWindowSizeWidth()<700&&(t=45,e=45),this.getWindowSizeWidth()<1100&&this.getWindowSizeWidth()>700&&(t=70,e=70);const r=document.querySelector(".main-board"),a=document.querySelector(".background-board");r.style.minWidth=this.numCols*t+200+"px",a.style.minWidth=this.numCols*t+200+"px";const i=document.querySelectorAll(".board-element"),s=document.querySelectorAll(".board-element-background");i.forEach((r=>{r.style.width=`${t}px`,r.style.height=`${e}px`})),s.forEach((r=>{r.style.width=`${t}px`,r.style.height=`${e}px`}));const l=document.querySelectorAll(".board-row");l.forEach((e=>{e.style.width=this.numCols*t+200+"px"}))},putPiece(t,e){let r=this.numRows-1,a=this.board[r][e];if(t>=0)if(0===a)this.board[r][e]=1,this.animatePutPiece(r,e),this.addPieceToPlayer(r,e);else while(0!==a)if(r--,a=this.board[r][e],0===a){if(r<t)return;this.board[r][e]=1,this.animatePutPiece(r,e),this.addPieceToPlayer(r,e);break}const i=this.verifyWinner();if(console.log(i,"winner"),0!=i)return this.winner=!0,this.winnerInfo=i,this.$refs["player-turn-info"].stopTimer(),void this.$emit("winner",i);this.changeTurn()},changeTurn(){this.playerT===this.players.count-1?this.playerT=0:this.playerT++,this.$refs["player-turn-info"].startTimer(!0)},addPieceToPlayer(t,e){const r=this.getPlayerTurnInfo;r.pieces.push({row:t,col:e})},animatePutPiece(t,e){let r=this.elementSize.width,a=this.elementSize.height;this.getWindowSizeWidth()<700&&(r=45,a=45),this.getWindowSizeWidth()<1100&&this.getWindowSizeWidth()>700&&(r=70,a=70);const i=document.getElementById(`item-${t}-${e}`),s=document.createElement("div");s.classList.add("ficha"),s.style.position="absolute",s.style.borderRadius="50%",s.id=`piece-${t}-${e}`,s.style.background=this.getPlayerTurnInfo.color,s.style.width=`${r}px`,s.style.height=`${a}px`,s.style.zIndex="0";const l=document.querySelector(".main-board");l.appendChild(s);const o=-(this.numRows-1)*a;s.style.top=o+"px",s.style.left=i.offsetLeft+"px",s.style.transition="all 1s ease",setTimeout((()=>{s.style.top=i.offsetTop+"px",s.style.left=i.offsetLeft+"px"}),100)},verifyWinner(){const t=this.getPlayerTurnInfo,e=t.pieces;if(e.length>=4){for(let e=0;e<this.numRows;e++){let r=this.verifyHorizontal(e),a=!1,i=!1;for(let s=0;s<this.numCols;s++){if(a=this.verifyVertical(s),i=this.verifyDiagonal(e,s),a)return t;if(i)return t}if(r)return t}return!1}return!1},verifyHorizontal(t){const e=this.getPlayerTurnInfo,r=e.pieces.filter((e=>e.row===t));if(r.sort(((t,e)=>t.col-e.col)),r.length>=4){for(let t=1;t<r.length;t++)if(r[t].col!=r[t-1].col+1)return!1;return!0}return!1},verifyVertical(t){const e=this.getPlayerTurnInfo,r=e.pieces.filter((e=>e.col===t));if(r.sort(((t,e)=>t.row-e.row)),console.log(r,r.length,t,"piecesCol"),r.length>=4){for(let t=1;t<r.length;t++)if(r[t].row!=r[t-1].row+1)return!1;return!0}return!1},verifyDiagonal(t,e){const r=this.getPlayerTurnInfo,a=r.pieces.filter((r=>{const a=r.row-t,i=r.col-e;return Math.abs(a)===Math.abs(i)}));if(a.sort(((t,e)=>t.row!==e.row?t.row-e.row:t.col-e.col)),a.length>=4){for(let t=1;t<a.length;t++){const e=a[t-1],r=a[t],i=r.row-e.row,s=r.col-e.col;if(1!==Math.abs(i)||1!==Math.abs(s))return!1}return!0}return!1},pauseGame(){this.$refs["player-turn-info"]&&this.$refs["player-turn-info"].stopTimer(),this.$emit("pauseGame")},continueGame(){this.$refs["player-turn-info"].continueTimer()},restartGame(){this.$refs["player-turn-info"]&&this.$refs["player-turn-info"].resetTimer(),this.$emit("restartGame"),this.players.playersInfo.forEach((t=>{t.pieces=[]}))},quitGame(){this.$emit("quitGame")},tryAgain(){this.players.playersInfo.forEach((t=>{t.pieces=[]})),this.$emit("tryAgain")}}},B=S,O=(0,f.Z)(B,l,o,!1,null,"120a91d6",null),P=O.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"player-card"},[e("div",{staticClass:"player-icon"},[e("svg",{attrs:{width:"54",height:"59",viewBox:"0 0 54 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"player"}},[e("circle",{attrs:{id:"Oval Copy 21",cx:"27",cy:"27",r:"27",fill:"black"}}),e("circle",{attrs:{id:"Oval Copy 40",cx:"27",cy:"32",r:"27",fill:"black"}}),e("circle",{attrs:{id:"Oval Copy 11",cx:"27",cy:"27",r:"24",fill:t.playerInfo.color}}),e("g",{attrs:{id:"Group 8"}},[e("path",{attrs:{id:"Oval Copy 11_2",d:"M45.25 25C45.25 32.4558 39.2058 38.5 31.75 38.5C24.2942 38.5 18.25 32.4558 18.25 25H21.25C21.25 30.799 25.951 35.5 31.75 35.5C37.549 35.5 42.25 30.799 42.25 25H45.25Z",fill:"black"}}),e("g",{attrs:{id:"Group 7"}},[e("path",{attrs:{id:"Path",d:"M30.75 17V22.9844H27.75V17H30.75Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy",d:"M40.75 17V22.9844H37.75V17H40.75Z",fill:"black"}})])])])])]),e("div",[e("div",{staticClass:"player-name"},[t._v(t._s(t.playerInfo.name))]),e("div",{staticClass:"player-score"},[t._v(t._s(t.playerInfo.score))])])])},I=[],F={props:{playerInfo:{type:Object,default:()=>({name:"PLAYER 1",score:0,color:"#FD6687"})}},data(){return{}},methods:{}},A=F,R=(0,f.Z)(A,T,I,!1,null,"38611d4e",null),E=R.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("span",{staticClass:"modal-title"},[t._v("PAUSE")]),e("div",{staticClass:"modal-option",on:{click:function(e){return t.continueGame()}}},[e("span",[t._v("CONTINUE GAME")])]),e("div",{staticClass:"modal-option",on:{click:function(e){return t.restartGame()}}},[e("span",[t._v("RESTART")])]),e("div",{staticClass:"modal-option",on:{click:function(e){return t.quitGame()}}},[e("span",[t._v("QUIT GAME")])])])},H=[],V={data(){return{pause:!1}},methods:{continueGame(){this.$emit("continueGame")},restartGame(){this.$emit("restartGame")},quitGame(){this.$emit("quitGame")}}},Z=V,U=(0,f.Z)(Z,$,H,!1,null,"4f853d5d",null),L=U.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-menu"},[e("svg",{attrs:{width:"58",height:"61",viewBox:"0 0 58 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"Group 12"}},[e("g",{attrs:{id:"Oval Copy 11",filter:"url(#filter0_d_5_5567)"}},[e("circle",{attrs:{cx:"13",cy:"13",r:"10",fill:"#FD6687"}}),e("circle",{attrs:{cx:"13",cy:"13",r:"11.5",stroke:"black","stroke-width":"3"}})]),e("g",{attrs:{id:"Oval Copy 25",filter:"url(#filter1_d_5_5567)"}},[e("circle",{attrs:{cx:"45",cy:"45",r:"10",fill:"#FD6687"}}),e("circle",{attrs:{cx:"45",cy:"45",r:"11.5",stroke:"black","stroke-width":"3"}})]),e("g",{attrs:{id:"Oval Copy 23",filter:"url(#filter2_d_5_5567)"}},[e("circle",{attrs:{cx:"45",cy:"13",r:"10",fill:"#FFCE67"}}),e("circle",{attrs:{cx:"45",cy:"13",r:"11.5",stroke:"black","stroke-width":"3"}})]),e("g",{attrs:{id:"Oval Copy 24",filter:"url(#filter3_d_5_5567)"}},[e("circle",{attrs:{cx:"13",cy:"45",r:"10",fill:"#FFCE67"}}),e("circle",{attrs:{cx:"13",cy:"45",r:"11.5",stroke:"black","stroke-width":"3"}})])]),e("defs",[e("filter",{attrs:{id:"filter0_d_5_5567",x:"0",y:"0",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1),e("filter",{attrs:{id:"filter1_d_5_5567",x:"32",y:"32",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1),e("filter",{attrs:{id:"filter2_d_5_5567",x:"32",y:"0",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1),e("filter",{attrs:{id:"filter3_d_5_5567",x:"0",y:"32",width:"26",height:"29",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"3"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_5567"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_5567",result:"shape"}})],1)])]),e("div",{staticClass:"menu-option option",on:{click:function(e){return t.start2PlayersGame()}}},[e("span",[t._v("2 PLAYERS")]),e("svg",{attrs:{width:"82",height:"46",viewBox:"0 0 82 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"player-vs-player"}},[e("circle",{attrs:{id:"Oval Copy 17",cx:"59",cy:"23",r:"23",fill:"black"}}),e("circle",{attrs:{id:"Oval Copy 11",cx:"59",cy:"23",r:"20",fill:"#FFCE67"}}),e("g",{attrs:{id:"Group 8"}},[e("path",{attrs:{id:"Oval Copy 11_2",d:"M74.5834 21.2085C74.5834 27.5598 69.4346 32.7085 63.0834 32.7085C56.7321 32.7085 51.5834 27.5598 51.5834 21.2085H54.5834C54.5834 25.9029 58.389 29.7085 63.0834 29.7085C67.7778 29.7085 71.5834 25.9029 71.5834 21.2085H74.5834Z",fill:"black"}}),e("g",{attrs:{id:"Group 7"}},[e("path",{attrs:{id:"Path",d:"M62.375 14.6667V19.6538H59.375V14.6667H62.375Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy",d:"M70.7084 14.6667V19.6538H67.7084V14.6667H70.7084Z",fill:"black"}})])]),e("circle",{attrs:{id:"Oval Copy 18",cx:"23",cy:"23",r:"23",fill:"black"}}),e("g",{attrs:{id:"Group 2"}},[e("circle",{attrs:{id:"Oval Copy 11_3",cx:"23",cy:"23",r:"20",fill:"#FFCE67"}}),e("g",{attrs:{id:"Group 8_2"}},[e("path",{attrs:{id:"Oval Copy 11_4",d:"M38.5834 21.2085C38.5834 27.5598 33.4346 32.7085 27.0834 32.7085C20.7321 32.7085 15.5834 27.5598 15.5834 21.2085H18.5834C18.5834 25.9029 22.389 29.7085 27.0834 29.7085C31.7778 29.7085 35.5834 25.9029 35.5834 21.2085H38.5834Z",fill:"black"}}),e("g",{attrs:{id:"Group 7_2"}},[e("path",{attrs:{id:"Path_2",d:"M26.375 14.6667V19.6538H23.375V14.6667H26.375Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy_2",d:"M34.7084 14.6667V19.6538H31.7084V14.6667H34.7084Z",fill:"black"}})])])])])])]),e("div",{staticClass:"menu-option option",on:{click:function(e){return t.start4PlayersGame()}}},[e("span",[t._v("4 PLAYERS")]),e("div",[e("svg",{attrs:{width:"82",height:"46",viewBox:"0 0 82 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"player-vs-player"}},[e("circle",{attrs:{id:"Oval Copy 17",cx:"59",cy:"23",r:"23",fill:"black"}}),e("circle",{attrs:{id:"Oval Copy 11",cx:"59",cy:"23",r:"20",fill:"#FFCE67"}}),e("g",{attrs:{id:"Group 8"}},[e("path",{attrs:{id:"Oval Copy 11_2",d:"M74.5834 21.2085C74.5834 27.5598 69.4346 32.7085 63.0834 32.7085C56.7321 32.7085 51.5834 27.5598 51.5834 21.2085H54.5834C54.5834 25.9029 58.389 29.7085 63.0834 29.7085C67.7778 29.7085 71.5834 25.9029 71.5834 21.2085H74.5834Z",fill:"black"}}),e("g",{attrs:{id:"Group 7"}},[e("path",{attrs:{id:"Path",d:"M62.375 14.6667V19.6538H59.375V14.6667H62.375Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy",d:"M70.7084 14.6667V19.6538H67.7084V14.6667H70.7084Z",fill:"black"}})])]),e("circle",{attrs:{id:"Oval Copy 18",cx:"23",cy:"23",r:"23",fill:"black"}}),e("g",{attrs:{id:"Group 2"}},[e("circle",{attrs:{id:"Oval Copy 11_3",cx:"23",cy:"23",r:"20",fill:"#FFCE67"}}),e("g",{attrs:{id:"Group 8_2"}},[e("path",{attrs:{id:"Oval Copy 11_4",d:"M38.5834 21.2085C38.5834 27.5598 33.4346 32.7085 27.0834 32.7085C20.7321 32.7085 15.5834 27.5598 15.5834 21.2085H18.5834C18.5834 25.9029 22.389 29.7085 27.0834 29.7085C31.7778 29.7085 35.5834 25.9029 35.5834 21.2085H38.5834Z",fill:"black"}}),e("g",{attrs:{id:"Group 7_2"}},[e("path",{attrs:{id:"Path_2",d:"M26.375 14.6667V19.6538H23.375V14.6667H26.375Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy_2",d:"M34.7084 14.6667V19.6538H31.7084V14.6667H34.7084Z",fill:"black"}})])])])])]),e("svg",{attrs:{width:"82",height:"46",viewBox:"0 0 82 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"player-vs-player"}},[e("circle",{attrs:{id:"Oval Copy 17",cx:"59",cy:"23",r:"23",fill:"black"}}),e("circle",{attrs:{id:"Oval Copy 11",cx:"59",cy:"23",r:"20",fill:"#FFCE67"}}),e("g",{attrs:{id:"Group 8"}},[e("path",{attrs:{id:"Oval Copy 11_2",d:"M74.5834 21.2085C74.5834 27.5598 69.4346 32.7085 63.0834 32.7085C56.7321 32.7085 51.5834 27.5598 51.5834 21.2085H54.5834C54.5834 25.9029 58.389 29.7085 63.0834 29.7085C67.7778 29.7085 71.5834 25.9029 71.5834 21.2085H74.5834Z",fill:"black"}}),e("g",{attrs:{id:"Group 7"}},[e("path",{attrs:{id:"Path",d:"M62.375 14.6667V19.6538H59.375V14.6667H62.375Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy",d:"M70.7084 14.6667V19.6538H67.7084V14.6667H70.7084Z",fill:"black"}})])]),e("circle",{attrs:{id:"Oval Copy 18",cx:"23",cy:"23",r:"23",fill:"black"}}),e("g",{attrs:{id:"Group 2"}},[e("circle",{attrs:{id:"Oval Copy 11_3",cx:"23",cy:"23",r:"20",fill:"#FFCE67"}}),e("g",{attrs:{id:"Group 8_2"}},[e("path",{attrs:{id:"Oval Copy 11_4",d:"M38.5834 21.2085C38.5834 27.5598 33.4346 32.7085 27.0834 32.7085C20.7321 32.7085 15.5834 27.5598 15.5834 21.2085H18.5834C18.5834 25.9029 22.389 29.7085 27.0834 29.7085C31.7778 29.7085 35.5834 25.9029 35.5834 21.2085H38.5834Z",fill:"black"}}),e("g",{attrs:{id:"Group 7_2"}},[e("path",{attrs:{id:"Path_2",d:"M26.375 14.6667V19.6538H23.375V14.6667H26.375Z",fill:"black"}}),e("path",{attrs:{id:"Path Copy_2",d:"M34.7084 14.6667V19.6538H31.7084V14.6667H34.7084Z",fill:"black"}})])])])])])])]),e("div",{staticClass:"rule-option option",on:{click:function(e){return t.showGameRulesModal()}}},[e("span",[t._v("GAME RULES")])])])},q=[],z={methods:{start2PlayersGame(){this.$emit("init",2)},start4PlayersGame(){this.$emit("init",4)},showGameRulesModal(){this.$emit("showGameRulesModal")}}},D=z,Y=(0,f.Z)(D,W,q,!1,null,"3d935263",null),j=Y.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("span",{staticClass:"modal-title"},[t._v("RULES")]),t._m(0),t._m(1),e("div",{staticClass:"check-option",on:{click:function(e){return t.returntoMenu()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"75",viewBox:"0 0 70 75",fill:"none"}},[e("g",{attrs:{filter:"url(#filter0_d_5_4896)"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"32",fill:"#FD6687"}}),e("circle",{attrs:{cx:"35",cy:"35",r:"33.5",stroke:"black","stroke-width":"3"}})]),e("path",{attrs:{d:"M20 34.5819L30.264 44.846L50.11 25",stroke:"white","stroke-width":"3"}}),e("defs",[e("filter",{attrs:{id:"filter0_d_5_4896",x:"0",y:"0",width:"70",height:"75",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"5"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5_4896"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5_4896",result:"shape"}})],1)])])])])},K=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-objective"},[e("span",{staticClass:"modal-subtitle"},[t._v("OBJECTIVE")]),e("span",[t._v("Be the first player to get all four pieces from the starting area around the board to your home.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-info"},[e("span",{staticClass:"modal-subtitle"},[t._v("HOW TO PLAY")]),e("div",{staticClass:"modal-info-list"},[e("div",[e("span",[t._v("1")]),e("span",[t._v("First Player starts game")])]),e("div",[e("span",[t._v("2")]),e("span",[t._v("Players must alternate turns, and only one disc can be dropped in each turn. ")])]),e("div",[e("span",[t._v("3")]),e("span",[t._v("The game ends when there is a 4-in-a-row or a stalemate.")])]),e("div",[e("span",[t._v("4")]),e("span",[t._v("The starter of the previous game goes second on the next game.")])])])])}],J={methods:{returntoMenu(){this.$emit("returntoMenu")}}},Q=J,X=(0,f.Z)(Q,N,K,!1,null,"648e1686",null),tt=X.exports,et={name:"App",components:{BoardComponent:P,PlayerCard:E,PauseGameModal:L,MenuComponent:j,GameRulesModal:tt},data(){return{playerTurn:0,players:{count:2,playersInfo:[{name:"PLAYER 1",score:0,color:"#FD6687",hisTurn:!0,pieces:[]},{name:"PLAYER 2",score:0,color:"#52BE80",hisTurn:!1,pieces:[]}]},showPauseModal:!1,showMenuModal:!0,showGameRulesModal:!1,boardKey:0,isMobile:!1}},mounted(){this.isMobileDevice(),window.addEventListener("resize",(()=>{this.isMobileDevice()}))},methods:{isMobileDevice(){window.innerWidth<=1100?this.isMobile=!0:this.isMobile=!1},init(t){if(console.log(t),2==t)return this.players.count=2,this.players.playersInfo=[{name:"PLAYER 1",score:0,color:"#FD6687",hisTurn:!0,pieces:[]},{name:"PLAYER 2",score:0,color:"#52BE80",hisTurn:!1,pieces:[]}],void(this.showMenuModal=!1);this.players.count=4,this.players.playersInfo=[{name:"PLAYER 1",score:0,color:"#FD6687",hisTurn:!0,pieces:[]},{name:"PLAYER 2",score:0,color:"#52BE80",hisTurn:!1,pieces:[]},{name:"PLAYER 3",score:0,color:"#F1C40F",hisTurn:!0,pieces:[]},{name:"PLAYER 4",score:0,color:"#884EA0",hisTurn:!1,pieces:[]}],this.showMenuModal=!1},continueGame(){this.showPauseModal=!1,this.$refs["board"].continueGame()},restartGame(){this.showPauseModal=!1,this.boardKey++,this.players.playersInfo.forEach((t=>{t.score=0}))},quitGame(){this.showPauseModal=!1,this.showMenuModal=!0},openGameRulesModal(){this.showGameRulesModal=!0,this.showMenuModal=!1},closeGameRulesModal(){this.showGameRulesModal=!1,this.showMenuModal=!0},tryAgain(){this.showPauseModal=!1,this.boardKey++},changeScore(t){this.players.playersInfo.forEach((e=>{e.name==t.name&&e.score++}))}}},rt=et,at=(0,f.Z)(rt,i,s,!1,null,null,null),it=at.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(it)}).$mount("#app")}},e={};function r(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,i,s){if(!a){var l=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],s=t[d][2];for(var o=!0,n=0;n<a.length;n++)(!1&s||l>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[n])}))?a.splice(n--,1):(o=!1,s<l&&(l=s));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,i,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,l=a[0],o=a[1],n=a[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(n)var d=n(r)}for(e&&e(a);c<l.length;c++)s=l[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(d)},a=self["webpackChunkconnect_four"]=self["webpackChunkconnect_four"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2769)}));a=r.O(a)})();
//# sourceMappingURL=app.4d0a0bc9.js.map