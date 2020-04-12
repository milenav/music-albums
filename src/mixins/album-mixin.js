import axiosDb from '../axios-db'

export default {
    data() {
        return {
            albums: [],
            // album: {},
            // reviews: [],
            // review: {}
        }
    },
    methods: {
        async getAllAlbums() {
            try {
                const response = await axiosDb.get(`albums.json`);
                const allAlbumsRespone = response.data;
                for(const albumId in allAlbumsRespone) {
                    this,albums.push({
                        albums,
                        ...allAlbumsRespone[albumId]
                    });
                }
            } 
              catch(err) {
                  console.log(err);  
              }
        }, 
    },
}