import authAxios from '../axios-auth'

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onRegister(payload) {

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
    },
}