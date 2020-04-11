import authAxios from '../axios-auth'

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
        onRegister(payload) {
        //     this.$v.$touch();
        //    const payload = {
        //        email: this.email,
        //        password: this.password,
        //        returnSecureToken: true
        //    };
           
           authAxios.post('/accounts:signUp', payload)
           .then( res => {
               const { idToken, localId } = res.data;

               localStorage.setItem('token', idToken);
               localStorage.setItem('userId', localId);

               this.$router.push('/');
           })
           .catch(err => {
               console.error(err);
           });
        },
        onLogin(payload) {
        //     this.$v.$touch();
        //    const payload = {
        //        email: this.email,
        //        password: this.password,
        //        returnSecureToken: true
        //    };

           ///accounts:signInWithPassword
           authAxios.post('/accounts:signInWithPassword', payload)
           .then( res => {
               const { idToken, localId } = res.data;

               localStorage.setItem('token', idToken);
               localStorage.setItem('userId', localId);

               this.$router.push('/');
           })
           .catch(err => {
               console.error(err);
           });
        }
           
        //    authAxios.post('/accounts:signInWithPassword', payload)
        //    .then( res => {
        //        const { idToken, localId } = res.data;

        //        localStorage.setItem('token', idToken);
        //        localStorage.setItem('userId', localId);

        //        this.$router.push('/');
        //    })
        //    .catch(err => {
        //        console.error(err);
        //    });
        // }
    },
}