app.component('console', {
  
    emits: ['restartGame','game-on'],
    template: `
    <div class="consoleContainer">
        <button  class="btn" @click="gameOn($event)">Start game</button>
        <button  class="btn" @click="restartGame">Restart game</button>
    </div>`,
    
    data() {
        return {

        }
    },

    methods: {
        gameOn(e) {
            this.$emit('game-on');
            e.target.style.visibility = 'hidden';
        },

        restartGame() {
            window.location.reload();
        }
    },
    computed: {}
})
