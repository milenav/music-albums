<template>
  <v-col justify="center">
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="12" sm="2" md="1">
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
      
      <v-btn @click="goToEdit" text color="red">Edit review</v-btn>
    </v-row>

    <v-divider></v-divider>
    <v-card-text v-text="review.content"></v-card-text>
    <v-divider class="mb-5"></v-divider>
    
  </v-col>
</template>

<script>
// import moment from 'moment';
export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToEdit() {
      // const id = (Object.keys())[0];
      console.log(this.review)
      // this.$router.push(`/albums/${this.$route.params.id}/review/${id}`)
    }
  }
//   filters: {
//       fromNow(value) {
//           return moment(value).fromNow();
//       }
//   }
};
</script>