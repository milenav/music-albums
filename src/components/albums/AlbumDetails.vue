<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card :color="album.color" max-width="600" class="mx-auto" dark>
          <v-img height="450" :src="album.src"></v-img>
          <v-card-title class="headline" v-text="album.title"></v-card-title>
          <v-card-subtitle class="d-flex justify-content-start" v-text="album.artist"></v-card-subtitle>
          <v-card-text>
            <v-row class="mx-0">
              <v-card-actions class="pa-4">
                <span class="white--text caption mr-2">({{ rating }})</span>
                <v-rating
                  v-model="rating"
                  background-color="white"
                  color="yellow accent-4"
                  dense
                  hover
                  size="20"
                ></v-rating>
              </v-card-actions>
            </v-row>
            <v-divider></v-divider>
            <div class="grow d-flex justify-content-start" v-text="album.description"></div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="white" @click="addReview">Add review</v-btn>

            <v-icon class="mr-3">mdi-plus-circle</v-icon>

            <!-- <v-btn icon>
                                <v-icon>mdi-pencil-box</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-delete</v-icon>
            </v-btn>-->
            <!-- <button @click="add_review">click me!</button> -->
          </v-card-actions>
        </v-card>
      </v-col>
      <review-list :reviews="album.reviews"></review-list>
    </v-row>
  </v-container>
</template>

<script>
import albumMixin from "../../mixins/album-mixin.js";
import ReviewList from '../reviews/ReviewList.vue';

export default {
  name: 'AlbumDetails',
  components: {
      ReviewList
  },
  mixins: [albumMixin],
  data() {
    return {
      rating: 0
    };
  },
    methods: {
      addReview() {
        const id = this.$route.params.id;
        this.$router.push(`/albums/${id}/review`);
      }
  },
  created() {
    this.geAlbumById();
  },
};
</script>