<template>
    <div>
         <v-subheader class="mt-5">Review</v-subheader>
       <review-list-item v-for="(review) in reviews" :key="review" :review="review"></review-list-item>
    </div>
</template>

<script>
import ReviewListItem from './ReviewListItem.vue'
export default {
    components: {
        ReviewListItem
    },
    props: {
        reviews: {
            type: Object
        }
    }
}
</script>