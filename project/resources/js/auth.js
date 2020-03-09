class Auth {
    constructor() {
        this.token = window.localStorage.getItem('token');;
        let userData = window.localStorage.getItem('user');

        this.user = userData ? JSON.parse(userData) : null;
        if (this.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
            this.getUser();
        }
    }

    login (token, user) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        this.token = token;
        this.user = user;

        Event.$emit('userLoggedIn');
    }

    logout () {
        axios.post('/api/logout')
            .then(() => {
            })
            .catch(({response}) => {
            })
            .finally(() => {
                Event.$emit('userLogout');
                this.token = false;
                this.user = false;

                window.localStorage.setItem('token', false);
                window.localStorage.setItem('user', false);

                axios.defaults.headers.common['Authorization'] = 'Bearer ';
            });

    }

    getUser() {
        api.call('get', '/api/get-user')
            .then(({data}) => {
                this.user = data;
            })
            .catch(({response}) => {
                console.log('user not authorized')
            });
    }

    check () {
        return !!this.token;
    }
}

export default Auth;
