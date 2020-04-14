<template>
    <div class="container">
        <h1>Login</h1>
        <div class="row">
            <form class="col s12" method="post" >
                <div class="row">
                    <div class="input-field col s6">
                        <input id="username" type="text" name="username" v-model="username" class="validate">
                        <label for="username">Email</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="password" type="password" name="password" v-model="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
                <button @click="login">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            };
        },

        methods: {
            login(event) {

                let data = {
                    username: this.username,
                    password: this.password
                };
                event.preventDefault();

                                axios.post('/api/login', data)
                                    .then(({data}) => {
                                        auth.login(data.token, data.user);

                                        this.$router.push('/dashboard');
                                    })
                                    .catch(({response}) => {
                                        alert(response.data.message);
                                    });
            }
        }
    }
</script>

<style scoped>

</style>
