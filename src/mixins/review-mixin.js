import axiosDb from '../axios-db'

export default {
    data() {
        return {
            reviews: [],
            review: {},
            asObject: true
            // reviews: [],
            // review: {}
        }
    },
    methods: {
        async getAllReviews() {
            try {
                const res = await axiosDb.get(`reviews.json`);
                const allReviewsRes = res.data;
                
               for (const id in allReviewsRes) {
                    if (allReviewsRes[id].albumId === this.$route.params.id) {
                        allReviewsRes[id].reviewId = id;
                        this.reviews.push(allReviewsRes[id]);
                    }
               }
            } 
              catch(err) {
                  console.log(err);  
              }
        }, 
       
        async getReviewById() {
            await axiosDb.get(`reviews/${this.$route.params.reviewId}.json`) 
            .then(res => {
                this.review = res.data;
            })
        },
        async reviewCreate() {
            const payload = {
                name: this.name,
                avatar: this.avatar,
                content: this.content,
                userId: localStorage.getItem('userId'),
                albumId: this.$route.params.id,
                created: new Date()
            }
 
            await axiosDb.post(`reviews.json`, payload)
           .then(() => {
            this.$router.push('/albums');
            //    this.$router.push(`/albums/${this.$route.params.id}`);
           })
           .catch(err => {
               console.error(err);
           });
        },
        async reviewUpdate() {
            const payload = {
                name: this.review.name,
                avatar: this.review.avatar,
                content: this.review.content,
                userId: localStorage.getItem('userId'),
                albumId: this.$route.params.albumId,
                updated: new Date()
            }
            await axiosDb.put(`reviews/${this.$route.params.reviewId}.json`, payload) 
            .then(() => {
                this.$router.push(`/albums/${this.review.albumId}`);
            })
            .catch(err => {
                console.error(err);
            });
        },
    },
}