<template>
    <div id="listino">
        <NavBar :userName="name"></NavBar>
        <div v-for="(order, index) in savedOrders" :key="index">
            Ordine {{ order.id }} del {{ order.updatedAt }} <button class="btn btn-primary">Apri ordine</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import NavBar from "@/components/Navbar.vue"

const url = "http://localhost:3000/api/v1"

export default {
    name: "SavedOrders",
    data() {
        return {
            savedOrders: []
        };
    },
    methods: {
        
    },
    async mounted() {
        // Retrieve User Data
        this.name = this.$store.state.user.name
        this.role = this.$store.state.user.role

        // Print List
        axios.get(url + "/orders/" + 32328)
            .then(res => (
                console.log(res.data),
                this.savedOrders = res.data
            ))
            .catch(err => (
                console.log(err)
            ))
    },
    components: {
        NavBar
    }
}
</script>

<style>
</style>