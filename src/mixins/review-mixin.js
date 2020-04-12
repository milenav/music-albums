import axiosDb from '../axios-db'

export default {
   data() {
        return {
            name: '',
            avatar: '',
            content: ''
        }
    },
    methods: {
        // async getAllReviews() {
        //     try {
        //         const res = await axiosDb.get(`albums.json`);
        //         const allAlbumsRes = res.data;
        //         for(const albumId in allAlbumsRes) {
        //             this.albums.push({
        //                 albumId,
        //                 ...allAlbumsRes[albumId]
        //             });
        //         }
        //     } 
        //       catch(err) {
        //           console.log(err);  
        //       }
        // }, 
        async getReviewById() {
           await axiosDb.get(`albums/${this.$route.params.albumId}/review/${this.$route.params.id}.json`) 
            .then(res => {
                this.name = res.data.name;
                this.avatar = res.data.avatar;
                this.content = res.data.content;
            })
        },
        async editReview(payload) {
            await axiosDb.put(`albums/${payload.albumId}/reviews.json`, payload)
            .then(() => {
                
                this.$router.push(`/albums/${payload.albumId}`);
            })
            .catch(err => {
                console.error(err);
            });
        }
    },
}