<template>
    <div id="ordine">
        <table id="listaProdotti" class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Codice prodotto</th>
                    <th scope="col">Descrizione</th>
                    <th scope="col">Peso Medio</th>
                    <th scope="col">Prezzo</th>
                    <th scope="col">Quantità</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                    <th scope="row">{{ product.code }}</th>
                    <td>{{ product.description }}</td>
                    <td>{{ product.weight }} {{ product.MeasureId }}</td>
                    <td>{{ product.price }} €</td>
                    <td><input type='number' v-model="product.quantity"></td>
                </tr>
            </tbody>
        </table>
        <button @click="sendOrder(/*User Id*/)" class="btn btn-primary">Invia</button>
        <button @click="saveOrder(/*User Id*/)" class="btn btn-secondary">Salva</button>
    </div>
</template>

<script>
import axios from "axios"

const url = "http://localhost:3000/api/v1"

export default {
    name: "OrderPage",
    data() {
        return {
            products: [],
            orderDetail: [],
            name: null,
            role: null
        };
    },
    methods: {
        async sendOrder(/*User ID*/) {
            await axios.post(url + "/orders/", {
                UserId: 32328,
                processed: true
            })
                .then(res => {
                    this.compileOrder(res.data.id, true)
                    alert("Ordine inviato correttamente")
                    this.$router.push("/saved")
                })
                .catch(err => {
                    console.log(err);
                })
        },

        async saveOrder(/*User ID*/) {
            await axios.post(url + "/orders/", {
                UserId: 32328,
                processed: false
            })
                .then(async (res) => {
                    this.compileOrder(res.data.id, false)
                    alert("Ordine salvato correttamente")
                })
                .catch(err => {
                    console.log(err);
                })
        },

        async compileOrder(orderId) {
            for (var i = 0; i < this.products.length; i++) {
                this.orderDetail.push({
                    OrderId: orderId,
                    ProductCode: this.products[i].code,
                    price: this.products[i].price,
                    quantity: this.products[i].quantity
                })
            }

            await axios.post(url + "/orderDetails/", this.orderDetail)
                .then()
                .catch(err => console.log(err))
        },

        pushChangeForm(productCode) {
            this.$router.push("/product/" + productCode)
        },

        deleteField(productCode) {
            axios.delete(url + "/products/" + productCode)
                .then((res) => {
                    const idx = this.products.indexOf(productCode)
                    this.products.splice(idx, 1)
                    console.log(res)
                })
        }
    },
    async mounted() {
        // Retrieve User Data
        this.name = this.$store.state.user.name
        this.role = this.$store.state.user.role

        // Print List
        axios.get(url + "/products")
            .then(res => (
                this.products = res.data
            ))
            .catch(err => (
                console.log(err)
            ))
    },
    components: {
        
    }
}
</script>

<style>
</style>