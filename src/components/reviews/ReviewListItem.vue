<template>
  <div class="mx-auto mt-5">
    <v-card >
    <v-row align="center" class="spacer" >
      <v-col cols="12" sm="2" md="1" 
      >
        <v-avatar size="50px" class="mt-2">
          <v-img alt="Avatar" :src="review.avatar"></v-img>
        </v-avatar>
      </v-col>

      <v-col class="hidden-xs-only" sm="5" md="3">
        <strong v-text="review.name"></strong>
        <span class="grey--text"></span>
      </v-col>

      <v-col class="hidden-xs-only" sm="5" md="3">
        Posted: 
        <strong>{{ review.created | fromNow }}</strong>
        
        <span class="grey--text"></span>
      </v-col>
      <v-col>
            <v-spacer></v-spacer>
      <v-btn @click="goToEdit(review.reviewId)" text color="black">Edit</v-btn>
          <v-icon color="#75858F">mdi-pencil-box</v-icon>

          <v-btn @click="reviewDelete(review)" text color="red lighten-2">Delete</v-btn>
          <v-icon color="#E57373">mdi-delete</v-icon>
          
      </v-col>
      
      <!-- <v-btn @click="onDelete"  text color="red">Delete review</v-btn> -->
      <!-- <router-link :to="{ name: 'coment-details', params: { comentId: coment.comentId } }">
      <v-btn @click="goToDetails" text color="red">Details</v-btn>
      </router-link> -->
    </v-row>

    <v-divider></v-divider>
    <v-card-text v-text="review.content"></v-card-text>
    <v-divider class="mb-5"></v-divider>
      </v-card>
  </div>

</template>

<script>
// import reviewMixin from '../../mixins/review-mixin'
import moment from 'moment';

export default {
  name: 'ReviewListItem',
  // mixins: [reviewMixin],
  props: {
    review: {
      type: Object
    }
  },
  methods: {
    goToEdit(id) {
      
      this.$router.push(`/albums/${this.review.albumId}/review/edit/${id}`);
    },
    reviewDelete(deleteReview) {
      this.$emit("onDeleteReview", deleteReview);
      // this.$router.push(`/albums/${this.review.albumId}/review/delete/${id}`);
    }
  },
  filters: {
      fromNow(value) {
          return moment(value).fromNow();
      }
  }
};
</script>