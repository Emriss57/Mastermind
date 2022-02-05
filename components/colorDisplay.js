app.component('color-display', {
   props: {
    gameStatus: Boolean,
   },
   emits: ['restartGameCode','gameCodeInit', 'colorChoose'],
    template: 
    `<div class="colorContainer">
        <div class="bulletContainer">
            <div @click="colorChoose(color)" class="colorBullet" v-for="color in colors" :style="{backgroundColor:color}"></div>
        </div>
        <console @game-on="codeInit"></console>
    </div>`,
    
    data() {
        return {
       
            colors: ['red', 'blue', 'green', 'orange', 'silver', 'yellow', 'purple', 'teal'],
            count:0,
        }
    },

    methods: {
        codeInit() {
           
            this.$emit('gameCodeInit', this.colors)
         },
      
        colorChoose (color) {
            
            if(this.gameStatus === true) {

             this.$emit('colorChoose', color)   
            }
            
        }
    },
    computed: {
        getStatus() {
            return this.gameStatus
        }
    }

});