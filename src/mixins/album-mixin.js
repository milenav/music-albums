import axiosDb from '../axios-db'

export default {
    data() {
        return {
            albums: [],
            album: {},
            // reviews: [],
            // review: {}
        }
    },
    methods: {
        async getAllAlbums() {
            try {
                const res = await axiosDb.get(`albums.json`);
                const allAlbumsRes = res.data;
                const albumCollection = [];
                for(const albumId in allAlbumsRes) {
                    
                    // const album = {
                      
                    // const reviews = {};
                    // for(const reviewId in album.reviews) {
                    //     reviews.push({
                    //     reviewId,
                    //     ...album.reviews[reviewId]
                    // });
                   
                    // }
                    // album.reviews = reviews;
                    albumCollection.push({
                      albumId,
                        ...allAlbumsRes[albumId]
                 
                    });
                }
                console.log(albumCollection);
                 
                for(const albumId in albumCollection) {
                    const reviews = {};
                    if(albumId.reviews) {
                    for(const reviewId in albumId.reviews) {
                        const review = {
                            reviewId,
                        ...albumId.reviews[reviewId]
                        };
                        console.log('revoew');
                        
                        console.log(review);
                        reviews.push({
                        reviewId,
                        ...albumId.reviews[reviewId]
                    });
                }
                albumId.reviews = { ...reviews };
            }
            }
                this.albums = albumCollection;
            } 

              catch(err) {
                  console.log(err);  
              }
        }, 
        async geAlbumById() {
           await axiosDb.get(`albums/${this.$route.params.id}.json`) 
            .then(res => {
                this.album = res.data;
            })
        }
    },
}