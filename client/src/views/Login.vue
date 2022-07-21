<template>
    <div id="login">
        <NavBar :userName="name"></NavBar>
        <form @submit.prevent="login">
            <div class="mb-3">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="col-form-label">ID Accesso</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" class="form-control" v-model="id">
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label class="col-form-label">Password</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="password" class="form-control" v-model="password"
                            aria-describedby="passwordHelpInline">
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">Accedi</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/Navbar.vue"

const url = "http://localhost:3000/api/v1"

export default {
    name: "LoginPage",
    data() {
        return {
            id: "",
            password: "",
            success: false
        }
    },
    methods: {
        async login() {
            await axios.post(url + "/users/login", {
                id: this.id,
                password: this.password
            })
                .then(res => (
                    this.success = true,
                    //this.$store.dispatch('setToken', res.data.token),
                    this.$store.dispatch('setName', res.data.name),
                    this.$store.dispatch('setRole', res.data.role.name)
                ))
                .catch(err => (
                    this.success = false,
                    console.log(err)
                ))

            if (this.success) {
                this.$router.push("/list")
            } else {
                alert("ID o Password errati")
                this.id = ""
                this.password = ""
            }
        }
    },
    components: {
        NavBar
    }
}
</script>

<style>

</style>