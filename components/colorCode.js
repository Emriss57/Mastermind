app.component('color-code', {
    props: {
        gameStatus: Boolean,
        styleArray: Array,
    },
    template:`
    <div class="colorCodeContainer">
        <div class="colorBulletCode" v-for="styleArrays in styleArray" :style="{backgroundColor:styleArrays}">
            <p v-if="gameStatus == true" class="founder">?</p>
        </div>
    </div>`,

    data() { return {}},
    methods: {}
});

