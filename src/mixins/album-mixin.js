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
                for(const albumId in allAlbumsRes) {
                    this.albums.push({
                        albumId,
                        ...allAlbumsRes[albumId]
                    });
                }
            } 
              catch(err) {
                  console.log(err);  
              }
        }, 
        geAlbumById() {
            axiosDb.get(`albums/${this.$route.params.id}.json`) 
            .then(res => {
                this.album = res.data;
            })
        }
    },
}