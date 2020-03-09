<template>
    <div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
        </div>

        <div v-if="authenticated && user">
            <p>Hello, {{ user.name }}</p>

            <span @click="logout">
            <router-link to="/logout">Logout</router-link>
                </span>
        </div>

        <router-link to="/login" v-else>Login</router-link>

        <div style="margin-top: 2rem">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {
                authenticated: auth.check(),
                user: auth.user
            };
        },
        mounted() {
            Event.$on('userLoggedIn', () => {
                this.authenticated = true;
                this.user = auth.user;
            });

            Event.$on('userLogout', () => {
                this.authenticated = false;
                this.user = false;
            });
        },
        methods: {
            logout: function() {
                auth.logout();
            }
        }
    }
</script>

<style scoped>

</style>
