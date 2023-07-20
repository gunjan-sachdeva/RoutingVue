<template>
<h1>{{profile}} Profile Component</h1>
</template>

<script>
import {
    useRoute
} from 'vue-router';

export default {
    name: "ProfileComp",
    data()
    {
        return{
            profile:''
        }
    },
    mounted() {
        const route = useRoute();
        console.warn("route",route.params.name);
        this.profile=route.params.name;
    }
}
</script>

<style scoped>

</style>
