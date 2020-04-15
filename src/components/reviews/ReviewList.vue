<template>
    <div class="container">
         
       <review-list-item v-for="review in reviews" :key="review.reviewId" :review="review" @onDeleteReview="deleteReview($event)" >
           
       </review-list-item>
    </div>
</template>

<script>
import ReviewListItem from '../reviews/ReviewListItem.vue'

export default {
    components: {
        ReviewListItem
    },
    props: {
        reviews: {
            type: Array
        }
    },
    methods: {
         deleteReview(deleteReview) {
      this.$emit("onDeleteReview", deleteReview);
      // this.$router.push(`/albums/${this.review.albumId}/review/delete/${id}`);
    }
    }
}
</script>