<template>
  <div class="mx-auto">
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="12" sm="2" md="1"
      >
        <v-avatar size="36px">
          <v-img alt="Avatar" :src="review.avatar"></v-img>
        </v-avatar>
      </v-col>

      <v-col class="hidden-xs-only" sm="5" md="3">
        <strong v-text="review.name"></strong>
        <span class="grey--text"></span>
      </v-col>

      <v-col class="hidden-xs-only" sm="5" md="3">
        <strong>{{ review.created | fromNow }}</strong>
        <strong v-text="review.rating"></strong>
        <span class="grey--text"></span>
      </v-col>
      
      <v-btn @click="goToEdit(review.reviewId)" text color="red">Edit review</v-btn>
      <!-- <v-btn @click="onDelete"  text color="red">Delete review</v-btn> -->
      <!-- <router-link :to="{ name: 'coment-details', params: { comentId: coment.comentId } }">
      <v-btn @click="goToDetails" text color="red">Details</v-btn>
      </router-link> -->
    </v-row>

    <v-divider></v-divider>
    <v-card-text v-text="review.content"></v-card-text>
    <v-divider class="mb-5"></v-divider>
    
  </div>
</template>

<script>
import reviewMixin from '../../mixins/review-mixin'
// import moment from 'moment';
export default {
  name: 'ReviewListItem',
  mixins: [reviewMixin],
  props: {
    review: {
      type: Object
    }
  },
  methods: {
    goToEdit(id) {
      
      this.$router.push(`/albums/${this.review.albumId}/review/edit/${id}`);
    },
    // onDelete() {
    //  this.reviewDelete(`${this.$route.params.reviewId}`);

    // }
  }
//   filters: {
//       fromNow(value) {
//           return moment(value).fromNow();
//       }
//   }
};
</script>