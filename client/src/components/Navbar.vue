<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Benvenuto {{ this.userName }}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="list" class="nav-item nav-link active">Lista merce</router-link>
                    <router-link to="order" class="nav-item nav-link">Compila ordine</router-link>
                    <router-link to="saved" class="nav-item nav-link">Ordini salvati</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {

        }
    },
    props: {
        userName: String,
    },
    methods: {
    }
}
</script>

<style>
</style>