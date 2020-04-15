<template>
  <div>
      <v-btn @click="reviewDelete(review.reviewId)" text color="red lighten-2">Delete</v-btn>
          <v-icon color="#E57373">mdi-delete</v-icon>
  </div>
</template>

<script>
import axiosDb from '../../axios-db'
export default {
methods: {
      async reviewDelete() {
            // const deleteId = this.$route.params.reviewId;
            await axiosDb.delete(`reviews/${this.$route.params.reviewId}.json`) 
            .then(res => {
                this.review = res.data;
            })
        }
}
}
</script>

<style>

</style>