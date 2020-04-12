<template>
    <v-row dense>
        <v-col 
        class="mb-3"
        v-for="album in albums" :key="album.albumId">
            <v-card 
            class="mx-auto" 
            max-width="350"
            :color="album.color" 
            dark
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title
                            class="headline"
                            v-text="album.title"
                        >
                        </v-list-item-title>
                        <v-list-item-subtitle
                            v-text="album.artist"
                        >
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-img 
                :src="album.src" 
                height="250"
                ></v-img>
                <v-card-actions>
                    <router-link :to="{ name: 'details', params: { id: album.albumId } }">
                    <v-btn text color="white">
                        More
                    </v-btn>
                    </router-link>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-spotify</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        albums: {
            type: Array,
            required: true
        }
    }
};
</script>