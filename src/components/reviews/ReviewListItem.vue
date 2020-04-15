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
        Author:
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
      <v-btn @click="goToEdit(review.reviewId)" text color="#7b9ab9">Edit</v-btn>
          <v-icon color="#7b9ab9">mdi-pencil-box</v-icon>

          <v-btn @click="reviewDelete(review)" text color="red lighten-2">Delete</v-btn>
          <v-icon color="#E57373">mdi-delete</v-icon> 
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <v-card-text v-text="review.content"></v-card-text>
    <v-divider class="mb-5"></v-divider>
      </v-card>
  </div>

</template>

<script>
export default {
  name: 'ReviewListItem',
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
    }
  }
};
</script>