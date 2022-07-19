<template>
    <div id="product">
        <form @submit.prevent="modify">
            <div class="form-group">
                <label>Descrizione</label>
                <input type="text" class="form-control" v-model="product.description">
            </div>
            <div class="form-group">
                <label>Peso Medio</label>
                <input type="number" step="0.01" class="form-control" v-model="product.weight">
            </div>
            <div class="form-group">
                <label>Unità di misura (solo codice 1 o 0 per ora lmao)</label>
                <input type="number" class="form-control" v-model="product.MeasureId">
            </div>
            <div class="form-group">
                <label>Prezzo</label>
                <input type="number" step="0.01" class="form-control" v-model="product.price">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="modify">Modifica</button>
                <button class="btn btn-secondary" @click="back">Indietro</button>
                <input type="number" class="form-control" v-model="product.weight">
            </div>
            <div class="form-group">
                <label>Prezzo</label>
                <input type="number" class="form-control" v-model="product.price">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="modify">Modifica</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:3000/api/v1"

export default {
    name: "ProductPage",
    data() {
        return {
            product: []
        }
    },
    methods: {
        async modify() {
            await axios.patch(url + "/products/update/" + this.$route.params.code, {
                description: this.product.description,
                weight: this.product.weight,
                price: this.product.price,
                MeasureId: this.product.MeasureId
            })
                .then(this.$router.push("/list"))
                .catch(err => console.log(err))
        },

        back() {
            this.$router.go(-1)
        }
    },
    async mounted(){
        let response = await axios.get(url + "/products/" + this.$route.params.code)
        this.product = response.data
    }
}
</script>

<style>
</style>