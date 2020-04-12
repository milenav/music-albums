<template>
  <div>
    <div v-if="isAuth">
      <album-list-item :albums="albums"></album-list-item>
    </div>
    <div class="text-center" v-else>
      <img
        class="mx-auto d-block img-fluid mt-5"
        src="http://www.pngonly.com/wp-content/uploads/2017/06/Music-Headphone-PNG.png"
        alt="Music"
      />
      <img
        class="mx-auto d-block img-fluid mt-5 w-25"
        src="https://cdn131.picsart.com/301953567089211.png?r1024x1024"
        alt="Dance-clipart"
      />
    </div>
  </div>
</template>

<script>
import albumMixin from '../mixins/album-mixin'
import AlbumListItem from '../components/albums/AlbumListItem.vue'

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
  // beforeCreate() {
    
  // },
  created() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
    if(this.isAuth) {
      this.getAllAlbums();
    }
    
  }
};
</script>

<style scoped>
/* div {
  background: #ffc2c4;
} */
</style>
