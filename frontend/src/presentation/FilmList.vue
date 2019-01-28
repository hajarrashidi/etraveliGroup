<template>
  <el-col :span="12">
    <ul>
      <li v-for="film in films" :key="film.id" @click="selectedItem(film.id)">
        <span class="episode"> {{`EPISODE ${film.episode}`}} </span>
        <span>{{film.title}}</span>
        <span class="year">{{film.year}}</span>
      </li>
    </ul>
  </el-col>
</template>

<script>
import { gettersTypes } from '../logic/store'

export default {
  methods: {
    selectedItem (filmId) {
      this.$store.commit('setSelectedFilmId', filmId)
    }
  },
  computed: {
    films () {
      return this.$store.getters[gettersTypes.FILMS]
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  li {
    font-size: 13px;
    padding: 16px;
    border-bottom: 1px solid #f5f7fa;
    transition: background-color 0.3s ease;
  }
  li:hover {
    background-color: #f5f7fa;
  }
  .episode {
    color: grey;
    padding-right: 20px;
  }
  .year {
    float: right;
    color: grey
  }
</style>
