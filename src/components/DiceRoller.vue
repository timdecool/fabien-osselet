<script setup>

const props = defineProps({
    roll: {
        type: Number,
        required: true,
        default: function() {
            return 0
        }
    }
})


</script>

<template>
    <div class="face single">
        <span class="pip " v-for="n in roll"></span>
    </div>
</template>

<style scoped>
.face {
    width: 50px;
    height: 50px;
    display: grid;
    gap: 3px;
    grid-template-areas: 
        "a . c"
        "e g f"
        "d . b";
    padding: 5px;
    border-radius: 5px;
}

.single {
    background-color: rgb(83, 83, 83);
}

.twins {
    background-color: rgb(53, 102, 134);
}

.triplets {
    background-color: rgb(87, 21, 173);
}

.pip {
    background-color: rgb(223, 223, 223);
    border-radius: 50%;
}

.pip:nth-child(2) {
    grid-area: b;
}
.pip:nth-child(3) {
    grid-area: c;
}
.pip:nth-child(4) {
    grid-area: d;
}
.pip:nth-child(5) {
    grid-area: e;
}
.pip:nth-child(6) {
    grid-area: f;
}
.pip:nth-child(odd):last-child {
    grid-area: g;
}



</style>
