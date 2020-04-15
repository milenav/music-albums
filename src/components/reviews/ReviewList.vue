<template>
    <div class="container">
         
       <review-list-item v-for="review in reviews" :key="review.reviewId" :review="review" >
           
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

}
</script>