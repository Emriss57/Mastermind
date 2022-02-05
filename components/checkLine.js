app.component('check-line', {
    props: {
        gameStatus: Boolean,
        bcolor: String,
        circleIndicatorIndex: Number,
        circleIndicatorIndexRed: Number,
        line: Number,
        round: Number,
    },
    emits:['colorDisplayOut','checkGameLine'],
    template: `
    <div class="checkStyleContainer">
    <div class="checkStyleBullet">
        
        <div :data-set="index" @click="bgPutter($event)" class="colorBulletLine" v-for="(checkArrays, index) in checkArray"    :style="{backgroundColor:checkArrays}">
        </div>
    </div>
        <div>
            <button v-if='line >= round' @click="checkGame($event)" class="btn">Check</button>
        </div>
    </div>
    <circle-indicator v-if='line >= round' :line='line' :round='round' :circleIndicatorIndexRed="circleIndicatorIndexRed" :circleIndicatorIndex="circleIndicatorIndex"></circle-indicator>`,

    data() {
        return {
           
            checkArray:['black', 'black', 'black', 'black'],

        }
    },
    methods: {
        bgPutter (e) {
            if(this.bcolor !== '' && this.line == this.round) {
                let index = e.target.dataset.set
                
                e.target.classList.add('colorBullet')
                this.checkArray[index] = this.bcolor
                this.$emit('colorDisplayOut')
            } else {
         
            }   
        },
        checkGame (e){
            if(this.gameStatus == true) {


                this.$emit('checkGameLine', {
                    array:this.checkArray,
               
    
                })
                e.target.style.display = 'none'

            }
          
        },
   
            
        
    },      
})