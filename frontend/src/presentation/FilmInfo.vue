<template>
  <el-col :span="12" class="filmInfo">
    <div v-if="film">
      <p class="title">{{film.title}}</p>
      <p>{{film.about}}</p>
      <p class="director">{{film.director}}</p>
    </div>
    <div v-else class="empty">
      <span class="noMovie">No movie selected</span>
    </div>
  </el-col>
</template>

<script>
import { gettersTypes } from '../logic/store'

export default {
  computed: {
    film () {
      return this.$store.getters[gettersTypes.SELECTED_FILM_INFO]
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 22px;
    color: #000e47;
  }
  .director {
    color: grey;
  }
  .noMovie {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }
  .empty {
    height: 400px;
    line-height: 400px;
    text-align: center;
  }
</style>
