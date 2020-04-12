import axiosDb from '../axios-db'

export default {
    data() {
        return {
            albums: [],
            album: {},
            reviews: [],
            review: {}
        }
    },
    methods: {
        getAllAlbums() {
            axios
                .get("/api/albums")
                .then(response => {
                    this.albums = response.data;
                });
        }, 
    },
}