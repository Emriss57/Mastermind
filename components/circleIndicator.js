app.component('circle-indicator', {
    props: {
        circleIndicatorIndex: Number,
        circleIndicatorIndexRed: Number,
        round: Number,
        line: Number,
 
 
    },
    template: `
    <div class="colorIndicator">
    
        <div :style='{backgroundColor:checkIndicatorArray}' class="circleIndicator" v-for="checkIndicatorArray in checkIndicatorArrays"></div>  
    </div>`,

    data() {
        return {
            checkIndicatorArrays:['black', 'black', 'black','black'],
            
        }
    },
    computed: {
     
    },
    
    watch: {
        circleIndicatorIndexRed(newValue) { 
            if(this.round + 1 == this.line) {
               for(let j = 0; j <  newValue; j++) {
                let index = this.checkIndicatorArrays.indexOf('black')
                console.log(index)
                    this.checkIndicatorArrays[index] = 'red';
                  
                }  
            }
          
        },
        circleIndicatorIndex(newValue) { 
       
 
   
            if(this.round + 1 == this.line) {
               for(i = 0; i < newValue; i++) {
                let index = this.checkIndicatorArrays.indexOf('black')
                    this.checkIndicatorArrays[index] = 'white'
                    
                   
                }  
            }
            
           
                
            
        },
        
            
 
    }


})