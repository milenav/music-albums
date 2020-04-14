<template>
      <div v-if="isAuth">
      <album-list-item :albums="albums"></album-list-item>
    </div>
</template>

<script>
import albumMixin from '../../mixins/album-mixin'
import AlbumListItem from '../albums/AlbumListItem.vue'

export default {
  mixins: [albumMixin],
  components: {
    AlbumListItem
  },
    data() {
    return {
      albums: []
    }
  },
  props: {
    isAuth: Boolean
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getAllAlbums();
  }
}
</script>

<style>

</style>