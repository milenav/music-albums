import axiosDb from '../axios-db'

export default {
    data() {
        return {
            albums: [],
            album: {}
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
        async getAlbumById() {
            await axiosDb.get(`albums/${this.$route.params.id}.json`) 
            .then(res => {
                this.album = res.data;
            })
        },
        async albumCreate() {
            const payload = {
                title: this.title,
                artist: this.artist,
                src: this.src,
                color: this.color,
                description: this.description,
                userId: localStorage.getItem('userId'),
                created: new Date()
            }

            await axiosDb.post(`albums.json`, payload)
            .then(() => {
                
                this.$router.push('/albums');
            })
            .catch(err => {
                console.error(err);
            });
        }
    },
}