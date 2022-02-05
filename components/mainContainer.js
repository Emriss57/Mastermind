const app = Vue.createApp({
    data() {
        return {
        
        }
    },
});


app.component('main-container', {
    template: 
        `<div @mousemove="colorPutter($event)" class="mainContainer">
            <color-code :gameStatus="gameStatus" :styleArray="styleArray"></color-code>
            <check-line :gameStatus="gameStatus" :circleIndicatorIndexRed='circleIndicatorIndexRed' :round="round" @checkGameLine="checkGame" v-for="line in lineMax" @colorDisplayOut='colorOuter' :line="line" :circleIndicatorIndex="circleIndicatorIndex" :bcolor="bcolor"></check-line>
            
            <color-display  
            :gameStatus="gameStatus" 
            @colorChoose='colorChoose' 
            @gameCodeInit="gameInit" 
            @restartGameCode='gameInit'></color-display>

            <div class="colorBullet2" 
                :style="{display:displayPutter,backgroundColor:bcolor,top: displayPutterY,left:displayPutterX }">
            </div>
        </div>`,

    data() {
        return {
            colorCode: [],
            styleArray:[],

            displayPutter: 'none',
            displayPutterX:'',
            displayPutterY:'',
            
            gameStatus: false,
            
            lineMax:10,
            round:10,
            line:0,
            bcolor:'',
            circleIndicatorIndex:0,
            circleIndicatorIndexRed:0,
        }
    },
    methods: {

        gameInit(event) {
            this.round = 10;

            this.gameStatus = true;
            event.sort(function(){return 0.5 - Math.random()});
            let index = Math.floor(Math.random() * 3);
            for(let i = 0; i < 4; i++) {
                index++
                this.styleArray[i] = "wheat";   
                this.colorCode[i] = event[index];
            
            }
            this.colorCode.sort(function(){return 0.5 - Math.random()})
            console.log(this.colorCode)
        },

        colorChoose(event) {
            this.bcolor = event
            this.displayPutter = 'block'
            
        },

        colorPutter(e) {
           
            this.displayPutterX = e.pageX + "px"
            this.displayPutterY = e.pageY + "px"
        },

        colorOuter() {
            this.bcolor = ''
            this.displayPutter = 'none'
            this.circleIndicatorIndex = 0;
            this.circleIndicatorIndexRed = 0;
           
        },
        
        checkGame(event) {
           
         
            this.round--
        
            for(let i = 0; i < this.colorCode.length; i++) {

                
                if(event.array[i] == this.colorCode[i]) {
            
                    this.circleIndicatorIndex++
                    
                } else if(this.colorCode.includes(event.array[i])) {
                    console.log('lol')
                    this.circleIndicatorIndexRed++
                }
            }
            if(this.circleIndicatorIndex == this.colorCode.length) {
                this.styleArray = this.colorCode
                this.gameStatus = false
            }
            
        }
    },
    restartGame() {

    },
    computed: {
       
    }
})