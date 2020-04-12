<template>
  <v-col justify="center">
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="4" sm="2" md="1">
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
//   filters: {
//       fromNow(value) {
//           return moment(value).fromNow();
//       }
//   }
};
</script>